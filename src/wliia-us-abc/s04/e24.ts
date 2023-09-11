import { type Episode } from "../../types/episode";

export const e24: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Hugh Hefner"
	| "Ava Fabian"
	| "Victoria Fuller"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 24,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-24",
	airdate: "2002-01-31",
	productionNumber: "296735-508",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Hugh Hefner", "Ava Fabian", "Victoria Fuller"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Award Show",
			presenters: ["Brad Sherwood", "Wayne Brady"],
			winners: ["Colin Mochrie", "Ryan Stiles"],
			for: "Obnoxious drunks",
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Hugh Hefner, and Playmates Ava Fabian and Victoria Fuller",
			styles: ["Swing"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Superman's secret inner thoughts",
				"Things you did as a child that aren't as cute when you're an adult",
				"If celebrities had been the first people to walk on the moon",
				"Inappropriate slideshows that your neighbors make you sit through",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Ava", "Victoria"],
			scene:
				"Two treasure hunters canoeing down the Amazon decide to pitch their tents by the river, when they come under attack from the natives",
		},
		{
			name: "Props",
			pairs: [
				["Drew Carey", "Ryan Stiles"],
				["Wayne Brady", "Brad Sherwood"],
			],
		},
	],
};
