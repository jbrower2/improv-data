import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Kathy Kinney"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-06",
	airdate: "1998-09-09",
	productionNumber: "296648-102",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Kathy Kinney", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Kathy Kinney",
			guests: [
				{
					name: "Brad Sherwood",
					quirk: "Stressed out hairdresser",
				},
				{
					name: "Colin Mochrie",
					quirk: "Giving birth",
				},
				{
					name: "Ryan Stiles",
					quirk: "Loudmouthed sports fan in the bleachers",
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene:
				"The Lone Ranger finds out that outlaws have hijacked a speeding train",
		},
		{
			name: "Daytime Talk Show",
			host: "Brad Sherwood",
			guests: ["Ryan Stiles", "Kathy Kinney"],
			audienceMembers: ["Colin Mochrie"],
			topic: "Three Little Pigs",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Kathy Kinney"],
				["Colin Mochrie", "Brad Sherwood"],
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Brad Sherwood",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "Ryan is a love-sick Italian pizza-maker",
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about:
				"[Getting your pizza late](https://whoselineisitanyway.fandom.com/wiki/Getting_Your_Pizza_Late_Hoedown)",
		},
		{
			name: "Alphabet",
			alternateName: "90-Second Alphabet",
			performers: ["Ryan Stiles", "Drew Carey"],
			scene:
				"Ryan is Zorro who finally catches up with the villain, played by Drew",
			startingLetter: "Q",
		},
	],
};
