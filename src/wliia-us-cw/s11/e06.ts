import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-06",
	airdate: "2022-11-18",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Gary are two hard-nosed mechanics working in an auto repair shop when it suddenly catches on fire.  Wayne is the heroic firefighter who arrives on a firetruck to save them.",
			notes: [
				"Do as many Jackass stunts as you can",
				"Do it like you're all passionately in love with each other",
			],
		},
		{
			name: "What's in the Bag?",
			alternateName: "What's In the Bag?",
			performers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			scene:
				"Wayne is a nervous bank teller and Ryan and Colin are bank robbers.",
		},
		{
			name: "Two-Line Vocabulary",
			scene:
				"Colin, Ryan and Wayne are jungle explorers, trapped on a remote island and they must get back to their boat.",
			lines: [
				{
					name: "Wayne Brady",
					lines: ["What's wrong with that?", "Not me?"],
				},
				{
					name: "Ryan Stiles",
					lines: ["What's that smell", "Do you want some of this?"],
				},
			],
		},
		{
			name: "Scenes from a Hat",
			alternateName: "Scenes From a Hat",
			scenes: [
				"Unlikely things for a priest to say",
				"Outtakes from the Winter Olympics",
				"Weird questions to find on an exam paper",
				"Things you can say about your plumber that you can't say to your spouse",
				'Using the word "boing", demsonstate bad times for Viagra to kick in',
				"People you wouldn't want to go on a long road trip with",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Florida_",
			songs: [
				{
					style: "Marine Marching Chant",
					title: "Squeeze That Juice",
				},
				{
					style: "Barry White and will.i.am",
					title: "I Sunk My Entire Life Savings Into This Theme Park",
				},
			],
		},
	],
};
