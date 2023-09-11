import { type Episode } from "../../types/episode";

export const e21: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 21,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-21",
	airdate: "2001-12-19",
	productionNumber: "296734-409",
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
			name: "Meet the Family",
			father: {
				name: "Colin Mochrie",
				quirk: "Dustin Hoffman from _Rain Man_",
			},
			mother: {
				name: "Ryan Stiles",
				quirk: "A dominatrix",
			},
			scene:
				"Kathy is home with her fiancee Wayne, who is about to meet Kathy's parents for the first time",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			song: "When You're a Goat, You're a Goat All the Way",
			styles: ["_West Side Story_"],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Rhett Arittleoutaroundthewaist",
			},
			coAnchor: {
				name: "Kathy Greenwood",
				alternateName: "Trixie",
				quirk: "Clueless teenage girl on the phone to her friends",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Sporty",
				quirk:
					"Haitian man who's been unfaithful and is now the victim of a voodoo attack",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Gunter Dosomethingamusing",
				quirk:
					"Discovers that his weather map covers the gates of Hell and is desperate to keep them shut",
			},
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Teacher_",
			songs: [
				{
					style: "Surf",
					title: "Workin' 9 to 2",
				},
				{
					style: "Sting",
					title: "Scaring the Substitute",
				},
				{
					style: "Big band",
					title: "Faculty Lounge Fling",
				},
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Drew Carey", "Kathy Greenwood"],
			translators: ["Ryan Stiles", "Colin Mochrie"],
			languages: ["Vietnamese"],
			film: "_The Rice Paddy_",
		},
	],
};
