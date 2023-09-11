import { type Episode } from "../../types/episode";

export const e24: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 24,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-24",
	airdate: "2005-05-16",
	productionNumber: "296744-7024",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Wayne are Southern convicts escaping from a chain gang through a swamp when one of them gets stuck in quicksand, Brad is the tough prison guard closing in on them with the help of his tracker dogs",
			notes: ["Do it like Fosse dancers", "Do the entire scene backwards"],
		},
		{
			name: "Motown Group",
			singers: ["Brad Sherwood", "Wayne Brady", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			song: "Do the Policeman",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Priscilla", "Linda"],
			scene:
				"James Bond, who is Ryan, and the beautiful girl, Colin, are tied up in the villain's mountain headquarters and are moments from a horrible death; they must try to make their escape from the villain and his army of henchmen",
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the President_",
			songs: [
				{
					style: "The Doors",
					title: "Where'd You Get the Cuban?",
				},
				{
					style: "Disco",
					title: "Raucous in the Caucus",
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
