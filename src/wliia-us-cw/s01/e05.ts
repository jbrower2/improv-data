import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "US Olympic Synchronized Swimming Team"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_9-05",
	airdate: "2013-07-30",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	guests: ["US Olympic Synchronized Swimming Team"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Two criminals cutting through an electrified barbed-wire fence to break into a warehouse, Wayne is a security guard who arrives in a Jeep full of guard dogs to stop them",
			notes: ["Do it like frat boys", "Do it sexy"],
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Mary Killman and Mariya Koroleva",
			styles: ["A boy band"],
		},
		{
			name: "Forward Rewind",
			scene:
				"Colin and Wayne are snowboarders performing crazy stunts when Wayne wipes out disastrously, Ryan is the fearless paramedic who arrives on his snowmobile, Jeff is Wayne's distraught girlfriend who skis to his aide",
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["US Olympic Synchronized Swimming Team"],
			scene:
				"Two adventurers hacking their way through a snake-infested jungle, when night falls, they make camp",
		},
		{
			name: "Sideways Scene",
			performers: ["Wayne Brady", "Colin Mochrie", "Jeff Davis"],
			scene:
				"Jeff is a seductive housewife who has invited hunky electrician Colin over to fix the light on her ceiling, and Wayne is the husband who comes home unexpectedly in the middle of a storm",
			styles: "A _Twilight_ movie, Kung fu film, Disaster film",
		},
	],
};
