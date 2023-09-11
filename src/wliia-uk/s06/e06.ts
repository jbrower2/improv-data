import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_6-06",
	airdate: "1994-08-05",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Colin Mochrie",
		"Ryan Stiles",
		"Tony Slattery",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["In a clothes shop"],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"An airplane is going down",
				"Colin is trying to talk to Ryan",
				"who is some sort of washed-up pilot",
				"he's trying to persuade him to take over the controls",
				"save everybody on board",
			],
			lines: [
				"On your knees and bark like a dog.",
				"Start those thigh exercises now.",
				"Tickle me 'til I squeal.",
				"The ice cream's dripping down my chest.",
			],
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit Lie Down",
			performers: ["Ryan Stiles", "Colin Mochrie", "Tony Slattery"],
			scene: "On the beach",
		},
		{
			name: "Old Job, New Job",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			oldJobPerformers: ["Stephen Frost"],
			scene: "A doctor and patient, joined by another doctor",
			oldJob: "Stephen used to be a magician",
		},
		{
			name: "Fixed Expression",
			alternateName: "Fixed Expressions",
			scene:
				"At a sports game, Ryan is coming in to try to sell the others popcorn or hamburgers",
			performers: [
				{
					name: "Stephen Frost",
					expression: "Happy",
				},
				{
					name: "Tony Slattery",
					expression: "Cheeky",
				},
				{
					name: "Colin Mochrie",
					expression: "Puzzled",
				},
				{
					name: "Ryan Stiles",
					expression: "Spooked",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to sit next to in an exam"],
		},
		{
			name: "Props",
			pairs: [
				["Tony Slattery", "Stephen Frost"],
				["Colin Mochrie", "Ryan Stiles"],
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "Taking a shower",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Colin Mochrie",
					quirk: "Thinks he's being chased by a swarm of bees",
				},
				{
					name: "Stephen Frost",
					quirk: "School bus driver",
				},
				{
					name: "Ryan Stiles",
					quirk: "Olympic fast walker",
				},
			],
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Gordon", "Elise"],
			scene: "Trying to go through airport security",
		},
		{
			name: "Hoedown",
			about:
				"[Christmas](https://whoselineisitanyway.fandom.com/wiki/Christmas_Hoedown_(UK))",
			musicians: ["Richard Vranch"],
		},
	],
};
