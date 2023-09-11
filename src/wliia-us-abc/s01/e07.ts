import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-07",
	airdate: "1998-09-23",
	productionNumber: "296648-107",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Daytime Talk Show",
			host: "Greg Proops",
			guests: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Wayne Brady"],
			topic: "Hansel & Gretel",
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "May, a baker",
			styles: ["A love song from a movie soundtrack"],
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Kay", "Emily"],
			scene:
				"Colin is a motorcycle cop stopping Ryan, who's a suspicious looking biker",
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Greg Proops"],
				["Ryan Stiles", "Wayne Brady"],
			],
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Cartoon character in love",
				},
				{
					name: "Colin Mochrie",
					quirk: "_Gone with the Wind_ in 30 seconds",
				},
				{
					name: "Ryan Stiles",
					quirk: "Salesman desperate to hide the fact he's a chimp",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Commercials](https://whoselineisitanyway.fandom.com/wiki/Commercial_Hoedown)",
		},
		{
			name: "Foreign Film Dub",
			alternateName: "Foreign Film Dubs",
			actors: ["Drew Carey", "Wayne Brady"],
			translators: ["Ryan Stiles", "Greg Proops"],
			languages: ["Ancient Egyptian"],
			title: "_The Amazing Tricycle Adventure_",
		},
	],
};
