import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Tommy Little"
	| "Tegan Higginbotham"
	| "Steen Raskopoulos"
	| "Susie Youssef"
	| "Rhys Darby"
	| "Fourplay with Judy"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/AU_Episode_1-03",
	airdate: "2016-12-11",
	host: "Tommy Little",
	performers: [
		"Tegan Higginbotham",
		"Steen Raskopoulos",
		"Susie Youssef",
		"Rhys Darby",
	],
	musicians: [
		{
			name: "Fourplay with Judy",
			alternateName: "The Busty Strumpets",
		},
	],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Characters cut from _Game of Thrones_",
				"Things that shouldn't be so hard",
				"Fads that never took off",
				"If zoo animals had day jobs",
			],
		},
		{
			name: "Old Job, New Job",
			performers: ["Susie Youssef", "Rhys Darby"],
			oldJobPerformers: ["Steen Raskopoulos", "Tegan Higginbotham"],
			scene:
				"Rhys and Susie are a couple looking to buy a hot tub, Tegan and Steen are the salespeople",
			oldJob: "Tegan and Steen used to be dark wizards",
		},
		{
			name: "Helping Hands",
			performers: [
				"Tegan Higginbotham",
				{
					body: "Rhys Darby",
					hands: "Steen Raskopoulos",
				},
			],
			scene:
				"Rhys is a party clown auditioning to be hired as the entertainment at Tegan's son's birthday",
		},
		{
			name: "Quick Change",
			performers: ["Steen Raskopoulos", "Rhys Darby", "Susie Youssef"],
			moderators: ["Tommy Little"],
			scene:
				"Rhys is a nervous apprentice chef being trained by Steen, Susie enters as an influential food critic to complain about her meal",
		},
		{
			name: "Props",
			pairs: [
				["Steen Raskopoulos", "Susie Youssef"],
				["Tegan Higginbotham", "Rhys Darby"],
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Susie Youssef", "Steen Raskopoulos"],
			fieldReporter: "Rhys Darby",
			onTheGreenScreen: "Various types of animals copulating",
		},
		{
			name: "Rock Out",
			musicians: "Fourplay with Judy",
			about: "The life of a pilot",
		},
	],
};
