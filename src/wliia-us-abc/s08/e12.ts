import { type Episode } from "../../types/episode.js";

export const e12: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-12",
	airdate: "2006-11-06",
	productionNumber: "296751-8014",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Fashion Models",
			commentators: ["Brad Sherwood"],
			models: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			job: "Cowboy",
		},
		{
			name: "Number of Words",
			scene:
				"From _Charlie's Angels_, Bosley, who's Colin, has been taken hostage by an evil villainess, Wayne, two of Charlie's Angels, Brad and Ryan, arrive to rescue him",
			performers: [
				{
					name: "Colin Mochrie",
					words: 5,
				},
				{
					name: "Wayne Brady",
					words: 3,
				},
				{
					name: "Brad Sherwood",
					words: 2,
				},
				{
					name: "Ryan Stiles",
					words: 4,
				},
			],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Brad Sherwood", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Carol, who died tragically in a freak gardening accident",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"What Olympic medalists are really thinking while they're listening to the National Anthem",
				'Times when "Eeny, meeny, miny, moe" is not an appropriate selection method',
				"Things the pilot wishes he hadn't said when the intercom was on",
				"Things that shouldn't have ejector seats",
			],
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Fight sequence from _Crouching Tiger, Hidden Dragon_",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Lost bloodhound trying to find his owner from the scent of a pair of their underpants that he's found",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"The finalists competing in the different rounds of the World's Sexiest Hillbilly pageant",
				},
			],
		},
		{
			name: "Bartender",
			bartender: "Brad Sherwood",
			musicians: ["Laura Hall", "Linda Taylor"],
			performers: [
				{
					name: "Wayne Brady",
					quirk: "Celebrating his wedding",
				},
				{
					name: "Colin Mochrie",
					quirk: "Angry because he's an alcoholic",
				},
			],
		},
		{
			name: "Quick Change",
			performers: ["Ryan Stiles", "Colin Mochrie", "Brad Sherwood"],
			moderators: ["Drew Carey"],
			scene:
				"Colin and Brad are dangerous poachers and they're caught by park ranger Ryan",
		},
	],
};
