import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Clive Anderson"
	| "Archie Hahn"
	| "Josie Lawrence"
	| "Tony Slattery"
	| "John Sessions"
	| "Richard Vranch"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-02",
	airdate: "1989-11-17",
	host: "Clive Anderson",
	performers: [
		"Archie Hahn",
		"Josie Lawrence",
		"Tony Slattery",
		"John Sessions",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_Sheep-Rearing in the Orkney Islands_",
			performers: [
				{
					name: "Archie Hahn",
					author: "Mickey Spillane",
				},
				{
					name: "Josie Lawrence",
					author: "Lewis Carroll",
				},
				{
					name: "Tony Slattery",
					author: "The type of person who mistranslates European pornography",
				},
				{
					name: "John Sessions",
					author: "The Liverpool poets",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Tony Slattery", "Josie Lawrence"],
					scene: "A patient going to see a doctor",
					styles: ["Surrealist", "Epic film", "Greek tragedy", "Cartoon"],
				},
				{
					performers: ["John Sessions", "Archie Hahn"],
					scene: "Complaining to a waiter",
					styles: ["Disney wildlife", "American soap opera"],
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to be an entertainer at a children's party"],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Tony Slattery"],
			soundPerformers: ["Archie Hahn"],
			scene: "Sweeping up and cleaning up",
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence", "John Sessions"],
			musicians: ["Richard Vranch"],
			about: "Ironing board",
			styles: ["Reggae (Josie)", "Leonard Cohen (John)"],
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "Thinks she is a man",
				},
				{
					name: "Archie Hahn",
					quirk: "TV evangelist",
				},
				{
					name: "John Sessions",
					quirk: "Astronaut",
				},
			],
		},
	],
};
