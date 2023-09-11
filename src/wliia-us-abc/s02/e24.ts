import { type Episode } from "../../types/episode.js";

export const e24: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anna Wanselius"
> = {
	number: 24,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-24",
	airdate: "2000-02-17",
	productionNumber: "296718-228",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
	games: [
		{
			name: "Superheroes",
			crisis: "Out of Spam",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Cheese Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Random Acts of Violence Boy",
				},
				{
					name: "Chip Esten",
					superpower: "Captain Limbo",
				},
				{
					name: "Wayne Brady",
					superpower: "Captain Hugs-a-Lot",
				},
			],
		},
		{
			name: "Title Sequence",
			singers: ["Wayne Brady", "Chip Esten"],
			actors: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			sitcom: "_Satan and the Schoolgirl_",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Odd definitions found in _Webster's Dictionary_",
				"Inappropriate things to do with a loved one's ashes",
				"Bad things to say to someone on their deathbed",
				"Things you don't want to see on your TV screen",
				"Prizes you'd like to find in your cereal box",
				"Bad songs to serenade her with",
				"Lines you should not open a sermon with",
			],
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "At a gas station",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Chip Esten"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
			album: "_Songs of the Pizza Place_",
			songs: [
				{
					style: "Yodeling country and western",
					title: "Mozzarella-la-la-la-la-la",
				},
				{
					style: "College fight song",
					title: "Pizza Heck Outta U",
				},
				{
					style: "Doo-wop",
					title: "Keep the Buck",
				},
			],
		},
		{
			name: "Alphabet",
			alternateName: "90-Second Alphabet",
			performers: ["Ryan Stiles", "Colin Mochrie", "Drew Carey"],
			scene:
				"At a zoo, tourist couple Colin and Drew rush up to zoo keeper Ryan to report that the animals are escaping",
			startingLetter: "Q",
		},
	],
};
