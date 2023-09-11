import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Clive Anderson"
	| "Jim Sweeney"
	| "Steve Steen"
	| "Stephen Frost"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_4-01",
	airdate: "1992-01-24",
	host: "Clive Anderson",
	performers: ["Jim Sweeney", "Steve Steen", "Stephen Frost", "Tony Slattery"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Emotion Options",
			performers: ["Jim Sweeney", "Steve Steen"],
			scene: "Two soldiers in the trenches",
			emotions: ["Ecstasy", "Paranoia", "Hate", "Horror"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Tony Slattery", "Stephen Frost"],
			scene: "Stephen is a fortune teller and Tony is his customer",
			styles: ["_Trumpton_", "Melodrama", "Ballet"],
		},
		{
			name: "Old Job, New Job",
			alternateName: "New Job, Old Job",
			performers: ["Jim Sweeney", "Steve Steen"],
			oldJobPerformers: ["Stephen Frost"],
			scene:
				"Two surgeons doing an operation, joined by a third who used to be a dustman",
		},
		{
			name: "Courtroom Scene",
			judge: "Jim Sweeney",
			prosecutor: "Stephen Frost",
			witnesses: ["Steve Steen", "Tony Slattery"],
			crime: "A crime of passion",
		},
		{
			name: "World's Worst",
			scenes: ["Person to do an operation on you"],
		},
		{
			name: "Props",
			pairs: [
				["Tony Slattery", "Steve Steen"],
				["Stephen Frost", "Jim Sweeney"],
			],
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Steve Steen",
					quirk: "James Bond",
				},
				{
					name: "Jim Sweeney",
					quirk: "Thinks it's a school reunion",
				},
				{
					name: "Stephen Frost",
					quirk: "A bus conductor",
				},
			],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Tony Slattery", "Stephen Frost"],
			scene: "Going to see the bank manager",
		},
		{
			name: "Helping Hands",
			performers: [
				"Tony Slattery",
				{
					body: "Jim Sweeney",
					hands: "Steve Steen",
				},
			],
			scene: "Jim's organising a bank raid",
		},
		{
			name: "March",
			musician: "Richard Vranch",
			about: "Wedding",
		},
	],
};
