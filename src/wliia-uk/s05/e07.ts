import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Clive Anderson"
	| "Jim Sweeney"
	| "Steve Steen"
	| "Tony Slattery"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_5-07",
	airdate: "1993-04-16",
	host: "Clive Anderson",
	performers: ["Jim Sweeney", "Steve Steen", "Tony Slattery", "Mike McShane"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things the stewardesses should really tell you about safety features",
				"The worst job in the world",
				"Olympic sports we would really like to see",
				"A kissogram with bad news",
				"Siberian National Theatre open-air presentation of _Tarzan & Jane_",
				"There's no such thing as a free lunch",
				"Auctioneers at a party",
				"What you didn't expect to find at the end of the rainbow",
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Mike McShane", "Tony Slattery"],
			scene:
				"Two people stuck on a desert island for just a little bit too long",
			styles: ["_Eldorado_", "Rock opera", "_Punch & Judy_", "Science fiction"],
		},
		{
			name: "Authors",
			title: "_A Day in the Life of a Nursery School_",
			performers: [
				{
					name: "Jim Sweeney",
					author: "Lewis Carroll",
				},
				{
					name: "Steve Steen",
					author: "Jackie Collins",
				},
				{
					name: "Tony Slattery",
					author:
						"That weird disembodied head who does the TV ads for _The Sun_ newspaper",
				},
				{
					name: "Mike McShane",
					author: "Dr. Seuss",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "Soap",
			styles: ["MGM musical"],
		},
		{
			name: "World's Worst",
			scenes: ["Person to audition for _Hamlet_"],
		},
		{
			name: "Props",
			pairs: [
				["Steve Steen", "Mike McShane"],
				["Tony Slattery", "Jim Sweeney"],
			],
		},
		{
			name: "Scene to Music",
			performers: ["Jim Sweeney", "Steve Steen"],
			scene: "Guy in an office waiting for his secretary to arrive",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Steve Steen",
					quirk: "Beethoven",
				},
				{
					name: "Jim Sweeney",
					quirk: "Madly in love with the carpet",
				},
				{
					name: "Mike McShane",
					quirk: "Confederate soldier",
				},
			],
		},
		{
			name: "Bartender",
			bartender: "Mike McShane",
			musicians: ["Richard Vranch"],
			performers: [
				{
					name: "Steve Steen",
					quirk: "Angry about constipation",
				},
				{
					name: "Jim Sweeney",
					quirk: "Trying to forget impotence",
				},
				{
					name: "Tony Slattery",
					quirk: "In love with the barman",
				},
			],
		},
	],
};
