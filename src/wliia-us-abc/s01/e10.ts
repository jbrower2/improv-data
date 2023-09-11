import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-10",
	airdate: "1999-01-06",
	productionNumber: "296717-117",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Questions Only",
			scenes: ["In a daytime soap opera"],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Sheila, an attorney for the INS",
			styles: ["Gospel"],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Denny Siegel"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "60s beach party",
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene:
				"An eastern European Olympic gymnast and he needs a perfect 10 in all his routines",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Denny Siegel",
				alternateName: "Fifi Leadbottom",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Ripley Back",
				quirk: "The anchor has spread rumors about their disastrous date",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Ripley Arm",
				quirk: "Caught in the middle of a busy freeway",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Just Ripley",
				quirk: "Frankenstein's monster looking for a mate",
			},
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "Earthquake",
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Blind date](https://whoselineisitanyway.fandom.com/wiki/Blind_Date_Hoedown_(US_1-10))",
		},
	],
};
