import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Archie Hahn"
	| "Ryan Stiles"
	| "Chip Esten"
	| "Richard Vranch"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_4-08",
	airdate: "1992-03-14",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Archie Hahn", "Ryan Stiles", "Chip Esten"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Arguing over the tip",
				"What else did Noah take with him on the ark?",
				"Phone interrupts love-making",
				"Convention of cat lovers",
				"Two scuba divers making love and out of air at forty feet below",
				"The last words of a sewer cleaner",
				"The original and disastrous poses for the _Mona Lisa_",
				"A pointless way to die",
				"Paranoid football players",
			],
		},
		{
			name: "Alphabet",
			performers: ["Greg Proops", "Ryan Stiles"],
			scene: "Greg is trying to buy an airline ticket in a hurry",
			startingLetter: "F",
		},
		{
			name: "Song Styles",
			singers: ["Chip Esten"],
			musicians: ["Richard Vranch"],
			about: "Yvette, a receptionist",
			styles: ["Reggae"],
		},
		{
			name: "Party Quirks",
			host: "Chip Esten",
			guests: [
				{
					name: "Archie Hahn",
					quirk: "He thinks he has been shipwrecked",
				},
				{
					name: "Greg Proops",
					quirk: "Elevator operator",
				},
				{
					name: "Ryan Stiles",
					quirk: "Champion wrestler",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to be a parent"],
		},
		{
			name: "Bartender",
			bartender: "Chip Esten",
			musicians: ["Richard Vranch"],
			performers: [
				{
					name: "Greg Proops",
					quirk: "Angry about no toilet paper in the bathroom",
				},
				{
					name: "Ryan Stiles",
					quirk: "Has bunions on his feet",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Greg Proops"],
				["Archie Hahn", "Chip Esten"],
			],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Ryan Stiles", "Archie Hahn"],
			scene: "Boss trying to get his secretary to make him a drink",
		},
		{
			name: "Helping Hands",
			performers: [
				"Greg Proops",
				{
					body: "Ryan Stiles",
					hands: "Archie Hahn",
				},
			],
			scene: "Greg is a child who's gone to see an entertainer",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Doing the laundry](https://whoselineisitanyway.fandom.com/wiki/Doing_the_Laundry_Hoedown)",
		},
	],
};
