import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Stephen Frost"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_6-05",
	airdate: "1994-07-29",
	host: "Clive Anderson",
	performers: [
		"Josie Lawrence",
		"Stephen Frost",
		"Ryan Stiles",
		"Tony Slattery",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Josie Lawrence", "Ryan Stiles"],
					scene: "Josie is riding in Ryan's gondola",
					styles: [
						"_Revenger's Tragedy_",
						"Shampoo ad",
						"Melodrama",
						"Spy movie",
					],
				},
				{
					performers: ["Stephen Frost", "Tony Slattery"],
					scene:
						"Stephen's a taxi driver and Tony's trying to get a ride home late at night",
					styles: [
						"_Sooty_",
						"Soap opera",
						"Russ Mayer",
						"Greek tragedy",
						"Welsh TV drama",
					],
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Ryan Stiles",
				{
					body: "Josie Lawrence",
					hands: "Tony Slattery",
				},
			],
			scene: "Two women in the ladies room freshening up",
		},
		{
			name: "Hoedown",
			about:
				"[Going to the cinema](https://whoselineisitanyway.fandom.com/wiki/Going_to_the_Cinema_Hoedown)",
			musicians: ["Richard Vranch"],
		},
		{
			name: "Props",
			pairs: [
				["Tony Slattery", "Josie Lawrence"],
				["Stephen Frost", "Ryan Stiles"],
			],
		},
		{
			name: "Film Dub",
			performers: ["Josie Lawrence", "Tony Slattery"],
			scene: "Josie is telling Tony that it's his baby",
			film: '_Camberwick Green_ ep.13 "Mrs. Honeyman and Her Baby" (28 March 1966)',
		},
		{
			name: "Old Job, New Job",
			performers: ["Josie Lawrence", "Ryan Stiles"],
			oldJobPerformers: ["Stephen Frost"],
			scene:
				"Josie is a cook and Ryan is the chief waiter, joined by another chef",
			oldJob: "Stephen used to be a road builder",
		},
		{
			name: "Bartender",
			bartender: "Josie Lawrence",
			musicians: ["Richard Vranch"],
			performers: [
				{
					name: "Ryan Stiles",
					quirk: "In love with his teddy bear",
				},
				{
					name: "Tony Slattery",
					quirk: "Angry about his middle name",
				},
			],
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "A penis",
				},
				{
					name: "Stephen Frost",
					quirk: "Football goalie",
				},
				{
					name: "Ryan Stiles",
					quirk: "Baby learning to walk",
				},
			],
		},
	],
};
