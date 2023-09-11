import { type Episode } from "../../types/episode";

export const e28: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Rachel Reynolds"
	| "Manuela Arbeláez"
	| "Gwendolyn Osborne"
	| "Bob Derkach"
> = {
	number: 28,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_28",
	airdate: "2011-05-18",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Kathy Kinney",
		"Colin Mochrie",
		"Brad Sherwood",
		"Ryan Stiles",
	],
	guests: ["Rachel Reynolds", "Manuela Arbeláez", "Gwendolyn Osborne"],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Song Styles",
			singers: ["Chip Esten", "Jeff Davis", "Brad Sherwood"],
			about: "Michelle, an accountant",
			styles: ["Country waltz"],
		},
		{
			name: "Moving People",
			alternateName: "Moving Bodies",
			performers: ["Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			movers: ["Rachel Reynolds", "Manuela Arbeláez", "Gwendolyn Osborne"],
			scene: "Fencing",
		},
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Colin Mochrie", "Kathy Kinney"],
			moderators: ["Jeff Davis"],
			scene: "A Las Vegas sightseeing tour",
		},
		{
			name: "Kick It",
			performers: ["Brad Sherwood", "Chip Esten"],
			moderators: ["Colin Mochrie"],
			scene: "A nail tech",
		},
	],
};
