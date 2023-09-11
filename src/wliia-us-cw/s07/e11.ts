import { type Episode } from "../../types/episode.js";

export const e11: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_15-11",
	airdate: "2019-09-09",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt in a horror movie",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Brad Sherwood"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Doo-wop",
			singers: ["Ryan Stiles", "Wayne Brady", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Caroline, who died tragically in a fruit-related accident",
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Marlene", "Shawna"],
			scene:
				"Two Jedi knights checking their equipment before they're ordered into battle against the forces of the Empire",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"First lines of the world's worst national anthem",
				"Unlikely lines from _Star Trek_",
				"Things you'd never order off the menu",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Water Park_",
			songs: [
				{
					style: "Stevie Wonder and Willie Nelson",
					title: "Mouth-to-Mouth in the Wading Pool",
				},
				{
					style: "Gilbert and Sullivan",
					title: "Yellow Water",
				},
			],
		},
	],
};
