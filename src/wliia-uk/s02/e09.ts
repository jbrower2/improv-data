import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Clive Anderson"
	| "Archie Hahn"
	| "Jonathan Pryce"
	| "Paul Merton"
	| "John Sessions"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-09",
	airdate: "1990-01-12",
	host: "Clive Anderson",
	performers: ["Archie Hahn", "Jonathan Pryce", "Paul Merton", "John Sessions"],
	games: [
		{
			name: "Authors",
			title: "_Death of a Dog at the British Grand Prix_",
			performers: [
				{
					name: "Archie Hahn",
					author: "Alice Walker",
				},
				{
					name: "Jonathan Pryce",
					author: "The diaries of Noel Coward",
				},
				{
					name: "Paul Merton",
					author: "Sir Arthur Conan Doyle",
				},
				{
					name: "John Sessions",
					author: "J.R.R. Tolkien",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			groups: [
				{
					performers: ["John Sessions", "Jonathan Pryce"],
					scene: "Interrogating a prisoner",
					styles: ["Open university", "Chekov", "Science fiction B-movie"],
				},
				{
					performers: ["Archie Hahn", "Paul Merton"],
					scene: "Going to see an undertaker",
					styles: ["_Batman_", "_Thunderbirds_", "Pathé News"],
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["John Sessions", "Paul Merton"],
				["Archie Hahn", "Jonathan Pryce"],
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Paul Merton"],
			soundPerformers: ["Archie Hahn"],
			scene: "Starting a car",
		},
		{
			name: "Interview",
			interviews: [
				{
					interviewer: "Archie Hahn",
					style: "A hard-hitting documentary",
					name: "John Sessions",
					character: "Moses",
				},
			],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Jonathan Pryce", "Paul Merton"],
			scene: "In a supermarket",
		},
		{
			name: "Party Quirks",
			host: "Paul Merton",
			guests: [
				{
					name: "Archie Hahn",
					quirk: "Jealous lover",
				},
				{
					name: "Jonathan Pryce",
					quirk: "A pirate",
				},
				{
					name: "John Sessions",
					quirk: "Sumo wrestler",
				},
			],
		},
	],
};
