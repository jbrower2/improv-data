import { type Episode } from "../../types/episode.js";

export const e07: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Colin Mochrie"
	| "Brad Sherwood"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_4-07",
	airdate: "1992-03-07",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Ryan Stiles", "Colin Mochrie", "Brad Sherwood"],
	games: [
		{
			name: "Emotion Options",
			performers: ["Ryan Stiles", "Brad Sherwood"],
			scene: "Two men in adjoining shower cubicles",
			emotions: [
				"Euphorically",
				"Nauseously",
				"Hysterically",
				"Horny or Lustily",
			],
		},
		{
			name: "Old Job, New Job",
			alternateName: "New Job, Old Job",
			performers: ["Colin Mochrie", "Greg Proops"],
			oldJobPerformers: ["Ryan Stiles"],
			scene: "Greg is cutting Colin's hair with Ryan, joined by Ryan",
			oldJob: "Ryan used to be a fireman",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Brad Sherwood"],
				["Colin Mochrie", "Greg Proops"],
			],
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: ["Getting a bank loan"],
			lines: [
				"Barbara, don't touch that cattle prod.",
				"May ten thousand ants never invade your underwear drawer.",
				"It's time for the royal spanking.",
				"You must dance for me while I name some vegetables.",
			],
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Cheerleader",
				},
				{
					name: "Colin Mochrie",
					quirk: "Synchronized swimmer",
				},
				{
					name: "Ryan Stiles",
					quirk: "Cattle brander",
				},
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"People who failed the auditions for _Swan Lake_",
				"_The Good, the Bad and the Ugly_",
				"Fortune cookies that tell the truth",
				"A mailman at a dog show",
				"Pointless things to take on a polar expedition",
				"Bad ice cream flavors",
				"Snake swallowing a pig or a cow",
				"Auctioneers at home",
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "Changing a baby's diaper",
		},
		{
			name: "Helping Hands",
			performers: [
				"Greg Proops",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "Ryan's going out on a date and Greg is helping him prepare",
		},
		{
			name: "Superheroes",
			crisis: "Solve English television's problem",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Junk Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Hyperactive Man",
				},
				{
					name: "Brad Sherwood",
					superpower: "Cliche Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "Captain Poultry",
				},
			],
		},
	],
};
