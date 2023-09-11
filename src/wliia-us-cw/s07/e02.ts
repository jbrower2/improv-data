import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Tinashe"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_15-02",
	airdate: "2019-06-24",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Tinashe"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Marius Itslegalnow",
			},
			coAnchor: {
				name: "Jeff Davis",
				quirk:
					"Colin's frustrated wife determined to spice things up in the bedroom",
			},
			sports: {
				name: "Ryan Stiles",
				alternateName: "Puck Gillespie",
				quirk:
					"Acting out as many American presidents as possible in 30 seconds",
			},
			weather: {
				name: "Wayne Brady",
				alternateName: "Foggy Rivers",
				quirk: "Character in 'Fortnite' going through a busy game",
			},
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady", "Tinashe"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "~~Tinashe~~ Lied about weight",
			styles: ["R&B duet"],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Jeff Davis"],
			dubber: "Ryan Stiles",
			dubbed: "Tinashe",
			scene:
				"Flamboyant jazz dance instructor Jeff is auditioning Tinashe to be in a sexy new dance troupe when suddenly her ex-boyfriend dancer Wayne enters to try to win the part",
		},
		{
			name: "World's Worst",
			scenes: ["Deleted scene from _The Wizard of Oz_"],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Tinashe"],
			scene:
				"Two thrill-seekers kayaking down the Colorado River before making camp",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jeff Davis"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
	],
};
