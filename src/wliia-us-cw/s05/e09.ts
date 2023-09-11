import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Tony Cavalero"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-09",
	airdate: "2017-08-10",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Tony Cavalero"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Grouchy old man who keeps taking powerful but short-lived rejuvenation pills",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Near-sighted hunter who relies on his other senses to identify his prey",
				},
				{
					name: "Ryan Stiles",
					quirk: "Angry goose",
				},
			],
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Tony",
			styles: ["Stadium rock"],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Ryan is Prince Charming and Colin is Cinderella",
			secret: "Moneybags, a shotgun, and a ski mask",
		},
		{
			name: "Film Dub",
			performers: [
				"Ryan Stiles",
				"Colin Mochrie",
				"Greg Proops",
				"Wayne Brady",
			],
			scene: "One morning at the doctor's",
			film: "_The Amazing Transparent Man_ (1960)",
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Tony Cavalero",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene:
				"In a deleted scene from _School of Rock_, guitar teacher Tony is showing enthusiastic student Ryan how to rock out, when suddenly piano teacher Wayne comes in to show that he can rock the hardest",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely things to see or hear in a biology class",
				"Things you don't want to hear from someone who's just moved in next door",
				"Unlikely opening lines from a news report",
			],
		},
	],
};
