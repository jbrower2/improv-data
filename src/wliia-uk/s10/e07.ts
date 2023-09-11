import { type Episode } from "../../types/episode.js";

export const e07: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Phil LaMarr"
	| "Colin Mochrie"
	| "Ryan Stiles"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_10-07",
	airdate: "1998-06-04",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Phil LaMarr", "Colin Mochrie", "Ryan Stiles"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Phil LaMarr",
					quirk: "Arnold Schwarzenegger as a stand-up comic",
				},
				{
					name: "Colin Mochrie",
					quirk: "An astronaut taking off",
				},
				{
					name: "Ryan Stiles",
					quirk: "Impatient driver who gets stuck in traffic",
				},
			],
		},
		{
			name: "Animals",
			performers: ["Colin Mochrie", "Greg Proops", "Ryan Stiles"],
			scene:
				"Colin is the father playing basketball with son Ryan, who is summoning up the courage to tell his father about his gay lover, Greg",
			animals: "Penguins",
		},
		{
			name: "Daytime Talk Show",
			host: "Greg Proops",
			guests: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Phil LaMarr"],
			topic: "Hey Diddle Diddle",
		},
		{
			name: "World's Worst",
			scenes: ["Ad for a body product"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Greg Proops", "Phil LaMarr"],
			],
		},
		{
			name: "Strange Bedfellows",
			scene: "Three guys sharing an apartment",
			performers: [
				{
					name: "Greg Proops",
					character: "Woody Allen",
				},
				{
					name: "Phil LaMarr",
					character: "Jack Nicholson",
				},
				{
					name: "Ryan Stiles",
					character: "John Wayne announcing that something has broken down",
				},
			],
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Tirena", "Mary Lee"],
			scene: "A couple asleep when the wife, Ryan, goes into labor",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Curved Slightly",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "A stagecoach driver under attack",
			},
			sports: {
				name: "Phil LaMarr",
				quirk: "Robin Williams",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "A ventriloquist on the edge of a nervous breakdown",
			},
		},
	],
};
