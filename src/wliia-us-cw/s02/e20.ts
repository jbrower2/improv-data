import { type Episode } from "../../types/episode.js";

export const e20: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Matt Barnes"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 20,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-20",
	airdate: "2014-10-03",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Matt Barnes"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Cy Cosis",
			},
			coAnchor: {
				name: "Gary Anthony Williams",
				alternateName: "Terry",
				quirk: "Colin's high school bully tormenting him",
			},
			sports: {
				name: "Wayne Brady",
				quirk:
					"Preacher from the Church of Wayne whipping the entire audience into a frenzy",
			},
			weather: {
				name: "Ryan Stiles",
				quirk:
					"Performing highlights from the Broadway show _Colin Mochrie: The Musical_",
			},
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Matt",
			styles: ["Heavy metal"],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "The Scarecrow and Dorothy",
			secret: "Pregnancy test",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Catchphrases that never caught on",
				"If doctors spoke in rhyme",
				"Things you'd never see or hear on a charity telethon",
				"Bad people to share a life raft with",
				"Ill-advised things to do with your package",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Matt Barnes",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a tough bar owner who's just opened a seedy dive bar and he's showing new barman Matt the ropes",
		},
	],
};
