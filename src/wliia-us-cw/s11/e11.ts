import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Nyima Funk"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Maggie Q"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-11",
	airdate: "2023-03-03",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Nyima Funk", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Maggie Q"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Nyima Funk",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "The world's least desirable lap dancers looking for business",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Overexcited prospector who strikes gold in the holes of people's bodies",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Amazon warrior woman worshipping tribal god Colin and gathering an army of slaves",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Elizabeth", "Peggy"],
			scene:
				"Ryan and Colin are lumberjacks building a log cabin in the forest teaming with wildlife.  As night falls, a radio report tells of a dangerous escaped convict on the loose",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: ": Maggie",
			styles: ["Broadway musical"],
		},
		{
			name: "Foreign Film Dub",
			alternateName: "Foreign Movie",
			actors: ["Wayne Brady", "Nyima Funk"],
			translators: ["Colin Mochrie", "Ryan Stiles"],
			languages: ["Italian"],
			title: ": _Bella Meatball_",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If Sesame Street characters appeared on other shows",
				"Weird things for your minister to say during your wedding",
				"Tattoos that you don't want to discover on a new partner's body",
				"Ad slogans for trailer parks",
			],
		},
	],
};
