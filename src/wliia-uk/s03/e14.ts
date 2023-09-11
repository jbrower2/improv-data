import { type Episode } from "../../types/episode";

export const e14: Episode<
	| "Clive Anderson"
	| "John Sessions"
	| "Archie Hahn"
	| "Ryan Stiles"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-14",
	airdate: "1991-04-19",
	host: "Clive Anderson",
	performers: ["John Sessions", "Archie Hahn", "Ryan Stiles", "Mike McShane"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["John Sessions", "Archie Hahn"],
					scene: "Archie's trying to join the Merry Men and John is Robin Hood",
					styles: ["Shakespeare", "Slapstick", "Dog film", "Martial arts"],
				},
				{
					performers: ["Mike McShane", "Ryan Stiles"],
					scene:
						"One is broken down in his car and the other is passing by and offering to help",
					styles: ["Horror", "Cartoon", "Ballet"],
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "Suitcase",
			styles: ["Torch song"],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Ryan Stiles"],
			soundPerformers: ["Archie Hahn"],
			scene: "Travelling on the train",
		},
		{
			name: "World's Worst",
			scenes: ["Person to share an apartment or a flat with"],
		},
		{
			name: "Props",
			pairs: [
				["John Sessions", "Ryan Stiles"],
				["Mike McShane", "Archie Hahn"],
			],
		},
		{
			name: "Audition",
			director: "Ryan Stiles",
			musician: "Richard Vranch",
			title: "_Dead Greasy Godfather Society_",
		},
		{
			name: "Helping Hands",
			performers: [
				"Mike McShane",
				{
					body: "Ryan Stiles",
					hands: "Archie Hahn",
				},
			],
			scene: "Ryan is a customer making a complaint to the waiter, Mike",
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Ryan Stiles", "Archie Hahn"],
			scene: "Waking up somewhere strange",
			film: "_High Powered_ (1945)",
		},
		{
			name: "Gospel",
			musician: "Richard Vranch",
			about: "Milkman",
		},
	],
};
