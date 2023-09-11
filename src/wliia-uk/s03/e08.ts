import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Sandi Toksvig"
	| "Tony Slattery"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-08",
	airdate: "1991-03-08",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Sandi Toksvig", "Tony Slattery", "Mike McShane"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Tony Slattery", "Sandi Toksvig"],
					scene: "Two people who have been shipwrecked",
					styles: ["Yellow Pages advert", "Horror", "Western", "Whodunnit"],
				},
				{
					performers: ["Mike McShane", "Greg Proops"],
					scene: "A driving test",
					styles: ["American sitcom", "Restoration comedy", "French film"],
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Mike McShane", "Sandi Toksvig"],
				["Tony Slattery", "Greg Proops"],
			],
		},
		{
			name: "That'll Be Charlie Now",
			charlie: "Tony Slattery",
			characteristics: [
				"His head's small like an ocelot and he barks",
				"He plays hopscotch whenever he walks",
				"That speech impediment of his, the way his tongue lolls out on every other word",
				"He's always hopping up and down all the time and flapping his arms like an idiot",
				'Every time you say the word "and" he jams his finger right up his nose',
				"Nobody can break into a Schubert love song like he can",
			],
			scene: "A building site",
		},
		{
			name: "Gospel",
			musician: "Richard Vranch",
			about: "America",
		},
		{
			name: "World's Worst",
			scenes: ["Person to captain a submarine"],
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "A hammer",
			styles: ["Opera"],
		},
		{
			name: "Alphabet",
			alternateName: "One-Minute Alphabet",
			performers: ["Tony Slattery", "Sandi Toksvig"],
			scene: "A chat-up",
			startingLetter: "A",
		},
		{
			name: "Party Quirks",
			host: "Sandi Toksvig",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Disc jockey",
				},
				{
					name: "Tony Slattery",
					quirk: "Elephant",
				},
				{
					name: "Mike McShane",
					quirk: "Chorus girl",
				},
			],
		},
		{
			name: "Musical Film Review",
			reviewer: "Sandi Toksvig",
			musician: "Richard Vranch",
			film: "_Midshipman Easy_",
		},
	],
};
