import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Debi Durst"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-08",
	airdate: "1997-08-28",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Debi Durst", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["_Star Wars_"],
		},
		{
			name: "Superheroes",
			crisis: "Shortage of mascara",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Wonder Woman",
				},
				{
					name: "Ryan Stiles",
					superpower: "Bad John Wayne Impression Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "Pants Around the Ankles Boy",
				},
				{
					name: "Debi Durst",
					superpower: "Nagging Jewish Mother Woman",
				},
			],
		},
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Debi Durst",
					quirk: "Popeye",
				},
				{
					name: "Colin Mochrie",
					quirk: "Knows Greg's dirty secrets",
				},
				{
					name: "Ryan Stiles",
					quirk: "Undergoing dental treatment",
				},
			],
		},
		{
			name: "Animals",
			performers: ["Ryan Stiles", "Colin Mochrie", "Greg Proops"],
			scene:
				"Ryan is the businessman taking a prospective business partner, who is Greg, to a go-go bar, there they find Colin, who is in fact Ryan's wife, who is about to perform on stage",
			animals: "Two cockerels and a hen",
		},
		{
			name: "World's Worst",
			scenes: ["Television program"],
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["Debi Durst", "Greg Proops"],
			],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Snide Anderson",
			},
			coAnchor: {
				name: "Ryan Stiles",
				alternateName: "Captain Billy",
				quirk: "A crazy old man",
			},
			sports: {
				name: "Debi Durst",
				quirk: "Getting repeatedly massive electric shocks",
			},
			weather: {
				name: "Colin Mochrie",
				quirk: "Desperate to catch a plane",
			},
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Steph", "Alistair"],
			scene: "Colin is a girl checking into the Bates Motel",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Cricket](https://whoselineisitanyway.fandom.com/wiki/Cricket_Hoedown)",
		},
	],
};
