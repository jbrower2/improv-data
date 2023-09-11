import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-04",
	airdate: "2020-04-20",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt at a business convention",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely tourism slogans for America",
				"Famous last words",
				"Pick up lines at the circus",
				"The world's worst airline pilot",
				"The dreams of Colin Mochrie",
			],
		},
		{
			name: "Every Other Line",
			alternateName: "Mixed Messages",
			performers: ["Chip Esten", "Wayne Brady", "Colin Mochrie"],
			phoneDonors: ["Matthew", "Andrew"],
			scene:
				"Colin is the head engineer at the Hoover Dam, he has called his senior engineers Chip and Wayne to deal with the leak",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Chip Esten"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Plastic Surgeon_",
			songs: [
				{
					style: "Opera",
					title: "The Rhinoplasty of Seville",
				},
				{
					style: "Eighties",
					title: "Fixing My Face in the Mirror",
				},
			],
		},
	],
};
