import { type Episode } from "../../types/episode.js";

export const e38: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 38,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-38",
	airdate: "2000-05-18",
	productionNumber: "296718-238",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions Only",
			scenes: ["In the produce section of a supermarket on singles night"],
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Ryan and Wayne are two guys in a sauna, Colin, a mob hit man, finally catches up with them",
			styles: [
				"Science fiction",
				"Game show",
				"70s hippie flick",
				"Cartoon",
				"Porno",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Songs that kill the romance",
				"Things not to bring into the bathtub",
				"Confusing battle cries",
				"Albums doomed to be flops",
				"Least likely to win the 2000 presidential race",
				"The stupidity award show",
				"Inopportune times to laugh hysterically",
			],
		},
		{
			name: "Old Job, New Job",
			performers: ["Colin Mochrie", "Denny Siegel"],
			oldJobPerformers: ["Ryan Stiles"],
			scene: "Colin and Denny are getting married and Ryan is the minister",
			oldJob: "Ryan used to be a New York cop",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Private Eye_",
			songs: [
				{
					style: "MC Hammer",
					title: "Just Do Dustin'",
				},
				{
					style: "50s blues",
					title: "Someone Cut My Nose",
				},
				{
					style: "Ricky Martin",
					title: "Opening a Door That's Locked-a",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Game show hosts](https://whoselineisitanyway.fandom.com/wiki/Game_Show_Hosts_Hoedown)",
		},
	],
};
