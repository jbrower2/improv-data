import { type Episode } from "../../types/episode";

export const e13: Episode<
	| "Clive Anderson"
	| "Christopher Smith"
	| "Sandi Toksvig"
	| "Jim Meskimen"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-13",
	airdate: "1991-04-12",
	host: "Clive Anderson",
	performers: [
		"Christopher Smith",
		"Sandi Toksvig",
		"Jim Meskimen",
		"Mike McShane",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_Maidens in the Mist_",
			performers: [
				{
					name: "Christopher Smith",
					author: "Sporting memoirs",
				},
				{
					name: "Sandi Toksvig",
					author: "Agatha Christie",
				},
				{
					name: "Jim Meskimen",
					author: "Tom Clancy",
				},
				{
					name: "Mike McShane",
					author: "Edgar Rice Burroughs",
				},
			],
		},
		{
			name: "Explanations",
			performers: ["Christopher Smith", "Jim Meskimen"],
			topic: "How to fix a faucet",
			style: "The Marx Brothers",
		},
		{
			name: "Film Dub",
			performers: ["Sandi Toksvig", "Mike McShane"],
			scene: "Coming home from the supermarket",
			film: "_Thunderbirds_ episode 19 (13 January 1966)",
		},
		{
			name: "Song Styles",
			singers: ["Jim Meskimen", "Christopher Smith"],
			musicians: ["Richard Vranch"],
			about: "Microwave",
			styles: ["Frank Sinatra (Jim)", "Opera (Christopher)"],
		},
		{
			name: "Party Quirks",
			host: "Sandi Toksvig",
			guests: [
				{
					name: "Christopher Smith",
					quirk: "Politician",
				},
				{
					name: "Jim Meskimen",
					quirk: "Old timer",
				},
				{
					name: "Mike McShane",
					quirk: "Zoo-keeper",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			groups: [
				{
					performers: ["Jim Meskimen", "Christopher Smith"],
					scene: "Boss of a corporation having to let one of his people go",
					styles: ["Martial arts film", "Blaxploitation", "Bergman", "Western"],
				},
				{
					performers: ["Sandi Toksvig", "Mike McShane"],
					scene: "Visiting in prison",
					styles: ["Science fiction", "Horror film", "Bugs Bunny", "_Rambo_"],
				},
			],
		},
		{
			name: "Gospel",
			musician: "Richard Vranch",
			about: "Bus drivers",
		},
	],
};
