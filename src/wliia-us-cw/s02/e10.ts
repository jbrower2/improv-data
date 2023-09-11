import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Nyima Funk"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Jack Osbourne"
	| "Linda Taylor"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-10",
	airdate: "2014-05-16",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Nyima Funk", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Jack Osbourne"],
	musicians: ["Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan is a hunky farmhand mucking out the stalls and flirting with lusty farmer's daughter Nyima, who is milking the cows, Wayne enters as Nyima's furious father who drives in on a truck full of pigs",
			notes: [
				"Do it as a Mexican soap opera",
				"Do it that you get an electric shock every time you have a sexual thought",
				"You're all twerking dancers",
			],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Jack Osbourne",
			musicians: ["Linda Taylor"],
			scene:
				"Ryan is a sexy female singer trying out new guitarists for her rock band, Jack's a top guitarist auditioning to be in the band, and Ryan's jealous boyfriend Wayne is going to enter as a rival guitarist",
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Batman and Robin",
			secret: "Wigs",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say about your car, but not your partner",
				"Things you don't want to hear from the person you've just woken up next to",
				"Inappropriate things to say at a wedding",
				"Odd things to say or do during a lap dance",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Jack Osbourne",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is an irritable short-order cook in a New York diner training new employee Jack",
		},
	],
};
