import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Rory Bremner"
	| "Colin Mochrie"
	| "Ryan Stiles"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-11",
	airdate: "1996-09-20",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Rory Bremner", "Colin Mochrie", "Ryan Stiles"],
	games: [
		{
			name: "Questions Only",
			scenes: ["Just before a prison breakout"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene: "Two high-tech explorers on the rim of a volcano",
			styles: [
				"Tourist information video",
				"_Dracula_",
				"Woody Allen",
				"Airline safety video",
			],
		},
		{
			name: "News Report",
			interviewer: {
				name: "Greg Proops",
				alternateName: "Salty Basket",
			},
			expert: {
				name: "Colin Mochrie",
				alternateName: "Hoss Cartwright",
			},
			reporter: {
				name: "Rory Bremner",
				alternateName: "Des Lynam",
			},
			variousCharacters: "Ryan Stiles",
			topic: "_The Princess and the Frog_",
		},
		{
			name: "Picture",
			performers: [
				"Rory Bremner",
				"Ryan Stiles",
				"Colin Mochrie",
				"Greg Proops",
			],
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit Bend",
			performers: ["Greg Proops", "Colin Mochrie", "Ryan Stiles"],
			scene: "In a Wild West saloon",
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["Greg Proops", "Rory Bremner"],
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Colin Mochrie"],
			fieldReporter: "Greg Proops",
			onTheGreenScreen: "Penguins",
		},
		{
			name: "Superheroes",
			crisis: "Shortage of paint",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Impotence Boy",
				},
				{
					name: "Ryan Stiles",
					superpower: "Huge Gesture Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "Cramp Boy",
				},
				{
					name: "Rory Bremner",
					superpower: "Scottish Weatherman",
				},
			],
		},
		{
			name: "Animals",
			performers: ["Colin Mochrie", "Greg Proops", "Ryan Stiles"],
			scene: "Trouble at home",
			animals: "Cats",
		},
		{
			name: "Hats",
			topic: "World's worst dating agency videos",
		},
	],
};
