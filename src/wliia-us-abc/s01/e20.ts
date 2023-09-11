import { type Episode } from "../../types/episode.js";

export const e20: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 20,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-20",
	airdate: "1999-03-24",
	productionNumber: "296717-109",
	host: "Drew Carey",
	performers: ["Greg Proops", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Shallow Butauthoritative",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "Auditioning for roles in a horror movie",
			},
			sports: {
				name: "Denny Siegel",
				quirk: "Catskills comedian",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Keeps carelessly throwing away lit cigarettes",
			},
		},
		{
			name: "Multiple Personalities",
			performers: ["Greg Proops", "Colin Mochrie", "Ryan Stiles"],
			props: [
				{
					prop: "Flashlight",
					personality: "Liberace",
				},
				{
					prop: "Axe",
					personality: "Jimmy Stewart",
				},
				{
					prop: "Rifle",
					personality: "Scooby Doo",
				},
			],
			scene: "Having a problem while out hunting",
		},
		{
			name: "Fashion Models",
			commentators: ["Greg Proops", "Denny Siegel"],
			models: ["Colin Mochrie", "Ryan Stiles"],
			job: "Professional wrestling",
		},
		{
			name: "World's Worst",
			scenes: ["World's worst person to be President of the United States"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Denny Siegel"],
				["Greg Proops", "Colin Mochrie"],
			],
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Denny Siegel",
					quirk: "Greg's Jewish mother laying on the guilt",
				},
				{
					name: "Colin Mochrie",
					quirk: "Likes putting his hands into other people's pockets",
				},
				{
					name: "Ryan Stiles",
					quirk: "Sea life being sucked into a propeller",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[The IRS](https://whoselineisitanyway.fandom.com/wiki/IRS_Hoedown)",
		},
		{
			name: "Alphabet",
			alternateName: "90-Second Alphabet",
			performers: ["Drew Carey", "Greg Proops", "Ryan Stiles"],
			scene:
				"Ryan has annoyed roommates Greg and Drew so much, they want to throw him out",
			startingLetter: "B",
		},
	],
};
