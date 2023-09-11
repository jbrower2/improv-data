import { type Episode } from "../../types/episode.js";

export const e07: Episode<
	| "Clive Anderson"
	| "Mike McShane"
	| "Paul Merton"
	| "Steve Steen"
	| "Jim Sweeney"
	| "Richard Vranch"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-07",
	airdate: "1991-03-01",
	host: "Clive Anderson",
	performers: ["Mike McShane", "Paul Merton", "Steve Steen", "Jim Sweeney"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Steve Steen", "Jim Sweeney"],
					scene: "Interviewing a suspect at the scene of a crime",
					styles: ["TV game show", "Gilbert & Sullivan", "TV advert"],
				},
				{
					performers: ["Mike McShane", "Paul Merton"],
					scene: "Giving each other presents",
					styles: ["Porno", "3D film", "Roman epic", "Public information film"],
				},
			],
		},
		{
			name: "News Report",
			interviewer: "Jim Sweeney",
			expert: "Mike McShane",
			reporter: "Paul Merton",
			variousCharacters: "Steve Steen",
			topic: "Baa Baa Black Sheep",
		},
		{
			name: "Expert Translation",
			alternateName: "Translation",
			expert: "Steve Steen",
			translator: "Paul Merton",
			language: "Albanian",
			topic: "Television",
		},
		{
			name: "Musical Film Review",
			reviewer: "Paul Merton",
			musician: "Richard Vranch",
			film: "_The First Man Into Space_",
		},
		{
			name: "Props",
			pairs: [
				["Mike McShane", "Paul Merton"],
				["Steve Steen", "Jim Sweeney"],
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Paul Merton",
				{
					body: "Jim Sweeney",
					hands: "Steve Steen",
				},
			],
			scene: "Paul is trying to get through Customs",
		},
		{
			name: "Party Quirks",
			host: "Paul Merton",
			guests: [
				{
					name: "Steve Steen",
					quirk: "Thinks he's Paul Merton",
				},
				{
					name: "Jim Sweeney",
					quirk: "Compulsive gambler",
				},
				{
					name: "Mike McShane",
					quirk: "U.S. sports commentator",
				},
			],
		},
		{
			name: "March",
			musician: "Richard Vranch",
			about: "Collecting typewriters",
		},
	],
};
