import { type Episode } from "../../types/episode";

export const e16: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-16",
	airdate: "1999-02-17",
	productionNumber: "296717-121",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Superheroes",
			crisis: "Bad wallpaper",
			performers: [
				{
					name: "Brad Sherwood",
					superpower: "Body and Paint Man",
				},
				{
					name: "Ryan Stiles",
					superpower:
						"Just Back from the Dentist After Invasive Root Canal Surgery Man",
				},
				{
					name: "Colin Mochrie",
					superpower: "The Exhibitionist Kid",
				},
				{
					name: "Wayne Brady",
					superpower: "Captain Breakdance",
				},
			],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Harry Hindquarters",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Chester Buttocks",
				quirk: "Thinks he's in a confessional",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "David Derriere",
				quirk: "Delivering the sports from underwater",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Garrison Tush",
				quirk: "Lost toddler looking for his mommy",
			},
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Playing too hard with the puppy",
				"If Carol Channing were president",
				"German pick up lines",
				"Least likely person to wind up on a stamp",
				"Famous last words",
				"If dogs could talk",
				"Least popular college courses",
				"Unlikely Olympic events",
				"People who shouldn't rap",
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Brad Sherwood", "Wayne Brady"],
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall"],
			album: "_Songs of the Exterminator_",
			songs: [
				{
					style: "Big band instrumental",
					title: "Snarky, the Mouse with PMS",
				},
				{
					style: "80s rock",
					title: "They're in the Walls",
				},
				{
					style: "Lounge",
					title: "Rat's Life",
				},
			],
		},
		{
			name: "Helping Hands",
			alternateName: "Hands Through",
			performers: [
				"Drew Carey",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a highly-strung entertainer at a child's party trying to entertain birthday boy Drew",
		},
	],
};
