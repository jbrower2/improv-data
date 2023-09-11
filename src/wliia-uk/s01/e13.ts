import { type Episode } from "../../types/episode.js";

export const e13: Episode<
	| "Clive Anderson"
	| "Jon Glover"
	| "Jimmy Mulville"
	| "Josie Lawrence"
	| "John Sessions"
	| "Richard Vranch"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_1-13",
	airdate: "1988-12-16",
	host: "Clive Anderson",
	performers: [
		"Jon Glover",
		"Jimmy Mulville",
		"Josie Lawrence",
		"John Sessions",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_A Visit to the Dentist_",
			performers: [
				{
					name: "Jon Glover",
					author: "Daniel Defoe",
				},
				{
					name: "Jimmy Mulville",
					author: "Alexander Solzhenitsyn",
				},
				{
					name: "Josie Lawrence",
					author: "Jackie Collins",
				},
				{
					name: "John Sessions",
					author: "T. S. Eliot",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Genre Option",
			groups: [
				{
					performers: ["Jimmy Mulville", "Josie Lawrence"],
					scene: "~~Starting a relationship~~ Chat-up line",
					styles: ["Western", "Harold Pinter", "Horror", "Disney"],
				},
				{
					performers: ["Jon Glover", "John Sessions"],
					scene: "An estate agent showing a client around a property",
					styles: [
						"Restoration comedy",
						"Fire brigade training film",
						"_Star Trek_",
						"_Carry On_ film",
					],
				},
			],
		},
		{
			name: "Film Dub",
			performers: ["Jon Glover", "Jimmy Mulville"],
			film: "_The Phantom Empire_ (1935)",
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence", "John Sessions"],
			musicians: ["Richard Vranch"],
			about: "A washing machine",
			styles: ["Country & western (Josie)", "Musical (John)"],
		},
		{
			name: "Props",
			pairs: [
				["Josie Lawrence", "Jimmy Mulville"],
				["John Sessions", "John Sessions"],
			],
		},
		{
			name: "Opera",
			musician: "Richard Vranch",
			about: "Brushing your teeth, Missing a train, and Having a barbecue",
		},
	],
};
