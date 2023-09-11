import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-10",
	airdate: "1997-09-11",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Colin Mochrie",
		"Brad Sherwood",
		"Ryan Stiles",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["On a stag night"],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "On a submarine about to submerge",
		},
		{
			name: "Let's Make a Date",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Stephen Frost",
					quirk: "Characters from _EastEnders_",
				},
				{
					name: "Colin Mochrie",
					quirk: "Brad's annoyed flatmate",
				},
				{
					name: "Ryan Stiles",
					quirk: "A prisoner going stir crazy",
				},
			],
		},
		{
			name: "Remember That Song",
			barman: "Colin Mochrie",
			musician: "Richard Vranch",
			performers: [
				{
					name: "Brad Sherwood",
					song: "Happy-go-lucky song about running wild and free",
				},
				{
					name: "Ryan Stiles",
					song: "Opera song about his sex change",
				},
			],
		},
		{
			name: "Press Conference",
			publicFigure: "Stephen Frost",
			topic: "Snow White announcing she's pregnant",
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "Meeting on a sleeper train",
		},
		{
			name: "Party Quirks",
			host: "Stephen Frost",
			guests: [
				{
					name: "Brad Sherwood",
					quirk: "Huggy Bear from _Starsky & Hutch_",
				},
				{
					name: "Colin Mochrie",
					quirk: "Working on underside of a plane when it takes off",
				},
				{
					name: "Ryan Stiles",
					quirk: "Frog who turns into prince and back again",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Your worst nightmares](https://whoselineisitanyway.fandom.com/wiki/Your_Worst_Nightmares_Hoedown)",
		},
	],
};
