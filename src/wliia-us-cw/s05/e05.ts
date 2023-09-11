import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Wil Wheaton"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-05",
	airdate: "2017-07-10",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Wil Wheaton"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt at a beauty salon",
		},
		{
			name: "Duet",
			singers: ["Gary Anthony Williams", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Wil",
			styles: ["A boy band"],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Ryan is Superman and Colin is Lois",
			secret: "Many pill bottles",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If people behaved like frat boys all the time",
				"Things you wouldn't want to be given an award for",
				"What boxers say to one another in a clinch",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Wil Wheaton",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Veteran cop Ryan is breaking in his rookie partner Wil on Wil's first ever stakeout",
		},
	],
};
