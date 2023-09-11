import { type Episode } from "../../types/episode.js";

export const e13: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Josie Lawrence"
	| "Tony Slattery"
	| "John Sessions"
	| "Richard Vranch"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-13",
	airdate: "1990-02-16",
	host: "Clive Anderson",
	performers: [
		"Greg Proops",
		"Josie Lawrence",
		"Tony Slattery",
		"John Sessions",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Josie Lawrence", "Greg Proops"],
					scene: "Arguing over the state of the bathroom",
					styles: [
						"_Flintstones_",
						"_Robin of Sherwood_",
						"Home movie",
						"Burlesque",
					],
				},
				{
					performers: ["John Sessions", "Tony Slattery"],
					scene: "At a pawn broker's",
					styles: [
						"Shakespeare",
						"1960s Michael Caine",
						"Bearded collie",
						"James Bond",
					],
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "A fish slice",
			styles: ["Love ballad"],
		},
		{
			name: "World's Worst",
			scenes: ["Person to be arriving at a party"],
		},
		{
			name: "Rap",
			about: "Dental hygiene",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Robot",
				},
				{
					name: "Josie Lawrence",
					quirk: "Peter Pan",
				},
				{
					name: "John Sessions",
					quirk: "A '60's rock musician",
				},
			],
		},
		{
			name: "Advertisement to Music",
			performers: [
				{
					name: "John Sessions",
					product: "Odor-Eaters",
				},
			],
		},
		{
			name: "American Musical",
			performers: ["Greg Proops", "Josie Lawrence", "Tony Slattery"],
			musician: "Richard Vranch",
			about: "Seeing a film, Car crash, and Riding horses",
		},
	],
};
