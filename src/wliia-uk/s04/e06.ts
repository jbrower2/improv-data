import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Clive Anderson"
	| "Jim Sweeney"
	| "Paul Merton"
	| "Steve Steen"
	| "Tony Slattery"
	| "Stephen Frost"
	| "Chip Esten"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Josie Lawrence"
	| "Richard Vranch"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_4-06",
	airdate: "1992-02-28",
	host: "Clive Anderson",
	performers: [
		"Jim Sweeney",
		"Paul Merton",
		"Steve Steen",
		"Tony Slattery",
		"Stephen Frost",
		"Chip Esten",
		"Greg Proops",
		"Ryan Stiles",
		"Josie Lawrence",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_Pant & Ethel, Where Are You?_",
			performers: [
				{
					name: "Jim Sweeney",
					author: "Sir Arthur Conan Doyle",
				},
				{
					name: "Paul Merton",
					author: "AA Handbook",
				},
				{
					name: "Steve Steen",
					author: "Jacques Cousteau",
				},
				{
					name: "Tony Slattery",
					author: "Dr. Alex Comfort",
				},
			],
		},
		{
			name: "Old Job, New Job",
			performers: ["Jim Sweeney", "Tony Slattery"],
			oldJobPerformers: ["Stephen Frost"],
			scene: "Two plumbers will be joined by Stephen",
			oldJob: "Stephen used to be an advertiser",
		},
		{
			name: "World's Worst",
			performers: [
				"Jim Sweeney",
				"Steve Steen",
				"Stephen Frost",
				"Tony Slattery",
			],
			scenes: ["Person to be Prime Minister"],
		},
		{
			name: "Film Noir",
			performers: ["Jim Sweeney", "Steve Steen"],
			scene: "Two people meeting in a betting shop",
		},
		{
			name: "Scene with a Prop",
			performers: ["Tony Slattery", "Paul Merton"],
			prop: "Stop sign",
		},
		{
			name: "Psychiatrist",
			psychiatrist: "Chip Esten",
			performers: [
				{
					name: "Greg Proops",
					quirk: "Scared of water",
				},
				{
					name: "Tony Slattery",
					quirk: "In love with himself",
				},
				{
					name: "Ryan Stiles",
					quirk: "Thinks he smells like horses",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Josie Lawrence", "Greg Proops"],
				["Paul Merton", "Ryan Stiles"],
			],
		},
		{
			name: "Alphabet",
			performers: ["Jim Sweeney", "Tony Slattery"],
			scene: "In a changing room",
			startingLetter: "F",
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			startingLine: "On the M25",
			endingLine: "Who stole my sausages?",
			styles: ["Heavy metal"],
		},
		{
			name: "Expert",
			interviewer: "Greg Proops",
			expert: "Ryan Stiles",
			topic: "Paper clips and Taxidermy",
		},
		{
			name: "Every Other Line",
			performers: ["Paul Merton", "Tony Slattery"],
			play: "_Murder by the Book_",
			scene: "Paul's lost his false teeth",
		},
		{
			name: "Hoedown",
			about:
				"[Frying pan](https://whoselineisitanyway.fandom.com/wiki/Frying_Pan_Hoedown)",
			musicians: ["Richard Vranch"],
			performers: ["Greg Proops", "Ryan Stiles", "Tony Slattery", "Chip Esten"],
		},
	],
};
