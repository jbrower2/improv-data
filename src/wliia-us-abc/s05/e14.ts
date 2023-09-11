import { type Episode } from "../../types/episode";

export const e14: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-14",
	airdate: "2003-01-24",
	productionNumber: "296735-513",
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
						"The amazing Italian acrobatic circus family and their world famous stool act",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Backwoods farmer helping his prized cows Wayne & Ryan through difficult multiple births",
				},
				{
					name: "Ryan Stiles",
					quirk: "Performing _Drew Carey - The Musical_",
				},
			],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			dubber: "Wayne Brady",
			audienceMember: "Galen",
			scene:
				"Ryan is the leader of the Puerto Rican gang The Sharks and he is outraged when he finds his beautiful girlfriend Maria, Galen, flirting with the leader of The Jets, Colin, on a playground in Spanish Harlem",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Besides an athletic event and a criminal getaway, times when people run as fast as they can",
				"Bad segues following tragic news stories",
				"Phrases that just don't sound right when a cheesy announcer says them",
				"Things you shouldn't do while standing in a police lineup",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Rome_",
			songs: [
				{
					style: "Tex-Mex",
					title: "You Brought Her, You Caesar",
				},
				{
					style: "The Offspring",
					title: "Pinched in the Piazza",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Drew Carey", "Ryan Stiles"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
	],
};
