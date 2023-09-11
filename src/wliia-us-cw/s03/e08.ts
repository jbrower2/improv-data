import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Keegan-Michael Key"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Vernon Davis"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-08",
	airdate: "2015-06-12",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Keegan-Michael Key",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Vernon Davis"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Keegan-Michael Key",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Elephant seal on a mating rampage",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Enthusiastic customer who thinks people are massage chairs for him to try out",
				},
				{
					name: "Ryan Stiles",
					quirk: "Talking robot learning human behavior from the other two",
				},
			],
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Vernon",
			styles: ["Nicki Minaj"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Keegan-Michael Key"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Vernon Davis",
			scene:
				"In the 49ers locker room after a big game when flirty female journalist Ryan is interviewing sweaty tight end Vernon who is trying to impress her and suddenly star quarterback Wayne comes out of the shower to show that he is the manliest man on the team",
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Keegan", "Vernon"],
			scene:
				"A married couple getting ready for a night of passion when suddenly a nearby river bursts its banks and the loving couple have to flee their house",
		},
	],
};
