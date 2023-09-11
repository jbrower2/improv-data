import { type Episode } from "../../types/episode.js";

export const e18: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Chip Esten"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 18,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-18",
	airdate: "2001-12-05",
	productionNumber: "296734-421",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Chip Esten", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Gay Apparel",
			},
			coAnchor: {
				name: "Chip Esten",
				alternateName: "Guiseppe Guisoupy",
				quirk: "Singing (Italian) gondolier whose boat springs a leak",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Yakamito Yakamito Yakamito Jones",
				quirk: "Excited Japanese tourist",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Toulouse Aroundthewaist",
				quirk: "Bigfoot caught on camera and desperate to escape being filmed",
			},
		},
		{
			name: "Title Sequence",
			singers: ["Wayne Brady", "Chip Esten"],
			actors: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			sitcom: "_The Bea Arthur and Brad Pitt Show_",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"What your wife is saying right now",
				"Boy Scout badges we've never heard of",
				"Diet books that didn't exactly fly off the shelves",
				"Strange 900 numbers",
				"Bad racehorse names to call in a race",
			],
		},
		{
			name: "Improbable Mission",
			agents: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Wayne Brady",
			mission:
				'Washing the car (the governor of "Mama-say-mama-sah Ma-ma-poo-sah" needs his 1974 Dodge Dart cleaned for a hot date, go take it, wash it, wax it, buff it, and get it looking all up good all up in it yo)',
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Secret hair transplant](https://whoselineisitanyway.fandom.com/wiki/Secret_Hair_Transplant_Irish_Drinking_Song)",
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Wayne Brady"],
				["Ryan Stiles", "Drew Carey"],
			],
		},
	],
};
