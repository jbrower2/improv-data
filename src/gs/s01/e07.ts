import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Jeff Davis"
	| "Greg Proops"
	| "Jonathan Mangum"
	| "Sean Masterson"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Green_Screen_07",
	airdate: "2005-10-03",
	host: "Drew Carey",
	performers: [
		"Brad Sherwood",
		"Colin Mochrie",
		"Jeff Davis",
		"Greg Proops",
		"Jonathan Mangum",
		"Sean Masterson",
	],
	games: [
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Jeff Davis", "Jonathan Mangum"],
			moderators: ["Greg Proops"],
			scene: "Tahiti",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Jeff Davis", "Brad Sherwood"],
			audienceMembers: ["Brian", "Mel"],
			scene: "Dangerous mission into space",
		},
		{
			name: "Filler Clip",
			performers: ["Jeff Davis", "Sean Masterson", "Brad Sherwood"],
			scene: "My cat, Boogie Oogie Oogie",
		},
		{
			name: "Hollywood Moments",
			performers: ["Greg Proops", "Sean Masterson", "Drew Carey"],
			moderators: ["Jonathan Mangum"],
			scene: "Hurricane",
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Styles",
			performers: ["Brad Sherwood", "Jonathan Mangum"],
			moderators: ["Jeff Davis"],
			scene: "Nurse and patient",
			styles: [
				"Western",
				"Dr. Seuss",
				"Edgar Allan Poe",
				"Elementary school play",
				"Indian Dr. Seuss",
			],
		},
	],
};
