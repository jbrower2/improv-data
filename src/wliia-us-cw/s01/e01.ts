import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Lauren Cohan"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_9-01",
	airdate: "2013-07-16",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Lauren Cohan"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Gary Anthony Williams",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Shock jock radio DJ on air with his posse",
				},
				{
					name: "Colin Mochrie",
					quirk: "Love robot who is recharged by kissing people",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Colin's bickering parents who are trying to teach him the facts of life",
				},
			],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Wayne Brady"],
			dubber: "Colin Mochrie",
			dubbed: "Lauren Cohan",
			scene:
				"Ryan and Lauren are young lovers who have survived the zombie apocalypse and are taking refuge in their local abandoned nightclub and then Wayne enters, he is Lauren's former boyfriend and he's a bartender who is slowly turning into a zombie",
		},
		{
			name: "What's in the Bag?",
			performers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			bagDonors: ["Katrina", "Sherry"],
			scene:
				"Wayne is a crime victim who's been knocked out and he's regaining consciousness now, and Ryan and Colin are the police detectives who have come in to check him over and investigate the crime scene",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say about your lunch, but not your girlfriend",
				"Things you don't want to hear just before moving in for a kiss",
				"Unlikely lines from hair commercials",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Lauren"],
			scene:
				"Two thrill-seekers in a luxury Aspen retreat about to try out a variety of extreme sports",
		},
	],
};
