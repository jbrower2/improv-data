import { type Episode } from "../../types/episode";

export const e15: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Cornelius Smith Jr."
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_14-15",
	airdate: "2018-09-03",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Cornelius Smith Jr."],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Sven Dovescry",
			},
			coAnchor: {
				name: "Jeff Davis",
				alternateName: "Wally",
				quirk: "Enthusiastic squeegee guy who thinks Colin is a car",
			},
			sports: {
				name: "Ryan Stiles",
				quirk: "'The Wizard of Oz' in 30 seconds",
			},
			weather: {
				name: "Wayne Brady",
				alternateName: "Stormy Weather",
				quirk: "Manic ad man selling the entire audience",
			},
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Cornelius",
			styles: ["Beastie Boys"],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Cornelius"],
			scene:
				"Two pirates on the high seas relaxing on their ship when they spy a Spanish galleon ripe for plunder",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"The world's worst commercials",
				"Hitchhikers you wouldn't want to give a ride to",
				"Love songs that will instantly kill the mood",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Cornelius Smith Jr.",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a flirtatious mother meeting her future son-in-law Cornelius for the first time whilst preparing desserts for him",
		},
	],
};
