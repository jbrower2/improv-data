import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Clive Anderson"
	| "Archie Hahn"
	| "Josie Lawrence"
	| "Paul Merton"
	| "John Sessions"
	| "Richard Vranch"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_1-01",
	airdate: "1988-09-23",
	host: "Clive Anderson",
	performers: ["Archie Hahn", "Josie Lawrence", "Paul Merton", "John Sessions"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_Through the Garden Gate_",
			performers: [
				{
					name: "Archie Hahn",
					author: "Stephen King",
				},
				{
					name: "Josie Lawrence",
					author: "Louisa M. Alcott",
				},
				{
					name: "Paul Merton",
					author: "The person who writes the _Janet and John_ books",
				},
				{
					name: "John Sessions",
					author: "Charles Dickens",
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Paul Merton"],
			soundPerformers: ["Archie Hahn"],
			scene: "Getting dressed",
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence", "John Sessions"],
			musicians: ["Richard Vranch"],
			about: "Telephone",
			styles: ["Sondheim (Josie)", "Reggae (John)"],
		},
		{
			name: "World's Worst",
			scenes: ["People auditioning for ITN newsreader"],
		},
		{
			name: "Props",
			pairs: [
				["Josie Lawrence", "Archie Hahn"],
				["John Sessions", "Paul Merton"],
			],
		},
		{
			name: "Party Quirks",
			host: "Paul Merton",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "Agony Aunt",
				},
				{
					name: "Archie Hahn",
					quirk: "Werewolf",
				},
				{
					name: "John Sessions",
					quirk: "Theatre director",
				},
			],
		},
	],
};
