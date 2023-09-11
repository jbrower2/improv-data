import { type Episode } from "../../types/episode";

export const e12: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Nyima Funk"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Shawn Johnson"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_9-12",
	airdate: "2013-09-24",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Nyima Funk", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Shawn Johnson"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"If _Sesame Street_ characters appeared on other shows",
				"Tattoos that you don't want to discover on a new partner's body",
				"The spells Harry Potter tries when he thinks no one is looking",
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Nyima Funk"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Sideways Scene",
			performers: ["Colin Mochrie", "Nyima Funk", "Wayne Brady"],
			scene:
				"Flirtatious handyman Colin is painting the apartment of sexy housewife Nyima, Wayne, Nyima's gangster husband, arrives to find the door locked",
			styles: "_Harry Potter_ movie, _King Kong_",
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Nyima", "Shawn"],
			scene:
				"Frisky newlyweds enjoying the amenities of their luxury RV before exploring Yellowstone National Park",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Plumber_",
			songs: [
				{
					style: "Rockabilly",
					title: "Snake It",
				},
				{
					style: "Hawaiian",
					title: "My Husband's Home",
				},
			],
		},
	],
};
