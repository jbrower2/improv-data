import { type Episode } from "../../types/episode";

export const e18: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 18,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-18",
	airdate: "2007-12-13",
	productionNumber: "296751-8016",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Wayne is a gangster boss who has been shot and staggers into the emergency room, where he forces surgeon Ryan to extract the bullets, Jeff is a mob hitman who bursts in, gun in hand, determined to finish him off",
			notes: [
				"Do it like you're headlining Las Vegas performers",
				"Do it like a Swedish porn movie",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Holed up in a shack surrounded by outlaws",
				"Lone Ranger Colin",
				"Ryan",
				"Tonto",
				"try to work out a plan",
			],
			lines: [
				"Kiss me, baby, you look great.",
				"Don't eat yellow snow.",
				"Why do men have nipples?",
			],
		},
		{
			name: "Two-Line Vocabulary",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Colin is the mastermind behind Jurassic Park, and he's briefing his park workers, Ryan and Wayne, because the dinosaurs have escaped and have gone on a rampage",
			lines: [
				{
					name: "Wayne Brady",
					lines: ["What do you want me to do?", "That's not my thing."],
				},
				{
					name: "Ryan Stiles",
					lines: ["What's that?", "Are you mad?"],
				},
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Jeff Davis", "Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Norway_",
			songs: [
				{
					style: "Johnny Cash",
					title: "A Boy Named Hagar",
				},
				{
					style: "The Temptations, and it keeps getting faster",
					title: "Norway's Lovely, Rather Be in Greece",
				},
				{
					style: "Ska",
					title: "Small Small Hole, Big Big Fish",
				},
			],
		},
		{
			name: "World's Worst",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Person to be a member of the armed forces"],
		},
	],
};
