import { type Episode } from "../../types/episode";

export const e15: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-15",
	airdate: "1997-10-16",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Colin Mochrie",
		"Brad Sherwood",
		"Ryan Stiles",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Superheroes",
			crisis: "Women and wives are causing trouble",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Constipation Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Embarrassed About Your Erection Boy",
				},
				{
					name: "Brad Sherwood",
					superpower: "Captain Menu",
				},
				{
					name: "Stephen Frost",
					superpower: "Captain Crotch-Grabber",
				},
			],
		},
		{
			name: "Let's Make a Date",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Stephen Frost",
					quirk: "A leprechaun",
				},
				{
					name: "Colin Mochrie",
					quirk: "Becoming increasingly ill",
				},
				{
					name: "Ryan Stiles",
					quirk: "Hates people not finding him hilarious",
				},
			],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Lone Ranger and Tonto",
			secretLocation: "In a gun holster",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Brad Sherwood", "Colin Mochrie"],
			translators: ["Ryan Stiles", "Stephen Frost"],
			languages: ["Polish"],
			film: "_The Return of the Killer Tomatoes_",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Brad Sherwood"],
				["Stephen Frost", "Colin Mochrie"],
			],
		},
		{
			name: "Song Styles",
			singers: ["Brad Sherwood"],
			musicians: ["Richard Vranch"],
			about: "Angela, from the video shop",
			styles: ["Love song"],
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Stephen Frost", "Colin Mochrie"],
			scene: "At the barber's",
		},
		{
			name: "Sportscasters",
			alternateName: "Sports Commentators",
			commentators: ["Stephen Frost", "Brad Sherwood"],
			athletes: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Competing barbers sharing the same equipment",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Barristers and lawyers](https://whoselineisitanyway.fandom.com/wiki/Barristers_and_Lawyers_Hoedown)",
		},
	],
};
