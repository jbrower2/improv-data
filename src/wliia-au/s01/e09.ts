import { type Episode } from "../../types/episode.js";

export const e09: Episode<
	| "Tommy Little"
	| "Tom Walker"
	| "Cal Wilson"
	| "Steen Raskopoulos"
	| "Tegan Higginbotham"
	| "Fourplay with Judy"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/AU_Episode_1-09",
	airdate: "2017-02-05",
	host: "Tommy Little",
	performers: [
		"Tom Walker",
		"Cal Wilson",
		"Steen Raskopoulos",
		"Tegan Higginbotham",
	],
	musicians: [
		{
			name: "Fourplay with Judy",
			alternateName: "Rusty Crutch and the Sunshine Band",
		},
	],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Ways to get out of a bad date",
				"Bad things to say on the witness stand",
			],
		},
		{
			name: "Themed Restaurant",
			waiters: ["Tom Walker", "Tegan Higginbotham"],
			diners: ["Cal Wilson", "Steen Raskopoulos"],
			scene: "Celebrating their tenth anniversary",
			theme: "High school",
		},
		{
			name: "Superheroes",
			crisis: "CrossFit is taking over the world",
			performers: [
				{
					name: "Tegan Higginbotham",
					superpower: "The Lady with No Joints",
				},
				{
					name: "Steen Raskopoulos",
					superpower: "Captain Sarcasmo",
				},
				{
					name: "Cal Wilson",
					superpower: "Amateur Theater Girl",
				},
				{
					name: "Tom Walker",
					superpower: "Overwhelming Sexual Tension Guy",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: [
				"Game show hosts",
				"Things to say to a police officer",
				"Mother",
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Cal Wilson",
				{
					body: "Tom Walker",
					hands: "Steen Raskopoulos",
				},
			],
			scene:
				"Tom is an Italian chocolatier creating new flavors to win the affections of Cal, who is on a food tour",
		},
		{
			name: "Newsflash",
			anchormen: ["Tegan Higginbotham", "Cal Wilson"],
			fieldReporter: "Tom Walker",
			onTheGreenScreen: "Knights jousting and fighting",
		},
		{
			name: "Rock Out",
			musicians: "Fourplay with Judy",
			about: "Competitive eating",
		},
	],
};
