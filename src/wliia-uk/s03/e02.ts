import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Mark Cohen"
	| "Tony Slattery"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-02",
	airdate: "1991-01-25",
	host: "Clive Anderson",
	performers: ["Josie Lawrence", "Mark Cohen", "Tony Slattery", "Mike McShane"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			groups: [
				{
					performers: ["Josie Lawrence", "Tony Slattery"],
					scene: "In a butcher shop",
					styles: ["_Star Trek_ movies", "Disney", "Pantomime", "Gangster"],
				},
				{
					performers: ["Mark Cohen", "Mike McShane"],
					scene: "Meeting on the first day of camp",
					styles: ["Martial arts", "Laurel & Hardy", "Tragedy"],
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Mike McShane", "Mark Cohen"],
				["Tony Slattery", "Josie Lawrence"],
			],
		},
		{
			name: "American Musical",
			musician: "Richard Vranch",
			about:
				"A doctor, Birth of children, Attack of mumps, and Travel around the world",
		},
		{
			name: "World's Worst",
			scenes: ["Entertainment act"],
		},
		{
			name: "Duet",
			singers: ["Josie Lawrence", "Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "A dentist",
			styles: ["Blues"],
		},
		{
			name: "Film Dub",
			performers: ["Tony Slattery", "Mark Cohen"],
			scene: "Asking for the daughter's hand in marriage",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Mark Cohen",
					quirk: "5 second memory",
				},
				{
					name: "Josie Lawrence",
					quirk: "Little Red Riding Hood",
				},
				{
					name: "Mike McShane",
					quirk: "Hell's Angel",
				},
			],
		},
		{
			name: "Gospel",
			musician: "Richard Vranch",
			about: "Trainspotting",
		},
	],
};
