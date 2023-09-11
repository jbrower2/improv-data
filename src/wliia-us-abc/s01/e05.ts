import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Karen Maruyama"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-05",
	airdate: "1998-09-02",
	productionNumber: "296648-105",
	host: "Drew Carey",
	performers: [
		"Brad Sherwood",
		"Karen Maruyama",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Karen Maruyama",
			guests: [
				{
					name: "Brad Sherwood",
					quirk: "An Amish guy",
				},
				{
					name: "Colin Mochrie",
					quirk: "In the dentist's chair",
				},
				{
					name: "Ryan Stiles",
					quirk: "Gradually turning into a parrot",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Brad Sherwood"],
			musicians: ["Laura Hall"],
			about: "Neroshi, a student of Political Science and Economics",
			styles: ["Rock love ballad"],
		},
		{
			name: "Daytime Talk Show",
			host: "Brad Sherwood",
			guests: ["Ryan Stiles", "Karen Maruyama"],
			audienceMembers: ["Colin Mochrie"],
			topic: "Alice in Wonderland",
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["Karen Maruyama", "Brad Sherwood"],
			],
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Karen Maruyama", "Colin Mochrie"],
			scene: "One day in the West",
			film: "_Teenage Monster_ (1958)",
		},
		{
			name: "Sportscasters",
			commentators: [
				{
					name: "Brad Sherwood",
					alternateName: "Carl Orangutan",
				},
				{
					name: "Karen Maruyama",
					alternateName: "Karen Chimpanzee",
				},
			],
			athletes: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Rival waiters",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Tourists, or Kids in the movie theater](https://whoselineisitanyway.fandom.com/wiki/Tourists,_or_Kids_in_the_Movie_Theater_Hoedown)",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit Bend",
			performers: ["Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scene: "Having a showdown in a Wild West saloon",
		},
	],
};
