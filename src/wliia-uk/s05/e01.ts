import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Colin Mochrie"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_5-01",
	airdate: "1993-03-05",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Ryan Stiles", "Colin Mochrie", "Tony Slattery"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Robin Hood selecting his Merry Men",
				"Practicing Voodoo",
				"Before toilet paper",
				"_The Princess and the Frog_",
				"Kiss and tell",
				"Librarian jokes",
				"Two hairs left on Clive Anderson's head",
				"Your worst nightmare",
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Tony Slattery", "Greg Proops"],
			scene:
				"Tony is a passenger on a plane and Greg is the friendly steward or stewardess",
			styles: ["Horror", "Pantomime", "Shakespeare"],
		},
		{
			name: "Questions Only",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: ["Confronting the other about a girlfriend"],
		},
		{
			name: "Superheroes",
			crisis: "Global warming",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Undercover Elephant",
				},
				{
					name: "Ryan Stiles",
					superpower: "Man Who Talks Really Really Slow",
				},
				{
					name: "Tony Slattery",
					superpower: "Flatulence Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "Captain Ballerina",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to take confession"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Colin Mochrie"],
				["Greg Proops", "Tony Slattery"],
			],
		},
		{
			name: "Scene to Music",
			performers: ["Tony Slattery", "Ryan Stiles"],
			scene: "Ryan's arrived to fix Tony's fridge",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Standing Sitting Bending",
			performers: ["Tony Slattery", "Ryan Stiles", "Colin Mochrie"],
			scene: "At a chip shop",
		},
		{
			name: "Helping Hands",
			performers: [
				"Tony Slattery",
				{
					body: "Ryan Stiles",
					hands: "Greg Proops",
				},
			],
			scene: "Tony's gone to Ryan to find out about pet care",
		},
		{
			name: "Hoedown",
			about:
				"[Taking exams](https://whoselineisitanyway.fandom.com/wiki/Taking_Exams_Hoedown)",
			musicians: ["Richard Vranch"],
		},
	],
};
