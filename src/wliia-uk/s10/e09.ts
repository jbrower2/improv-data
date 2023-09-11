import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Clive Anderson"
	| "Brad Sherwood"
	| "Debra Wilson"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_10-09",
	airdate: "1998-06-18",
	host: "Clive Anderson",
	performers: ["Brad Sherwood", "Debra Wilson", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Superheroes",
			crisis: "Body Odor",
			performers: [
				{
					name: "Brad Sherwood",
					superpower: "Captain Dog-in-Heat",
				},
				{
					name: "Ryan Stiles",
					superpower: "Flattery Man",
				},
				{
					name: "Colin Mochrie",
					superpower: "Captain Cannibal",
				},
				{
					name: "Debra Wilson",
					superpower: "Smothering-with-Love Woman",
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "Batman gets a call",
		},
		{
			name: "Let's Make a Date",
			host: "Debra Wilson",
			guests: [
				{
					name: "Brad Sherwood",
					quirk: "Automated telephone voice",
				},
				{
					name: "Colin Mochrie",
					quirk: "Office nerd desperately trying to be outrageous",
				},
				{
					name: "Ryan Stiles",
					quirk: "Fighting a losing battle to give up smoking and drinking",
				},
			],
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "In a cafe",
		},
		{
			name: "Backwards Scene",
			performers: ["Colin Mochrie", "Ryan Stiles", "Brad Sherwood"],
			scene: "Two businessmen arguing over the check, and Colin is the waiter",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Debra Wilson", "Colin Mochrie"],
			translators: ["Ryan Stiles", "Brad Sherwood"],
			languages: ["Klingon"],
			title: "_The Pretzel Collector_",
		},
		{
			name: "Animals",
			performers: ["Colin Mochrie", "Ryan Stiles", "Brad Sherwood"],
			scene:
				"Ryan is visiting a dating agency and Brad is showing him prospective dates, Colin will storm in to complain about the date she had with Ryan the night before",
			animals: "Baboons",
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Debra Wilson"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			album: "_Songs of Airline Travel_",
			songs: [
				{
					style: "Samba",
					title: "Coffee or Beef",
				},
				{
					style: "Rock and roll",
					title: "Somebody Wake Up the Fat Guy",
				},
				{
					style: "Rhythm and blues",
					title: "If We're Going Down, I'm Doing the Stewardess",
				},
			],
		},
	],
};
