import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Mike McShane"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_7-05",
	airdate: "1995-08-25",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Mike McShane", "Ryan Stiles", "Tony Slattery"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene:
				"Ryan has called Greg 'round because he has an insect bite which is going weird",
			styles: [
				"_Charlie's Angels_",
				"_Beavis",
				"Butthead_",
				"_Fame_",
				"Baseball movie",
			],
		},
		{
			name: "Animals",
			performers: ["Tony Slattery", "Mike McShane", "Ryan Stiles"],
			scene: "A soap opera",
			animals: "Penguins",
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene: "A briefcase salesman",
		},
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Ryan Stiles",
					quirk: "Contestant's ex-husband",
				},
				{
					name: "Tony Slattery",
					quirk: "Noddy",
				},
				{
					name: "Mike McShane",
					quirk: "Hard bitten army sergeant",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Thing to see while you flip through the TV channels"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Tony Slattery"],
				["Greg Proops", "Mike McShane"],
			],
		},
		{
			name: "Film Trailer",
			narrator: "Greg Proops",
			title: "_Jelly Wars_",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Greg Proops",
					quirk: "Tony's good angel and bad angel",
				},
				{
					name: "Mike McShane",
					quirk: "Thinks he's come to a 19th century whorehouse",
				},
				{
					name: "Ryan Stiles",
					quirk: "Come to ride Tony's camel",
				},
			],
		},
		{
			name: "Helping Hands",
			alternateName: "Hands Through",
			performers: [
				"Mike McShane",
				{
					body: "Ryan Stiles",
					hands: "Greg Proops",
				},
			],
			scene: "Business lunch",
		},
	],
};
