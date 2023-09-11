import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_6-09",
	airdate: "2004-08-28",
	productionNumber: "296733-346",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions Only",
			scenes: ["A teen soap opera"],
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "At a zoo",
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Wayne is a prison guard who has hunted down chained-together escaped convicts Ryan and Colin and they are hiding in an alligator-infested swamp",
			styles: [
				"Cartoon",
				"Shakespeare",
				"Japanese anime",
				"_Planet of the Apes_",
				"Gilbert",
				"Sullivan",
			],
		},
		{
			name: "Party Quirks",
			host: "Denny Siegel",
			guests: [
				{
					name: "Wayne Brady",
					quirk: 'Finds "The Mask" at the party',
				},
				{
					name: "Colin Mochrie",
					quirk: '"Never say die" deer trying to cross a highway',
				},
				{
					name: "Ryan Stiles",
					quirk: "Slow motion sports bloopers",
				},
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Soccer_",
			songs: [
				{
					style: "Ska",
					title: "Free Kick",
				},
				{
					style: "Tin Pan Alley",
					title: "My Shorts Chafe",
				},
				{
					style: "Beastie Boys",
					title: "I'm Not Really Hurt, but I'm Staying Down",
				},
				{
					style: "Paul Robeson",
					title: "I Got a Yellow Card",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Working out](https://whoselineisitanyway.fandom.com/wiki/Working_Out_Hoedown)",
		},
	],
};
