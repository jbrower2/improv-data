import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Chip Esten"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_6-08",
	airdate: "1994-08-19",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Chip Esten", "Ryan Stiles", "Tony Slattery"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Invitations you'd never accept",
				"If the planet was made of toothpaste",
				"Rejected proverbs",
				"Practical jokes in a monastery",
				"Twenty-four hours from Tulsa",
				"What Hell looks like",
				"Sea shanties that never caught on",
				"If undertakers were like waiters",
			],
		},
		{
			name: "Superheroes",
			crisis: "Trapped in a bank vault",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Termite Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Kid Kangaroo",
				},
				{
					name: "Chip Esten",
					superpower: "Kleptomaniac Boy",
				},
				{
					name: "Tony Slattery",
					superpower: "Captain Thinks He's Invisible",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Chip Esten"],
			musicians: ["Richard Vranch"],
			about: "Alison, a court clerk",
			styles: ["Broadway love song"],
		},
		{
			name: "Sound Effects",
			performers: ["Greg Proops", "Ryan Stiles", "Tony Slattery"],
			sounds:
				'(Recorded sound effects, similar to "[Scene to Music](https://whoselineisitanyway.fandom.com/wiki/Scene_to_Music)")',
			scene: "Onboard a submarine",
		},
		{
			name: "News Report",
			interviewer: "Greg Proops",
			expert: "Tony Slattery",
			reporter: "Chip Esten",
			variousCharacters: "Ryan Stiles",
			topic: "Noah in Australia",
		},
		{
			name: "Film Dub",
			performers: ["Greg Proops", "Ryan Stiles", "Tony Slattery"],
			scene:
				"Greg and Tony are on a date, and Ryan is a father coming home early or surprising them",
			film: '_Stingray_ ep.6 "Set Sail for Adventure" (8 November 1964)',
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Chip Esten",
					quirk: "Writes advertising jingles",
				},
				{
					name: "Greg Proops",
					quirk: "Vacuum cleaner",
				},
				{
					name: "Ryan Stiles",
					quirk: "A sperm",
				},
			],
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit Lie Down",
			performers: ["Greg Proops", "Ryan Stiles", "Tony Slattery"],
			scene:
				"Tony is coming to a department store to buy a bed, Greg is a salesman and Ryan is the manager",
		},
		{
			name: "Bartender",
			alternateName: "Bar Scene",
			bartender: "Chip Esten",
			musicians: ["Richard Vranch"],
			performers: [
				{
					name: "Greg Proops",
					quirk: "Drinking to forget his tax demand",
				},
				{
					name: "Ryan Stiles",
					quirk: "In love with his dog",
				},
				{
					name: "Tony Slattery",
					quirk: "Angry about his clothing",
				},
			],
		},
	],
};
