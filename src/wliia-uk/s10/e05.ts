import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_10-05",
	airdate: "1998-05-20",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Superheroes",
			crisis: "Amnesia",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Sticky Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "70s Disco Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "Kama Sutra Boy",
				},
				{
					name: "Brad Sherwood",
					superpower: "Captain Bullshitter",
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene:
				"Tarzan waking up in the morning and encountering dangers in the jungle",
		},
		{
			name: "Quiz Show",
			host: "Greg Proops",
			title: "_Wheel of Fish_",
		},
		{
			name: "Hey, You Down There!",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			narrator: "Greg Proops",
			topic: "Hunting in the wilds",
		},
		{
			name: "World's Worst",
			scenes: ["Lover"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Brad Sherwood"],
				["Greg Proops", "Colin Mochrie"],
			],
		},
		{
			name: "Three of a Kind",
			performers: ["Greg Proops", "Ryan Stiles", "Colin Mochrie"],
			scene: "On an oil rig",
			job: "John Wayne",
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "Meeting in the zoo",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Richard Sportwood",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Carl",
				quirk: "Fishing and landing dangerous deep sea creatures",
			},
			sports: {
				name: "Greg Proops",
				alternateName: "Chester Sphincter",
				quirk: "A character from _Braveheart_",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Auditioning for a porn film",
			},
		},
	],
};
