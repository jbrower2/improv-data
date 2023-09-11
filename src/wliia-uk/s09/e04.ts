import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Stephen Fry"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-04",
	airdate: "1997-07-31",
	host: "Clive Anderson",
	performers: ["Josie Lawrence", "Stephen Fry", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["Scenes from ancient Rome"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Stephen Fry", "Josie Lawrence"],
			scene: "Josie's hijacking a plane and Stephen is the pilot",
			styles: [
				"_Prisoner: Cell Block H_",
				"_Bill & Ben_",
				"World War II movie",
				"American soap opera",
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "Looking for thrills at the fairground",
		},
		{
			name: "Number of Words",
			scene: "Reenacting the _Romeo and Juliet_ story",
			performers: [
				{
					name: "Ryan Stiles",
					quirk: "Romeo",
					words: 3,
				},
				{
					name: "Josie Lawrence",
					quirk: "Juliet",
					words: 4,
				},
				{
					name: "Stephen Fry",
					quirk: "Juliet's disapproving father",
					words: 6,
				},
				{
					name: "Colin Mochrie",
					quirk: "Stephen's wife, Lady Capulet",
					words: 2,
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["Josie Lawrence", "Stephen Fry"],
			],
		},
		{
			name: "Let's Make a Date",
			host: "Josie Lawrence",
			guests: [
				{
					name: "Stephen Fry",
					quirk: "Trendy vicar",
				},
				{
					name: "Colin Mochrie",
					quirk: "Hates everything English",
				},
				{
					name: "Ryan Stiles",
					quirk: "Is eating a tremendously hot curry",
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Josie Lawrence", "Ryan Stiles"],
			fieldReporter: "Stephen Fry",
			onTheGreenScreen: "_Konga_ (1961)",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Marital problems](https://whoselineisitanyway.fandom.com/wiki/Marital_Problems_Hoedown)",
		},
	],
};
