import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-10",
	airdate: "2002-12-06",
	productionNumber: "296735-504",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Stage hypnotist who uses his butt to hypnotize people",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Abrasive coach looking for new members to train for his all-women wrestling team",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Secretly setting up an erotic 24-hour webcam on stage and is surreptitiously trying to include the others in his broadcast",
				},
			],
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "_Top Gun_",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Deborah", "Corina"],
			scene:
				"Two gung-ho astronauts who take off on a rescue mission to save an international space station orbiting Mars, but when they get there they discover that the station has been taken over by deadly aliens",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Ending a long-term relationship in song",
				"Things you've always wanted to say to the audience at home",
				"When a kiss is completely out of line",
				"Unusual ways for your optometrist to test your vision",
			],
		},
		{
			name: "World's Worst",
			performers: ["Greg Proops", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Psychiatrist"],
		},
	],
};
