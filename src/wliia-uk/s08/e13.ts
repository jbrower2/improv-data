import { type Episode } from "../../types/episode";

export const e13: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Caroline Quentin"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Niall Ashdown"
	| "Josie Lawrence"
	| "Greg Proops"
	| "Richard Vranch"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-13",
	airdate: "1996-12-06",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Caroline Quentin",
		"Colin Mochrie",
		"Ryan Stiles",
		"Niall Ashdown",
		"Josie Lawrence",
		"Greg Proops",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			performers: [
				"Stephen Frost",
				"Caroline Quentin",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			scenes: ["Trying to join a circus"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Stephen Frost", "Caroline Quentin"],
			scene: "Caroline's shaving Stephen before a big operation",
			styles: [
				"Jane Austen",
				"Aussie soap opera",
				"_Star Trek_",
				"_Carry On_ movie",
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "Farmyard chores",
		},
		{
			name: "Song Styles",
			singers: ["Niall Ashdown"],
			musicians: ["Richard Vranch"],
			about: "Liz, an osteopath",
			styles: ["Reggae"],
		},
		{
			name: "Fixed Expression",
			scene:
				"It's a christening, Josie is the mother, Colin is the vicar, Ryan is the father",
			performers: [
				{
					name: "Josie Lawrence",
					expression: "Flirty",
				},
				{
					name: "Colin Mochrie",
					expression: "Disgusted",
				},
				{
					name: "Ryan Stiles",
					expression: "Shocked",
				},
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
			scenes: ["Outtake from a religious program"],
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["Greg Proops", "Niall Ashdown"],
			],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"It's a doomed planet",
				"Ryan is sending his son to found civilization on some other planet",
			],
			lines: [
				"My name is Mary and I talk to pigs.",
				"The answer is written on my butt cheeks.",
				"Take that negligee off.",
				"My arms are long and they're ready to flap.",
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Colin Mochrie", "Josie Lawrence"],
			fieldReporter: "Ryan Stiles",
			onTheGreenScreen: "Chimpanzees",
		},
		{
			name: "Superheroes",
			crisis: "Hair loss",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Boomerang Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Self-Amusement Boy",
				},
				{
					name: "Stephen Frost",
					superpower: "Abusive Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "No-Need-To-Help Leave-Straight-Away Man",
				},
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Josie Lawrence"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Richard Vranch"],
			album: "_Songs of Unattractive Men_",
			songs: [
				{
					style: "Country western",
					title: "When You Nod off I'm Sleeping with My Horse",
				},
				{
					style: "British pop",
					title: "Close Your Eyes and Maybe I'll Love You",
				},
				{
					style: "Heavy metal",
					title: "If I Had a Penis I Wouldn't Need You",
				},
			],
		},
	],
};
