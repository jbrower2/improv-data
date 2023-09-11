import { type Episode } from "../../types/episode";

export const e17: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-17",
	airdate: "2005-03-28",
	productionNumber: "296744-7017",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"During a foxhunt, the lady of the manor, Kathy, accidentally shoots sexy stable boy Ryan; as she is removing the buckshot from his rear end, her dashing, jealous fiancee Lord Wayne rides in with the horses and hounds",
			notes: [
				"Do it like you're Vegas magicians",
				"Do it like a horror movie",
				"Do it like catalog models",
				"Do it like a dominatrix and her clients",
			],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			dubber: "Wayne Brady",
			audienceMember: "Megan",
			scene:
				"In a 1930s speakeasy, mobster Colin starts hitting on Megan, a sexy nightclub entertainer, when her boyfriend, rival mobster Ryan, bursts in",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad times to take off your pants",
				"Weird things to time",
				"Unfortunate moments to become nauseous",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of Paris_",
			songs: [
				{
					style: "Aerosmith",
					title: "My Tower Is an Eiffel",
				},
				{
					style: "Greek",
					title: "Fifty Ways to Louvre Your Lover",
				},
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Kathy Greenwood", "Drew Carey"],
			translators: ["Colin Mochrie", "Ryan Stiles"],
			languages: ["Japanese"],
			film: "_Ramen Aplenty_",
		},
	],
};
