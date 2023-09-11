import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Darren Criss"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-04",
	airdate: "2014-04-04",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Greg Proops"],
	guests: ["Darren Criss"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Greg and Jeff are two pilots flying a plane when a storm hits, Wayne enters as a terrified passenger who's being attacked by some escaped snakes",
			notes: [
				"Do it as Elvis Presley (Greg), Christopher Walken (Jeff), James Brown (Wayne)",
				"Do it like you're evangelists",
			],
		},
		{
			name: "Props",
			pairs: [
				["Greg Proops", "Jeff Davis"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Greg Proops"],
			dubber: "Colin Mochrie",
			dubbed: "Darren Criss",
			scene:
				"Street criminal Greg is being arrested by robot cop Darren, who starts to wildly malfunction, and then Wayne enters as Darren's robot cop rival who tries to bring both of them under control",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say about your computer, but not your partner",
				"Unlikely greeting card messages",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Jeff Davis"],
			salesmen: ["Greg Proops", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Kindergarten_",
			songs: [
				{
					style: "Big band",
					title: "I Just Peed During Naptime",
				},
				{
					style: "Kanye West and Neil Diamond",
					title: "I'm Pullin' Sally's Pigtails",
				},
			],
		},
	],
};
