import { type Episode } from "../../types/episode";

export const e15: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Patrick Bristow"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-15",
	airdate: "2006-11-09",
	productionNumber: "296751-8015",
	host: "Drew Carey",
	performers: [
		"Brad Sherwood",
		"Patrick Bristow",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Patrick Bristow",
			guests: [
				{
					name: "Brad Sherwood",
					quirk: "Catty Vegas show girl",
				},
				{
					name: "Colin Mochrie",
					quirk: "Hannibal Lecter",
				},
				{
					name: "Ryan Stiles",
					quirk: "Boisterous drunk in a strip club",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film Theater and Television Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two alligator hunters in the Everglades",
			styles: [
				"Elvis",
				"Horror movie",
				"_South Park_",
				"_Star Trek_",
				"Martial arts movie",
				"_Lone Ranger_",
			],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Oblong Monkeyplaster",
			},
			coAnchor: {
				name: "Ryan Stiles",
				alternateName: "Cheese Slices",
				quirk: "Bad magician",
			},
			sports: {
				name: "Patrick Bristow",
				alternateName: "Turkey Baster",
				quirk: "Emotional actor accepting an award",
			},
			weather: {
				name: "Colin Mochrie",
				alternateName: "Relish Sandalstraps",
				quirk: "Desperate to go to the bathroom",
			},
		},
		{
			name: "Secret",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "Adam and Eve",
			secretLocation: "Under the fig leaf",
		},
		{
			name: "Newsflash",
			anchormen: ["Brad Sherwood", "Patrick Bristow", "Ryan Stiles"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Underwater sports and activities",
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "The mini-market",
		},
	],
};
