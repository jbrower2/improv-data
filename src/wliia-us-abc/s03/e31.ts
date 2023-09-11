import { type Episode } from "../../types/episode";

export const e31: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anne King"
> = {
	number: 31,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-31",
	airdate: "2001-04-27",
	productionNumber: "296722-332",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
	games: [
		{
			name: "Superheroes",
			crisis: "Out of doughnuts",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Imaginary Friend Boy",
				},
				{
					name: "Ryan Stiles",
					superpower: "Break-Up and Make-Up Kid",
				},
				{
					name: "Colin Mochrie",
					superpower: "The Overly-Sensitive Kid",
				},
				{
					name: "Wayne Brady",
					superpower: "Matrix Boy",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
			about: "Robin, a candy girl",
			styles: ["Louis Armstrong"],
		},
		{
			name: "Improbable Mission",
			agents: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Greg Proops",
			mission:
				"Mow the lawn (of the White House before the Grand Duke of... Hardtopronouncia comes to play croquet with the Vice President)",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If you could fast forward in real life",
				"How today's issues would be handled on _The Brady Bunch_",
				"Improper etiquette when meeting the Queen (of England, I'm guessing)",
				"The good news and the bad news",
				"Pull the string on the Drew Carey doll, and it says",
				"Announcements that will cause this audience to go wild",
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Rock star](https://whoselineisitanyway.fandom.com/wiki/Rock_Star_Hoedown_(US_3-31))",
		},
	],
};
