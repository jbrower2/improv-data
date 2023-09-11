import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Chris De'Sean Lee"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-05",
	airdate: "2020-04-27",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Chris De'Sean Lee"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			alternateName: "Dating App",
			host: "Jonathan Mangum",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Selfie-obsessed tourist trying to get the craziest photo",
				},
				{
					name: "Colin Mochrie",
					quirk: "Panicking hermit crab desperately looking for a new home",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Furious Italian mother dealing with her family members in the studio",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jonathan Mangum", "Chris De'Sean Lee"],
			styles: ["90s R&B"],
			about: "Where not to take your girl",
		},
		{
			name: "World's Worst",
			scenes: ["Thing to see or hear on a television travel show"],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Colin Mochrie"],
			dubber: "Ryan Stiles",
			dubbed: "Chris De'Sean Lee",
			scene:
				"Wayne is a female choreographer teaching Chris the moves for her latest Broadway show when suddenly Wayne's ex-boyfriend Colin arrives to show that he should be in the show",
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Chris"],
			scene:
				"Colin is taking his date Ryan out for a fun-packed night on the town before heading back to his cheap motel",
		},
	],
};
