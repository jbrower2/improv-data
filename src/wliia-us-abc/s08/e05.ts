import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-05",
	airdate: "2005-11-21",
	productionNumber: "296751-8005",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	games: [
		{
			name: "Let's Make a Date",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "E.T.'s manic frat boy brother who has come to Earth to party",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"The world's most nervous first-time flier using an airplane restroom when a violent storm hits",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Talking fierce bald eagle hatching her egg Colin and preparing him for life outside the nest",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Marcie", "Jess"],
			scene:
				"Two high-tech American thieves break into Buckingham Palace to steal the Queen of England's jewels and they must escape when they are detected",
		},
		{
			name: "Two-Line Vocabulary",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Commander Colin leads gung-ho space marines Ryan and Wayne on a mission down to the planet to seek and destroy the dreaded aliens",
			lines: [
				{
					name: "Wayne Brady",
					lines: ["What's this for?", "Do you expect me to believe that?"],
				},
				{
					name: "Ryan Stiles",
					lines: ["Why is this happening?", "Can I get one of those?"],
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"On a TV game show where the more audience members he gets to swap clothes with each other, the more money he wins",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Excited teen at an amusement park who thinks everyone on the show is a thrill ride",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Dog obedience trainer who thinks everyone on the show is a misbehaving pooch",
				},
			],
		},
		{
			name: "Themed Restaurant",
			diners: ["Drew Carey", "Kathy Greenwood"],
			waiters: ["Ryan Stiles", "Colin Mochrie"],
			scene: "On a romantic dinner",
			theme: "Circus",
		},
	],
};
