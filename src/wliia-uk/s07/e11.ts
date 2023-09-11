import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Clive Anderson"
	| "Ryan Stiles"
	| "Colin Mochrie"
	| "Caroline Quentin"
	| "Josie Lawrence"
	| "Mike McShane"
	| "Stephen Frost"
	| "Greg Proops"
	| "Niall Ashdown"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_7-11",
	airdate: "1995-10-06",
	host: "Clive Anderson",
	performers: [
		"Ryan Stiles",
		"Colin Mochrie",
		"Caroline Quentin",
		"Josie Lawrence",
		"Mike McShane",
		"Stephen Frost",
		"Greg Proops",
		"Niall Ashdown",
		"Tony Slattery",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two lumberjacks arguing over something",
			styles: ["Hugh Grant", "_Batman_", "_Carry On_ film", "Sports movie"],
		},
		{
			name: "Questions Only",
			performers: [
				"Caroline Quentin",
				"Colin Mochrie",
				"Ryan Stiles",
				"Josie Lawrence",
			],
			scenes: ["At the nudist camp"],
		},
		{
			name: "Bartender",
			bartender: "Mike McShane",
			musicians: ["Richard Vranch"],
			performers: [
				{
					name: "Ryan Stiles",
					quirk: "In love with a television set",
				},
			],
		},
		{
			name: "Scene to Music",
			performers: ["Ryan Stiles", "Stephen Frost"],
			scene: "Two Jehovah's Witnesses calling at a house",
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: ["A gang boss confronting somebody who betrayed him"],
			lines: [
				"I'm the best damn dancer this town's ever seen.",
				"Wait 'til you see what I've got in my pants.",
				"Do I smell hot dogs?",
			],
		},
		{
			name: "World's Worst",
			performers: [
				"Greg Proops",
				"Niall Ashdown",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			scenes: ["Show business routine"],
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["Tony Slattery", "Stephen Frost"],
			],
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "In a launderette",
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "Breaking down in traffic",
		},
		{
			name: "Props",
			pairs: [["Ryan Stiles", "Colin Mochrie"]],
		},
		{
			name: "Old Job, New Job",
			performers: ["Colin Mochrie", "Caroline Quentin"],
			oldJobPerformers: ["Ryan Stiles"],
			scene:
				"Colin and Caroline have come to buy a car at a showroom, Ryan is a salesman",
			oldJob: "Ryan used to be a New York cop",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit Bend",
			performers: ["Colin Mochrie", "Ryan Stiles", "Tony Slattery"],
			scene: "A fortress being attacked by Indians",
		},
		{
			name: "Hoedown",
			performers: [
				"Caroline Quentin",
				"Colin Mochrie",
				"Ryan Stiles",
				"Tony Slattery",
			],
			musicians: ["Richard Vranch"],
			about:
				"[Biting nails](https://whoselineisitanyway.fandom.com/wiki/Biting_Nails_Hoedown)",
		},
	],
};
