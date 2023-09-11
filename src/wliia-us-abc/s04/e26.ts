import { type Episode } from "../../types/episode";

export const e26: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anne King"
> = {
	number: 26,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-26",
	airdate: "2002-02-12",
	productionNumber: "296734-404",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Yasser Yasser Threebagsfull",
			},
			coAnchor: {
				name: "Greg Proops",
				quirk: "The dominatrix that Colin has hired for the evening",
			},
			sports: {
				name: "Wayne Brady",
				quirk:
					"Outraged secretary desperate to find out who left a photocopy of their butt in her in tray",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "About to die, his whole life flashes before our eyes",
			},
		},
		{
			name: "Hats",
			topic: "World's worst dating service video",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
			album: "_Songs of College_",
			songs: [
				{
					style: "Ska",
					title: "Rah Rah Rah, Ska Rah Rah",
				},
				{
					style: "Cuban",
					title: "Alma Mater, Alma Fadder",
				},
			],
		},
		{
			name: "Film Dub",
			performers: ["Greg Proops", "Colin Mochrie", "Ryan Stiles"],
			scene: "Celebrating a special occasion",
		},
		{
			name: "Show-Stopping Number",
			performers: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			scene: "Toll booth",
		},
		{
			name: "World's Worst",
			performers: ["Greg Proops", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["Priest or rabbi"],
		},
	],
};
