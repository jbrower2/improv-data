import { type Episode } from "../../types/episode.js";

export const e18: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 18,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-18",
	airdate: "2000-01-06",
	productionNumber: "296718-225",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Superheroes",
			crisis: "Mosquitoes",
			performers: [
				{
					name: "Brad Sherwood",
					superpower: "Super Rabbi",
				},
				{
					name: "Ryan Stiles",
					superpower: "Deathly Afraid of Everything Man",
				},
				{
					name: "Colin Mochrie",
					superpower: "Captain Cliche",
				},
				{
					name: "Wayne Brady",
					superpower: "Uncoordinated Go-Go Girl",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Colin comes out of his house to find that Ryan, a truck driver, is dumping nuclear waste in his backyard",
			styles: ["Soap opera", "Student film", "Animal Planet", "_South Park_"],
		},
		{
			name: "Song Titles",
			scene: "In Las Vegas",
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "An ice hockey star arriving at the stadium for the big game",
		},
		{
			name: "Telethon",
			hosts: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			topic: "Sitcom stars",
			celebrities: [
				{
					name: "Brad Sherwood",
					celebrities: [
						"Bruce Springsteen",
						"Mick Jagger",
						"The guy from the B52s",
					],
				},
				{
					name: "Wayne Brady",
					celebrities: [
						"Stevie Wonder",
						"Louis Armstrong",
						"Lt. Uhura from _Star Trek_",
						"Bill Cosby",
					],
				},
			],
		},
		{
			name: "Three-Headed Broadway Star",
			singers: ["Wayne Brady", "Drew Carey", "Ryan Stiles"],
			musicians: "Laura and Linda",
			musical: "_Stretchmarks_",
			song: "These Aren't My Hips",
		},
	],
};
