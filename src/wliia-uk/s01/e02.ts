import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Clive Anderson"
	| "Archie Hahn"
	| "Rory Bremner"
	| "Jimmy Mulville"
	| "John Sessions"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_1-02",
	airdate: "1988-09-30",
	host: "Clive Anderson",
	performers: [
		"Archie Hahn",
		"Rory Bremner",
		"Jimmy Mulville",
		"John Sessions",
	],
	games: [
		{
			name: "Authors",
			title: "_A Day at the Seaside_",
			performers: [
				{
					name: "Archie Hahn",
					author: "Truman Capote",
				},
				{
					name: "Rory Bremner",
					author: "Clive James",
				},
				{
					name: "Jimmy Mulville",
					author: "Dylan Thomas",
				},
				{
					name: "John Sessions",
					author: "James Joyce",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			groups: [
				{
					performers: ["Archie Hahn", "Jimmy Mulville"],
					scene: "Sacking an employee",
					styles: ["_The Godfather_", "Australian soap", "Horror"],
				},
				{
					performers: ["John Sessions", "Rory Bremner"],
					scene: "A used car salesman",
					styles: [
						"Amateur dramaticals",
						"Brazilian soap opera",
						"Noël Coward",
					],
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to comfort somebody on their death bed"],
		},
		{
			name: "Props",
			pairs: [
				["Jimmy Mulville", "Rory Bremner"],
				["John Sessions", "Archie Hahn"],
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Jimmy Mulville"],
			soundPerformers: ["Archie Hahn"],
			scene: "Mowing the lawn",
		},
		{
			name: "Couples",
			performers: ["Rory Bremner", "John Sessions"],
			scene: "Two people in a laundrette",
			couples: [
				"David and Richard Attenborough",
				"Charles and Diana",
				"Mel and Griff",
				"Ron and Nancy",
				"Torvill and Dean",
			],
		},
	],
};
