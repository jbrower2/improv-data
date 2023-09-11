import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Tommy Little"
	| "Susie Youssef"
	| "Steen Raskopoulos"
	| "Cal Wilson"
	| "Rhys Darby"
	| "Fourplay with Judy"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/AU_Episode_1-05",
	airdate: "2017-01-08",
	host: "Tommy Little",
	performers: [
		"Susie Youssef",
		"Steen Raskopoulos",
		"Cal Wilson",
		"Rhys Darby",
	],
	musicians: [
		{
			name: "Fourplay with Judy",
			alternateName: "The Screaming Seamen",
		},
	],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say about your coffee, but not your partner",
				"Things you don't expect to hear from Siri",
				"Entries in Tommy Little's secret diary",
				"What not to bring to show and tell",
			],
		},
		{
			name: "Secret",
			performers: ["Susie Youssef", "Steen Raskopoulos"],
			scene:
				"Susie is a talented but troubled fighter pilot who wants to give up the game, Steen is Susie's wing-man begging her to stay",
			secret: "A tiny clown bicycle",
		},
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scenes: ["In a jury room", "At a marquee at the races"],
		},
		{
			name: "Quick Change",
			performers: ["Susie Youssef", "Steen Raskopoulos", "Cal Wilson"],
			moderators: ["Tommy Little"],
			scene:
				"Steen and Susie are two knights preparing for a jousting contest when Cal, the uptight Queen, enters",
		},
		{
			name: "Props",
			pairs: [
				["Cal Wilson", "Steen Raskopoulos"],
				["Susie Youssef", "Rhys Darby"],
			],
		},
		{
			name: "Whose Line?",
			performers: ["Cal Wilson", "Rhys Darby"],
			scenes: [
				"New Zealand's best secret agents",
				"also a divorced couple",
				"on a mission to steal Australia's biggest secrets",
			],
			lines: [
				"You're as hard as a marble.",
				"That better be a gravy stain.",
				"There's a new sheriff in town.",
			],
		},
		{
			name: "Rock Out",
			musicians: "Fourplay with Judy",
			about: "Excel",
		},
	],
};
