import { type Episode } from "../../types/episode";

export const e14: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Ian Gomez"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-14",
	airdate: "2006-11-08",
	productionNumber: "296751-8006",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Ian Gomez", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Daytime Talk Show",
			host: "Brad Sherwood",
			guests: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Ian Gomez"],
			topic: "Jack and Jill",
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film Theater and Television Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Colin and Ryan have been working too long at the fish-cutting factory and Colin is beginning to crack",
			styles: [
				"Martha Stewart",
				"Elvis movie",
				"_The Shining_",
				"_Power Rangers_",
				"Family movie",
			],
		},
		{
			name: "Song Styles",
			singers: ["Brad Sherwood"],
			musicians: ["Laura Hall"],
			about: "Lynelle, a marketing assistant for a home video movie company",
			styles: ["Country western ballad"],
		},
		{
			name: "Newsflash",
			anchormen: ["Ian Gomez", "Colin Mochrie", "Brad Sherwood"],
			fieldReporter: "Ryan Stiles",
			onTheGreenScreen:
				"_Bargain Madness_ (1951) (Women frantically shopping for clothes at a department store)",
		},
		{
			name: "Props",
			pairs: [
				["Ian Gomez", "Ryan Stiles"],
				["Colin Mochrie", "Brad Sherwood"],
			],
		},
		{
			name: "Sportscasters",
			commentators: ["Brad Sherwood", "Ian Gomez"],
			athletes: ["Colin Mochrie", "Ryan Stiles"],
			scene: "Two flight attendants",
		},
		{
			name: "Alphabet",
			alternateName: "90-Second Alphabet",
			performers: ["Ryan Stiles", "Colin Mochrie", "Drew Carey"],
			scene:
				"In an Old West saloon, Ryan accuses Drew of cheating in a card game, and Colin is Miss Kitty, trying to calm things down",
			startingLetter: "L",
		},
	],
};
