import { type Episode } from "../../types/episode.js";

export const e12: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-12",
	airdate: "2001-10-25",
	productionNumber: "296722-337",
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
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Oswald Thatendswald",
			},
			coAnchor: {
				name: "Kathy Greenwood",
				alternateName: "Janine Genue",
				quirk:
					"Whiny girlfriend from a 1930s gangster movie who thinks Colin is her mob boss boyfriend",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Jose Canyousee",
				quirk:
					"Female Russian weightlifter trying to impress an American man with her strength",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Cole Front",
				quirk:
					"Increasingly desperate Prince Charming using his own shoe as the slipper",
			},
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Ingrid, a detective with the police department",
			styles: ["80s rock anthem"],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Kathy Greenwood"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Riding on roller coasters",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Race Car Driver_",
			songs: [
				{
					style: "Dixieland",
					title: "Axle Grease Rag",
				},
				{
					style: "Police",
					title: "Errrrrt Bang!",
				},
				{
					style: "Lambada",
					title: "Two Laps to Go",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Got arrested](https://whoselineisitanyway.fandom.com/wiki/Got_Arrested_Hoedown_(US_4-12))",
		},
	],
};
