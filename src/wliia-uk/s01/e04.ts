import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Clive Anderson"
	| "Tony Slattery"
	| "Betty Thomas"
	| "Paul Merton"
	| "John Sessions"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_1-04",
	airdate: "1988-10-14",
	host: "Clive Anderson",
	performers: ["Tony Slattery", "Betty Thomas", "Paul Merton", "John Sessions"],
	games: [
		{
			name: "Authors",
			title: "_Jack and the Beanstalk_",
			performers: [
				{
					name: "Tony Slattery",
					author: "William Burroughs",
				},
				{
					name: "Betty Thomas",
					author: "Mickey Spillane",
				},
				{
					name: "Paul Merton",
					author: "Barbara Cartland",
				},
				{
					name: "John Sessions",
					author: "Anthony Burgess",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			groups: [
				{
					performers: ["Paul Merton", "Tony Slattery"],
					scene: "A homeowner speaking to his builder",
					styles: ["Greek tragedy", "Hollywood epic", "Musical", "Soap opera"],
				},
				{
					performers: ["John Sessions", "Betty Thomas"],
					scene: "A husband and wife arguing over a map",
					styles: [
						"Ealing comedy",
						"Mime or silent movie",
						"Method acting",
						"Bogart",
					],
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Betty Thomas", "Paul Merton"],
				["John Sessions", "Tony Slattery"],
			],
		},
		{
			name: "Every Other Line",
			performers: ["John Sessions", "Paul Merton"],
			play: "_The Poison Party_",
			scene: "Paul is briefing John on a dangerous mission",
			endLine: "Oh dear, I've lost my shoe.",
		},
		{
			name: "Film Dub",
			performers: ["Tony Slattery", "Betty Thomas"],
			scene: "A husband and wife arguing over what to watch on television",
		},
		{
			name: "Party Quirks",
			host: "Paul Merton",
			guests: [
				{
					name: "Tony Slattery",
					quirk: "Has no backbone",
				},
				{
					name: "Betty Thomas",
					quirk: "Investigative journalist",
				},
				{
					name: "John Sessions",
					quirk: "Intrepid explorer",
				},
			],
		},
	],
};
