import { type Episode } from "../../types/episode.js";

export const e10: Episode<
	| "Clive Anderson"
	| "Ryan Stiles"
	| "Colin Mochrie"
	| "Greg Proops"
	| "Tony Slattery"
	| "Mike McShane"
	| "Stephen Frost"
	| "Josie Lawrence"
	| "Rory Bremner"
	| "Richard Vranch"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_6-10",
	airdate: "1994-09-02",
	host: "Clive Anderson",
	performers: [
		"Ryan Stiles",
		"Colin Mochrie",
		"Greg Proops",
		"Tony Slattery",
		"Mike McShane",
		"Stephen Frost",
		"Josie Lawrence",
		"Rory Bremner",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two businessmen playing squash",
			styles: [
				"_Ninja Turtles_",
				"Agatha Christie",
				"Film noir",
				"Old Testament epic",
			],
		},
		{
			name: "News Report",
			interviewer: {
				name: "Greg Proops",
				alternateName: "Bulged Temptingly",
			},
			expert: {
				name: "Ryan Stiles",
				alternateName: "Dr. Jose Offerman",
			},
			reporter: {
				name: "Tony Slattery",
				alternateName: "Snack Whipley",
			},
			variousCharacters: "Mike McShane",
			topic: "Adam & Eve in Nicaragua",
		},
		{
			name: "Superheroes",
			crisis: "Trapped in the fridge",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Rubber Band Boy",
				},
				{
					name: "Ryan Stiles",
					superpower: "Mesmerized by Arm-Movement Man",
				},
				{
					name: "Tony Slattery",
					superpower: "Suicide Guy",
				},
				{
					name: "Stephen Frost",
					superpower: "Laughing Nymphomaniac Woman",
				},
			],
		},
		{
			name: "Remote Control",
			topic: "Chicken rearing",
			performers: [
				{
					name: "Josie Lawrence",
					quirk: "_Coronation Street_",
				},
				{
					name: "Rory Bremner",
					quirk: "_Question Time_",
				},
				{
					name: "Tony Slattery",
					quirk: "_GMTV_",
				},
				{
					name: "Mike McShane",
					quirk: "_Muppets_",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "Coal",
			styles: ["Grunge"],
		},
		{
			name: "Questions Only",
			performers: [
				"Mike McShane",
				"Josie Lawrence",
				"Greg Proops",
				"Ryan Stiles",
			],
			scenes: ["Auditioning for a circus"],
		},
		{
			name: "Scene to Music",
			performers: ["Stephen Frost", "Tony Slattery"],
			scene:
				"Stephen is sending son, Tony, out to get some more washing powder",
		},
		{
			name: "Film Dub",
			performers: ["Stephen Frost", "Ryan Stiles"],
			scene: "Stephen is a telephone sex-line addict they're trying to cure",
		},
		{
			name: "Helping Hands",
			performers: [
				"Tony Slattery",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "Ryan is a policeman and Tony is a suspect",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Standing Sitting Bending",
			performers: ["Ryan Stiles", "Tony Slattery", "Greg Proops"],
			scene: "Cowboys on the range",
		},
	],
};
