import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Russell Fletcher"
	| "Ryan Stiles"
	| "Josie Lawrence"
	| "Richard Vranch"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_5-02",
	airdate: "1993-03-12",
	host: "Clive Anderson",
	performers: [
		"Greg Proops",
		"Russell Fletcher",
		"Ryan Stiles",
		"Josie Lawrence",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Greg Proops", "Ryan Stiles"],
					scene:
						"Two people on a space station, and there're some repairs going on",
					styles: [
						"Spider-Man",
						"Restoration comedy",
						"Escape movie",
						"Courtroom drama",
					],
				},
				{
					performers: ["Josie Lawrence", "Russell Fletcher"],
					scene: "Two people camping in the Australian outback",
					styles: [
						"Australian soap",
						"Spaghetti western",
						"Home movie",
						"_Tarzan_",
					],
				},
			],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Ryan Stiles", "Josie Lawrence", "Greg Proops"],
			film: "Gleem commercial (1965)",
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Strimmer",
			styles: ["Irish jig"],
		},
		{
			name: "World's Worst",
			scenes: ["Thing to say or do before or during sex"],
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Standing Sitting Bending",
			performers: ["Greg Proops", "Ryan Stiles", "Russell Fletcher"],
			scene: "At the estate agent's office",
		},
		{
			name: "Scene to Music",
			performers: ["Ryan Stiles", "Josie Lawrence"],
			scene: "Going to a lost property office",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Russell Fletcher",
					quirk: "Sheep shearer",
				},
				{
					name: "Josie Lawrence",
					quirk: "Thinks she's a cat",
				},
				{
					name: "Ryan Stiles",
					quirk: "Ice hockey player",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Josie Lawrence",
				{
					body: "Ryan Stiles",
					hands: "Greg Proops",
				},
			],
			scene:
				"Josie is going to Ryan for a date, and he's going to try to propose",
		},
		{
			name: "Hoedown",
			about:
				"[Hairdressers](https://whoselineisitanyway.fandom.com/wiki/Hairdressers_Hoedown)",
			musicians: ["Richard Vranch"],
		},
	],
};
