import { type Episode } from "../../types/episode";

export const e17: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Lance Bass"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-17",
	airdate: "2018-10-01",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Lance Bass"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Over-caffeinated rabbit going through a busy day",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Cowardly lion who only gains confidence when he kisses people",
				},
				{
					name: "Ryan Stiles",
					quirk: "The world's trashiest grandmother looking for love",
				},
			],
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady", "Lance Bass"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Jackie",
			styles: ["*NSYNC"],
		},
		{
			name: "Every Other Line",
			alternateName: "Mixed Messages",
			performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie"],
			phoneDonors: ["Jessica", "Kristen"],
			scene:
				"Space captain Colin and his crewmen Greg and Wayne are hiding on their spaceship which has been boarded by hostile aliens",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say about America that you can't say about your partner",
				"If _The Jerry Springer Show_ featured nursery rhyme characters",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Lance Bass",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a big-shot Broadway producer trying to persuade Lance to star in his new musical over a meal at his favorite Chinese restaurant",
		},
	],
};
