import { type Episode } from "../../types/episode.js";

export const e03: Episode<
	| "Clive Anderson"
	| "Mike McShane"
	| "Sandi Toksvig"
	| "Paul Merton"
	| "Jim Sweeney"
	| "Richard Vranch"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-03",
	airdate: "1991-02-01",
	host: "Clive Anderson",
	performers: ["Mike McShane", "Sandi Toksvig", "Paul Merton", "Jim Sweeney"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Mike McShane", "Sandi Toksvig"],
					scene: "Two strangers in adjoining hotel rooms",
					styles: ["Medical", "Traditional Japanese", "Courtroom drama"],
				},
			],
		},
		{
			name: "Alphabet",
			performers: ["Paul Merton", "Jim Sweeney"],
			scene: "One is caught in quicksand",
			startingLetter: "P",
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "Mouldy tomato",
			styles: ["Calypso"],
		},
		{
			name: "Expert Translation",
			alternateName: "Translation",
			expert: "Sandi Toksvig",
			translator: "Paul Merton",
			language: "Outer Mongolian",
			topic: "Yak and Lavatory",
		},
		{
			name: "March",
			musician: "Richard Vranch",
			about: "Hang gliding",
		},
		{
			name: "Props",
			pairs: [
				["Mike McShane", "Paul Merton"],
				["Sandi Toksvig", "Jim Sweeney"],
			],
		},
		{
			name: "News Report",
			interviewer: "Sandi Toksvig",
			expert: "Paul Merton",
			reporter: "Jim Sweeney",
			variousCharacters: "Mike McShane",
			topic: "Humpty Dumpty",
		},
		{
			name: "Helping Hands",
			performers: [
				"Paul Merton",
				{
					body: "Jim Sweeney",
					hands: "Sandi Toksvig",
				},
			],
			scene: "A patient going to see a doctor",
		},
		{
			name: "Musical Producers",
			producers: ["Paul Merton", "Sandi Toksvig"],
			singers: ["Jim Sweeney", "Mike McShane"],
			musician: "Richard Vranch",
			topics: ["Election of a Prime Minister"],
		},
	],
};
