import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Nyima Funk"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Maggie Q"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_9-10",
	airdate: "2013-09-03",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Nyima Funk", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Maggie Q"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Ryan is Batman and Nyima is Catwoman, and they use every high-tech gadget they have to try to escape a room in which the spiked walls are closing in on them, and then The Joker, played by Wayne, arrives on his jet pack",
			notes: [
				"You're high-energy game show hosts",
				"Do it like a hip hop video",
				"Do it like you're magnetically attracted to everything",
			],
		},
		{
			name: "Dubbing",
			performers: ["Ryan Stiles", "Wayne Brady"],
			dubber: "Colin Mochrie",
			dubbed: "Maggie Q",
			scene:
				"In a swanky hotel room, Maggie is a heavily-armed assassin trying to seduce and kill a womanizing senator, played by Ryan, Wayne is Maggie's former lover who arrives planning to kill them both",
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Nyima Funk"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Snakes and spiders",
		},
		{
			name: "What's in the Bag?",
			performers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			bagDonors: ["Cheryl", "Becky"],
			scene:
				"Wayne is a teenager who wants to join the Army, and Ryan and Colin are two military doctors testing his physical and mental fitness",
		},
		{
			name: "Helping Hands",
			performers: [
				"Maggie Q",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is an over-enthusiastic Irishman working for the Irish Tourist Board trying to persuade potential tourist Maggie to come to Ireland",
		},
	],
};
