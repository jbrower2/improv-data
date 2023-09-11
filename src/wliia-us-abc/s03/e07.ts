import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-07",
	airdate: "2000-11-02",
	productionNumber: "296722-304",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Wes Fiwwingmoretaste",
			},
			coAnchor: {
				name: "Jeff Davis",
				alternateName: "Manny Girl",
				quirk: "Horserace announcer",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Reggae Jackson",
				quirk:
					"Jamaican love god reporting live from a bedroom, where he's on a hot date",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Lamont Estsurlatable",
				quirk:
					"Knows his wife is at home cheating on him, and he's not gonna take it anymore",
			},
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If famous movie lines included product plugs",
				"What cows are thinking when being milked",
				"If you celebrated mundane events as if you scored a touchdown",
				"Entries in Drew Carey's diary",
				"What our audience is thinking right now",
				"Unusual uses for your cat",
			],
		},
		{
			name: "Party Quirks",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Hopelessly outclassed tag team wrestler",
				},
				{
					name: "Colin Mochrie",
					quirk: "Posing for _Playboy_ magazine",
				},
				{
					name: "Ryan Stiles",
					quirk: "Series of animals crossing thin ice",
				},
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Jeff Davis"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Taxi Driver_",
			songs: [
				{
					style: "Bee Gees",
					title: "I Can't Pronounce the Driver's Name",
				},
				{
					style: "50s rock and roll",
					title: "Hey, I Think We're Going in Circles",
				},
				{
					style: "Punk",
					title: "Your Air Freshener Smells Like Crap",
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[The Beach](https://whoselineisitanyway.fandom.com/wiki/Beach_Hoedown_(US_3-07))",
		},
	],
};
