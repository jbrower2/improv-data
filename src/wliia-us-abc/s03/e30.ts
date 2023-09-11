import { type Episode } from "../../types/episode";

export const e30: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 30,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-30",
	airdate: "2001-04-27",
	productionNumber: "296722-334",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan and Wayne are two motorists who run into each other while parking, Brad's a police officer who arrives at the scene",
			notes: [
				"Do your own stunts, in slow motion",
				"Do it like frat boys, naked",
				"Do everything passionately",
			],
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Kim, a giant sea otter at the Long Beach Aquarium",
			styles: ["Vaudeville"],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Diane", "Gloria"],
			scene:
				"Colin is the Scottish owner of Jurassic Park, Ryan is the scientist who realizes things are going terribly wrong",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie"],
			musicians: "Laura and Linda",
			to: "Shauna from the audience",
			song: "Whenever I See Your Warts",
		},
		{
			name: "Quick Change",
			performers: ["Colin Mochrie", "Brad Sherwood", "Ryan Stiles"],
			moderators: ["Drew Carey"],
			scene:
				"Colin is a woman in labor, Brad is the doctor, and Ryan enters as the anxious father",
		},
	],
};
