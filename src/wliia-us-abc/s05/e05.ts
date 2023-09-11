import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anne King"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-05",
	airdate: "2002-10-07",
	productionNumber: "296734-425",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
	games: [
		{
			name: "Superheroes",
			crisis: "A shortage of Post-It Notes",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Delayed Reaction Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Becomes Hysterical Too Easily Girl",
				},
				{
					name: "Colin Mochrie",
					superpower: "The Happy Flasher",
				},
				{
					name: "Wayne Brady",
					superpower: "Constantly Run Over by a Car Man",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
			about: "Ivy, a professional bingo caller",
			styles: ["Michael Jackson in _Thriller_"],
		},
		{
			name: "Multiple Personalities",
			performers: ["Greg Proops", "Ryan Stiles", "Colin Mochrie"],
			scene: "Washed up on a desert island",
			props: [
				{
					prop: "Binoculars",
					personality: "Jimmy Stewart",
				},
				{
					prop: "Knife",
					personality: "Braveheart",
				},
				{
					prop: "Canteen",
					personality: "Carol Channing",
				},
			],
		},
		{
			name: "Funeral",
			performers: ["Ryan Stiles", "Colin Mochrie", "Greg Proops"],
			musicians: ["Laura Hall", "Linda Taylor"],
			for: "Katrina, who died in a freak miniature golf accident",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely subjects to be the basis for a musical",
				"Things you shouldn't do last minute",
				"Unlikely first lines of medical ads",
				"What's really going through George W. Bush's mind during Cabinet meetings",
			],
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Got pregnant on a date](https://whoselineisitanyway.fandom.com/wiki/Got_Pregnant_on_a_Date_Irish_Drinking_Song)",
		},
		{
			name: "Props",
			pairs: [
				["Drew Carey", "Ryan Stiles"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
	],
};
