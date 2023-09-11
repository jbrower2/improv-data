import { type Episode } from "../../types/episode";

export const e28: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Karen Maruyama"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 28,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-28",
	airdate: "2000-03-16",
	productionNumber: "296718-217",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Karen Maruyama", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Questions Only",
			scenes: ["A soap opera set in a plastic surgeon's office"],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Shanelle, a Polynesian dancer",
			styles: ["Love song that speeds up"],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene:
				"On the day before her wedding, Colin, an overweight bride-to-be, realizes she doesn't fit into her dress, desperate, she goes to an exercise club",
		},
		{
			name: "Newsflash",
			anchormen: ["Karen Maruyama", "Ryan Stiles"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "_The Valley of Gwangi_ (1969) (cowboys and dinosaurs)",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Circus acts that didn't make it",
				"What penguins are really thinking",
				"Unlikely ways to impress women",
				"Bizarre ways to describe the taste of a wine",
				"People you wouldn't want to meet at a nudist colony",
				"Dangerous things to do while driving",
				"Strange causes to raise money for",
				"Things that would cause a Drew Carey spit take",
			],
		},
		{
			name: "Motown Group",
			singers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			song: "Taking out the trash",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Karen Maruyama", "Drew Carey"],
			translators: ["Colin Mochrie", "Ryan Stiles"],
			languages: ["German"],
			film: "_Sausages_",
		},
	],
};
