import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-10",
	airdate: "2001-10-17",
	productionNumber: "296734-419",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Press Conference",
			publicFigure: "Colin Mochrie",
			scene: "Santa Claus announcing his retirement",
		},
		{
			name: "If You Know What I Mean",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			scene:
				"Colin and Brad are two guys who work in an office, Ryan is their colleague who comes in to join them",
		},
		{
			name: "Show-Stopping Number",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "Working as veterinarians",
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			dubber: "Brad Sherwood",
			audienceMember: "Betty, a clerk",
			scene:
				"High school quarterback Colin is making a move on star athlete Betty who is stretching by the track, Ryan her jock boyfriend arrives to train with her",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"What Olympic medalists are really thinking while they're listening to the national anthem",
				'Times when "Eeny, meeny, miny, moe" is not an appropriate selection method',
				"What Alexander Graham Bell really said the first time he used the phone",
				"Things the pilot wishes he hadn't said when the intercom was on",
				"First lines of the worst poems ever written",
				"Things that shouldn't have ejector seats",
				"Things found in Drew Carey's appointment book",
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Doctors](https://whoselineisitanyway.fandom.com/wiki/Doctor_Hoedown_(US_4-10))",
		},
	],
};
