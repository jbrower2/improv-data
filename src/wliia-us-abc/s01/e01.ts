import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-01",
	airdate: "1998-08-05",
	productionNumber: "296648-103",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Old blues player",
				},
				{
					name: "Colin Mochrie",
					quirk: "An excitable dog",
				},
				{
					name: "Ryan Stiles",
					quirk: "Auctioneer",
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "An ambulance driver on his first emergency call",
		},
		{
			name: "Hats",
			topic: "World's worst dating service video",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			album: "_Songs of Accounting_",
			songs: [
				{
					style: "Disco",
					title: "D-I-V-O-R-C-E I-R-S",
				},
				{
					style: "Swing",
					title: "Your Love Has Bankrupted Me",
				},
				{
					style: "Early rock and roll",
					title: "Deduct This",
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "In a slow-motion fight scene",
				},
				{
					name: "Colin Mochrie",
					quirk: "Accident prone circus performer",
				},
				{
					name: "Ryan Stiles",
					quirk: "Foal being born",
				},
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Drew Carey", "Wayne Brady"],
			translators: ["Ryan Stiles", "Greg Proops"],
			languages: ["Farsi"],
			title: "_Banished on the Breezes_",
		},
	],
};
