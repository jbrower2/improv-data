import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Kyle Richards"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_9-04",
	airdate: "2013-07-30",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Kyle Richards"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Jesu Getoffamycloud",
			},
			coAnchor: {
				name: "Jonathan Mangum",
				alternateName: "Bob",
				quirk: "Excited game show host announcing the grand prize, Colin",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "In the video game _Grand Theft Auto_",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Stormy",
				quirk: "A day in the life of a female supermodel",
			},
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Jonathan Mangum"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Wayne Brady"],
			dubber: "Colin Mochrie",
			dubbed: "Kyle Richards",
			scene:
				"Ryan is the handsome owner of a Beverly Hills fashion boutique and Kyle is his demanding customer and suddenly her rival housewife Wayne comes out of the changing room wearing an outfit that Kyle decides she wants",
		},
		{
			name: "Sideways Scene",
			performers: ["Colin Mochrie", "Jonathan Mangum", "Wayne Brady"],
			scene:
				"Undercover cops are bugging the apartment of a gangster, played by Colin, who's fleeing a shootout and bursts in",
			styles: "_The Exorcist_, Martial arts film, Superhero movie",
		},
		{
			name: "Helping Hands",
			performers: [
				"Kyle Richards",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a sassy female flight attendant showing first class passenger Kyle all of the amenities in her cart",
		},
	],
};
