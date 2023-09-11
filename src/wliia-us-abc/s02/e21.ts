import { type Episode } from "../../types/episode.js";

export const e21: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anna Wanselius"
> = {
	number: 21,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-21",
	airdate: "2000-02-03",
	productionNumber: "296718-226",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
	games: [
		{
			name: "Superheroes",
			crisis: "Dry Skin",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Captain Obvious",
				},
				{
					name: "Ryan Stiles",
					superpower: "Captain Hyperactive Moth",
				},
				{
					name: "Chip Esten",
					superpower: "The Jitterbug Boy",
				},
				{
					name: "Wayne Brady",
					superpower: "Thinks Everybody's on Fire Man",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Ryan arrives at his ski lodge a day early to discover his wife, Colin, in the arms of amorous ski instructor, Wayne",
			styles: ["Western", "Three Stooges", "Cooking show", "_South Park_"],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Chip Esten"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "1950s reducing machines",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
			about: "Tina, who is on vacation from Canada",
			styles: ["Bruce Springsteen"],
		},
		{
			name: "Party Quirks",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "A rescue on _Baywatch_",
				},
				{
					name: "Colin Mochrie",
					quirk: "Trying to incite a mass riot",
				},
				{
					name: "Ryan Stiles",
					quirk: "Wile E. Coyote trying to catch Road Runner",
				},
			],
		},
		{
			name: "Alphabet",
			alternateName: "90-Second Alphabet",
			performers: ["Ryan Stiles", "Colin Mochrie", "Drew Carey"],
			scene:
				"Ryan the pitcher, Drew the catcher, and Colin the manager are having an argument on the mound at a crucial point at a baseball game",
			startingLetter: "E",
		},
	],
};
