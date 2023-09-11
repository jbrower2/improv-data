import { type Episode } from "../../types/episode.js";

export const e18: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 18,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-18",
	airdate: "2020-10-19",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Chip are two trigger-happy FBI agents investigating a crashed spacecraft when they disturb an alien couple, both played by Wayne",
			notes: [
				"Why don't we do it like a Spanish game show",
				"Why don't you do it like 70s porn with as many 70s references as you can shove in",
				"Do it like a rock opera with that dance move somewhere in it",
			],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Chip Esten", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Emily, who died tragically in zoo-related accident",
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Colin Mochrie", "Chip Esten", "Wayne Brady"],
			scene: "A boat trip gone wrong",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Roommate](https://whoselineisitanyway.fandom.com/wiki/Roommate_Hoedown_(US_16-18))",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely congratulations cards",
				"Unlikely things to read on food packaging",
				"Unlikely lingerie commercials",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Chip Esten"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Plastic Surgeon_",
			songs: [
				{
					style: "Country",
					title: "Don't Give Me No Liposuction",
				},
				{
					style: "Russian folk song",
					title: "What to Do with an Extra Nipple",
				},
			],
		},
	],
};
