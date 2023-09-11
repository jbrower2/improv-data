import { type Episode } from "../../types/episode.js";

export const e03: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Patrick Bristow"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-03",
	airdate: "2005-10-17",
	productionNumber: "296751-8003",
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
			name: "Questions Only",
			scenes: ["It's chaos in Manhattan as Godzilla approaches"],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene:
				"A beach bum who loves water sports and is trying to impress girls at the beach",
		},
		{
			name: "Song Styles",
			singers: ["Brad Sherwood"],
			musicians: ["Laura Hall"],
			about: "Wilma, a medical school student coordinator",
			styles: ["Oasis"],
		},
		{
			name: "Sportscasters",
			commentators: ["Brad Sherwood", "Patrick Bristow"],
			athletes: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two gardeners",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Brad Sherwood", "Patrick Bristow"],
			],
		},
		{
			name: "Daytime Talk Show",
			host: "Brad Sherwood",
			guests: ["Ryan Stiles", "Patrick Bristow"],
			audienceMembers: ["Colin Mochrie"],
			topic: "Humpty Dumpty",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Weddings](https://whoselineisitanyway.fandom.com/wiki/Wedding_Hoedown)",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit and Bend",
			performers: ["Colin Mochrie", "Ryan Stiles", "Drew Carey"],
			scene:
				"Ryan and Drew are two members of a wedding party trying to reassure Colin, the nervous groom, that everything will be alright",
		},
	],
};
