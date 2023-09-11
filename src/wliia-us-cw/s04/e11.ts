import { type Episode } from "../../types/episode.js";

export const e11: Episode<
	| "Aisha Tyler"
	| "Brad Sherwood"
	| "Jeff Davis"
	| "Ryan Stiles"
	| "Colin Mochrie"
	| "Misty May-Treanor"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_12-11",
	airdate: "2016-08-02",
	host: "Aisha Tyler",
	performers: ["Brad Sherwood", "Jeff Davis", "Ryan Stiles", "Colin Mochrie"],
	guests: ["Misty May-Treanor"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt on the farm",
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Misty",
			styles: ["Beastie Boys"],
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Brad Sherwood"],
			moversFromTheAudience: ["Aaron", "Amanda"],
			scene: "Worldwide shortage of wedding dresses",
			trivia:
				'Aisha asks if they have any questions, and Aaron says he does and he asks Amanda if she will marry him, and she says, "Yes"',
		},
		{
			name: "Scenes from a Hat",
			scenes: ["Bad times to say what you're really thinking"],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Brad Sherwood", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Football_",
			songs: [
				{
					style: "Punk",
					title: "Leg Crack, Leg Crack",
				},
				{
					style: "Springsteen and Pavarotti",
					title: "Look How Far I Can Kick",
				},
			],
		},
	],
};
