import { type Episode } from "../../types/episode.js";

export const e18: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 18,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-18",
	airdate: "2003-06-20",
	productionNumber: "296736-609",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Press Conference",
			publicFigure: "Colin Mochrie",
			topic: "Batman announcing he's coming out of the closet",
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "Ways to lift or tighten your face",
		},
		{
			name: "All in One Voice",
			performers: [
				{
					names: ["Colin Mochrie", "Wayne Brady"],
					character: "Miss Piggy",
				},
				{
					names: ["Ryan Stiles", "Brad Sherwood"],
					character: "Kermit the Frog",
				},
			],
			musicians: ["Laura Hall", "Linda Taylor"],
			song: "The First Time We Kissed",
		},
		{
			name: "Change Letter",
			performers: [
				"Brad Sherwood",
				"Colin Mochrie",
				"Ryan Stiles",
				"Wayne Brady",
			],
			scene:
				"One night in the ER, Brad is the attending physician and Colin is the nurse, Ryan and Wayne are patients who come in",
			cantSay: "B",
			mustSay: "F",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"The world's worst newsanchor",
				"What our cameramen are thinking right now",
				"Baby Drew's first words",
				"Things you might say about your computer, but not your girlfriend",
			],
		},
		{
			name: "If You Know What I Mean",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			scene: "Three soldiers in the barracks",
		},
	],
};
