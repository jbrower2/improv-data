import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Clive Anderson"
	| "Mike McShane"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_6-04",
	airdate: "1994-07-22",
	host: "Clive Anderson",
	performers: ["Mike McShane", "Greg Proops", "Ryan Stiles", "Tony Slattery"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Superheroes",
			crisis: "Asteroid full of jam about to crash into the Earth",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Soap Opera Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Itchy Man",
				},
				{
					name: "Tony Slattery",
					superpower: "Bad Impressions Man",
				},
				{
					name: "Mike McShane",
					superpower: "Nose-Lick Boy",
				},
			],
		},
		{
			name: "Song Titles",
			performers: ["Mike McShane", "Greg Proops", "Ryan Stiles"],
			scene: "In an airport",
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Greg Proops", "Ryan Stiles"],
			scene:
				"A man going to a cryogenics laboratory to pick up the frozen remains of his wife",
		},
		{
			name: "Alphabet",
			performers: ["Mike McShane", "Tony Slattery"],
			scene:
				"Mike is a scientist who, due to some weird laboratory accident, is turning into a fly and Tony is a fellow scientist coming on to see how he is",
			startingLetter: "W",
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "A train set",
			styles: ["Disco"],
		},
		{
			name: "Film Trailer",
			narrator: "Greg Proops",
			title: "_He Invaded My Chip Shop_",
		},
		{
			name: "Helping Hands",
			performers: [
				"Tony Slattery",
				{
					body: "Ryan Stiles",
					hands: "Greg Proops",
				},
			],
			scene: "Tony is a Boy Scout on a camping trip with Scout Leader Ryan",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Giraffe",
				},
				{
					name: "Ryan Stiles",
					quirk: "On a roller coaster",
				},
				{
					name: "Mike McShane",
					quirk: "Columbian drugs baron",
				},
			],
		},
		{
			name: "Bartender",
			bartender: "Mike McShane",
			musicians: ["Richard Vranch"],
			performers: [
				{
					name: "Ryan Stiles",
					quirk: "Drinking to forget his wardrobe",
				},
				{
					name: "Tony Slattery",
					quirk: "In love with an inflatable pig",
				},
			],
		},
	],
};
