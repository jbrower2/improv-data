import { type Episode } from "../../types/episode";

export const e30: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 30,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-30",
	airdate: "2002-03-14",
	productionNumber: "296734-429",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Tito Thruthetulips",
			},
			coAnchor: {
				name: "Greg Proops",
				quirk: "German insult comic",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Little Susie",
				quirk: "Girl Scout selling cookies who's possessed by the Devil",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Gerry Atric",
				quirk: "Old man who takes an extremely short-acting rejuvenation pill",
			},
		},
		{
			name: "Whose Line?",
			performers: [
				"Ryan Stiles",
				{
					name: "Colin Mochrie",
					alternateName: "Baldy",
				},
			],
			scenes: [
				"Dr. Frankenstein",
				"played by Ryan",
				"his devoted assistant Igor",
				"played by Colin",
				"are trying to bring the monster to life before the mob arrives",
			],
			lines: [
				"What are you looking at, fat boy?",
				"What's with the sheep outfit?",
				"I can't believe it's not butter.",
			],
		},
		{
			name: "Action Replay",
			actors: ["Greg Proops", "Wayne Brady"],
			reEnacters: ["Ryan Stiles", "Colin Mochrie"],
			originalScene:
				"On a safari, a tourist and his guide set up camp for the night when they're confronted by a hungry lion",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Versions of Hell other than eternal flames",
				"Famous film scenes as performed by cartoon characters",
				"If morning show hosts acted like most people do in the morning",
				"What members of the _Whose Line?_ cast say to their therapists",
				"Announcements that tend to ruin parties",
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Hockey player](https://whoselineisitanyway.fandom.com/wiki/Hockey_Player_Hoedown)",
		},
	],
};
