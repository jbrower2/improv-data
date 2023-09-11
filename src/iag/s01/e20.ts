import { type Episode } from "../../types/episode.js";

export const e20: Episode<
	| "Drew Carey"
	| "Kathy Kinney"
	| "Jonathan Mangum"
	| "Sean Masterson"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 20,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_20",
	airdate: "2011-05-06",
	host: "Drew Carey",
	performers: [
		"Kathy Kinney",
		"Jonathan Mangum",
		"Sean Masterson",
		"Greg Proops",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Kathy Kinney", "Ryan Stiles"],
			audienceMembers: ["Paul", "Kori"],
			scene: "Garbagemen",
		},
		{
			name: "Kick It",
			performers: ["Greg Proops", "Jonathan Mangum"],
			moderators: ["Ryan Stiles"],
			scene: "An exotic dancer",
		},
		{
			name: "Forward Rewind",
			alternateName: "Forward Reverse",
			performers: ["Drew Carey", "Sean Masterson"],
			moderators: ["Jonathan Mangum"],
			scene: "Air conditioning trade show",
		},
		{
			name: "Mousetraps",
			performers: ["Jonathan Mangum", "Sean Masterson"],
			scene: "Folding laundry",
		},
	],
};
