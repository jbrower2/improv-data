import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Josie Lawrence"
	| "Tony Slattery"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-01",
	airdate: "1989-11-10",
	host: "Clive Anderson",
	performers: [
		"Greg Proops",
		"Josie Lawrence",
		"Tony Slattery",
		"Mike McShane",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_Rambo Had a Sore Toe and He Was Stopped for Drunk Driving_",
			performers: [
				{
					name: "Greg Proops",
					author: "Earl Hamner",
				},
				{
					name: "Josie Lawrence",
					author: "Samuel Taylor Coleridge",
				},
				{
					name: "Tony Slattery",
					author: "The person who writes an air hostess training manual",
				},
				{
					name: "Mike McShane",
					author: "The Rosetta Stone",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Greg Proops", "Tony Slattery"],
					scene: "Two inventors with their invention",
					styles: [
						"_Macbeth_",
						"Disaster",
						"_Carry On_ (Tony)",
						"Cookery program (Greg)",
					],
				},
				{
					performers: ["Josie Lawrence", "Mike McShane"],
					scene: "An agent discovering a star in the street",
					styles: ["Religious", "_Tarzan_", "Children's television"],
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane", "Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Hose pipes",
			styles: ["Blues (Mike)", "Edith Piaf (Josie)"],
		},
		{
			name: "World's Worst",
			scenes: ["Person to be marooned on a desert island with"],
		},
		{
			name: "Rap",
			about: "Cooking",
		},
		{
			name: "Explanations",
			topic: "The existence of God",
			performers: [
				{
					names: ["Josie Lawrence", "Tony Slattery"],
					style: "Two six-year-olds",
				},
				{
					names: ["Greg Proops", "Mike McShane"],
					style: "Two American construction workers",
				},
			],
		},
		{
			name: "American Musical",
			musician: "Richard Vranch",
			about:
				"Making chocolate cakes, Flying to Paris, and Doing the washing up",
		},
	],
};
