import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-01",
	airdate: "2000-10-12",
	productionNumber: "296722-302",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Horst Yourodeinon",
			},
			coAnchor: {
				name: "Kathy Greenwood",
				alternateName: "Sarah Bellum",
				quirk: "Colin's nagging overbearing wife",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Abdullah Oblongata",
				quirk: "The munchkins from _The Wizard of Oz_",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Lee Bido",
				quirk: "Shows why he is known as Mr. Sexual Harassment",
			},
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Maureen, the editor of _Teen Style_ magazine",
			styles: ["Sisqo"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad things to do during an earthquake",
				"Graffiti found in the White House restroom",
				"Rejected names for bras",
				"Unfortunate wedding night confessions",
				"Inappropriate compliments to give your mother",
				"What Drew Carey's thinking right now",
			],
		},
		{
			name: "What Are You Trying to Say?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Colin is being fitted for a suit by Ryan",
		},
		{
			name: "Party Quirks",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Island tribal chief and his interpreter",
				},
				{
					name: "Colin Mochrie",
					quirk: "Thinks people's butts are sandwiches",
				},
				{
					name: "Ryan Stiles",
					quirk: "Drag queen sporting a major attitude",
				},
			],
		},
		{
			name: "Irish Drinking Song",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Drew](https://whoselineisitanyway.fandom.com/wiki/Drew_Carey_Irish_Drinking_Song_(3-01))",
		},
	],
};
