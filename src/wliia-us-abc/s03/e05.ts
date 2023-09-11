import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-05",
	airdate: "2000-10-26",
	productionNumber: "296722-319",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Survival Show",
			host: "Greg Proops",
			contestants: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			location: "Post Office",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"When it's unwise to say \"I don't care\" to her",
				"People you wish would just shut up",
				"Men that women just don't seem to go for",
				"Pick-up lines of the elderly",
				"Things you shouldn't do when confronted by a street gang",
				"Things you shouldn't joke about with your girlfriend's father",
				"Difficult things to sell door-to-door",
			],
		},
		{
			name: "Reunion",
			performers: ["Greg Proops", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			commonBond: "Army Drill Sergeants",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Safari_",
			songs: [
				{
					style: "1920s Fats Waller",
					title: "Lion Nibblin' on My Toes",
				},
				{
					style: "Jamaican rap",
					title: "Ants, Ants, Ants in My Pants",
				},
				{
					style: "Tracy Chapman",
					title: "Man, It's Hot",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Drew Carey"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
	],
};
