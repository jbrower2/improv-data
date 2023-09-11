import { type Episode } from "../../types/episode";

export const e15: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Mel B"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-15",
	airdate: "2014-07-14",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Mel B"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely things to hear in a science documentary",
				"Outtakes from superhero movies",
				"Things you can say about your local bar, but not about your partner",
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Mel B",
			styles: ["Strip-o-gram"],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Mel B",
			scene:
				"Ryan is a crazed hypnotist helping Mel to become more confident with men, and then suddenly Ryan's former angry patient, Wayne, enters",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Gary Anthony Williams"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Mel"],
			scene:
				"In the frozen North, two trappers setting out on their snowmobiles to look for food, clothing and shelter",
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Gary Anthony Williams", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Olivia, who died tragically in a shopping accident",
		},
	],
};
