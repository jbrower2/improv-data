import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_17-02",
	airdate: "2021-01-15",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Gary Anthony Williams",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Hyperactive first grader who thinks people are playground equipment",
				},
				{
					name: "Colin Mochrie",
					quirk: "Scottish Terrier who thinks people's body parts are bones",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Inept astronaut on a space station where everything is going wrong",
				},
			],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Gary Anthony Williams", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Anna, who died tragically in a cheese-related accident",
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: ["Colin is Peter Pan", "Ryan is Wendy"],
			lines: [
				"Get a load of these melons.",
				"That's not even legal in Alabama.",
				"You've been a bad boy.",
				"You're mom is so hot!",
			],
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[I met my lover at a job interview](https://whoselineisitanyway.fandom.com/wiki/I_Met_My_Lover_at_a_Job_Interview_Irish_Drinking_Song)",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If everyone in nature shows were drunk",
				"Unlikely things to see on a home improvement show",
				"The world's worst cosmetics commercials",
				"The worst times to forget you're still wearing a microphone",
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady", "Gary Anthony Williams"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Lifeguard_",
			songs: [
				{
					style: "Rock 'n roll",
					title: "Sunburns and Sand",
				},
				{
					style: "Ragtime",
					title: "Kelp!",
				},
			],
		},
	],
};
