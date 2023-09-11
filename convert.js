import fs from "fs";

const CAN_BE_EMPTY = {};

function isKey(x) {
	if (typeof x === "string") return true;
	if (x instanceof RegExp) return true;
	if (Array.isArray(x) && x.every(isKey)) return true;
	return false;
}

function safeAssign(o, k, v, ctx) {
	ctx = `${ctx}.${k}`;

	if (k in o) {
		if (!Array.isArray(o[k]) || !Array.isArray(v)) {
			throw new Error(
				`Duplicate key ${k} that are not arrays: ${JSON.stringify(
					o[k],
				)} | ${JSON.stringify(v)} (${ctx})`,
			);
		}

		o[k] = [...o[k], ...v];
	} else if (v.$inline) {
		delete v.$inline;
		for (const [k1, v1] of Object.entries(v)) {
			safeAssign(o, k1, v1, ctx);
		}
	} else {
		o[k] = v;
	}
}

function debug(x, ctx) {
	console.log(x, `(${ctx})`);
	return x;
}

function obj(mappings) {
	let extra;
	let inline = false;
	mappings = Object.entries(mappings)
		.map(([oKey, value]) => {
			if (oKey === "$extra") {
				extra = value;
				return;
			}

			if (oKey === "$inline") {
				inline = value;
				return;
			}

			const iKey = isKey(value[0])
				? value.shift()
				: oKey.replace(/^[a-z]/, (s) => s.toUpperCase());

			return {
				oKey,
				iKeys: Array.isArray(iKey) ? iKey : [iKey],
				assertions: all(...value),
			};
		})
		.filter((x) => x);

	return (i, ctx) => {
		function getMatches(key, value) {
			const matches = [];

			for (const { oKey, iKeys, assertions } of mappings) {
				let match = false;
				for (const iKey of iKeys) {
					if (typeof iKey === "string" ? iKey === key : iKey.test(key)) {
						match = true;
						break;
					}
				}

				if (match) {
					matches.push([oKey, assertions(value, `${ctx}.${oKey}`)]);
				}
			}

			return matches;
		}

		if (typeof i !== "object") {
			throw new Error(`Not an object: ${JSON.stringify(i)} (${ctx})`);
		}

		if (!Array.isArray(i)) {
			i = Object.entries(i).map(([k, v]) => ({ [k]: v }));
		}

		const extras = [];
		const errors = [];
		const o = inline ? { $inline: true } : {};
		for (const x of i) {
			try {
				const matches = (() => {
					if (typeof x === "string") {
						const m = /^(.*?):\s*(.*)$/.exec(x);
						if (m) {
							const { 1: key, 2: value } = m;
							return getMatches(key, value);
						}
					}

					if (typeof x !== "object") {
						return [];
					}

					const keys = Object.keys(x);

					if (keys.length === 1) {
						const [key] = keys;
						const value = x[key];

						return getMatches(key, value);
					}

					if (keys.length === 2 && "Text" in x && "Data" in x) {
						const { Text: label, Data } = x;
						const m = /^(.*?):\s*(.*)$/.exec(label);
						if (m) {
							const { 1: key, 2: Text } = m;
							return getMatches(key, Text ? { Text, Data } : Data);
						}
					}

					console.log("MULTIPLE KEYS:", keys, `(${ctx})`);
					return [];
				})();

				if (matches.length > 1) {
					throw new Error(
						`Multiple mappings: ${JSON.stringify(matches)} (${ctx})`,
					);
				}

				if (matches.length === 0) {
					extras.push(x);
					continue;
				}

				const [[k, v]] = matches;
				safeAssign(o, k, v, ctx);
			} catch (e) {
				errors.push(e);
			}
		}

		if (errors.length) {
			if (errors.length === 1) {
				throw errors[0];
			}

			for (const e of errors) {
				console.error(e);
			}
			throw new Error("Object errors");
		}

		if (extras.length === 0) {
			return o;
		}

		if (extra) {
			return extra(extras, o, ctx) || o;
		}

		throw new Error(
			`Unexpected properties: ${JSON.stringify(extras)} (${ctx})`,
		);
	};
}

function all(...assertions) {
	return (x, ctx) => {
		for (const assertion of assertions) {
			x = assertion(x, ctx);
		}
		return x;
	};
}

function inline(...assertions) {
	assertions = all(...assertions);

	return (x, ctx) => {
		const result = assertions(x, ctx);
		if (typeof result !== "object") {
			throw new Error(`Not an object: ${JSON.stringify(result)} (${ctx})`);
		}

		result.$inline = true;
		return result;
	};
}

function array(...assertions) {
	let allowEmpty = false;
	if (assertions[0] === CAN_BE_EMPTY) {
		allowEmpty = true;
		assertions.shift();
	}

	assertions = all(...assertions);

	return (arr, ctx) => {
		if (Array.isArray(arr)) {
			if (arr.length === 0 && !allowEmpty) {
				throw new Error(`Unexpected empty array (${ctx})`);
			}

			const values = [];
			const errors = [];
			for (let i = 0; i < arr.length; i++) {
				try {
					values[i] = assertions(arr[i], `${ctx}[${i}]`);
				} catch (e) {
					errors.push(e);
				}
			}

			if (errors.length) {
				if (errors.length === 1) {
					throw errors[0];
				}

				for (const e of errors) {
					console.error(e);
				}
				throw new Error("Array errors");
			}

			return values;
		}

		throw new Error(`Not an array: ${JSON.stringify(arr)} (${ctx})`);
	};
}

function string(s, ctx) {
	if (typeof s === "string") {
		return s;
	}

	throw new Error(`Expected a string: ${JSON.stringify(s)} (${ctx})`);
}

function quoted(s, ctx) {
	s = string(s, ctx);

	const m = /^"([^"]*)"$/.exec(s);
	if (m) {
		return m[1];
	}

	throw new Error(`Expected quoted value: ${s} (${ctx})`);
}

const maybeQuoted = or(quoted, string);

function letter(s, ctx) {
	s = string(s, ctx);

	const m = /^\*\*([A-Z])\*\*$/.exec(s);
	if (!m) {
		throw new Error(`Unexpected letter: ${s} (${ctx})`);
	}

	return m[1];
}

function one(arr, ctx) {
	if (Array.isArray(arr) && arr.length === 1) {
		return arr[0];
	}

	throw new Error(
		`Expected array of one value: ${JSON.stringify(arr)} (${ctx})`,
	);
}

const MONTHS = {
	January: "01",
	February: "02",
	March: "03",
	April: "04",
	May: "05",
	June: "06",
	July: "07",
	August: "08",
	September: "09",
	October: "10",
	November: "11",
	December: "12",
};

function date(s, ctx) {
	const m = /^(\d+) ([A-Z][a-z]+) ((?:19|20)\d\d)$/.exec(s);
	if (!m) {
		throw new Error(`Unexpected date: ${JSON.stringify(s)} (${ctx})`);
	}

	const day = Number(m[1]).toString().padStart(2, "0");
	const month = MONTHS[m[2]];
	const year = Number(m[3]).toString().padStart(4, "0");

	return `${year}-${month}-${day}`;
}

function or(...assertions) {
	for (let i = 0; i < assertions.length; i++) {
		if (Array.isArray(assertions[i])) {
			assertions[i] = all(...assertions[i]);
		}
	}

	return (x, ctx) => {
		const errors = [];
		for (const assertion of assertions) {
			try {
				return assertion(x, ctx);
			} catch (e) {
				errors.push(e);
			}
		}

		if (errors.length === 1) {
			throw errors[0];
		}

		for (const e of errors) {
			console.error(e);
		}
		throw new Error("or() errors");
	};
}

function listString(s, ctx) {
	s = string(s, ctx);
	return s.split(/,?\s+and\s+|,\s+/);
}

function commaString(s, ctx) {
	s = string(s, ctx);
	return s.split(/,\s+/);
}

function getName(people, name, ctx) {
	const person = people.get(name);
	if (!person) {
		const error = `Unexpected person name: ${name} (${ctx})`;
		// throw new Error(error);
		console.error(error);
		return name;
	}

	return person;
}

function delayName(s, ctx) {
	s = string(s, ctx);

	const m1 = /^(.*?)\s+as\s+(.*)$/.exec(s);
	if (m1) {
		const { 1: name, 2: alternateName } = m1;
		return {
			name: ({ people }) => getName(people, name, ctx),
			alternateName: maybeQuoted(alternateName, ctx),
		};
	}

	const m2 = /^(.*?)\s+(?:as\s+)?"([^"]*)"$/.exec(s);
	if (m2) {
		const { 1: name, 2: alternateName } = m2;
		return {
			name: ({ people }) => getName(people, name, ctx),
			alternateName,
		};
	}

	return ({ people }) => getName(people, s, ctx);
}

function delayListNames(s, ctx) {
	return listString(s, ctx).map((name, i) => delayName(name, `${ctx}[${i}]`));
}

function personWith(propName) {
	return (s, ctx) => {
		s = string(s, ctx);

		const m = /^(.*?)\s*[-:]\s+(.*)$/.exec(s);
		if (!m) {
			throw new Error(`Unexpected line: ${s} (${ctx})`);
		}

		const { 1: name, 2: details } = m;

		let result = delayName(name, ctx);
		if (typeof result === "function") {
			result = { name: result };
		}
		result[propName] = details;
		return result;
	};
}

const personWithQuirk = personWith("quirk");

function actingAndSounds(s, ctx) {
	const m1 = /^(.*?)\s+\(acting\)\s+and\s+(.*?)\s+\(sounds\)$/.exec(s);
	if (m1) {
		const { 1: actorPerformers, 2: soundPerformers } = m1;
		return {
			$inline: true,
			actorPerformers: delayListNames(
				actorPerformers,
				`${ctx}.actorPerformers`,
			),
			soundPerformers: delayListNames(
				soundPerformers,
				`${ctx}.soundPerformers`,
			),
		};
	}

	const m2 = /^(.*?)\s+\(sounds\)\s+and\s+(.*?)\s+\(acting\)$/.exec(s);
	if (m2) {
		const { 1: soundPerformers, 2: actorPerformers } = m2;
		return {
			$inline: true,
			actorPerformers: delayListNames(
				actorPerformers,
				`${ctx}.actorPerformers`,
			),
			soundPerformers: delayListNames(
				soundPerformers,
				`${ctx}.soundPerformers`,
			),
		};
	}

	throw new Error(
		`Expected "<names> (acting) and <names> (sounds)": ${s} (${ctx})`,
	);
}

function peopleWithPeople(aKey, bKey) {
	return (s, ctx) => {
		const m = /^(.*?),?\s+with\s+(.*)$/.exec(s);
		if (!m) {
			return delayListNames(s, ctx);
		}

		const { 1: a, 2: b } = m;
		return {
			$inline: true,
			[aKey]: delayListNames(a, `${ctx}.${aKey}`),
			[bKey]: delayListNames(b, `${ctx}.${bKey}`),
		};
	};
}

const performersWithModerators = peopleWithPeople("performers", "moderators");

function game(game, ctx) {
	if (game.NonEmptyParagraph || game.UnhandledTag) {
		return { todo: true };
	}

	const name = game.Name;
	delete game.Name;
	ctx = `${ctx}.${name}`;

	const alternateName = game.AlternateName;
	delete game.AlternateName;

	const data = game.Data || {};
	delete game.Data;

	if (Object.keys(game).length) {
		throw new Error(`Unexpected game keys: ${Object.keys(game)} (${ctx})`);
	}

	switch (name) {
		case "Action Replay":
			return {
				name,
				alternateName,
				...obj({
					actors: [delayListNames],
					originalScene: ["Original scene", string],
					reEnacters: [/^Re-?enacters$/, delayListNames],
				})(data, ctx),
			};

		case "Addicts Anonymous":
			return {
				name,
				alternateName,
				...obj({
					addictedTo: ["Addicted to", string],
					host: [delayName],
				})(data, ctx),
			};

		case "Advertisement to Music":
			return {
				name,
				alternateName,
				...or(
					all(
						obj({
							performer: [delayName],
							product: [string],
						}),
						(o) => ({
							performers: [
								{
									name: o.performer,
									product: o.product,
								},
							],
						}),
					),
					obj({
						performers: [
							"Singer",
							obj({
								name: ["Text", delayName],
								product: [
									"Data",
									obj({
										$inline: true,
										product: [string],
									}),
								],
							}),
							(o) => [o],
						],
					}),
				)(data, ctx),
			};

		case "African Chant":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musicians: [delayListNames],
					singer: [delayName],
				})(data, ctx),
			};

		case "All in One Voice":
			return {
				name,
				alternateName,
				...obj({
					musicians: [delayListNames],
					performers: [
						array((s, ctx) => {
							const m = /^(.*?)\s+-\s+(.*)$/.exec(s);
							if (!m) {
								throw new Error(
									`Expected "<names> - <character>": ${s} (${ctx})`,
								);
							}

							const { 1: names, 2: character } = m;
							return {
								names: delayListNames(names, `${ctx}.names`),
								character,
							};
						}),
					],
					song: [quoted],
				})(data, ctx),
			};

		case "Alphabet":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scene: [string],
					startingLetter: ["Starting letter", letter],
				})(data, ctx),
			};

		case "American Musical":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musician: [delayName],
					performers: [delayListNames],
				})(data, ctx),
			};

		case "Animals":
			return {
				name,
				alternateName,
				...obj({
					animals: [/^Animals?$/, string],
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Audition":
			return {
				name,
				alternateName,
				...obj({
					director: [delayName],
					musician: [delayName],
					title: [string],
				})(data, ctx),
			};

		case "Authors":
			return {
				name,
				alternateName,
				...obj({
					title: [string],
					$extra(extras, o, ctx) {
						safeAssign(
							o,
							"performers",
							array(personWith("author"))(extras, ctx),
						);
					},
				})(data, ctx),
			};

		case "Award Show":
			return {
				name,
				alternateName,
				...obj({
					for: [string],
					musicians: [delayListNames],
					presenters: [delayListNames],
					winners: [delayListNames],
				})(data, ctx),
			};

		case "Backwards Scene":
			return {
				name,
				alternateName,
				...obj({
					endLine: ["End line", quoted],
					performers: [delayListNames],
					scene: [string],
					startLine: ["Start line", quoted],
				})(data, ctx),
			};

		case "Ballad of":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musicians: [delayListNames],
					singers: [delayListNames],
					style: [string],
				})(data, ctx),
			};

		case "Bartender":
			return {
				name,
				alternateName,
				...obj({
					bartender: [delayName],
					musicians: [
						/^Musicians?$/,
						or(
							obj({
								$inline: true,
								musicians: ["Text", delayListNames],
								performers: ["Data", array(personWithQuirk)],
							}),
							delayListNames,
						),
					],
				})(data, ctx),
			};

		case "Boogie Woogie Sisters":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musicians: [delayListNames],
					singers: [delayListNames],
				})(data, ctx),
			};

		case "Change Letter":
			return {
				name,
				alternateName,
				...obj({
					canTSayMustSay: [
						"Can't say|||Must say",
						(s, ctx) => {
							s = string(s);

							const m = /^(.*?),?\|\|\|(.*?)(?:\s+\((\w+)\))?$/.exec(s);
							if (!m) {
								throw new Error(`Expected |||: ${s} (${ctx})`);
							}

							const { 1: cantSay, 2: mustSay, 3: name } = m;
							if (!name) {
								return {
									$inline: true,
									cantSay: letter(cantSay, `${ctx}.cantSay`),
									mustSay: letter(mustSay, `${ctx}.mustSay`),
								};
							}

							return {
								$inline: true,
								rulesPerPlayer: [
									{
										name: delayName(name, `${ctx}.name`),
										cantSay: letter(cantSay, `${ctx}.cantSay`),
										mustSay: letter(mustSay, `${ctx}.mustSay`),
									},
								],
							};
						},
					],
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Change of Cast":
			return {
				name,
				alternateName,
				...obj({
					casts: [listString],
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Changing Emotions":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					props: [
						array((s, ctx) => {
							const m = /^(.*?)\s*-\s+(.*)$/.exec(s);
							if (!m) {
								throw new Error(`Expected "<prop> - <emotion>": ${s} (${ctx})`);
							}

							const { 1: prop, 2: emotion } = m;
							return { prop, emotion };
						}),
					],
					scene: [string],
				})(data, ctx),
			};

		case "Couples":
			return {
				name,
				alternateName,
				...obj({
					couples: [commaString],
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Courtroom Scene":
			return {
				name,
				alternateName,
				...obj({
					crime: [string],
					judge: [delayName],
					lawyer: [delayName],
					prosecutor: [delayName],
					witnesses: [delayListNames],
				})(data, ctx),
			};

		case "Daytime Talk Show":
			return {
				name,
				alternateName,
				...obj({
					audienceMembers: [/^Audience members?$/, delayListNames],
					guests: [delayListNames],
					host: [delayName],
					topic: [maybeQuoted],
				})(data, ctx),
			};

		case "Dead Bodies":
			return {
				name,
				alternateName,
				...obj({
					actor: [delayName],
					bodies: [
						listString,
						(arr, ctx) => {
							const result = {
								$inline: true,
								bodies: [],
							};

							for (const body of arr) {
								const m1 = /^then\s+(.*)$/.exec(body);
								if (m1) {
									result.lastBody = delayName(m1[1], `${ctx}.lastBody`);
									continue;
								}

								const m2 =
									/^(?:audience member (.*)|(.*) from the audience)$/.exec(
										body,
									);
								if (m2) {
									result.audienceMember = m2[1] || m2[2];
									continue;
								}

								result.bodies.push(delayName(body, `${ctx}.bodies`));
							}

							return result;
						},
					],
					scene: [string],
				})(data, ctx),
			};

		case "Doo-wop":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musicians: [delayListNames],
					singers: [delayListNames],
					song: [quoted],
				})(data, ctx),
			};

		case "Dubbing":
			return {
				name,
				alternateName,
				...obj({
					audienceMember: ["Audience member", string],
					dubber: [delayName],
					musicians: [/^Musicians?$/, delayListNames],
					performers: [
						["Performers", "Actors"],
						listString,
						(arr, ctx) => {
							const obj = { $inline: true, performers: [] };

							for (const s of arr) {
								const m = /^(.*?) with (.*?)'s voice$/.exec(s);
								if (!m) {
									obj.performers.push(delayName(s, ctx));
									continue;
								}

								const { 1: dubbed, 2: dubber } = m;
								safeAssign(
									obj,
									"dubber",
									delayName(dubber, `${ctx}.dubber`),
									`${ctx}.dubber`,
								);
								safeAssign(
									obj,
									"dubbed",
									delayName(dubbed, `${ctx}.dubbed`),
									`${ctx}.dubbed`,
								);
							}

							return obj;
						},
					],
					scene: [string],
				})(data, ctx),
			};

		case "Duet":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musicians: [/^Musicians?$/, delayListNames],
					singers: [[/^Singers?$/, "Performers"], delayListNames],
					styles: [/^Styles?$/, listString],
				})(data, ctx),
			};

		case "Emotion Options":
			return {
				name,
				alternateName,
				...obj({
					emotions: [listString],
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Every Other Line":
			return {
				name,
				alternateName,
				...obj({
					endLine: ["End line", quoted],
					performers: [peopleWithPeople("performers", "phoneReaders")],
					phoneDonors: ["Phone donors", listString],
					play: [string],
					scene: [string],
				})(data, ctx),
			};

		case "Expert":
			return {
				name,
				alternateName,
				...obj({
					expert: [delayName],
					interviewer: [delayName],
					topic: [string],
				})(data, ctx),
			};

		case "Expert Translation":
			return {
				name,
				alternateName,
				...obj({
					expert: [delayName],
					language: [string],
					topic: [["Topic", "Scene"], string],
					translator: [delayName],
				})(data, ctx),
			};

		case "Explanations":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					style: [string],
					topic: [
						or(
							string,
							obj({
								$inline: true,
								topic: ["Text", string],
								performers: [
									"Data",
									array(
										obj({
											performers: [
												obj({
													$inline: true,
													names: ["Text", delayListNames],
													style: [
														"Data",
														one,
														obj({
															$inline: true,
															style: [string],
														}),
													],
												}),
											],
										}),
									),
								],
							}),
						),
					],
				})(data, ctx),
			};

		case "Fashion Models":
			return {
				name,
				alternateName,
				...obj({
					commentators: [/^Commentators?$/, delayListNames],
					job: [string],
					models: [delayListNames],
				})(data, ctx),
			};

		case "Filler Clip":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scene: [string],
					$extra(extras, o, ctx) {
						if (extras.length > 1) {
							throw new Error(
								`Expected 1 extra at most: ${JSON.stringify(extras)} (${ctx})`,
							);
						}

						safeAssign(o, "notes", string(extras[0], ctx), ctx);
					},
				})(data, ctx),
			};

		case "Film Dub":
			return {
				name,
				alternateName,
				...obj({
					film: [string],
					performers: [/^Performers?$/, delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Film Noir":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Film Review":
			return {
				name,
				alternateName,
				...obj({
					actors: [delayListNames],
					film: [string],
					reviewer: [
						(s, ctx) => {
							const m = /^(.*?)\s+as\s+(.*)$/.exec(s);
							if (!m) {
								throw new Error(`Expected "<name> as <name>": ${s} (${ctx})`);
							}

							const { 1: reviewer, 2: filmCritic } = m;
							return {
								$inline: true,
								reviewer: delayName(reviewer, `${ctx}.reviewer`),
								filmCritic,
							};
						},
					],
				})(data, ctx),
			};

		case "Film Trailer":
			return {
				name,
				alternateName,
				...obj({
					narrator: [delayName],
					performers: [delayListNames],
					title: [["Title", "Film"], string],
				})(data, ctx),
			};

		case "Film TV and Theater Styles":
			return {
				name,
				alternateName,
				...obj({
					performers: [
						or(
							performersWithModerators,
							all(
								obj({
									performers: ["Text", performersWithModerators],
									data: [
										obj({
											$inline: true,
											scene: [string],
											styles: [/^Styles?$/, listString],
										}),
									],
								}),
								(group) => ({ $inline: true, groups: [group] }),
							),
						),
					],
					scene: [string],
					styles: [[/^Styles?$/, "Options"], listString],
				})(data, ctx),
			};

		case "First Date":
			return {
				name,
				alternateName,
				...obj({
					coupleFromTheAudience: ["Couple from the audience", listString],
					performers: [peopleWithPeople("mainCouple", "extraPerformers")],
				})(data, ctx),
			};

		case "Fixed Expression":
			return {
				name,
				alternateName,
				...obj({
					scene: [string],
					$extra(extras, o, ctx) {
						safeAssign(
							o,
							"performers",
							array(personWith("expression"))(extras, ctx),
							ctx,
						);
					},
				})(data, ctx),
			};

		case "Foreign Film Dub":
			return {
				name,
				alternateName,
				...obj({
					actors: [delayListNames],
					film: [string],
					languages: [/^Languages?$/, listString],
					title: [string],
					translators: [delayListNames],
				})(data, ctx),
			};

		case "Forward Rewind":
			return {
				name,
				alternateName,
				...obj({
					performers: [performersWithModerators],
					scene: [string],
				})(data, ctx),
			};

		case "Funeral":
			return {
				name,
				alternateName,
				...obj({
					for: [string],
					musicians: [/^Musicians?$/, delayListNames],
					performers: [delayListNames],
				})(data, ctx),
			};

		case "Good Cop Bad Cop":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Gospel":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musician: [delayName],
					singers: [delayListNames],
				})(data, ctx),
			};

		case "Greatest Hits":
			return {
				name,
				alternateName,
				...obj({
					singers: [/^Singers?$/, delayListNames],
					salesmen: [
						[
							"Announcer guys",
							/^Commercial (salesmen|TV pitchguys)$/,
							"Hosts of a TV show",
							"Late night TV hosts",
							"Pitchmen",
							"Salesmen",
							"Shopping network guys",
							"Spokesmen",
							"Television salesmen",
							/^(Television|TV) voiceover (announcers|artists|guys|hosts|people|performers|personalities|salesmen)$/,
							/^TV (announcer(s| guys)|(commercial )?(guys|pitchmen|salesmen( guys)?))$/,
							/^Voiceover (guys|personalities)$/,
						],
						delayListNames,
					],
					musicians: [/^Musicians?$/, delayListNames],
					album: [[/^Albums?$/, "Topic"], maybeQuoted],
					songs: [
						/^Songs?$/,
						array(string, (s, ctx) => {
							const m = /^(.*?) ?- "([^"]*)"$/.exec(s);
							if (!m) {
								throw new Error(`Song did not match: ${s} (${ctx})`);
							}

							const { 1: style, 2: title } = m;
							return { style, title };
						}),
					],
				})(data, ctx),
			};

		case "Hats":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					topic: [string],
					$extra(extras, o, ctx) {
						if (extras.length !== 1) {
							throw new Error(
								`Expected 1 extra: ${JSON.stringify(extras)} (${ctx})`,
							);
						}

						safeAssign(o, "topic", extras[0]);
					},
				})(data, ctx),
			};

		case "Helping Hands":
			return {
				name,
				alternateName,
				...obj({
					performers: [
						listString,
						array((s, ctx) => {
							const m = /^(\w+)\s+with\s+(\w+)'s\s+hands$/.exec(s);
							if (!m) {
								return delayName(s, ctx);
							}

							const { 1: body, 2: hands } = m;
							return {
								body: delayName(body, `${ctx}.body`),
								hands: delayName(hands, `${ctx}.hands`),
							};
						}),
					],
					scene: [string],
				})(data, ctx),
			};

		case "Hey, You Down There!":
			return {
				name,
				alternateName,
				...obj({
					narrator: [delayName],
					performers: [["Actors", "Performers"], delayListNames],
					topic: [["Scene", "Topic"], string],
				})(data, ctx),
			};

		case "Hoedown":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musicians: [/^Musicians?$/, delayListNames],
					performers: [delayListNames],
				})(data, ctx),
			};

		case "Hollywood Director":
			return {
				name,
				alternateName,
				...obj({
					actors: [delayListNames],
					director: [delayName],
					musicians: [delayListNames],
					notes: [array(string)],
					scene: [string],
				})(data, ctx),
			};

		case "Hollywood Moments":
			return {
				name,
				alternateName,
				...obj({
					performers: [performersWithModerators],
					scene: [string],
				})(data, ctx),
			};

		case "Home Shopping":
			return {
				name,
				alternateName,
				...obj({
					items: [listString],
					performers: [delayListNames],
				})(data, ctx),
			};

		case "Ice Skaters":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					subject: [string],
				})(data, ctx),
			};

		case "If You Know What I Mean":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Improbable Mission":
			return {
				name,
				alternateName,
				...obj({
					agents: [delayListNames],
					mission: [string],
					performers: [delayListNames],
					voiceOnTape: ["Voice on tape", delayName],
				})(data, ctx),
			};

		case "Infomercial":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					problem: [string],
					product: [string],
				})(data, ctx),
			};

		case "Interrogation":
			return {
				name,
				alternateName,
				...obj({
					crime: [string],
					interrogators: [delayListNames],
					suspect: [delayName],
				})(data, ctx),
			};

		case "Interview":
			return {
				name,
				alternateName,
				...obj({
					interviews: [
						"Interviewer",
						obj({
							interviewer: ["Text", delayName],
							style: [
								"Data",
								obj({
									$inline: true,
									style: [string],
									$extra(extras, o, ctx) {
										if (extras.length !== 1) {
											throw new Error(
												`Expected 1 extra: ${JSON.stringify(extras)} (${ctx})`,
											);
										}

										const [e] = extras;
										safeAssign(
											o,
											"",
											inline(personWith("character"))(e, ctx),
											ctx,
										);
									},
								}),
							],
						}),
						(x) => [x],
					],
				})(data, ctx),
			};

		case "Irish Drinking Song":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musicians: [/^Musicians?$/, delayListNames],
					performers: [delayListNames],
				})(data, ctx),
			};

		case "Kick It":
			return {
				name,
				alternateName,
				...obj({
					musicians: [delayListNames],
					performers: [performersWithModerators],
					scene: [string],
				})(data, ctx),
			};

		case "Let's Make a Date":
			return {
				name,
				alternateName,
				...obj({
					host: [
						["Bachelorette", "Host", /^Lonely single( guy)?$/],
						or(
							delayName,
							obj({
								$inline: true,
								host: ["Text", delayName],
								guests: ["Data", array(string, personWithQuirk)],
							}),
						),
					],
				})(data, ctx),
			};

		case "Living Scenery":
			return {
				name,
				alternateName,
				...obj({
					actors: [["Actors", "Performers"], delayListNames],
					props: [listString],
					scene: [string],
				})(data, ctx),
			};

		case "Lounge Lizards":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musicians: [delayListNames],
				})(data, ctx),
			};

		case "Make a Monster":
			const monster = obj({
				name: ["Text", delayName],
				bodyParts: [
					"Data",
					array((s, ctx) => {
						const m = /^(.*?):\s+(.*)$/.exec(s);
						if (!m) {
							throw new Error(`Unexpected body part: ${s} (${ctx})`);
						}

						const { 1: bodyPart, 2: character } = m;
						return { bodyPart, character };
					}),
				],
			});

			return {
				name,
				alternateName,
				...obj({
					brideOfFrankenstein: ["Bride of Frankenstein", monster],
					drFrankenstein: ["Dr. Frankenstein", delayName],
					franksteinSMonster: ["Frankstein's monster", monster],
					igor: [delayName],
					musicians: [delayListNames],
				})(data, ctx),
			};

		case "March":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musician: [delayName],
					performers: [delayListNames],
				})(data, ctx),
			};

		case "Meet the Family":
			return {
				name,
				alternateName,
				...obj({
					father: [personWithQuirk],
					mother: [personWithQuirk],
					scene: [string],
				})(data, ctx),
			};

		case "Motown Group":
			return {
				name,
				alternateName,
				...obj({
					musicians: [delayListNames],
					singers: [["Singers", "Performers"], delayListNames],
					song: [["Song", "About"], maybeQuoted],
				})(data, ctx),
			};

		case "Mousetraps":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Moving People":
			return {
				name,
				alternateName,
				...obj({
					movers: [delayListNames],
					moversFromTheAudience: [
						["Movers from the audience", "Audience members"],
						listString,
					],
					performers: [["Actors", "Performers"], delayListNames],
					scene: [string],
					trivia: [string],
				})(data, ctx),
			};

		case "Multiple Personalities":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					props: [
						["Props", "Props and personalities"],
						array((s, ctx) => {
							const m = /^(.*?)\s*-\s+(.*)$/.exec(s);
							if (!m) {
								throw new Error(
									`Expected "<prop> - <personality>": ${s} (${ctx})`,
								);
							}

							const { 1: prop, 2: personality } = m;
							return { prop, personality };
						}),
					],
					scene: [string],
				})(data, ctx),
			};

		case "Musical Film Review":
			return {
				name,
				alternateName,
				...obj({
					film: [string],
					musician: [delayName],
					reviewer: [delayName],
				})(data, ctx),
			};

		case "Musical Producers":
			return {
				name,
				alternateName,
				...obj({
					actors: [delayListNames],
					musician: [delayName],
					producers: [delayListNames],
					singers: [delayListNames],
					topics: [["About", "Topic"], listString],
				})(data, ctx),
			};

		case "News Report":
			return {
				name,
				alternateName,
				...obj({
					anchormen: [/^Anchorm[ae]n$/, delayListNames],
					expert: [delayName],
					interviewer: [delayName],
					inTheField: ["In the field", delayName],
					presenter: [delayName],
					reporter: [
						["Reporter", "Field reporter", "News reporter"],
						delayName,
					],
					topic: [string],
					variousCharacters: [
						["Various characters", "Various people"],
						delayName,
					],
				})(data, ctx),
			};

		case "Newsflash":
			return {
				name,
				alternateName,
				...obj({
					anchormen: [
						[/^((News ?)?Anchor(s|men))$/i, "Hosts of the news"],
						delayListNames,
					],
					fieldReporter: [["Field reporter", "Reporter"], delayName],
					onTheGreenScreen: ["On the green screen", string],
				})(data, ctx),
			};

		case "Number of Words":
			function personWithNumberOfWords(s, ctx) {
				const m = /^(\w+)\s+-\s+(?:(.*?)\s+-\s+)?(\d+)\s+words?$/.exec(s);
				if (!m) {
					throw new Error(
						`Expected "<name> - <quirk> - <n> words": ${s} (${ctx})`,
					);
				}

				const { 1: name, 2: quirk, 3: words } = m;
				return {
					name: delayName(name, `${ctx}.name`),
					quirk,
					words: Number(words),
				};
			}

			return {
				name,
				alternateName,
				...obj({
					scene: [
						obj({
							$inline: true,
							scene: ["Text", string],
							performers: ["Data", array(personWithNumberOfWords)],
						}),
					],
					$extra(extras, o, ctx) {
						safeAssign(
							o,
							"performers",
							array(personWithNumberOfWords)(extras, ctx),
						);
					},
				})(data, ctx),
			};

		case "Old Job, New Job":
			return {
				name,
				alternateName,
				...obj({
					oldJob: ["Old job", string],
					performers: [peopleWithPeople("performers", "oldJobPerformers")],
					scene: [string],
				})(data, ctx),
			};

		case "One-Syllable Word":
			return {
				name,
				alternateName,
				...obj({
					scene: [string],
				})(data, ctx),
			};

		case "Opera":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musician: [delayName],
					performers: [delayListNames],
				})(data, ctx),
			};

		case "Panel":
			return {
				name,
				alternateName,
				...obj({
					issue: [string],
				})(data, ctx),
			};

		case "Party Quirks":
			const host = obj({
				$inline: true,
				host: ["Text", delayName],
				guests: ["Data", array(string, personWithQuirk)],
			});

			return {
				name,
				alternateName,
				...obj({
					host: [or(delayName, host)],
				})(data, ctx),
			};

		case "Picture":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Piranha Tank":
			return {
				name,
				alternateName,
				...obj({
					inventors: [delayListNames],
					judges: ['Judges/"Piranhas"', delayListNames],
				})(data, ctx),
			};

		case "Press Conference":
			return {
				name,
				alternateName,
				...obj({
					journalists: [delayListNames],
					publicFigure: ["Public figure", delayName],
					scene: [string],
					topic: [string],
				})(data, ctx),
			};

		case "Prison Visitor":
			function prisoners(key) {
				return or(
					delayName,
					obj({
						$inline: true,
						[key]: ["Text", delayName],
						prisoners: ["Data", array(personWith("crime"))],
					}),
				);
			}

			return {
				name,
				alternateName,
				...obj({
					musician: [prisoners("musician")],
					visitor: [prisoners("visitor")],
				})(data, ctx),
			};

		case "Props":
			return {
				name,
				alternateName,
				...obj({
					pairs: [
						or(array(delayListNames), (s, ctx) => {
							const m = /^(\w+)\s+and\s+(\w+),\s+(\w+)\s+and\s+(\w+)$/.exec(s);
							if (!m) {
								throw new Error(`Unexpected pairs: ${s} (${ctx})`);
							}

							const { 1: a, 2: b, 3: c, 4: d } = m;
							return [
								[delayName(a, `${ctx}.a`), delayName(b, `${ctx}.b`)],
								[delayName(c, `${ctx}.c`), delayName(d, `${ctx}.d`)],
							];
						}),
					],
					$extra(extras, o, ctx) {
						safeAssign(o, "pairs", array(delayListNames)(extras, ctx));
					},
				})(data, ctx),
			};

		case "Psychiatrist":
			return {
				name,
				alternateName,
				...obj({
					psychiatrist: [
						or(
							delayName,
							obj({
								$inline: true,
								psychiatrist: ["Text", delayName],
								performers: ["Data", array(personWithQuirk)],
							}),
						),
					],
					musician: [
						or(
							delayName,
							obj({
								$inline: true,
								musician: ["Text", delayName],
								performers: ["Data", array(personWithQuirk)],
							}),
						),
					],
					$extra(extras, o, ctx) {
						safeAssign(
							o,
							"performers",
							array(personWithQuirk)(extras, `${ctx}.performers`),
						);
					},
				})(data, ctx),
			};

		case "Question This":
			return {
				name,
				alternateName,
				...obj({
					answers: [array(string)],
					contestants: [delayListNames],
					host: [delayName],
				})(data, ctx),
			};

		case "Questionable Impressions":
			return {
				name,
				alternateName,
				...obj({
					scene: [string],
				})(data, ctx),
			};

		case "Questions Only":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scenes: [/^Scenes?$/, or(listString, array(string))],
				})(data, ctx),
			};

		case "Questions with Hats":
			return {
				name,
				alternateName,
				...obj({
					scene: [string],
				})(data, ctx),
			};

		case "Questions with Wigs":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scene: [string],
					scenes: [array(string)],
					$extra(extras, o, ctx) {
						safeAssign(o, "scenes", array(string)(extras, ctx), ctx);
					},
				})(data, ctx),
			};

		case "Quick Change":
			return {
				name,
				alternateName,
				...obj({
					performers: [performersWithModerators],
					scene: [string],
				})(data, ctx),
			};

		case "Quiz Show":
			return {
				name,
				alternateName,
				...obj({
					contestants: [delayListNames],
					host: [delayName],
					title: [string],
				})(data, ctx),
			};

		case "Radio Show":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					callers: [delayListNames],
					radioDjs: [["Radio DJ's", "Radio deejays"], delayListNames],
					specialGuests: ["Special guests", delayName],
				})(data, ctx),
			};

		case "Rap":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musician: [delayName],
					performers: [delayListNames],
				})(data, ctx),
			};

		case "Really Bad Hangover":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scene: [string],
					sounds: [delayListNames],
				})(data, ctx),
			};

		case "Remember That Song":
			return {
				name,
				alternateName,
				...obj({
					barman: [delayName],
					musician: [
						obj({
							$inline: true,
							musician: ["Text", delayName],
							performers: ["Data", array(personWith("song"))],
						}),
					],
				})(data, ctx),
			};

		case "Remote Control":
			return {
				name,
				alternateName,
				...obj({
					topic: [
						["Topic", "Subject"],
						or(
							string,
							obj({
								$inline: true,
								topic: ["Text", string],
								performers: ["Data", array(personWithQuirk)],
							}),
						),
					],
					$extra(extras, o, ctx) {
						safeAssign(
							o,
							"performers",
							array(personWithQuirk)(extras, `${ctx}.performers`),
						);
					},
				})(data, ctx),
			};

		case "Reunion":
			return {
				name,
				alternateName,
				...obj({
					commonBond: ["Common bond", string],
					musicians: [delayListNames],
					performers: [delayListNames],
				})(data, ctx),
			};

		case "Rock Out":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					musicians: [delayName],
				})(data, ctx),
			};

		case "Scene to Music":
			return {
				name,
				alternateName,
				...obj({
					music: [string],
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Scene to Rap":
			return {
				name,
				alternateName,
				...obj({
					musicians: [/^Musicians?$/, delayListNames],
					rappers: [delayListNames],
					scene: [["Scene", "About"], string],
				})(data, ctx),
			};

		case "Scene with a Prop":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					prop: [string],
				})(data, ctx),
			};

		case "Scene with an Audience Member":
			return {
				name,
				alternateName,
				...obj({
					audienceMember: ["Audience member", string],
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Scene With Masks":
			return {
				name,
				alternateName,
				...obj({
					scene: [string],
				})(data, ctx),
			};

		case "Scenes":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					theme: [string],
				})(data, ctx),
			};

		case "Scenes Cut from a Movie":
			return {
				name,
				alternateName,
				...obj({
					$extra(extras, o, ctx) {
						safeAssign(o, "movies", array(string)(extras, ctx), ctx);
					},
				})(data, ctx),
			};

		case "Scenes from a Hat":
			return {
				name,
				alternateName,
				...obj({
					performers: [
						obj({
							$inline: true,
							performers: ["Text", delayListNames],
							scenes: ["Data", array(string)],
						}),
					],
					$extra(extras, o, ctx) {
						safeAssign(o, "scenes", array(string)(extras, ctx), ctx);
					},
				})(data, ctx),
			};

		case "Secret":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scene: [string],
					secret: [["Secret"], string],
					secretLocation: [["Secret hidden", "Hidden in"], string],
				})(data, ctx),
			};

		case "Show-Stopping Number":
			return {
				name,
				alternateName,
				...obj({
					musicians: [delayListNames],
					performers: [delayListNames],
					scene: [string],
					songs: [
						["Songs", "Numbers"],
						array(
							or((s, ctx) => {
								const m = /^(.*?)\s+-\s+"([^"]*)"$/.exec(s);
								if (!m) {
									throw new Error(
										`Expected '<name> - "<song>"': ${s} (${ctx})`,
									);
								}

								const { 1: name, 2: song } = m;
								return {
									name: delayName(name),
									song,
								};
							}, quoted),
						),
					],
				})(data, ctx),
			};

		case "Sideways Scene":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scene: [string],
					styles: [string],
				})(data, ctx),
			};

		case "Soap Opera":
			return {
				name,
				alternateName,
				...obj({
					scene: [string],
				})(data, ctx),
			};

		case "Song Styles":
			return {
				name,
				alternateName,
				...obj({
					about: [string],
					endingLine: ["Ending Line", quoted],
					startingLine: ["Starting Line", quoted],
					musicians: [/^Musicians?$/, delayListNames],
					singers: [
						/^Singers?$/,
						or(
							delayListNames,
							all(
								obj({
									name: ["Text", delayListNames],
									data: [
										"Data",
										obj({
											$inline: true,
											about: [string],
											style: [string],
										}),
									],
								}),
								(x) => [x],
							),
						),
					],
					song: [quoted],
					styles: [/^Styles?$/, listString],
				})(data, ctx),
			};

		case "Song Titles":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Sound Effects":
			return {
				name,
				alternateName,
				...obj({
					performers: [or(actingAndSounds, delayListNames)],
					scene: [string],
					sounds: [string],
				})(data, ctx),
			};

		case "Sound Effects (with Audience Members)":
			return {
				name,
				alternateName,
				...obj({
					audienceMembers: [/^Audience members$/i, listString],
					performers: [or(actingAndSounds, delayListNames)],
					scene: [string],
				})(data, ctx),
			};

		case "Sportscasters":
			return {
				name,
				alternateName,
				...obj({
					athletes: [delayListNames],
					commentators: [["Commentators", "Sportscasters"], delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Stand Sit Lie":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					misspokenScene: ["Misspoken scene", string],
					scene: [string],
				})(data, ctx),
			};

		case "Story":
			return {
				name,
				alternateName,
				...obj({
					leader: [["Narrator", "Leader", "Conductor"], delayName],
					moral: [maybeQuoted],
					performers: [delayListNames],
					storytellers: [delayListNames],
					title: [string],
				})(data, ctx),
			};

		case "Strange Bedfellows":
			return {
				name,
				alternateName,
				...obj({
					scene: [
						obj({
							$inline: true,
							scene: ["Text", string],
							performers: ["Data", array(personWith("character"))],
						}),
					],
				})(data, ctx),
			};

		case "Superheroes":
			const personWithSuperpowerString = personWith("superpower");

			return {
				name,
				alternateName,
				...obj({
					crisis: [
						or(
							string,
							obj({
								$inline: true,
								crisis: ["Text", string],
								performers: ["Data", array(personWithSuperpowerString)],
							}),
						),
					],
					$extra(extras, o, ctx) {
						safeAssign(
							o,
							"performers",
							array(personWithSuperpowerString)(extras, `${ctx}.performers`),
							ctx,
						);
					},
				})(data, ctx),
			};

		case "Survival Show":
			return {
				name,
				alternateName,
				...obj({
					contestants: [delayListNames],
					host: [delayName],
					location: [string],
				})(data, ctx),
			};

		case "Tag":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					startingPositions: [
						"Starting positions",
						(s, ctx) => {
							const startingPositions = [];

							while (s) {
								const m = /^(.*?)\s+\(([^()]*)\)(?:\s+and\s+)?/.exec(s);
								if (!m) {
									throw new Error(`Expected starting position: ${s} (${ctx})`);
								}

								const { 1: startingPosition, 2: name } = m;
								startingPositions.push({
									startingPosition,
									name: delayName(name, `${ctx}.name`),
								});

								s = s.substring(m[0].length);
							}

							return startingPositions;
						},
					],
				})(data, ctx),
			};

		case "Telethon":
			return {
				name,
				alternateName,
				...obj({
					celebrities: [
						or(
							array((s, ctx) => {
								s = string(s, ctx);

								const m = /^(\w+)\s*[-:]\s+(.*)$/.exec(s);
								if (!m) {
									throw new Error(
										`Expected "<name>: <celebrities>": ${s} (${ctx})`,
									);
								}

								const { 1: name, 2: celebrities } = m;
								return {
									name: delayName(name, `${ctx}.name`),
									celebrities: listString(celebrities, `${ctx}.celebrities`),
								};
							}),
							listString,
						),
					],
					guest: [delayName],
					hosts: [[/^Hosts?$/, "Presenters"], delayListNames],
					musicians: [/^Musicians?$/, delayListNames],
					singers: [delayListNames],
					topic: [string],
				})(data, ctx),
			};

		case "That'll Be Charlie Now":
			return {
				name,
				alternateName,
				...obj({
					characteristics: [
						array(
							or(
								obj({
									name: ["Text", string, (s) => s.replace(/:$/, ""), delayName],
									characteristics: ["Data", array(string)],
								}),
								string,
							),
						),
					],
					charlie: [delayName],
					describers: [delayListNames],
					guests: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "The Millionaire Show":
			return {
				name,
				alternateName,
				...obj({
					audienceMember: [
						["Audience member", "Relative in the audience"],
						delayName,
					],
					contestant: [delayName],
					friendOnThePhone: ["Friend on the phone", delayName],
					host: [delayName],
					theme: [string],
				})(data, ctx),
			};

		case "Themed Restaurant":
			return {
				name,
				alternateName,
				...obj({
					diners: [delayListNames],
					scene: [string],
					theme: [string],
					waiters: [["Waiters", /^Maitre[' ]d'? and waiter$/], delayListNames],
				})(data, ctx),
			};

		case "This Is the Story of Your Life":
			return {
				name,
				alternateName,
				...obj({
					guestsFromThePast: ["Guests from the past", delayListNames],
					honoree: [delayName],
					host: [delayName],
				})(data, ctx),
			};

		case "Three of a Kind":
			return {
				name,
				alternateName,
				...obj({
					job: [string],
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Three-Headed Broadway Star":
			return {
				name,
				alternateName,
				...obj({
					singers: [["Heads", "Performers"], delayListNames],
					musical: [string],
					musicians: [/^Musicians?$/, string],
					song: [maybeQuoted],
					to: [string],
				})(data, ctx),
			};

		case "Title Sequence":
			return {
				name,
				alternateName,
				...obj({
					actors: [delayListNames],
					musicians: [delayListNames],
					singers: [delayListNames],
					sitcom: [string],
				})(data, ctx),
			};

		case "Two Characters":
			return {
				name,
				alternateName,
				...obj({
					characters: [listString],
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Two-Headed Expert":
			return {
				name,
				alternateName,
				...obj({
					expert: [delayListNames],
					interviewer: [delayListNames],
					otherExpert: ["Other expert", delayListNames],
					scene: [["Scene", "Topic"], string],
				})(data, ctx),
			};

		case "Two-Line Vocabulary":
			return {
				name,
				alternateName,
				...obj({
					lines: [
						array(
							obj({
								name: ["Text", string, (s) => s.replace(/:$/, ""), delayName],
								lines: ["Data", array(quoted)],
							}),
						),
					],
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Video Player":
			return {
				name,
				alternateName,
				...obj({
					film: [string],
					remoteController: ["Remote Controller", delayName],
				})(data, ctx),
			};

		case "Wedding":
			return {
				name,
				alternateName,
				...obj({
					audienceMember: ["Audience member", string],
					drunkenRelative: ["Drunken relative", delayName],
					entertainer: [delayName],
					masterOfCeremonies: ["Master of ceremonies", delayName],
					musicians: [delayListNames],
					spouse: [delayName],
				})(data, ctx),
			};

		case "Weird Newscasters":
			return {
				name,
				alternateName,
				...obj({
					anchor: [["Anchor", "Host"], or(personWithQuirk, delayName)],
					coAnchor: [/^Co-?(anchor|host)$/i, personWithQuirk],
					financial: [personWithQuirk],
					sports: [personWithQuirk],
					weather: [personWithQuirk],
				})(data, ctx),
			};

		case "What Are You Trying to Say?":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "What's in the Bag?":
			return {
				name,
				alternateName,
				...obj({
					bagDonors: ["Bag donors", listString],
					performers: [delayListNames],
					scene: [string],
				})(data, ctx),
			};

		case "Whose Line?":
			return {
				name,
				alternateName,
				...obj({
					firstLine: ["First line", quoted],
					lines: [["Lines", "Sentences"], array(maybeQuoted)],
					performers: [performersWithModerators],
					scenes: [/^Scenes?$/, listString],
				})(data, ctx),
			};

		case "World's Worst":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					$extra(extras, o, ctx) {
						safeAssign(
							o,
							"scenes",
							array(string)(extras, `${ctx}.scenes`),
							ctx,
						);
					},
				})(data, ctx),
			};

		case "Wrong Theme Tune":
			return {
				name,
				alternateName,
				...obj({
					performers: [delayListNames],
					show: [string],
				})(data, ctx),
			};

		default:
			console.error("Unexpected game:", game);
			throw new Error(`Unexpected game: ${name} (${ctx})`);
	}
}

function episode(i, ctx) {
	function personName(_s, ctx) {
		const s = string(_s, ctx);

		if (
			[
				"Adam Rippon",
				"Adelaide Kane",
				"Adrienne Houghton",
				"Aisha Tyler",
				"Alfonso Ribeiro",
				"Amber Riley",
				"Andrea Navedo",
				"Anna Wanselius",
				"Anne King",
				"Archie Hahn",
				"Ardal O'Hanlon",
				"Arthur Smith",
				"Ava Fabian",
				"Betty Thomas",
				"Bill Nye",
				"Bob Derkach",
				"Brad Sherwood",
				"Brett Dier",
				"Brian Shaw",
				"Bridie Connell",
				"Cal Wilson",
				"Candice Accola",
				"Candice Patton",
				"Candy Girard",
				"Carmen Electra",
				"Caroline Quentin",
				"Carson Kressley",
				"Catherine O'Hara",
				"Cece Worrall-Rubin",
				"Cedric the Entertainer",
				"Charlie Sheen",
				"Cheryl Hines",
				"Chip Esten",
				"Chloe Butler and Monique Gaxiola",
				"Chris De'Sean Lee",
				"Chris Hardwick",
				"Chris Jackson",
				"Chris Jericho",
				"Chris Langham",
				"Christopher Smith",
				"Clive Anderson",
				"Colin Mochrie",
				"Cornelius Smith Jr.",
				"Danielle Panabaker",
				"Darren Criss",
				"David Hasselhoff",
				"Debi Durst",
				"Debra Wilson",
				"Denalda Williams",
				"Denny Siegel",
				"Drew Carey",
				"Eddie Izzard",
				"Elizabeth Gillies",
				"Emily Bett Rickards",
				"Enn Reitel",
				"Florence Henderson",
				"Fourplay with Judy",
				"Gary Anthony Williams",
				"George McGrath",
				"George Wendt",
				"Gina Rodriguez",
				"Grace Byers",
				"Graeme Garden",
				"Greg Proops",
				"Griff Rhys Jones",
				"Gwendolyn Osborne",
				"Heather Anne Campbell",
				"Heather Morris",
				"Hugh Hefner",
				"Ian Gomez",
				"Jack Osbourne",
				"Jaime Camil",
				"Jan Ravens",
				"Jane Brucker",
				"Jayne Trcka",
				"Jeanine Mason",
				"Jeff Davis",
				"Jerry Springer",
				"Jillian Michaels",
				"Jim Meskimen",
				"Jim Sweeney",
				"Jimmy Mulville",
				"Joanie Laurer",
				"Joey Fatone",
				"John Sessions",
				"Jon Glover",
				"Jonathan Mangum",
				"Jonathan Pryce",
				"Josie Lawrence",
				"Julian Clary",
				"Julie Larson",
				"Kaitlin Doubleday",
				"Karen Maruyama",
				"Karla Souza",
				"Kat Graham",
				"Kathie Lee Gifford",
				"Kathy Greenwood",
				"Kathy Griffin",
				"Kathy Kinney",
				"Katie Cassidy",
				"Katie Harman",
				"Kearran Giovanni",
				"Keegan-Michael Key",
				"Kevin McHale",
				"Kunal Nayyar",
				"Kyle Richards",
				"Laila Ali",
				"Lance Bass",
				"Lassie",
				"Laura Hall",
				"Lauren Cohan",
				"Lea Thompson",
				"Lee Simpson",
				"Linda Taylor",
				"Lisa Leslie",
				"Lolo Jones",
				"Loyola Marymount University cheerleaders",
				"Lyndie Greenwood",
				"Maggie Q",
				"Malcolm Goodwin",
				"Manuela Arbeláez",
				"Marisol Nichols",
				"Mark Cohen",
				"Matt Barnes",
				"Mel B",
				"Michael Weatherly",
				"Mike McShane",
				"Mircea Monroe",
				"Misha Collins",
				"Misty May-Treanor",
				"Neena and Veena Bidasha",
				"Neil Mullarkey",
				"Niall Ashdown",
				"Nina Agdal",
				"Nolan Gould",
				"Nyima Funk",
				"Padma Lakshmi",
				"Patrick Bristow",
				"Paul Merton",
				"Paul Rider",
				"Penn & Teller",
				"Peter Cook",
				"Phil LaMarr",
				"Rachel Bloom",
				"Rachel Reynolds",
				"Ralph Macchio",
				"Randy Couture",
				"Rhys Darby",
				"Rich Fields",
				"Richard Kaplan",
				"Richard Simmons",
				"Richard Vranch",
				"Ricki Lake",
				"Rob Gronkowski",
				"Robbie Amell",
				"Robin Williams",
				"Ron West",
				"Rory Bremner",
				"Rory McGrath",
				"Ross Mathews",
				"Russell Fletcher",
				"Ryan Stiles",
				"Sam Johnson",
				"Sandi Toksvig",
				"Santa Claus and Donner",
				"Scott Porter",
				"Sean Masterson",
				"Shawn Johnson",
				"Sheryl Underwood",
				"Sid Caesar",
				"Steen Raskopoulos",
				"Stephen Colbert",
				"Stephen Frost",
				"Stephen Fry",
				"Steve Kamer",
				"Steve Steen",
				"Susie Youssef",
				"Tamera Mowry",
				"Tara Lipinski",
				"Tegan Higginbotham",
				"The Bella Twins",
				"Tinashe",
				"Tom Walker",
				"Tommy Little",
				"Tony Cavalero",
				"Tony Hawk",
				"Tony Slattery",
				"Ulambayaryn Byambajav",
				"Undarma Darihu",
				"US Olympic Synchronized Swimming Team",
				"Verne Troyer",
				"Vernon Davis",
				"Victoria Fuller",
				"Wanya Morris",
				"Wayne Brady",
				"Wendi McLendon-Covey",
				"Whoopi Goldberg",
				"Wil Wheaton",
				"Willie Robertson",
				"Wilson Bethel",
				"Win Meyerson",
				"Yvette Nicole Brown",
			].includes(s)
		) {
			return s;
		}

		throw new Error(`Unexpected person name: ${JSON.stringify(s)} (${ctx})`);
	}

	const personWithAlternateName = obj({
		name: [personName],
		alternateName: [string],
	});

	const personWithOptionalAlternateName = or(
		personName,
		personWithAlternateName,
	);

	const o = obj({
		airdate: [one, date],
		productionNumber: ["Production No", one, string],
		host: [one, personName],
		performers: [array(personName)],
		guests: [array(personWithOptionalAlternateName)],
		musicians: [array(personWithOptionalAlternateName)],
		games: [array(game)],
	})(i, ctx);

	function getPeopleMap(people) {
		const namesByWord = new Map();

		function add(word, name) {
			let set = namesByWord.get(word);
			if (!set) {
				set = new Set();
				namesByWord.set(word, set);
			}
			set.add(name);
		}

		const nonWord = /\W+/g;
		function addName(name, baseName = name) {
			let m;
			while ((m = nonWord.exec(name))) {
				add(name.substring(0, m.index), baseName);
			}
			add(name, baseName);
		}

		for (const person of people) {
			if (typeof person === "string") {
				addName(person);
			} else {
				addName(person.name);
				addName(person.alternateName, person.name);
			}
		}

		return new Map(
			Array.from(namesByWord)
				.map(([word, names]) => {
					if (names.size === 1) {
						const [name] = names;
						return [word, name];
					}
				})
				.filter((x) => x)
				.sort(([a], [b]) => b.length - a.length || a.localeCompare(b)),
		);
	}

	const people = getPeopleMap([
		o.host,
		...(o.performers || []),
		...(o.guests || []),
		...(o.musicians || []),
	]);

	function postProcess(x) {
		if (Array.isArray(x)) {
			return x.map(postProcess);
		}

		if (typeof x === "function") {
			return x({ people });
		}

		if (typeof x !== "object") {
			return x;
		}

		for (const [k, v] of Object.entries(x)) {
			x[k] = postProcess(v);
		}
		return x;
	}

	o.games = postProcess(o.games);

	return o;
}

if (process.argv.length !== 3) {
	console.error("Usage: convert.js <input.json>");
	process.exit(1);
}

const OUTPUT_FILE = "output.json";
if (fs.existsSync(OUTPUT_FILE)) {
	console.error(OUTPUT_FILE, "already exists!");
	process.exit(1);
}

const ALL = JSON.parse(await fs.promises.readFile(process.argv[2], "utf8"));

const shows = [];
const errors = [];

for (const [key, value] of Object.entries(ALL)) {
	let m;
	let show;
	let seasonNumber;
	let episodeNumber;

	if ((m = /^AU Episode (\d+)-0*(\d+)$/.exec(key)) !== null) {
		show = shows.find((s) => s.slug === "wliia-au");
		if (!show) {
			shows.push(
				(show = {
					name: "Whose Line Is It Anyway? (AU)",
					slug: "wliia-au",
					seasons: {},
				}),
			);
		}

		seasonNumber = Number(m[1]);
		episodeNumber = Number(m[2]);
	} else if ((m = /^Green Screen 0*(\d+)$/.exec(key)) !== null) {
		show = shows.find((s) => s.slug === "gs");
		if (!show) {
			shows.push(
				(show = {
					name: "Drew Carey's Green Screen Show",
					slug: "gs",
					seasons: {},
				}),
			);
		}

		seasonNumber = 1;
		episodeNumber = Number(m[1]);
	} else if ((m = /^Improv-A-Ganza 0*(\d+)$/.exec(key)) !== null) {
		show = shows.find((s) => s.slug === "iag");
		if (!show) {
			shows.push(
				(show = {
					name: "Drew Carey's Improv-A-Ganza",
					slug: "iag",
					seasons: {},
				}),
			);
		}

		seasonNumber = 1;
		episodeNumber = Number(m[1]);
	} else if ((m = /^UK Episode (\d+)-0*(\d+)$/.exec(key)) !== null) {
		show = shows.find((s) => s.slug === "wliia-uk");
		if (!show) {
			shows.push(
				(show = {
					name: "Whose Line Is It Anyway? (UK)",
					slug: "wliia-uk",
					seasons: {},
				}),
			);
		}

		seasonNumber = Number(m[1]);
		episodeNumber = Number(m[2]);
	} else if ((m = /^Episode ([1-8])-0*(\d+)$/.exec(key)) !== null) {
		show = shows.find((s) => s.slug === "wliia-us-abc");
		if (!show) {
			shows.push(
				(show = {
					name: "Whose Line Is It Anyway? (US-ABC)",
					slug: "wliia-us-abc",
					seasons: {},
				}),
			);
		}

		seasonNumber = Number(m[1]);
		episodeNumber = Number(m[2]);
	} else if ((m = /^Episode (\d+)-0*(\d+)$/.exec(key)) !== null) {
		show = shows.find((s) => s.slug === "wliia-us-cw");
		if (!show) {
			shows.push(
				(show = {
					name: "Whose Line Is It Anyway? (US-CW)",
					slug: "wliia-us-cw",
					seasons: {},
				}),
			);
		}

		seasonNumber = Number(m[1]) - 8;
		episodeNumber = Number(m[2]);
	} else {
		throw new Error(`Unknown episode: ${key}`);
	}

	const seasonKey = `s${seasonNumber.toString().padStart(2, "0")}`;
	const episodeKey = `e${episodeNumber.toString().padStart(2, "0")}`;

	const season = show.seasons[seasonKey] || (show.seasons[seasonKey] = {});

	const wikiUrl = `https://whoselineisitanyway.fandom.com/wiki/${key.replace(
		/\s+/g,
		"_",
	)}`;

	if (season[episodeKey]) {
		throw new Error(`Duplicate episode: ${wikiUrl}`);
	}

	const ep = { wikiUrl };
	season[episodeKey] = ep;

	try {
		Object.assign(ep, episode(value, `<${wikiUrl}>`));
	} catch (e) {
		errors.push(e);
	}
}

if (errors.length) {
	if (errors.length === 1) {
		throw errors[0];
	}

	for (const e of errors) {
		console.error(e);
	}
	throw new Error("Episode errors");
}

await fs.promises.writeFile(OUTPUT_FILE, JSON.stringify(shows, null, 2));
