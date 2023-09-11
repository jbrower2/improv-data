import { type Episode } from "../../types/episode.js";

export const e11: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-11",
	airdate: "2002-12-20",
	productionNumber: "296735-517",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Questions with Wigs",
			scene: "Scandal erupts at a wedding",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If Tarzan had appeared in other TV shows",
				"Unusual phrases to be teaching in an English-as-a-second-language class",
				'Strange comments for your doctor to make after "Turn your head and cough"',
			],
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Host's repulsive landlady looking for excuses to interrupt the party so she can hit on everyone",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Safari guide who thinks people are dangerous wild animals who must be wrestled into submission",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Uninhibited social director at a nudist camp trying to get everyone to join in the activities",
				},
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Western_",
			songs: [
				{
					style: "The Osmond Brothers",
					title: "Clip-Clop Bang Bang, Clip-Clop Bang Bang",
				},
				{
					style: "The Who",
					title: "Miss Kitty Left Me, so I'm Sleeping with My Horse",
				},
				{
					style: "Opera",
					title: "Two Asses in a One-Horse Town",
				},
			],
		},
		{
			name: "Irish Drinking Song",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Marriage](https://whoselineisitanyway.fandom.com/wiki/Marriage_Irish_Drinking_Song)",
		},
	],
};
