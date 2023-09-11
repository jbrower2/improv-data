import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_15-05",
	airdate: "2019-07-15",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "On a romantic singles cruise",
		},
		{
			name: "Award Show",
			presenters: ["Wayne Brady", "Brad Sherwood"],
			winners: ["Colin Mochrie", "Ryan Stiles"],
			for: "Tough cops",
		},
		{
			name: "World's Worst",
			scenes: ["Things to say or do on a cooking show"],
		},
		{
			name: "If You Know What I Mean",
			performers: ["Brad Sherwood", "Ryan Stiles", "Colin Mochrie"],
			scene:
				"Two construction workers are on site; Ryan enters as their coworker who is late for work",
		},
		{
			name: "Sideways Scene",
			performers: ["Colin Mochrie", "Brad Sherwood", "Wayne Brady"],
			scene:
				"Basketball players Colin and Brad are having a one-on-one when Wayne enters as their rival who challenges them to a game",
			styles: "Martial arts movie, science-fiction movie, _E.T._",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Grandparents_",
			songs: [
				{
					style: "Dueling Elvises",
					title: "Teeth in a Glass",
				},
				{
					style: "Willie Nelson and The Incredible Hulk",
					title: "I Never Really Loved Your Grandma",
				},
			],
		},
	],
};
