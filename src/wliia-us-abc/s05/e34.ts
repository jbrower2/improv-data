import { type Episode } from "../../types/episode.js";

export const e34: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 34,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-34",
	airdate: "2003-09-05",
	productionNumber: "296736-604",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"A town sheriff in the Old West, Ryan, has finally caught the fugitive gunslinger, Chip, and he throws him in jail, Wayne is a member of the gang who shows up to break him out",
			notes: [
				"Do it like you're falling in love with each other",
				"Put in some product testimonials",
			],
		},
		{
			name: "Improbable Mission",
			agents: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Wayne Brady",
			mission:
				"Shopping at the grocery store (The Prime Minister of Eat-All-You-Can is starving. If they do not, he shall perish, and Sally Struthers will bring little kids to their door and make them feel very, very bad about themselves.)",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad times to use the athletic butt-slap",
				"Topics of discussion that always ruin a dinner party",
				"What the _Whose Line?_ cast will ask Santa for this Christmas",
				"Things that your waitress says to you that can be misconstrued as sexual",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Chip Esten", "Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Pregnancy_",
			songs: [
				{
					style: "Elvis",
					title: "Screw Lamaze, Give Me the Epidural",
				},
				{
					style: "KISS",
					title: "Oooh, Placenta!",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Drew Carey"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
	],
};
