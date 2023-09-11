import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Candice Patton"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-06",
	airdate: "2020-05-04",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Candice Patton"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt at a gas station",
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Nancy", "Courtney"],
			scene:
				"Two cops testing out different weapons at a gun range get a call to go and deal with trouble at a biker rally",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Candice",
			styles: ["Hip hop"],
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Colin Mochrie", "Jeff Davis", "Wayne Brady"],
			scene: "Arguing about dinner plans",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If farmers only spoke in innuendos",
				"Bad ways to break up with your partner",
				"If popular TV shows were performed by dogs",
				"Terrible ways to lighten the mood",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Jail_",
			songs: [
				{
					style: "Techno",
					title: "License Plates and Cigarettes",
				},
				{
					style: "Early jazz",
					title: "Conjugal Visit",
				},
			],
		},
	],
};
