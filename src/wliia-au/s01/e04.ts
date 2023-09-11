import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Tommy Little"
	| "Tegan Higginbotham"
	| "Tom Walker"
	| "Bridie Connell"
	| "Steen Raskopoulos"
	| "Fourplay with Judy"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/AU_Episode_1-04",
	airdate: "2016-12-18",
	host: "Tommy Little",
	performers: [
		"Tegan Higginbotham",
		"Tom Walker",
		"Bridie Connell",
		"Steen Raskopoulos",
	],
	musicians: [
		{
			name: "Fourplay with Judy",
			alternateName: "The Ass-less Chaps",
		},
	],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Pick-up lines used by fruit and vegetables",
				"What not to say at a parent-teacher interview",
			],
		},
		{
			name: "Dead Bodies",
			actor: "Tom Walker",
			bodies: ["Tegan Higginbotham", "Steen Raskopoulos", "Bridie Connell"],
			scene:
				"Tegan is a bank robber who takes Steen, a teller, hostage before a mysterious superhero, played by Bridie, bursts in to the rescue",
		},
		{
			name: "Quick Change",
			performers: ["Tegan Higginbotham", "Bridie Connell", "Steen Raskopoulos"],
			moderators: ["Tommy Little"],
			scene:
				"Tegan and Bridie are underage party-goers discussing tactics to gain entry to an exclusive nightclub, Steen enters as the no-nonsense bouncer to put a stop to their plans",
		},
		{
			name: "Bartender",
			bartender: "Bridie Connell",
			musicians: ["Fourplay with Judy"],
			performers: [
				{
					name: "Tegan Higginbotham",
					quirk: "Happy about muffins",
				},
				{
					name: "Tom Walker",
					quirk: "Sad about his settling payments being cut",
				},
				{
					name: "Steen Raskopoulos",
					quirk: "Stressed about having a kid",
				},
			],
		},
		{
			name: "Let's Make a Date",
			host: "Steen Raskopoulos",
			guests: [
				{
					name: "Bridie Connell",
					quirk: "A Miss Ireland contestant who screams every third word",
				},
				{
					name: "Tegan Higginbotham",
					quirk: "A nun with anger management issues",
				},
				{
					name: "Tom Walker",
					quirk: "Michael Caine at the book launch of his latest erotic novel",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Tour guide", "Neighbor", "Thing to bring to a funeral"],
		},
		{
			name: "Rock Out",
			musicians: "Fourplay with Judy",
			about: "Moisturizing every day",
		},
	],
};
