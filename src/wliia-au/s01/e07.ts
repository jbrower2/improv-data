import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Tommy Little"
	| "Steen Raskopoulos"
	| "Tom Walker"
	| "Bridie Connell"
	| "Rhys Darby"
	| "Fourplay with Judy"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/AU_Episode_1-07",
	airdate: "2017-01-22",
	host: "Tommy Little",
	performers: [
		"Steen Raskopoulos",
		"Tom Walker",
		"Bridie Connell",
		"Rhys Darby",
	],
	musicians: [
		{
			name: "Fourplay with Judy",
			alternateName: "The Horny Hobbits",
		},
	],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things not to say at a wedding",
				"Things you can say about your garden, but not your partner",
				"Animal pick-up lines",
			],
		},
		{
			name: "Quick Change",
			performers: ["Steen Raskopoulos", "Tom Walker", "Rhys Darby"],
			moderators: ["Tommy Little"],
			scene:
				"Steen is an artist painting a portrait of a fussy French king, Tom,  Rhys enters as a messenger with some bad news",
		},
		{
			name: "Hats",
			alternateName: "Dating Service",
		},
		{
			name: "What's in the Bag?",
			performers: ["Tom Walker", "Rhys Darby", "Bridie Connell"],
			scene:
				"Tom is a rich frequent-flyer in first class, and Rhys and Bridie are flight attendants trying to make him feel as comfortable as possible",
		},
		{
			name: "Bartender",
			bartender: "Bridie Connell",
			musicians: ["Fourplay with Judy"],
			performers: [
				{
					name: "Steen Raskopoulos",
					quirk: "Celebrating the fact that he is back on Tinder",
				},
				{
					name: "Tom Walker",
					quirk: "Frightened about teddy bears",
				},
				{
					name: "Rhys Darby",
					quirk: "Angry because his underwear is too tight",
				},
			],
		},
		{
			name: "Dubbing",
			performers: ["Rhys Darby", "Bridie Connell"],
			dubber: "Tom Walker",
			dubbed: "Steen Raskopoulos",
			scene:
				"Steen is a pompous banker trying to seduce supermodel, Bridie, and they are interrupted by Bridie's photographer boyfriend, Rhys",
		},
		{
			name: "Rock Out",
			musicians: "Fourplay with Judy",
			about: "The regret of eating cheese for breakfast",
		},
	],
};
