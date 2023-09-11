import { type Episode } from "../../types/episode";

export const e28: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 28,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-28",
	airdate: "2001-04-19",
	productionNumber: "296722-330",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Two catfighting inmates in a women's prison",
				},
				{
					name: "Colin Mochrie",
					quirk: "Recently arrived alien learning behavior from the others",
				},
				{
					name: "Ryan Stiles",
					quirk: "Gradually turning into a nervous lizard",
				},
			],
		},
		{
			name: "Scene with an Audience Member",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMember: "Molly",
			scene:
				"On the _Titanic_, Ryan, and impoverished artist, is doing a nude sketch of our audience member when her fiancee Colin enters",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Kathy Greenwood"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Marine Corps_",
			songs: [
				{
					style: "Tex-Mex",
					title: "Shine Those Shoes",
				},
				{
					style: "Jewel",
					title: "Give Me Twenty",
				},
				{
					style: "Swing",
					title: "Let's Take a Shower",
				},
				{
					style: "Santana",
					title: "Invading Peru for the Hell of It",
				},
			],
		},
		{
			name: "Foreign Film Dub",
			alternateName: "Film Dubs",
			actors: ["Kathy Greenwood", "Drew Carey"],
			translators: ["Colin Mochrie", "Ryan Stiles"],
			languages: ["Russian"],
			film: "_Dead in the Gulag_",
		},
	],
};
