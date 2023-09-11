import { type Episode } from "../../types/episode";

export const e10: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Josie Lawrence"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_7-10",
	airdate: "1995-09-29",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Josie Lawrence",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["At a singles party"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Josie Lawrence", "Ryan Stiles"],
					scene:
						"Ryan is pushing a pram in the park and he bumps into Josie who's also pushing a pram",
					styles: [
						"Cookery program",
						"Australian soap opera",
						"German porn",
						"Agatha Christie",
					],
				},
				{
					performers: ["Colin Mochrie", "Stephen Frost"],
					scene: "Stuck in a car that's teetering over a precipice",
					styles: [
						"Boris Karloff",
						"Wildlife documentary",
						"_Emmanuelle_",
						"_Batman_",
					],
				},
			],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two jockeys in a stable",
			secretLocation: "In the hay",
		},
		{
			name: "Greatest Hits",
			singers: ["Josie Lawrence"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Richard Vranch"],
			album: "_Songs of the Gas Station_",
			songs: [
				{
					style: "1965 love ballad",
					title: "Fill Me Up with Love",
				},
				{
					style: "Country and western",
					title: "Hey, Do Those Windows, Baby",
				},
				{
					style: "Torch song",
					title: "Hey, Hands Off My Muffler!",
				},
				{
					style: "Disco",
					title: "Lube Up",
				},
			],
		},
		{
			name: "Stand Sit Lie",
			performers: ["Stephen Frost", "Ryan Stiles", "Colin Mochrie"],
			scene:
				"On a sleeper train, Stephen is the ticket collector, the other two are passengers",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Colin Mochrie", "Josie Lawrence"],
			translators: ["Ryan Stiles", "Stephen Frost"],
			languages: ["Peruvian"],
			film: "_The Swahili Aubergine Lost in Space_",
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Karen", "Bridget"],
			scene: "Two cowboys rounding up the herd",
		},
		{
			name: "Hoedown",
			about:
				"~~Hair going grey~~ [Puberty](https://whoselineisitanyway.fandom.com/wiki/Puberty_Hoedown_(UK_7-10))",
			musicians: ["Richard Vranch"],
		},
	],
};
