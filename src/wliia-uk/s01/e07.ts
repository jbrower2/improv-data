import { type Episode } from "../../types/episode.js";

export const e07: Episode<
	| "Clive Anderson"
	| "Tony Slattery"
	| "Jonathan Pryce"
	| "Rory McGrath"
	| "John Sessions"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_1-07",
	airdate: "1988-11-04",
	host: "Clive Anderson",
	performers: [
		"Tony Slattery",
		"Jonathan Pryce",
		"Rory McGrath",
		"John Sessions",
	],
	games: [
		{
			name: "Authors",
			title: "_Stanley the Stock Broker and the Day of the Big Bang_",
			performers: [
				{
					name: "Tony Slattery",
					author: "The black magic author, Dennis Wheatley",
				},
				{
					name: "Jonathan Pryce",
					author: "Egon Ronay",
				},
				{
					name: "Rory McGrath",
					author: "Jorge Luis Borges",
				},
				{
					name: "John Sessions",
					author: "Robert Louis Stevenson",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Tony Slattery", "Jonathan Pryce"],
					scene: "A loan shark and the debtor",
					styles: [
						"Japanese Noh theater",
						"Bedroom farce",
						"Amateur dramaticals",
						"Gilbert",
						"Sullivan",
					],
				},
				{
					performers: ["Rory McGrath", "John Sessions"],
					scene: "Smashed into the car of the chief constable",
					styles: [
						"Punch & Judy",
						"Brechtian",
						"_Black & White Minstrel Show_",
					],
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to meet on a blind date"],
		},
		{
			name: "Props",
			pairs: [
				["John Sessions", "Jonathan Pryce"],
				["Rory McGrath", "Tony Slattery"],
			],
		},
		{
			name: "Advertisement to Music",
			performers: [
				{
					name: "Tony Slattery",
					product: "BMW",
				},
				{
					name: "John Sessions",
					product: "Toupee",
				},
			],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Rory McGrath", "Jonathan Pryce"],
			scene: "Somebody complaining in a hotel",
		},
		{
			name: "Remote Control",
			topic: "Pornography",
			performers: [
				{
					name: "Tony Slattery",
					quirk: "_Star Trek_",
				},
				{
					name: "Jonathan Pryce",
					quirk: "_Call My Bluff_",
				},
				{
					name: "Rory McGrath",
					quirk: "Breakfast television",
				},
				{
					name: "John Sessions",
					quirk: "_Bilko_",
				},
			],
		},
	],
};
