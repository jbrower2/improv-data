import { type Episode } from "../../types/episode.js";

export const e31: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 31,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-31",
	airdate: "2002-04-11",
	productionNumber: "296734-427",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Smooth rap star blindfolded and handcuffed to the bed by his new girlfriend gradually realizing the evening is going wrong",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Deranged window dresser whose only friends are mannequins Wayne and Ryan who he has fun undressing and dressing after hours",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Horse whisperer calming and mounting the others who he thinks are wild stallions",
				},
			],
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "In a maternity ward",
		},
		{
			name: "Film Dub",
			performers: ["Greg Proops", "Colin Mochrie", "Ryan Stiles"],
			scene: "Three years into an international space mission",
			film: "_Queen of Outer Space_ (1958)",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Retirement_",
			songs: [
				{
					style: "Protest",
					title: "I'm Movin' to Florida",
				},
				{
					style: "Blues by Wet Biscuit McGlee",
					title: "Ahgrewalebayeoyelawableh",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Drew Carey", "Ryan Stiles"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
	],
};
