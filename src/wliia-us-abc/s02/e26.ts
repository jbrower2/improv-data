import { type Episode } from "../../types/episode.js";

export const e26: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 26,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-26",
	airdate: "2000-03-02",
	productionNumber: "296718-230",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Wayne Brady",
			guests: [
				{
					name: "Brad Sherwood",
					quirk: "In a 1960s beach movie",
				},
				{
					name: "Colin Mochrie",
					quirk: "Dr. Jekyll desperate not to turn into Mr. Hyde",
				},
				{
					name: "Ryan Stiles",
					quirk: "Going through all stages of marriage with the chooser",
				},
			],
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "_Towering Inferno_",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Brad Sherwood"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Adrianna", "Frankie"],
			scene:
				"Ryan is Superman and he's about to rescue Colin, who is Lois Lane, from the cliff where she is hanging",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Brad Sherwood"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Football_",
			songs: [
				{
					style: "Disco",
					title: "Who's That Tight End?",
				},
				{
					style: "Russian ballad",
					title: "Dallas 7 - Green Bay 10",
				},
				{
					style: "Red Hot Chili Peppers",
					title: "I Said Punt",
				},
			],
		},
		{
			name: "Questions Only",
			performers: ["Colin Mochrie", "Wayne Brady", "Drew Carey", "Ryan Stiles"],
			scenes: ["In an office where rumors are circulating"],
		},
	],
};
