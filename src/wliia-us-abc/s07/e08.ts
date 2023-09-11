import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-08",
	airdate: "2005-02-07",
	productionNumber: "296744-7008",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Mean female wrestler who receives a valentine and is desperate to find her secret admirer",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Mad headless horseman looking for a hideous head to replace his own",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Mischievous gargoyle at the top of Notre Dame Cathedral who keeps coming alive to cause trouble",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Colin is a distraught bride and Wayne is her angry mother, they've come to fashion designer Ryan on the morning of the wedding because the dress doesn't fit",
			styles: [
				"_MacGyver_",
				"Soap opera",
				"Psychic network",
				"WWF",
				"_Crocodile Hunter_",
				"_Antiques Roadshow_",
			],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Chip Esten", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Erica, who died tragically in a freak gene-splicing accident",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Chip Esten"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Lunch Lady_",
			songs: [
				{
					style: "Hillbilly",
					title: "Aprons, Hairnets, and Knee Highs",
				},
				{
					style: "Punk",
					title: "Don't Want Your Milk",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Chip Esten", "Wayne Brady"],
				["Ryan Stiles", "Drew Carey"],
			],
		},
	],
};
