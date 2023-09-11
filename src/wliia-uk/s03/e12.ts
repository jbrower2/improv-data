import { type Episode } from "../../types/episode.js";

export const e12: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Ryan Stiles"
	| "Colin Mochrie"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-12",
	airdate: "1991-04-05",
	host: "Clive Anderson",
	performers: [
		"Josie Lawrence",
		"Ryan Stiles",
		"Colin Mochrie",
		"Mike McShane",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Mike McShane", "Josie Lawrence"],
					scene: "Trying to buy a gun",
					styles: ["Horror", "Sports film", "Burlesque"],
				},
				{
					performers: ["Colin Mochrie", "Ryan Stiles"],
					scene: "Two guys mending a roof",
					styles: ["Surreal", "_Kung Fu_", "Shakespeare", "B-movie"],
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to defend you in court"],
		},
		{
			name: "Helping Hands",
			performers: [
				"Mike McShane",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "A duel",
		},
		{
			name: "American Musical",
			musician: "Richard Vranch",
			about: "A cold, France, New Jersey, Songwriting, and Travel difficulties",
		},
		{
			name: "Song Styles",
			musicians: ["Richard Vranch"],
			singers: [
				{
					name: ["Mike McShane"],
					about: "Glasses",
					style: "Country & Western",
				},
				{
					name: ["Josie Lawrence"],
					about: "Subways",
					style: "Madonna",
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Colin Mochrie",
			guests: [
				{
					name: "Ryan Stiles",
					quirk: "Peeping Tom",
				},
				{
					name: "Josie Lawrence",
					quirk: "Vampire",
				},
				{
					name: "Mike McShane",
					quirk: "Thinks he has an invisible friend",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Mike McShane", "Colin Mochrie"],
				["Josie Lawrence", "Ryan Stiles"],
			],
		},
		{
			name: "March",
			musician: "Richard Vranch",
			about: "Dog-sledding",
		},
	],
};
