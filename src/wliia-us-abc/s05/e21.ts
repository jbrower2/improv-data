import { type Episode } from "../../types/episode";

export const e21: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Jayne Trcka"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 21,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-21",
	airdate: "2003-07-01",
	productionNumber: "296736-611",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Jayne Trcka"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						'Fitness guru demonstrating his exercise techniques on various people in his video "Tighten Your Buns in 2 Minutes"',
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Psychopathic male flight attendant whose anger management thong tightens whenever he loses his temper",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Glamorous Russian female spy using older brother bullying techniques to extract secrets from the others",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Jayne Trcka",
			styles: ["Stadium rock"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"The first verbal exchange between Adam and Eve",
				"Moments when cheerleading is inappropriate",
				"Strange welcome greetings on signs as you enter into different US states",
				"The _Whose Line Is It Anyway?_ shower cam",
			],
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Every photo from the sexy new _Whose Line Is It Anyway?_ calendar",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Group of _Jurassic Park_ raptors setting up a trap and stalking the other guests",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"High school boy who discovers that the camera is a window into the girls showers and wants to get his buddies to look",
				},
			],
		},
		{
			name: "Sportscasters",
			commentators: ["Drew Carey", "Greg Proops"],
			athletes: ["Colin Mochrie", "Ryan Stiles"],
			scene:
				"Two competitive female college roommates have to get showered, dressed, and made up before their dates arrive",
		},
	],
};
