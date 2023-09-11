import { type Episode } from "../../types/episode.js";

export const e01: Episode<
	| "Tommy Little"
	| "Tegan Higginbotham"
	| "Steen Raskopoulos"
	| "Tom Walker"
	| "Cal Wilson"
	| "Fourplay with Judy"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/AU_Episode_1-01",
	airdate: "2016-11-27",
	host: "Tommy Little",
	performers: [
		"Tegan Higginbotham",
		"Steen Raskopoulos",
		"Tom Walker",
		"Cal Wilson",
	],
	musicians: ["Fourplay with Judy"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Rejected Aussie tourism slogans",
				"Situations where your Borat impression isn't appropriate",
				"Things you can say about your job, but not your partner",
				"The good news and the bad news",
				"Things you don't want to hear in a doctor's waiting room",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Steen Raskopoulos", "Tom Walker"],
			scenes: [
				"Steen is the Tooth Fairy who accidentally wakes up a sleeping Tom.",
			],
			lines: [
				"It's called a bum bag.  Ever heard of it?",
				"Hey, is that a bully?",
				"Let's see what's behind door number two.",
			],
		},
		{
			name: "Hats",
			alternateName: "Dating Service",
		},
		{
			name: "Sound Effects (with Audience Members)",
			alternateName: "Audience Sound Effects",
			performers: ["Tegan Higginbotham", "Cal Wilson"],
			audienceMembers: ["Russell", "Jacqueline"],
			scene:
				"Explorers in the Amazon looking for a rare bird when attacked by wild animals",
		},
		{
			name: "Props",
			pairs: [
				["Tom Walker", "Cal Wilson"],
				["Steen Raskopoulos", "Tegan Higginbotham"],
			],
		},
		{
			name: "Weird Newscasters",
			alternateName: "Weird Newsreaders",
			anchor: {
				name: "Cal Wilson",
				alternateName: "Janine Slaughterhouse O'Shannessy",
			},
			coAnchor: {
				name: "Tegan Higginbotham",
				alternateName: "Allison Sang",
				quirk: "Just woken up from a forty-year coma",
			},
			sports: {
				name: "Steen Raskopoulos",
				alternateName: "Tentpeg O'Riley",
				quirk:
					"A health and safety inspector who thinks the studio is a hazard",
			},
			weather: {
				name: "Tom Walker",
				alternateName: "Soggy Barnacles",
				quirk: "An Italian Renaissance inventor testing his new flying machine",
			},
		},
		{
			name: "Questions Only",
			alternateName: "Questions",
			scenes: ["In a prison exercise yard", "In a jewelry store"],
		},
		{
			name: "Rock Out",
			musicians: "Fourplay with Judy",
			about: "Childbirth",
		},
	],
};
