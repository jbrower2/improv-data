import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-07",
	airdate: "2017-07-24",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Barack Intheussr",
			},
			coAnchor: {
				name: "Brad Sherwood",
				quirk: "Overbearing mother who thinks Colin is her wee baby",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "An Aisha Tyler robot which is starting to go haywire",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Mad scientist commanding his army of the undead",
			},
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[The plumber](https://whoselineisitanyway.fandom.com/wiki/Plumber_Hoedown)",
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: ["Ryan is Adam", "Colin is Eve"],
			lines: [
				"I can't think, I need to pee.",
				"Damn, you're ugly.",
				"Wow, how did those get so big?",
				"You need to get waxed.",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"What baseball catchers really say to the batters",
				"If Olympic competitors were drunk",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Water Park_",
			songs: [
				{
					style: "Munchkins",
					title: "Way Over My Head",
				},
				{
					style: "Bruce Springsteen and Nicki Minaj",
					title: "I Lost My Trunks on the Way Down",
				},
			],
		},
	],
};
