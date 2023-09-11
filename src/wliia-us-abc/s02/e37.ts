import { type Episode } from "../../types/episode";

export const e37: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 37,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-37",
	airdate: "2000-05-11",
	productionNumber: "296718-237",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Ryan and Wayne are two lumberjacks clearing a forest to make way for a new freeway when they're confronted by a protester, Colin, who has chained himself to a tree",
			styles: [
				"High school play",
				"_Xena_",
				"_Afterschool Special_",
				"Mime",
				"Performance art",
			],
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Colin Mochrie", "Brad Sherwood"],
			scene: "Waiting for the call to action",
		},
		{
			name: "Quick Change",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			moderators: ["Wayne Brady"],
			scene:
				"Ryan is the President who is meeting with Brad, an Army general, in a crisis situation, Colin is the President's wife who comes in",
		},
		{
			name: "Motown Group",
			singers: ["Brad Sherwood", "Wayne Brady", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			song: "Do the Lumberjack",
		},
		{
			name: "If You Know What I Mean",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			scene: "Back-to-school",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Wrestler_",
			songs: [
				{
					style: "Reggae",
					title: "Turnbuckle, Turnbuckle",
				},
				{
					style: "Romantic Italian ballad",
					title: "Piledriver",
				},
				{
					style: "Square dance calling",
					title: "One, Two, Kick-Out",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Brad Sherwood", "Colin Mochrie"],
				["Drew Carey", "Ryan Stiles"],
			],
		},
	],
};
