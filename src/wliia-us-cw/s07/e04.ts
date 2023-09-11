import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Elizabeth Gillies"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_15-04",
	airdate: "2019-07-08",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Elizabeth Gillies"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Duncan Yourchickensbeforetheyrehatched",
			},
			coAnchor: {
				name: "Chip Esten",
				quirk: "Kermit the Frog after too many coffees",
			},
			sports: {
				name: "Ryan Stiles",
				alternateName: "Puck Nightly",
				quirk: "An 'Indiana Jones' movie in 30 seconds",
			},
			weather: {
				name: "Wayne Brady",
				alternateName: "Barry Smallcraftwarning",
				quirk: "The history of music",
			},
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "~~Elizabeth~~ Lactation consultant",
			styles: ["Cabaret"],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Colin Mochrie"],
			dubber: "Ryan Stiles",
			dubbed: "Elizabeth Gillies",
			scene:
				"Husband and wife pop duo Colin and Elizabeth are working on some new dance moves, when suddenly Elizabeth's jealous ex-boyfriend Wayne enters to show that he deserves to be in the group",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Weird things to say in a sexy voice",
				"Inappropriate times to burst into laughter",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Elizabeth"],
			scene:
				"Ryan and Colin are two hunters in the Arctic who have to make shelter when a blizzard hits",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Roommate](https://whoselineisitanyway.fandom.com/wiki/Roommate_Hoedown_(US_15-04))",
		},
	],
};
