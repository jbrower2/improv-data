import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Clive Anderson"
	| "Mike McShane"
	| "Colin Mochrie"
	| "Sandi Toksvig"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-05",
	airdate: "1991-02-15",
	host: "Clive Anderson",
	performers: [
		"Mike McShane",
		"Colin Mochrie",
		"Sandi Toksvig",
		"Tony Slattery",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Sandi Toksvig", "Colin Mochrie"],
					scene: "One can't go to sleep and the other is trying to help them",
					styles: ["Kitchen sink drama", "Children's TV", "Farce"],
				},
				{
					performers: ["Tony Slattery", "Mike McShane"],
					scene: "Having a duel",
					styles: [
						"Open University",
						"Chinese opera",
						"Home video",
						"Melodrama",
					],
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Mike McShane", "Sandi Toksvig"],
				["Tony Slattery", "Colin Mochrie"],
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Sandi Toksvig",
				{
					body: "Colin Mochrie",
					hands: "Tony Slattery",
				},
			],
			scene: "Ordering a sandwich",
		},
		{
			name: "Musical Producers",
			producers: ["Colin Mochrie", "Sandi Toksvig"],
			singers: ["Tony Slattery", "Mike McShane"],
			musician: "Richard Vranch",
			topics: ["Wasps"],
		},
		{
			name: "World's Worst",
			scenes: ["Person to be a superhero"],
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "Banana",
			styles: ["Rock & Roll"],
		},
		{
			name: "News Report",
			interviewer: "Sandi Toksvig",
			expert: "Tony Slattery",
			reporter: "Colin Mochrie",
			variousCharacters: "Mike McShane",
			topic: "The Grand Old Duke of York",
		},
		{
			name: "Alphabet",
			performers: ["Tony Slattery", "Mike McShane"],
			scene: "Two surgeons performing an operation",
			startingLetter: "L",
		},
		{
			name: "March",
			musician: "Richard Vranch",
			about: "Banker",
		},
	],
};
