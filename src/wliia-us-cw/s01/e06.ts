import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Wilson Bethel"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_9-06",
	airdate: "2013-08-06",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Wilson Bethel"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Ken Youdigit",
			},
			coAnchor: {
				name: "Gary Anthony Williams",
				alternateName: "Crudley",
				quirk: "Upbeat old Cajun musician who is hard to understand",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Wackley Booley",
				quirk: "An entire episode of _Oprah's Favorite Things_",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Sonny",
				quirk:
					"Grotesque hostile alien posing as a weatherman, whose disguise is wearing off",
			},
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Wilson",
			styles: ["Motown"],
		},
		{
			name: "Sideways Scene",
			performers: ["Colin Mochrie", "Gary Anthony Williams", "Wayne Brady"],
			scene:
				"Colin and Gary are two bickering buddy cops who've been suspended from duty for being out of shape, so Wayne enters as the show-off police fitness coach who's come in to force them to exercise",
			styles:
				"A _Paranormal Activity_ movie, A penguin documentary, _America's Best Dance Crew_",
		},
		{
			name: "Three-Headed Broadway Star",
			alternateName: "Three-Headed Song",
			singers: ["Wayne Brady", "Ryan Stiles", "Wilson Bethel"],
			musicians: "Laura and Linda",
			song: "I Can't Live Without Your Rubber Ducky",
		},
		{
			name: "Helping Hands",
			performers: [
				"Wilson Bethel",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is a senior doctor in a small town in Alabama, and he's teaching medical student Wilson about medical stuff",
		},
	],
};
