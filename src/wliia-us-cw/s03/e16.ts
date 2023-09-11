import { type Episode } from "../../types/episode.js";

export const e16: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-16",
	airdate: "2015-08-24",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Robocop gone bad, embarking on a one-man crime-wave",
				},
				{
					name: "Colin Mochrie",
					quirk: "Frantic castaway driven mad by hunger and lust",
				},
				{
					name: "Ryan Stiles",
					quirk: "Nervous gazelle being hunted on the African plain",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Brad Sherwood"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"From _Star Wars_, Ryan is Luke Skywalker and Colin is Princess Leia",
			secret: "Red lingerie and toys",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad names for a battleship",
				"If famous movie scenes were performed drunk",
				"Things you can say about your furniture, that you cannot say about your partner",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Hospital_",
			songs: [
				{
					style: "Bruce Springsteen and Stevie Wonder",
					title: "Love and a Gunshot in the Emergency",
				},
				{
					style: "Beastie Boys",
					title: "Obamacare",
				},
			],
		},
	],
};
