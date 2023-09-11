import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Clive Anderson"
	| "Sam Johnson"
	| "Jane Brucker"
	| "Ryan Stiles"
	| "Chip Esten"
	| "Richard Vranch"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_4-10",
	airdate: "1992-03-28",
	host: "Clive Anderson",
	performers: ["Sam Johnson", "Jane Brucker", "Ryan Stiles", "Chip Esten"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"You're both stuck in quicksand",
				"Things you must not do near electricity",
				"The men who created Velcro",
				"Arriving at the wrong place",
				"A reunion for air stewards and stewardesses",
				"The last woman on Earth",
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Ryan Stiles", "Sam Johnson"],
			scene: "Ryan's hijacking Sam's plane",
			styles: [
				"Silent movie",
				"Muppets",
				"Interpretive dance",
				"Bruce Lee",
				"Spaghetti western",
			],
		},
		{
			name: "Expert",
			interviewer: "Jane Brucker",
			expert: "Ryan Stiles",
			topic: "Mouldy bread",
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Sam Johnson"],
			scenes: ["Sam has gone to see a private eye"],
			lines: [
				"Will you marry me?",
				"Beef, lettuce, tomato, and hold the mayo",
				"Watch out, the floor has just been painted.",
				"Never trust sheep.",
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to be stuck in a lifeboat with"],
		},
		{
			name: "Props",
			pairs: [
				["Sam Johnson", "Chip Esten"],
				["Ryan Stiles", "Jane Brucker"],
			],
		},
		{
			name: "Backwards Scene",
			performers: ["Sam Johnson", "Ryan Stiles"],
			scene: "At a doctor's office",
			startLine: "Are you the proctologist?",
			endLine: "Are you done?",
		},
		{
			name: "Party Quirks",
			host: "Sam Johnson",
			guests: [
				{
					name: "Jane Brucker",
					quirk: "TV aerobics instructor",
				},
				{
					name: "Chip Esten",
					quirk: "Miss World contestant",
				},
				{
					name: "Ryan Stiles",
					quirk: "Thinks he is a dog on heat",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Chip Esten",
				{
					body: "Ryan Stiles",
					hands: "Sam Johnson",
				},
			],
			scene: "Chip has gone to be taught something about first aid",
		},
		{
			name: "Hoedown",
			about:
				"[Sex change](https://whoselineisitanyway.fandom.com/wiki/Sex_Change_Hoedown)",
			musicians: ["Richard Vranch"],
		},
	],
};
