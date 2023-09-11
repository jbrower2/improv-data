import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Aisha Tyler"
	| "Ryan Stiles"
	| "Colin Mochrie"
	| "Wayne Brady"
	| "Keegan-Michael Key"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-03",
	airdate: "2015-05-01",
	host: "Aisha Tyler",
	performers: [
		"Ryan Stiles",
		"Colin Mochrie",
		"Wayne Brady",
		"Keegan-Michael Key",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Drama erupts at a big family reunion",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Keegan-Michael Key"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Mostly sexy people, mostly at the beach",
		},
		{
			name: "Old Job, New Job",
			scene:
				"In a hospital, Wayne is a young woman about to give birth and Keegan is her nervous husband, the doctor, Ryan, and the midwife, Colin enter",
			oldJob: "Ryan and Colin used to be Vegas entertainers",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely things to read in a children's book",
				"Unlikely lines from a James Bond movie",
				"Products that shouldn't be advertised in a sexy way",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of New Orleans_",
			songs: [
				{
					style: "Irish rock",
					title: "Beads for Boobs",
				},
				{
					style: "Stadium rock with the mic going in and out",
					title: "I'm Eating My Way Through a Broken Heart",
				},
			],
		},
	],
};
