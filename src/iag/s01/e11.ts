import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Drew Carey"
	| "Heather Anne Campbell"
	| "Jeff Davis"
	| "Chip Esten"
	| "Jonathan Mangum"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_11",
	airdate: "2011-04-25",
	host: "Drew Carey",
	performers: [
		"Heather Anne Campbell",
		"Jeff Davis",
		"Chip Esten",
		"Jonathan Mangum",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Tag",
			alternateName: "Freeze Tag",
			startingPositions: [
				{
					startingPosition: "Lotus",
					name: "Heather Anne Campbell",
				},
				{
					startingPosition: "Fetal",
					name: "Ryan Stiles",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Jonathan Mangum"],
			about: "Tammy, a retired nurse",
			styles: ["Rock ballad"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Drew Carey", "Jeff Davis"],
			moderators: ["Chip Esten"],
			scene: "Camping and gambling",
			styles: [
				"Romantic comedy",
				"Sci-fi",
				"MTV",
				"Australia",
				"Italy",
				"Shakespeare",
				"Western",
				"Three-",
				"Twelve-word sentences of Shakespeare",
			],
		},
		{
			name: "Two-Headed Expert",
			expert: ["Chip Esten", "Jonathan Mangum"],
			interviewer: ["Drew Carey", "Heather Anne Campbell"],
			scene: "At the Eiffel Tower",
		},
	],
};
