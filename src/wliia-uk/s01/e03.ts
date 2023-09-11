import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Clive Anderson"
	| "Stephen Fry"
	| "Peter Cook"
	| "Josie Lawrence"
	| "John Sessions"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_1-03",
	airdate: "1988-10-07",
	host: "Clive Anderson",
	performers: ["Stephen Fry", "Peter Cook", "Josie Lawrence", "John Sessions"],
	games: [
		{
			name: "Authors",
			title: "_A Day at the Races_",
			performers: [
				{
					name: "Stephen Fry",
					author: "John le Carré",
				},
				{
					name: "Peter Cook",
					author: "Albert Goldman",
				},
				{
					name: "Josie Lawrence",
					author: "Kind of people that write articles for women's magazines",
				},
				{
					name: "John Sessions",
					author: "Ernest Hemingway",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			groups: [
				{
					performers: ["Stephen Fry", "Peter Cook"],
					scene: "Parliamentary candidate going around canvassing for a vote",
					styles: ["Farce", "Travelogue", "Gangster movie"],
				},
				{
					performers: ["Josie Lawrence", "John Sessions"],
					scene: "Breaking up with a partner",
					styles: ["Shakespeare", "British war film", "Blue movie"],
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["John Sessions", "Peter Cook"],
				["Josie Lawrence", "Stephen Fry"],
			],
		},
		{
			name: "Panel",
			issue: "Smoking",
		},
		{
			name: "Rap",
			about: "Having a baby",
		},
	],
};
