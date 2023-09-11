import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Clive Anderson"
	| "Jim Sweeney"
	| "Steve Steen"
	| "Paul Merton"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_5-03",
	airdate: "1993-03-19",
	host: "Clive Anderson",
	performers: ["Jim Sweeney", "Steve Steen", "Paul Merton", "Tony Slattery"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_Death of a Stand-Up Comic_",
			performers: [
				{
					name: "Jim Sweeney",
					author: "Agatha Christie",
				},
				{
					name: "Steve Steen",
					author: "Andrew Morton",
				},
				{
					name: "Paul Merton",
					author: "_Hello!_ magazine",
				},
				{
					name: "Tony Slattery",
					author: "Rhyming couplets of Rupert Bear",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Paul Merton", "Tony Slattery"],
			scene: "Tony is a prisoner and Paul is the Jailer",
			styles: [
				"Horror",
				"Chldren's nativity",
				"Film noir",
				"_Doctor Who_",
				"Pirate film",
			],
		},
		{
			name: "Foreign Film Dub",
			alternateName: "Foreign Film",
			actors: ["Jim Sweeney", "Steve Steen"],
			translators: ["Paul Merton", "Tony Slattery"],
			languages: ["Turkish"],
			film: "_Journey from Turkey to Scotland_",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Buying a doll with a pull-out string",
				"Deep-sea divers watching a football match",
				"A pecking order for fruit",
				"Queen bee selecting a suitor",
				"Odd things to celebrate",
				"Strange caveman inventions",
				"Things you wouldn't expect to find in a kangaroo's pouch",
				"Joyriding elephants",
			],
		},
		{
			name: "Props",
			pairs: [
				["Tony Slattery", "Steve Steen"],
				["Jim Sweeney", "Paul Merton"],
			],
		},
		{
			name: "Alphabet",
			performers: ["Paul Merton", "Jim Sweeney"],
			scene: "At a confessional",
			startingLetter: "J",
		},
		{
			name: "Scene to Music",
			performers: ["Jim Sweeney", "Steve Steen"],
			scene: "At a greengrocers",
		},
		{
			name: "Party Quirks",
			host: "Paul Merton",
			guests: [
				{
					name: "Steve Steen",
					quirk: "Racing commentator",
				},
				{
					name: "Jim Sweeney",
					quirk: "Thinks host is giving birth",
				},
				{
					name: "Tony Slattery",
					quirk: "Chippendale",
				},
			],
		},
		{
			name: "March",
			about: "Vegetables",
			musician: "Richard Vranch",
		},
	],
};
