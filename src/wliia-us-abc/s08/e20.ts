import { type Episode } from "../../types/episode.js";

export const e20: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 20,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-20",
	airdate: "2007-12-15",
	productionNumber: "296751-8020",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Angry teen rebel from a 1950's movie",
				},
				{
					name: "Colin Mochrie",
					quirk: "Store owner doing his own low budget commercial",
				},
				{
					name: "Ryan Stiles",
					quirk: "Raised by wolves",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film Theater and Television Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Ryan is angry at Colin because they have been forced to make an emergency landing of their light aircraft in Bigfoot territory",
			styles: [
				"Soap opera",
				"Infomercial",
				"Horror film",
				"Football film",
				"Western",
			],
		},
		{
			name: "Quiz Show",
			alternateName: "Game Show",
			host: "Brad Sherwood",
			title: "_Pick the Cheese_",
		},
		{
			name: "Home Shopping",
			alternateName: "Shopping from Home",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			items: ["Three playing cards", "A drawer with no bottom", "One shoe"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"When beavers get lazy",
				"A magazine that you'd never see at a newsstand",
				"Ice fishing disasters",
				"Unlikely greeting card messages",
				"Lying about a stain at your dry cleaner's",
				"Tattoos you'll regret later",
				"Breakfast with the boneless family",
				"A bachelor's refrigerator",
				"What Bill Clinton's tombstone will say",
				"Looking at the ugliest baby you've ever seen",
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Vending machines](https://whoselineisitanyway.fandom.com/wiki/Vending_Machine_Hoedown)",
		},
	],
};
