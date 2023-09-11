import { type Episode } from "../../types/episode.js";

export const e03: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_6-03",
	airdate: "2004-07-08",
	productionNumber: "296733-348",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Thor Butnotcomplaining",
			},
			coAnchor: {
				name: "Chip Esten",
				quirk: "1950s teen rebel biker",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Harem girl sent in to entertain the sultan",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Sonny Skies",
				quirk: "It's his last day and he wants to go out in a blaze of glory",
			},
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "An emergency room surgeon gets called in on New Year's Eve",
		},
		{
			name: "Title Sequence",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			sitcom: "_The Sumo Wrestler and the Model_",
		},
		{
			name: "Scene with an Audience Member",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMember: "Emily",
			scene:
				"Batman, who is Ryan, has come to rescue Batgirl, who is Emily, from the clutches of The Riddler, who is Colin",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Chip Esten"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Warrior Princess_",
			songs: [
				{
					style: "Jerry Lee Lewis",
					title: "Lalalalalalala",
				},
				{
					style: "Kid Rock",
					title: "Clubs, Spears, and Shields",
				},
				{
					style: "Techno",
					title: "Huge Women, Puny Men",
				},
			],
		},
		{
			name: "Questions Only",
			performers: ["Drew Carey", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["On the _Titanic_"],
		},
	],
};
