import { type Episode } from "../../types/episode.js";

export const e33: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 33,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-33",
	airdate: "2000-04-27",
	productionNumber: "296718-214",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Colin Themarines",
			},
			coAnchor: {
				name: "Chip Esten",
				alternateName: "Smiley Dick",
				quirk: "High-energy game show host",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Wink Winkley",
				quirk: "Sadistic Marine drill sergeant",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Happy",
				quirk: "Gets hit in the crotch with a football",
			},
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "_The Exorcist_",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Chip Esten"],
				["Wayne Brady", "Colin Mochrie"],
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Chip Esten"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Arabian Nights / Belly Dancing",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Chip Esten"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Doctor_",
			songs: [
				{
					style: "Devo",
					title: "HMO",
				},
				{
					style: "Rodgers and Hammerstein",
					title: "Take Two and Call Me in the Morning",
				},
				{
					style: "Chubby Checker",
					title: "Cough While I Twist",
				},
			],
		},
		{
			name: "Questions Only",
			performers: ["Drew Carey", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Desperate soldiers trapped behind enemy lines"],
		},
	],
};
