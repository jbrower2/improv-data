import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Drew Carey"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Wayne Brady"
	| "Bob Derkach"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_07",
	airdate: "2011-04-19",
	host: "Drew Carey",
	performers: [
		"Jonathan Mangum",
		"Colin Mochrie",
		"Greg Proops",
		"Brad Sherwood",
		"Ryan Stiles",
	],
	guests: ["Wayne Brady"],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Greg Proops"],
			audienceMembers: ["Robbie", "Sonya"],
			scene: "A diamond ring",
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Wayne Brady", "Jonathan Mangum"],
			salesmen: ["Greg Proops", "Colin Mochrie"],
			musicians: ["Bob Derkach"],
			album: "_Songs of the Real Estate_",
			songs: [
				{
					style: "Latin",
					title: "Mi Casa",
				},
				{
					style: "Funk",
					title:
						"There's a Leak in the Bathroom and There's Only One Bedroom, Oh My",
				},
			],
		},
		{
			name: "Question This",
			host: "Brad Sherwood",
			contestants: [
				"Greg Proops",
				"Jonathan Mangum",
				"Wayne Brady",
				"Drew Carey",
			],
			answers: [
				"Sodium",
				"Gonad",
				"Ethiopia",
				"Diamonds",
				"Budapest",
				"Miss Perch",
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Greg Proops", "Brad Sherwood"],
			moderators: ["Colin Mochrie"],
			scene: "A hospital",
			styles: [
				"Film noir",
				"_Jersey Boys_",
				"Six-",
				"Two-word sentences",
				'Every word that has the letter "S" will be substituted by the letter "T"',
				"Keep doing that but in _Jersey Boys_",
			],
		},
	],
};
