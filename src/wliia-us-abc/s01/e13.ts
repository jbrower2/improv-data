import { type Episode } from "../../types/episode";

export const e13: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-13",
	airdate: "1999-01-27",
	productionNumber: "296717-120",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Questions Only",
			scenes: ["Trouble breaks out in a Wild West saloon"],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Marie, who likes to do step aerobics",
			styles: ["Prince"],
		},
		{
			name: "Dead Bodies",
			actor: "Colin Mochrie",
			bodies: ["Ryan Stiles", "Denny Siegel"],
			audienceMember: "Mary",
			scene:
				"Deleted from _The Graduate_, Mrs Robinson is seducing Benjamin when her daughter comes in",
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene:
				"A hairdresser on a busy day and his colleagues have all phoned in sick",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Denny Siegel",
				alternateName: "Ling Ling",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Rusty Nail",
				quirk: "Acting out scenes from a soap opera",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Rusty Bumper",
				quirk: "A middle-aged woman who's proud of her body",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Rusty Can",
				quirk: "Tarzan sensing his woman is in danger",
			},
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Birth](https://whoselineisitanyway.fandom.com/wiki/Birth_Hoedown_(US_1-13))",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit and Bend",
			performers: ["Drew Carey", "Ryan Stiles", "Colin Mochrie"],
			scene:
				"Drew and Ryan, two Cleveland Indians fans, have turned up at the big game to find that Colin, a rival fan, is sitting in Ryan's seat",
		},
	],
};
