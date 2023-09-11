import { type Episode } from "../../types/episode";

export const e25: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
> = {
	number: 25,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-25",
	airdate: "2005-05-23",
	productionNumber: "296744-7025",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	games: [
		{
			name: "Questions Only",
			scenes: [
				"A very passionate honeymooning couple",
				"Wayne",
				"Kathy",
				"stumble across Frankenstein's castle one stormy night",
			],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Karen", "Julie"],
			scene:
				"A bad-tempered Santa, Ryan, and panicky elf Colin are late loading up the sleigh to start their round of deliveries",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Van Yagonnapaymebackthattenbucks",
			},
			coAnchor: {
				name: "Kathy Greenwood",
				alternateName: "Doody McPherson",
				quirk: "Hideous old crone coming on to all the men",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "His body is being controlled by a prankster in the audience",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Stormy",
				quirk:
					"High-tech thief on a mission to steal the amazingly lifelike Kathy Greenwood statue",
			},
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If statues could speak",
				"Things you don't want to see old people doing",
				"Outtakes from the _Whose Line?_ soap opera",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Kathy Greenwood",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"With Martha Stewart away, her bad-tempered stand-in, Ryan, holds a master class for Kathy, giving her tips on preparing for the holiday season",
		},
	],
};
