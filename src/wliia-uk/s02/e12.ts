import { type Episode } from "../../types/episode";

export const e12: Episode<
	| "Clive Anderson"
	| "Mike McShane"
	| "Chris Langham"
	| "Sandi Toksvig"
	| "John Sessions"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-12",
	airdate: "1990-02-09",
	host: "Clive Anderson",
	performers: [
		"Mike McShane",
		"Chris Langham",
		"Sandi Toksvig",
		"John Sessions",
	],
	games: [
		{
			name: "Authors",
			title: "_Flash Gordon Going to Shangri-La_",
			performers: [
				{
					name: "Mike McShane",
					author: "Dr. Seuss",
				},
				{
					name: "Chris Langham",
					author: "Jack London",
				},
				{
					name: "Sandi Toksvig",
					author: "Joy Francis",
				},
				{
					name: "John Sessions",
					author: "The monologues of Alan Bennett",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			groups: [
				{
					performers: ["John Sessions", "Chris Langham"],
					scene: "A headmaster and pupil",
					styles: ["Berkoff", "Hammer horror", "Roman epic", "_Thunderbirds_"],
				},
				{
					performers: ["Sandi Toksvig", "Mike McShane"],
					scene: "A boss falling in love with his secretary",
					styles: [
						"Fly-on-the-wall documentary",
						"_Tarzan_",
						"Beach movie",
						"Film noir",
					],
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to go up into space"],
		},
		{
			name: "Props",
			pairs: [
				["Sandi Toksvig", "John Sessions"],
				["Chris Langham", "Mike McShane"],
			],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Chris Langham", "Sandi Toksvig"],
			scene: "A couple arguing over what to have for dinner",
			film: "_The Contender_ (1944)",
		},
		{
			name: "Tag",
			startingPositions: [
				{
					startingPosition: "Lying down",
					name: "John Sessions",
				},
				{
					startingPosition: "Bending over on one foot",
					name: "Chris Langham",
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Sandi Toksvig",
			guests: [
				{
					name: "Chris Langham",
					quirk: "Finds everything baffling",
				},
				{
					name: "Mike McShane",
					quirk: "Eskimo",
				},
				{
					name: "John Sessions",
					quirk: "Society wit",
				},
			],
		},
	],
};
