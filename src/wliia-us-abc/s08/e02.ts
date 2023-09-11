import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-02",
	airdate: "2005-10-10",
	productionNumber: "296751-8002",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Woodrow Butdonthaveapaddle",
			},
			coAnchor: {
				name: "Chip Esten",
				alternateName: "Zinc Lightly",
				quirk: "Used car salesman who'll sell anything",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Michael Jackson at 100 determined to show he's still got it",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Spunky",
				quirk:
					"_Back to the Future_ scientist desperate to power up his time-traveling Delorean",
			},
		},
		{
			name: "Title Sequence",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor"],
			sitcom: "_Mel Gibson and the Wrestler_",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"The winning entries in the Hillbilly Poetry Competition",
				"The right way and the wrong way",
				"What you would choose to do if you knew a huge meteor was about to hit the Earth",
				"Bad things to see written in the sky",
				"Things they never write songs about",
				"Weird things to get turned on by",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Chip Esten"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Firefighter_",
			songs: [
				{
					style: "The Osmonds",
					title: "Carry Your Head on My Shoulder",
				},
				{
					style: "Country boogie",
					title: "Oops, We Hit the Dog",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Dentists and the Professor](https://whoselineisitanyway.fandom.com/wiki/Dentists_and_the_Professor_Hoedown)",
		},
	],
};
