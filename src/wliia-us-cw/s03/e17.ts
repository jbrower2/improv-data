import { type Episode } from "../../types/episode";

export const e17: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Bill Nye"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-17",
	airdate: "2015-08-31",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Bill Nye"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Han Soloittouchestheground",
			},
			coAnchor: {
				name: "Greg Proops",
				alternateName: "Mr. Wickwell",
				quirk:
					"Enthusiastic fashion show host, bitching about Colin's appearance",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Starno DeMayo",
				quirk:
					"Excited female shopper on Black Friday who thinks other people's clothes are in the sale",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Colin Mochrie's entire life flashing before our eyes",
			},
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Greg Proops"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Inside a sausage factory",
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Bill Nye",
			styles: ["50s rockabilly"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad times to break into a song and dance number",
				"Things you don't want to hear when taking your clothes off for the doctor",
				"Inappropriate times to give someone a kiss",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Bill Nye",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"The tough head astronaut on the International Space Station teaching new science officer Bill Nye all about living in space",
		},
	],
};
