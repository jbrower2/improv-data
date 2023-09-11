import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Jonathan Pryce"
	| "Paul Merton"
	| "John Sessions"
	| "Richard Vranch"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_1-05",
	airdate: "1988-10-21",
	host: "Clive Anderson",
	performers: [
		"Josie Lawrence",
		"Jonathan Pryce",
		"Paul Merton",
		"John Sessions",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_A Day in the Life of a Horny Llama_",
			performers: [
				{
					name: "Josie Lawrence",
					author: "Agatha Christie",
				},
				{
					name: "Jonathan Pryce",
					author: "King James",
				},
				{
					name: "Paul Merton",
					author: "_The Do-It-Yourself Technical Handbook_",
				},
				{
					name: "John Sessions",
					author: "Gabriel Garcia Marquez",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Paul Merton", "Josie Lawrence"],
					scene: "Jack and Jill",
					styles: [
						"Spaghetti western",
						"Pantomime",
						"German art film",
						"Bond film",
					],
				},
				{
					performers: ["John Sessions", "Jonathan Pryce"],
					scene: "Reporting a crime",
					styles: [
						"Samuel Beckett",
						"Pirate movie",
						"Commedia dell'arte",
						"Le Carré",
					],
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["People to be auditioning for a part in _Romeo and Juliet_"],
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence", "John Sessions"],
			musicians: ["Richard Vranch"],
			about: "Television set",
			styles: ["Heavy metal (Josie)", "Folk (John)"],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Jonathan Pryce", "Paul Merton"],
			scene: "Booking a holiday",
			film: "_Plan 9 from Outer Space_",
		},
		{
			name: "Party Quirks",
			host: "Paul Merton",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "Super-hero",
				},
				{
					name: "Jonathan Pryce",
					quirk: "An exorcist",
				},
				{
					name: "John Sessions",
					quirk: "Thinks he is underwater",
				},
			],
		},
	],
};
