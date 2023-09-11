import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-09",
	airdate: "2005-02-14",
	productionNumber: "296744-7009",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Chip Esten",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Cheesy Mexican troubadour who sings unbelievably insulting songs about the people he serenades",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Panicking Dutch peasant who thinks the openings in people's faces are leaky holes in a dyke",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Recently out-of-the-closet Robin Hood selecting his band of Merry Men and taking them to rob the rich",
				},
			],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"With an angry French mob beneath the window",
				"King Louis XVI",
				"Ryan",
				"his panicking Austrian wife Marie Antoinette",
				"Colin",
				"must escape or face the guillotine",
			],
			lines: [
				"You are the weakest link. Goodbye.",
				"Get your eyeballs out of my cleavage.",
				"Everybody Wang Chung tonight.",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If a _Fear Factor_ episode were done for celebrities",
				"The world's dumbest criminals being caught in the act",
				"Slogans on t-shirts worn by George W. Bush",
				"What you think your fellow cast members should title their autobiographies",
			],
		},
		{
			name: "Song Titles",
			scene: "In the waiting room of a psychiatrist's office",
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Chip Esten", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Janet, who died tragically in a freak Tae Bo accident",
		},
		{
			name: "Props",
			pairs: [
				["Wayne Brady", "Colin Mochrie"],
				["Drew Carey", "Ryan Stiles"],
			],
		},
	],
};
