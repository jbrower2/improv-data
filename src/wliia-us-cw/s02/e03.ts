import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Nyima Funk"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Verne Troyer"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-03",
	airdate: "2014-03-28",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Nyima Funk", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Verne Troyer"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Nyima Funk",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Aggressive fashion cop arresting people and interrogating them back at the station",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Extremely embarrassed sex-education teacher using people for demonstrations",
				},
				{
					name: "Ryan Stiles",
					quirk: "Newborn baby looking for the perfect breast",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Mags", "Marty"],
			scene:
				"Ryan is a dentist and Colin is his flirtatious assistant and they're working on a patient when suddenly they have to flee to safety when the clinic is attacked by robots from the future",
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Verne",
			styles: ["Hip-hop video"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Nyima Funk"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Nyima", "Verne"],
			scene:
				"Indiana Jones, played by Ryan, and his girlfriend Colin wake up in their tent before travelling through the jungle to an abandoned Aztec to look for treasure",
		},
	],
};
