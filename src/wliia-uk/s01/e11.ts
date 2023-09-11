import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Paul Merton"
	| "John Sessions"
	| "Archie Hahn"
	| "Jonathan Pryce"
	| "Tony Slattery"
	| "Mike McShane"
	| "Stephen Fry"
	| "Richard Vranch"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_1-11",
	airdate: "1988-12-02",
	host: "Clive Anderson",
	performers: [
		"Josie Lawrence",
		"Paul Merton",
		"John Sessions",
		"Archie Hahn",
		"Jonathan Pryce",
		"Tony Slattery",
		"Mike McShane",
		"Stephen Fry",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Josie Lawrence", "Paul Merton"],
					scene: "Returning a faulty purchase",
					styles: [
						"German expressionism",
						"Hammer horror",
						"Whitehall farce",
						"Disney",
					],
				},
				{
					performers: ["John Sessions", "Archie Hahn"],
					scene:
						"A jealous husband coming home and discovering the other man with a lover",
					styles: ["A _Rambo_ movie", "Greek tragedy", "_Kung Fu_"],
				},
			],
		},
		{
			name: "Every Other Line",
			performers: ["Jonathan Pryce", "Paul Merton"],
			play: "_Robin Hood: The Truth Behind the Green Tights_",
			scene: "Having a TV fixed",
			endLine: "It's only cotton wool.",
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Toothbrush",
			styles: ["Gospel"],
		},
		{
			name: "Props",
			pairs: [
				["Mike McShane", "John Sessions"],
				["Tony Slattery", "Josie Lawrence"],
			],
		},
		{
			name: "Film Dub",
			performers: ["Stephen Fry", "Josie Lawrence"],
			scene: "A couple discussing how to decorate a room",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "Hears voices",
				},
				{
					name: "Mike McShane",
					quirk: "Kissogram",
				},
				{
					name: "John Sessions",
					quirk: "Cub Scout leader",
				},
			],
		},
		{
			name: "Opera",
			performers: [
				"John Sessions",
				"Josie Lawrence",
				"Paul Merton",
				"Archie Hahn",
			],
			musician: "Richard Vranch",
			about:
				"Going to work as a guard on the Northern Line, Making instant mashed potato, and Smoking",
		},
	],
};
