import { type Episode } from "../../types/episode.js";

export const e31: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 31,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-31",
	airdate: "2003-08-22",
	productionNumber: "296735-520",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Wayne are two competing explorers on the final leg of their race to the North Pole, when one of them falls into an ice hole, Brad, a German rival with a team of huskies, races in to help",
			notes: [
				"Do it like it's a Spanish game show",
				"Do it like the X-rated version, but bleep out all the offending stuff",
			],
		},
		{
			name: "Two-Line Vocabulary",
			performers: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			scene:
				"In the Wild West, three outlaws are holed up in a shack with a sheriff and a posse of men approaching",
			lines: [
				{
					name: "Ryan Stiles",
					lines: ["Don't worry, I'm a doctor.", "What do I look like?"],
				},
				{
					name: "Wayne Brady",
					lines: ["Did you hear that?", "Let's not go there."],
				},
			],
		},
		{
			name: "Press Conference",
			publicFigure: "Colin Mochrie",
			topic: "Yogi announcing he's killed Boo Boo",
		},
		{
			name: "Improbable Mission",
			agents: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Wayne Brady",
			mission:
				"Shovel snow (The Prime Minister of All-Up-In-Ya has been trapped in his hotel and cannot get out to get his funk on or his groove-thing shaken like a muh. In order for him to get down and get jiggy with it, the agents must shovel a path from his hotel all up to the spot.)",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[First kiss](https://whoselineisitanyway.fandom.com/wiki/First_Kiss_Irish_Drinking_Song)",
		},
	],
};
