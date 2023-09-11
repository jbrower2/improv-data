import { type Episode } from "../../types/episode.js";

export const e17: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Rory Bremner"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-17",
	airdate: "1997-10-30",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Rory Bremner", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene:
				"Two scientists about to shrink themselves down to go into somebody's body",
			styles: [
				"Woody Allen",
				"Sex education video",
				"Kabuki",
				"_Riverdance_",
				"Horror",
			],
		},
		{
			name: "Press Conference",
			publicFigure: "Colin Mochrie",
			scene: "Claims to have slept with every member of royal family",
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene:
				"A New York cop who's on patrol in his car and he gets called out to a drug bust",
		},
		{
			name: "Film Review",
			reviewer: "Rory Bremner",
			filmCritic: "Barry Norman",
			actors: ["Ryan Stiles", "Colin Mochrie", "Greg Proops"],
			film: "_The Attack of the Giant Bananas_",
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Esmerelda and the hunchback of Notre Dame",
			secretLocation: "Inside the bell",
		},
		{
			name: "Picture",
			scene: "One day in the jungle",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Rory Bremner",
					quirk: "John Motson on the pull",
				},
				{
					name: "Colin Mochrie",
					quirk: "Trapped outside a submarine as it starts to submerge",
				},
				{
					name: "Ryan Stiles",
					quirk: "Trying to smuggle animals through customs in his underpants",
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Winning the lottery](https://whoselineisitanyway.fandom.com/wiki/Winning_the_Lottery_Hoedown)",
		},
	],
};
