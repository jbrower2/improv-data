import { type Episode } from "../../types/episode";

export const e19: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 19,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-19",
	airdate: "1997-11-13",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Colin Mochrie",
		"Brad Sherwood",
		"Ryan Stiles",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Ryan has flown all the way from another galaxy to tell Colin that he is the only man who can save the planet Earth",
			styles: [
				"Playboy Channel",
				"Religious epic",
				"_Kung Fu_",
				"_Speed_",
				"Playboy Channel again",
			],
		},
		{
			name: "Interrogation",
			interrogators: ["Stephen Frost", "Brad Sherwood"],
			suspect: "Ryan Stiles",
			crime: "He mooned at the Queen",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit Bend",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			scene: "Three 1940s gangsters blowing a safe, with the cops closing in",
		},
		{
			name: "World's Worst",
			scenes: ["Self-improvement or teach-yourself video"],
		},
		{
			name: "Props",
			pairs: [
				["Brad Sherwood", "Ryan Stiles"],
				["Colin Mochrie", "Stephen Frost"],
			],
		},
		{
			name: "Number of Words",
			scene:
				"Brad is the madam of a brothel in the Deep South, Colin is one of the girls, obviously, Stephen is a customer who is also the Mayor of the town, and Ryan is a policeman who comes in to raid the joint",
			performers: [
				{
					name: "Brad Sherwood",
					words: 5,
				},
				{
					name: "Colin Mochrie",
					words: 2,
				},
				{
					name: "Stephen Frost",
					words: 4,
				},
				{
					name: "Ryan Stiles",
					words: 3,
				},
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Colin Mochrie", "Brad Sherwood"],
			translators: ["Stephen Frost", "Ryan Stiles"],
			languages: ["Romanian"],
			film: "_The Return of the Bald Weasels_",
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Richard Vranch"],
			album: "_Songs of the Locker Room_",
			songs: [
				{
					style: "French ballad",
					title: "If You Drop the Soap, Leave It Where It Is",
				},
				{
					style: "Disco",
					title: "You Call It Football, I Call It Soccer, What the Hell?",
				},
				{
					style: "Beer-drinking German song",
					title: "Hey Coach, What's with the Lederhosen?",
				},
			],
		},
	],
};
