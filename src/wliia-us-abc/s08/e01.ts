import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-01",
	airdate: "2005-10-03",
	productionNumber: "296751-8001",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Fashion Models",
			commentators: ["Denny Siegel"],
			models: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			job: "Security guard",
		},
		{
			name: "Let's Make a Date",
			host: "Denny Siegel",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Spanish game show host",
				},
				{
					name: "Colin Mochrie",
					quirk: "Inept lap dancer",
				},
				{
					name: "Ryan Stiles",
					quirk: "In traction after an accident caused by Denny",
				},
			],
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "At the bus stop",
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Denny Siegel", "Colin Mochrie"],
			scene: "An announcement at the airline office",
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Wayne Brady"],
			scene:
				"Wayne is an upstart young pool hustler and he's challenging Ryan, the veteran pool guy",
			styles: [
				"Gangster movie",
				"Science fiction",
				"Martial arts",
				"Opera",
				"_South Park_",
			],
		},
		{
			name: "Hey, You Down There!",
			narrator: "Denny Siegel",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			topic: "How to cope with problems on a long road trip",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Denny Siegel"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Blind dates](https://whoselineisitanyway.fandom.com/wiki/Blind_Date_Hoedown_(US_8-01))",
		},
	],
};
