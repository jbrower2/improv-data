import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Kat Graham"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_20-10",
	airdate: "2023-06-09",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Kat Graham"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Murray Withafringeontop",
			},
			coAnchor: {
				name: "Greg Proops",
				alternateName: "Dr. Megalot",
				quirk:
					"A fiendish supervillian outlining the ingenious way that he's going to kill Colin",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "All of the characters in an episode of _The Biggest Loser_",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Sunny",
				quirk: "A Vegas act performing mass hypnosis on the entire audience",
			},
		},
		{
			name: "Alphabet",
			alternateName: "90 Second Alphabet",
			performers: ["Ryan Stiles", "Greg Proops", "Colin Mochrie"],
			scene:
				"Greg and Colin are young newlyweds looking to buy a pet and Ryan is the patient pet store owner",
			startingLetter: "C",
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Kat Graham",
			scene:
				"Flirtatious choreographer Ryan is training dancer Kat to appear in a hip-hop video.  Wayne enters as a rapper whose video he's auditioning for and he wants to change the routine.",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you should keep to yourself on a first date",
				"What the _Whose Line?_ cast say in their sleep",
				"Things you can say about your house, but not your partner",
				"Outtakes from the _Whose Line?_ promo shoot",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of College_",
			songs: [
				{
					style: "Italian",
					title: "Four Credits Short",
				},
			],
		},
	],
};
