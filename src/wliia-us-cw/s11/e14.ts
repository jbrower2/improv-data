import { type Episode } from "../../types/episode";

export const e14: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_19-14",
	airdate: "2023-03-24",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Fitness fanatic who thinks people are pieces of gym equipment",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Wayne's obnoxious conjoined twin who has the hots for everyone",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Bitter mall Santa who is paid for every person he gets to sit on his knee",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Greg Proops"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "One night at a busy hotel lobby",
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: [": Bonnie", "Naddy"],
			scene:
				"Ryan and Colin are two seasoned convicts at a prison workshop and they decide to start a riot to cover their escape",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of College_",
			songs: [
				{
					style: "Flamenco",
					title: "I Have A Useless Degree",
				},
				{
					style: "60's girl group (Phyllis and the Dryers)",
					title: "I'm In Love With A Teacher's Assistant",
				},
			],
		},
	],
};
