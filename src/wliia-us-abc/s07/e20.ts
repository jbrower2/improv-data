import { type Episode } from "../../types/episode.js";

export const e20: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 20,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-20",
	airdate: "2005-04-18",
	productionNumber: "296744-7020",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Number of Words",
			scene:
				"Captain Kirk, Ryan, has been captured by a Klingon, Wayne; Mr. Spock, Brad, and Scotty, Colin, beam down to the planet to rescue him",
			performers: [
				{
					name: "Ryan Stiles",
					words: 3,
				},
				{
					name: "Wayne Brady",
					words: 4,
				},
				{
					name: "Brad Sherwood",
					words: 5,
				},
				{
					name: "Colin Mochrie",
					words: 2,
				},
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you don't want to be shouting at a party when the loud music suddenly stops",
				"Bad things to say or do to someone with a hairy back",
				"Poems about embarrassing moments",
				"The worst soap opera cliffhanger lines leading into a commercial",
			],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			dubber: "Brad Sherwood",
			audienceMember: "Rachel",
			scene:
				"Colin is an explorer who finds Jane, played by Rachel, in the jungle taking Cheetah for a walk, and tries to persuade her to return to civilization with him; suddenly, Tarzan, played by Ryan, swings in to reclaim her",
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of TV Detective and Cop Shows_",
			songs: [
				{
					style: "The Rolling Stones",
					title: "Hey You, Get Off of McCloud",
				},
				{
					style: "Opera",
					title: "Aaahh, Just One More Thing",
				},
				{
					style: "Burlesque stripper song",
					title: "Spritzer and Hutch",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Wayne Brady", "Brad Sherwood"],
				["Ryan Stiles", "Drew Carey"],
			],
		},
	],
};
