import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Keegan-Michael Key"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laila Ali"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_18-03",
	airdate: "2021-10-16",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Keegan-Michael Key",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Laila Ali"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Keegan-Michael Key",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Fairy tale sultan looking for a prince to marry his daughter, Princess Colin",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Black widow spider who makes love to her mates and then devours them",
				},
				{
					name: "Ryan Stiles",
					quirk: "Everyone riding in superstar Colin's limo",
				},
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Sound Effects",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMembers: ["Todd", "Sherry"],
			scene:
				"Dr. Frankenstein, played by Ryan, and Igor, played by Colin, are working in their lab on the night a storm, and they bring a monster to life just before an angry mob appears",
		},
		{
			name: "Forward Rewind",
			scene:
				"Wayne and Colin are two motorcycle gang rivals fighting over sexy biker chick Ryan; after a while, Ryan's going to ride in and try to break them up, and then a crazy homeless guy, Keegan, enters with a shopping cart, annoyed that they're fighting on his turf",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Hairdressers_",
			songs: [
				{
					style: "Cajun",
					title: "Blow Dry",
				},
				{
					style: "CeeLo",
					title: "No Curls, Flat Scalp",
				},
			],
		},
	],
};
