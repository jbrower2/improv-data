import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Clive Anderson"
	| "Jim Meskimen"
	| "Christopher Smith"
	| "Ryan Stiles"
	| "Chip Esten"
	| "Richard Vranch"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_4-11",
	airdate: "1992-04-03",
	host: "Clive Anderson",
	performers: [
		"Jim Meskimen",
		"Christopher Smith",
		"Ryan Stiles",
		"Chip Esten",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Ryan Stiles", "Chip Esten"],
			scene: "Ryan's going to Chip's pet shop",
			styles: ["Molière", "50s B movie", "Laurel & Hardy", "Science fiction"],
		},
		{
			name: "Old Job, New Job",
			performers: ["Jim Meskimen", "Christopher Smith"],
			oldJobPerformers: ["Ryan Stiles"],
			scene: "Scientists looking into radioactive material",
			oldJob: "Ryan used to be a baseball player",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Christopher Smith"],
				["Jim Meskimen", "Chip Esten"],
			],
		},
		{
			name: "Bartender",
			alternateName: "Bar",
			bartender: "Chip Esten",
			musicians: ["Richard Vranch"],
			performers: [
				{
					name: "Christopher Smith",
					quirk: "Angry about divorce",
				},
				{
					name: "Jim Meskimen",
					quirk: "Trying to forget the stock market",
				},
				{
					name: "Ryan Stiles",
					quirk: "Having a crisis of impotence",
				},
			],
		},
		{
			name: "Expert",
			interviewer: "Chip Esten",
			expert: "Ryan Stiles",
			topic: "Algae farming",
		},
		{
			name: "Two Characters",
			performers: ["Jim Meskimen", "Christopher Smith"],
			characters: ["Captain Kirk", "Spock"],
			scene: "In a launderette",
		},
		{
			name: "Party Quirks",
			host: "Christopher Smith",
			guests: [
				{
					name: "Chip Esten",
					quirk: "Prisoner on a chain gang",
				},
				{
					name: "Jim Meskimen",
					quirk: "Boxing trainer at the ringside",
				},
				{
					name: "Ryan Stiles",
					quirk: "Rodeo rider",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Christopher Smith",
				{
					body: "Ryan Stiles",
					hands: "Jim Meskimen",
				},
			],
			scene: "Going to a casino",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Naming a baby",
				"At the top of the Empire State Building",
				"A Jimmy Stewart convention",
				"Falling in love on an ice rink",
				"A convention of cheese makers",
				"Two men comparing each other at the urinal",
			],
		},
	],
};
