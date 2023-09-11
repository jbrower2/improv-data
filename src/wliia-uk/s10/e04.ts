import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Clive Anderson"
	| "Patrick Bristow"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_10-04",
	airdate: "1998-05-13",
	host: "Clive Anderson",
	performers: [
		"Patrick Bristow",
		"Wayne Brady",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Patrick Bristow",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Overdramatic Spanish soap opera actor",
				},
				{
					name: "Colin Mochrie",
					quirk: "In the middle of a pie eating competition",
				},
				{
					name: "Ryan Stiles",
					quirk: "Overly smooth airline pilot",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Ashley, an astronomy student",
			styles: ["Barry White"],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two lab technicians working at a sperm bank",
			secretLocation: "In a porn magazine",
		},
		{
			name: "Daytime Talk Show",
			host: "Patrick Bristow",
			guests: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Wayne Brady"],
			topic: "Jack and the Beanstalk",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Patrick Bristow"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Party Quirks",
			host: "Patrick Bristow",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Strutting pimp from a 70's movie",
				},
				{
					name: "Colin Mochrie",
					quirk: "A succession of insects hitting a car windscreen",
				},
				{
					name: "Ryan Stiles",
					quirk: "Gets tremendously upset by trivial things",
				},
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall"],
			album: "_Songs of Camping in the Wild_",
			songs: [
				{
					style: "60s protest song",
					title: "Hand Me Some Leaves",
				},
				{
					style: "Reggae",
					title: "What's That Noise?",
				},
				{
					style: "Motown",
					title: "Look at the Different Things",
				},
			],
		},
	],
};
