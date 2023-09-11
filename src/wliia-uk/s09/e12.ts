import { type Episode } from "../../types/episode.js";

export const e12: Episode<
	| "Clive Anderson"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Brad Sherwood"
	| "Stephen Frost"
	| "Greg Proops"
	| "Josie Lawrence"
	| "Stephen Fry"
	| "George Wendt"
	| "Richard Vranch"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-12",
	airdate: "1997-09-25",
	host: "Clive Anderson",
	performers: [
		"Colin Mochrie",
		"Ryan Stiles",
		"Brad Sherwood",
		"Stephen Frost",
		"Greg Proops",
		"Josie Lawrence",
		"Stephen Fry",
		"George Wendt",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "Two glass blowers starting to get on each other's nerves",
			styles: ["Western", "_Lassie_", "_Top Gun_", "_My Little Pony_"],
		},
		{
			name: "Quick Change",
			performers: ["Brad Sherwood", "Stephen Frost"],
			moderators: ["Ryan Stiles"],
			scene: "Brad's briefing Stephen, a spy, about a dangerous mission",
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "On a plane, waiting to parachute behind enemy lines",
		},
		{
			name: "Animals",
			performers: ["Ryan Stiles", "Colin Mochrie", "Greg Proops"],
			scene:
				"Ryan and Greg are on their wedding night when Colin, who is Ryan's ex-wife who he thought had been slaughtered, suddenly reappears",
			animals: "Pigs",
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Brendan Gibbs, a policeman",
			styles: ["An upbeat Sondheim song"],
		},
		{
			name: "Backwards Scene",
			performers: ["Colin Mochrie", "Ryan Stiles", "Brad Sherwood"],
			scene: "Two people are dead at the end of a saloon bar showdown",
		},
		{
			name: "Home Shopping",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			items: [
				"Keys that definitely don't fit any lock",
				"A handful of fluff",
				"Old asparagus",
			],
		},
		{
			name: "Three of a Kind",
			performers: ["Greg Proops", "Colin Mochrie", "Ryan Stiles"],
			job: "Ice hockey players",
			scene: "Doing the housework",
		},
		{
			name: "Party Quirks",
			host: "Stephen Fry",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "The Queen getting involved in a pub fight",
				},
				{
					name: "Colin Mochrie",
					quirk: "Being chased on roof of speeding train",
				},
				{
					name: "Ryan Stiles",
					quirk: "Flipper trying to warn Stephen about various disasters",
				},
			],
		},
		{
			name: "Moving People",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Captain Ahab and his first mate searching for Moby Dick",
		},
		{
			name: "Hoedown",
			performers: [
				"Greg Proops",
				"George Wendt",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			musicians: ["Richard Vranch"],
			about:
				"[Space travel](https://whoselineisitanyway.fandom.com/wiki/Space_Travel_Hoedown_(UK_9-12))",
		},
	],
};
