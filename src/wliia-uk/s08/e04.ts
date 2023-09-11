import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Caroline Quentin"
	| "Colin Mochrie"
	| "Ryan Stiles"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-04",
	airdate: "1996-08-02",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Caroline Quentin",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	games: [
		{
			name: "That'll Be Charlie Now",
			alternateName: "Here He Is Now",
			describers: ["Colin Mochrie", "Stephen Frost"],
			guests: ["Ryan Stiles", "Caroline Quentin"],
			scene: "On a double date, waiting for their dates to arrive",
			characteristics: [
				{
					name: "Ryan Stiles",
					characteristics: [
						"Don't mention marriage or anything around Ryan, he just goes crazy",
						"Don't mention any food in front of Ryan, he just makes these big faces for no reason",
					],
				},
				{
					name: "Caroline Quentin",
					characteristics: [
						'Every time you say "Hello" to her she just starts singing a Chinese opera',
						"If you shake her hand or kiss her on the cheek she slaps you really hard",
					],
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "A scuba diving instructor",
		},
		{
			name: "Film Dub",
			performers: ["Stephen Frost", "Ryan Stiles", "Caroline Quentin"],
			scene: "A wedding party",
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two chefs",
			secretLocation: "In the oven",
		},
		{
			name: "Number of Words",
			scene: "On an aeroplane",
			performers: [
				{
					name: "Stephen Frost",
					quirk: "Hijacker",
					words: 3,
				},
				{
					name: "Caroline Quentin",
					quirk: "Hostess",
					words: 2,
				},
				{
					name: "Colin Mochrie",
					quirk: "Pilot",
					words: 5,
				},
				{
					name: "Ryan Stiles",
					quirk: "Pilot",
					words: 1,
				},
			],
		},
		{
			name: "Hats",
			topic: "World's worst dating agency videos",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Caroline Quentin"],
				["Stephen Frost", "Colin Mochrie"],
			],
		},
		{
			name: "Changing Emotions",
			performers: ["Stephen Frost", "Ryan Stiles", "Colin Mochrie"],
			props: [
				{
					prop: "Bottle",
					emotion: "Angry",
				},
				{
					prop: "Picture",
					emotion: "Horny",
				},
			],
			scene: "Night before a wedding",
		},
		{
			name: "Scene to Music",
			performers: ["Stephen Frost", "Caroline Quentin"],
			scene: "At the butcher's",
		},
		{
			name: "Animals",
			performers: ["Ryan Stiles", "Colin Mochrie", "Caroline Quentin"],
			scene: "In a saloon, Ryan comes in to get his girl",
			animals: "Squirrels",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Colin Mochrie", "Caroline Quentin"],
			translators: ["Ryan Stiles", "Stephen Frost"],
			languages: ["German"],
			title: "_Good Heavens! An Orange!_",
		},
	],
};
