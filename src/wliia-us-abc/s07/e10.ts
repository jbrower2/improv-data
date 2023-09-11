import { type Episode } from "../../types/episode";

export const e10: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-10",
	airdate: "2005-02-14",
	productionNumber: "296744-7010",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan is an Old West engineer driving a train carrying gold bullion and Wayne is a bandit riding up to rob it, Greg is the whip-wielding Southern owner of the train who comes in to save the day",
			notes: [
				"Do it like a Hong Kong action film where you're doing your own subtitles",
				"Do the scene with as much sexual innuendo as you can",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad times to be distracted by a beautiful woman",
				"Making mundane instructions sound sexy",
				"What President Bush does in the Oval Office when he's all by himself",
				"Things you can say about the food you eat, but not about your girlfriend",
			],
		},
		{
			name: "African Chant",
			singer: "Wayne Brady",
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Julia, who teaches dance",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Mimi", "Lola"],
			scene:
				"James Bond, Ryan, and his beautiful accomplice Tiffany, Colin, are settling down for a romantic encounter in an alpine chalet when they're surprised by enemy agents",
		},
		{
			name: "Fashion Models",
			commentators: ["Greg Proops"],
			models: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			job: "Sewer worker",
		},
	],
};
