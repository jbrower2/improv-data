import { type Episode } from "../../types/episode.js";

export const e14: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Ian Gomez"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-14",
	airdate: "1999-02-03",
	productionNumber: "296717-114",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Ian Gomez", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Ian Gomez",
			guests: [
				{
					name: "Brad Sherwood",
					quirk: "Latin American soccer announcer",
				},
				{
					name: "Colin Mochrie",
					quirk: "Turning into the Incredible Hulk",
				},
				{
					name: "Ryan Stiles",
					quirk: "Ian's teenage daughter having a tantrum",
				},
			],
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Callie", "Peter"],
			scene:
				"A honeymoon wedding night starts off great, but then goes horribly wrong when an earthquake hits",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Chester Flatbottom",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Laszlo Turkeybaster",
				quirk: "Only has a five-second memory",
			},
			sports: {
				name: "Ian Gomez",
				alternateName: "Damien Hardpank",
				quirk: "Ricky Ricardo at his wits' end",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Chlorophyll Lettucecrisper",
				quirk: "The Wicked Witch from _The Wizard of Oz_",
			},
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall"],
			album: "_Songs of the Ant Farmer_",
			songs: [
				{
					style: "French can-can",
					title: "Hey Look, Picnic!",
				},
				{
					style: "Theme song from the sitcom",
					title: "Insects and the Single Girl",
				},
				{
					style: "B-52s",
					title: "I've Got a Thorax to Grind with You",
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Ian Gomez",
					quirk: "Gangster being riddled with bullets",
				},
				{
					name: "Colin Mochrie",
					quirk: "Bad-tempered sperm trying to find its egg",
				},
				{
					name: "Ryan Stiles",
					quirk: "Bloodhound trained to sniff out complete idiots",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Drew Carey",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a flamboyant cocktail waiter showing off his skills to a female customer, Drew",
		},
	],
};
