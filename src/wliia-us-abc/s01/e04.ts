import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-04",
	airdate: "1998-08-26",
	productionNumber: "296648-101",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Richard Sportwood",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Peter Longfellow",
				quirk: "Bad stand-up comic",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Carlos Nicepackage",
				quirk: "On a public address system in a big stadium",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Jerry Throbmorton",
				quirk: "A stock market trader watching his life savings disappear",
			},
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Payton James, a budding actress",
			styles: ["Doowop 50s song"],
		},
		{
			name: "Animals",
			performers: ["Brad Sherwood", "Ryan Stiles", "Colin Mochrie"],
			scene:
				"Ryan is having an affair with his secretary Colin, and is surprised by his wife, Brad",
			animals: "Chimpanzees",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Brad Sherwood"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Melanie", "Wes"],
			scene:
				"Ryan is Count Dracula and Colin is the man who has come to kill him",
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "History of 20th century dance in 30 seconds",
				},
				{
					name: "Colin Mochrie",
					quirk: "A skier who keeps skiing into things",
				},
				{
					name: "Ryan Stiles",
					quirk: "Deer on first day of hunting season",
				},
			],
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "In a park",
		},
		{
			name: "Foreign Film Dub",
			alternateName: "Foreign Film Dubs",
			actors: ["Drew Carey", "Colin Mochrie"],
			translators: ["Brad Sherwood", "Ryan Stiles"],
			languages: ["Chinese"],
			title: "_Gesundheit_",
		},
	],
};
