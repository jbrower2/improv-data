import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Clive Anderson"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_10-08",
	airdate: "1998-06-11",
	host: "Clive Anderson",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Daytime Talk Show",
			host: "Brad Sherwood",
			guests: ["Wayne Brady", "Colin Mochrie"],
			audienceMembers: ["Ryan Stiles"],
			topic: "Mary Had a Little Lamb",
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Deana, a teacher from Canada",
			styles: ["Swing"],
		},
		{
			name: "Quiz Show",
			host: "Brad Sherwood",
			title: "_Guess That Farm Animal_",
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "At a hotel",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Willie Lovepost",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Chutney Lovebiscuits",
				quirk: "Going through a car wash without his car",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Harry Torso",
				quirk: "A Chippendale going through his dance number",
			},
			weather: {
				name: "Ryan Stiles",
				quirk:
					"A character from a war movie who gets shot and takes forever to die",
			},
		},
		{
			name: "Animals",
			performers: ["Brad Sherwood", "Ryan Stiles", "Colin Mochrie"],
			scene:
				"Brad is a bull, Ryan is his wife, a cow who is giving birth to something unexpected, played by Colin",
			animals: "Cattle and sheep",
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			album: "_Songs of the Plumbers_",
			songs: [
				{
					style: "British pop",
					title: "I'm Clogged, I'm Clogged, Oh No, I'm Clogged",
				},
				{
					style: "Reggae",
					title: "I'm Not Putting My Hand in There",
				},
				{
					style: "Early 50s hit",
					title: "I'm the Pipefitter",
				},
			],
		},
	],
};
