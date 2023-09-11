import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-02",
	airdate: "1998-08-12",
	productionNumber: "296648-104",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Charismatic politician running for governor",
				},
				{
					name: "Colin Mochrie",
					quirk: "Thinks Brad is absolutely repulsive",
				},
				{
					name: "Ryan Stiles",
					quirk: "Astronaut with an alien inside him",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film Theater and Television Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Colin suspects his rival, Ryan, of cheating in a fly fishing competition",
			styles: ["Western movie", "Disaster", "Porno"],
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Alisha, a student of music",
			styles: ["Swing"],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Chuck Sirloin",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "A kid showing off in class",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Frank Clamchowder",
				quirk:
					"A teenager who can't believe he's being dumped by his girlfriend",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Al Niño",
				quirk: "Getting younger and younger",
			},
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Lacey", "Katie"],
			scene: "Colin is an outlaw robbing Ryan's stagecoach",
		},
		{
			name: "Scene to Rap",
			rappers: ["Brad Sherwood", "Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall"],
			scene: "Summer camp",
		},
		{
			name: "Alphabet",
			alternateName: "90-Second Alphabet",
			performers: ["Drew Carey", "Ryan Stiles"],
			scene:
				"Drew is in a restaurant complaining to a temperamental waiter, played by Ryan",
			startingLetter: "G",
		},
	],
};
