import { type Episode } from "../../types/episode.js";

export const e03: Episode<
	| "Clive Anderson"
	| "Ron West"
	| "Griff Rhys Jones"
	| "Paul Merton"
	| "John Sessions"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-03",
	airdate: "1989-11-24",
	host: "Clive Anderson",
	performers: ["Ron West", "Griff Rhys Jones", "Paul Merton", "John Sessions"],
	games: [
		{
			name: "Authors",
			title: "_An Englishman and an Australian batsman meet Captain Pugwash_",
			performers: [
				{
					name: "Ron West",
					author: "William Goldman",
				},
				{
					name: "Griff Rhys Jones",
					author: "Edward Lear",
				},
				{
					name: "Paul Merton",
					author: "Nostradamus",
				},
				{
					name: "John Sessions",
					author: "Philip Larkin",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["John Sessions", "Griff Rhys Jones"],
					scene: "The two last people on Earth",
					styles: ["Noel Coward", "Spaghetti western", "Silent movie"],
				},
				{
					performers: ["Ron West", "Paul Merton"],
					scene: "In a joke shop",
					styles: ["Andy Warhol", "_Rocky 20_", "_Tom & Jerry_", "Horror"],
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Entertainment act"],
		},
		{
			name: "Props",
			pairs: [
				["John Sessions", "Paul Merton"],
				["Ron West", "Griff Rhys Jones"],
			],
		},
		{
			name: "Remote Control",
			topic: "Wildlife",
			performers: [
				{
					name: "Ron West",
					quirk: "_The Twilight Zone_",
				},
				{
					name: "Griff Rhys Jones",
					quirk: "_In at the Deep End_",
				},
				{
					name: "Paul Merton",
					quirk: "_Points of View_",
				},
				{
					name: "John Sessions",
					quirk: "_Tutti Frutti_",
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Ron West",
			guests: [
				{
					name: "Paul Merton",
					quirk: "Must name a fish in every sentence",
				},
				{
					name: "Griff Rhys Jones",
					quirk: "Slowly turning into a dog",
				},
				{
					name: "John Sessions",
					quirk: "Bavarian folk dancer",
				},
			],
		},
	],
};
