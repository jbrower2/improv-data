import { type Episode } from "../../types/episode.js";

export const e22: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 22,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-22",
	airdate: "2001-03-15",
	productionNumber: "296722-328",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Superheroes",
			crisis: "No teleprompters",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Presidential Candidate Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Toddler Doing Everything for the First Time Boy",
				},
				{
					name: "Chip Esten",
					superpower: "The Mosh Pit Kid",
				},
				{
					name: "Wayne Brady",
					superpower: "Can't Control His Stallion Man",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Trish", "Melissa"],
			scene:
				"Ship's captain Ryan and his new bride Colin are getting romantic in their cabin on the _Titanic_ moments before it hits the iceberg",
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Chip Esten", "Colin Mochrie"],
			musicians: "Laura and Linda",
			to: "Allie",
			song: "You've Got a Beautiful Bald Spot",
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"With the Philistine army approaching",
				"Samson",
				"Colin",
				"is furious with Delilah",
				"Ryan",
				"for cutting off his hair",
			],
			lines: [
				"Hold me close and call me Ginger.",
				"Aren't you hot in that wetsuit?",
				"Boy, I'm still hammered from last night.",
				"Hop on, I'll show you what this baby can do.",
			],
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Got mugged](https://whoselineisitanyway.fandom.com/wiki/Got_Mugged_Irish_Drinking_Song)",
		},
		{
			name: "Helping Hands",
			performers: [
				"Drew Carey",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is an angry football coach trying to inspire his quarterback, Drew, at halftime",
		},
	],
};
