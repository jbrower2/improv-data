import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-09",
	airdate: "1997-09-04",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Colin Mochrie",
		"Brad Sherwood",
		"Ryan Stiles",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["On Noah's ark"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Colin is a policeman and he has come to investigate reports of a strange disturbance on a chicken farm",
			styles: ["_Star Trek_", "_Riverdance_", "_Jurassic Park_"],
		},
		{
			name: "Old Job, New Job",
			performers: ["Ryan Stiles", "Brad Sherwood"],
			oldJobPerformers: ["Stephen Frost"],
			scene: "Introducing the fiancee to the father, Stephen",
			oldJob: "Stephen used to be a dog show judge",
		},
		{
			name: "Home Shopping",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			items: [
				"Waders with holes in",
				"Some chewing gum chewed by somebody else already",
				"A solar-powered torch",
			],
		},
		{
			name: "Quick Change",
			performers: ["Brad Sherwood", "Colin Mochrie"],
			moderators: ["Stephen Frost"],
			scene: "Telling a general you're under attack",
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Stephen Frost",
					quirk: "Strict German nanny",
				},
				{
					name: "Colin Mochrie",
					quirk: "Physically in love with food",
				},
				{
					name: "Ryan Stiles",
					quirk: "Film extra in bar room brawl",
				},
			],
		},
		{
			name: "Improbable Mission",
			alternateName: "Mission: Impossible",
			agents: ["Ryan Stiles", "Colin Mochrie"],
			voiceOnTape: "Stephen Frost",
			mission: "Mowing the lawn",
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Richard Vranch"],
			album: "_Songs of the Farmyard_",
			songs: [
				{
					style: "German drinking song",
					title: "You're Just a Chicken, But What the Cluck",
				},
				{
					style: "Punk",
					title: "Is That an Ear of Corn, or Are You Just Happy to See Me?",
				},
				{
					style: "Romantic French ballad",
					title: "You May Be Just a Horse, but You've Got a Hell of an Ass",
				},
			],
		},
	],
};
