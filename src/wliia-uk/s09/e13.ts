import { type Episode } from "../../types/episode";

export const e13: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Stephen Frost"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-13",
	airdate: "1997-10-02",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Stephen Frost", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Two men in a weather research station in the Antarctic and one of them notices the other has started acting oddly",
			styles: [
				"_Star Wars_",
				"Roman epic",
				"_The Muppets_",
				"_Reservoir Dogs_",
				"World War II weepy",
				"_Dirty Harry_",
			],
		},
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Stephen Frost",
					quirk: "Scottish clan leader",
				},
				{
					name: "Colin Mochrie",
					quirk: "Has a death-wish",
				},
				{
					name: "Ryan Stiles",
					quirk: "Desperately trying to get aroused",
				},
			],
		},
		{
			name: "Hey, You Down There!",
			narrator: "Greg Proops",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			topic: "Learning to scuba dive",
		},
		{
			name: "Hats",
			topic: "World's worst dating agency video",
		},
		{
			name: "Number of Words",
			scene:
				"There are rumblings of mutiny on the _Bounty_, Fletcher Christian is Ryan and the ship's cook is Colin and they're on deck, and the other two are going to come on eventually as Captain Bligh, who is Stephen, and a Polynesian maiden, who is Greg",
			performers: [
				{
					name: "Colin Mochrie",
					words: 4,
				},
				{
					name: "Stephen Frost",
					words: 3,
				},
				{
					name: "Ryan Stiles",
					words: 2,
				},
				{
					name: "Greg Proops",
					words: 1,
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Greg Proops", "Colin Mochrie"],
			fieldReporter: "Ryan Stiles",
			onTheGreenScreen: "Rhinos mating",
		},
		{
			name: "Addicts Anonymous",
			host: "Greg Proops",
			addictedTo: "Wrestling",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about: "[Golf](https://whoselineisitanyway.fandom.com/wiki/Golf_Hoedown)",
		},
	],
};
