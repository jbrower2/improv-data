import { type Episode } from "../../types/episode";

export const e10: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anna Wanselius"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-10",
	airdate: "2000-11-23",
	productionNumber: "296733-341",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
	games: [
		{
			name: "Superheroes",
			crisis: "Pit bulls",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Dog Catcher Boy",
				},
				{
					name: "Ryan Stiles",
					superpower: "Body Parts Constantly Falling Asleep Boy",
				},
				{
					name: "Chip Esten",
					superpower: "Captain Cossack",
				},
				{
					name: "Wayne Brady",
					superpower: "Tae Bo Kid",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
			about: "Phyllis, a housewife from Niagara Falls, Canada",
			styles: ["The Bee Gees"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Pick up lines that are doomed to fail",
				"Things to say that will always start a fight",
				"The shortest book ever written",
				"Disturbing sayings found on your grandmother's crocheted throw pillows",
				"What they really talk about in football huddles",
				"The newspaper headline you'd most like to see",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Colin is a distraught Maid Marian who tells Robin Hood",
				"that's Ryan",
				"that she can't take the strain of their relationship anymore",
			],
			lines: [
				"What time do the girls get here?",
				"Let's get naked and wrestle.",
				"There's more than one way to stuff a turkey.",
				"Stand back, this baby's gonna blow.",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Chip Esten"],
			musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
			album: "_Songs of Women_",
			songs: [
				{
					style: "1984 Police",
					title: "Hey, What's That?",
				},
				{
					style: "Louis Jordan",
					title: "She's All Mine",
				},
				{
					style: "Zydeco",
					title: "Hot Hot Fever, Cold Cold Chills",
				},
			],
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Drew Carey", "Ryan Stiles"],
			musicians: "Laura and Linda",
			musical: "_Killer Whale_",
			song: "Don't Touch My Blowhole",
		},
	],
};
