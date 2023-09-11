import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Clive Anderson"
	| "Ryan Stiles"
	| "Sandi Toksvig"
	| "Tony Slattery"
	| "John Sessions"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-05",
	airdate: "1989-12-15",
	host: "Clive Anderson",
	performers: [
		"Ryan Stiles",
		"Sandi Toksvig",
		"Tony Slattery",
		"John Sessions",
	],
	games: [
		{
			name: "Authors",
			title: "_A Shopping Trip to Buy Moby Dick_",
			performers: [
				{
					name: "Ryan Stiles",
					author: "An author of a _Cosmopolitan_ magazine type of thing",
				},
				{
					name: "Sandi Toksvig",
					author: "Ed McBain",
				},
				{
					name: "Tony Slattery",
					author: "A Sunday colour supplement gadget catalogue",
				},
				{
					name: "John Sessions",
					author: "Virginia Woolf",
				},
			],
		},
		{
			name: "Tag",
			startingPositions: [
				{
					startingPosition: "Yoga position",
					name: "John Sessions",
				},
				{
					startingPosition: "On all fours",
					name: "Ryan Stiles",
				},
			],
		},
		{
			name: "Expert",
			interviewer: "Tony Slattery",
			expert: "Ryan Stiles",
			topic: "Frogs",
		},
		{
			name: "Interview",
			interviews: [
				{
					interviewer: "Sandi Toksvig",
					style: "_Desert Island Discs_",
					name: "John Sessions",
					character: "Zeus",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to lead an army into battle"],
		},
		{
			name: "Props",
			pairs: [
				["John Sessions", "Sandi Toksvig"],
				["Ryan Stiles", "Tony Slattery"],
			],
		},
		{
			name: "Party Quirks",
			host: "Sandi Toksvig",
			guests: [
				{
					name: "Tony Slattery",
					quirk: "Character from _The Great Escape_",
				},
				{
					name: "Ryan Stiles",
					quirk: "Thinks he is an insect",
				},
				{
					name: "John Sessions",
					quirk: "Pretentious student poet",
				},
			],
		},
		{
			name: "Remote Control",
			topic: "Sheep Shearing",
			performers: [
				{
					name: "Ryan Stiles",
					quirk: "_The Undersea World of Jacques Cousteau_",
				},
				{
					name: "Sandi Toksvig",
					quirk: "_Body Matters_",
				},
				{
					name: "Tony Slattery",
					quirk: "_Jim'll Fix It_",
				},
				{
					name: "John Sessions",
					quirk: "_The Sky at Night_",
				},
			],
		},
	],
};
