import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Ryan Stiles"
	| "Christopher Smith"
	| "Jim Meskimen"
	| "Richard Vranch"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-10",
	airdate: "1991-03-22",
	host: "Clive Anderson",
	performers: [
		"Josie Lawrence",
		"Ryan Stiles",
		"Christopher Smith",
		"Jim Meskimen",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Ryan Stiles", "Josie Lawrence"],
					scene: "Josie's driven up to what we call a gas station in America",
					styles: ["Horror", "Silent movie", "Porn movie", "Melodrama"],
				},
				{
					performers: ["Christopher Smith", "Jim Meskimen"],
					scene: "Trying to hire a private detective",
					styles: [
						"Abbott & Costello",
						"James Bond",
						"Bugs Bunny meets Jimmy Stewart",
					],
				},
			],
		},
		{
			name: "Expert",
			interviewer: "Josie Lawrence",
			expert: "Ryan Stiles",
			topic: "Watermelons",
		},
		{
			name: "Interview",
			alternateName: "Book Writer",
			interviews: [
				{
					interviewer: "Christopher Smith",
					style: "Book of the week",
					name: "Jim Meskimen",
					character: "Author of a book about rodents",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence", "Jim Meskimen"],
			musicians: ["Richard Vranch"],
			about: "Spatula",
			styles: ["Jazz (Josie)", "Sting (Jim)"],
		},
		{
			name: "Explanations",
			performers: ["Christopher Smith", "Jim Meskimen"],
			style: "Mr. Spock and Captain Kirk",
			topic: "How to fix a toaster",
		},
		{
			name: "Party Quirks",
			host: "Christopher Smith",
			guests: [
				{
					name: "Jim Meskimen",
					quirk: "Tough Wall Street businessman",
				},
				{
					name: "Josie Lawrence",
					quirk: "Searching for buried treasure",
				},
				{
					name: "Ryan Stiles",
					quirk: "Astronaut on the moon",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Christopher Smith",
				{
					body: "Ryan Stiles",
					hands: "Jim Meskimen",
				},
			],
			scene: "A visit to the dentist",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Stone carving](https://whoselineisitanyway.fandom.com/wiki/Stone_Carving_Hoedown)",
		},
	],
};
