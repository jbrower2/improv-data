import { type Episode } from "../../types/episode";

export const e17: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-17",
	airdate: "1999-12-16",
	productionNumber: "296718-208",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Chuck Flanksteak",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Harry Lambshanks",
				quirk: "In the Tour de France",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "T Bone",
				quirk: "About to disturb a beehive",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Chip Beefontoast",
				quirk: "Fighting the inner urge to be a stripper",
			},
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Dina, a marketing manager for thermostats",
			styles: ["Teen 1950s song"],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Ryan is Obi-Wan Kenobi",
				"he's training Colin",
				"who is Luke Skywalker",
				"to be a Jedi knight",
			],
			lines: [
				"From now on, I want to be known as Helen.",
				"My shorts are on fire.",
				'"Don\'t miss _The Drew Carey Show_, Wednesday nights on ABC." (Oh wait, there\'s more. "Give the tall guy more lines.")',
				"The Canadians are coming! The Canadians are coming!",
			],
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Entire halftime show at the Superbowl",
				},
				{
					name: "Colin Mochrie",
					quirk: "Has found Drew Carey's secret diary",
				},
				{
					name: "Ryan Stiles",
					quirk: "The tortoise and the hare racing",
				},
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Rejected endings for the blockbuster movie _Titanic_",
				"Personal messages you'd like to see flying from the back of an airplane",
				"Bad songs to sing in prison",
				"Inappropriate first date greetings",
				"What he's thinking while he's kissing you",
				"Bad parental motivational speeches",
			],
		},
		{
			name: "Hoedown",
			performers: [
				"Brad Sherwood",
				"Drew Carey",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			musicians: ["Laura Hall"],
			about:
				"[The cable company](https://whoselineisitanyway.fandom.com/wiki/Cable_Company_Hoedown)",
		},
	],
};
