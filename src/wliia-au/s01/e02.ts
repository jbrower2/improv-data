import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Tommy Little"
	| "Cal Wilson"
	| "Steen Raskopoulos"
	| "Bridie Connell"
	| "Rhys Darby"
	| "Fourplay with Judy"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/AU_Episode_1-02",
	airdate: "2016-12-04",
	host: "Tommy Little",
	performers: [
		"Cal Wilson",
		"Steen Raskopoulos",
		"Bridie Connell",
		"Rhys Darby",
	],
	musicians: [
		{
			name: "Fourplay with Judy",
			alternateName: "The Slippery Nipples",
		},
	],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things you can say about your computer, but not your partner",
				"Things _Sesame Street_ characters might say during sex",
				"If Kiwis ran Australia",
			],
		},
		{
			name: "Hollywood Director",
			director: "Steen Raskopoulos",
			scene:
				"Bridie and Rhys are acrobatic thieves scaling a skyscraper when Cal enters as Spider-Woman to foil their plans",
			notes: ["You're all break-dancing-battle crews"],
		},
		{
			name: "Hats",
			alternateName: "Dating Service",
		},
		{
			name: "Dubbing",
			performers: ["Cal Wilson", "Bridie Connell"],
			dubber: "Steen Raskopoulos",
			dubbed: "Rhys Darby",
			musicians: ["Fourplay with Judy"],
			scene:
				"Bridie is attending a comic book convention when she meets her idol, Rhys; when she freaks out too much, Cal enters as an overzealous security guard",
		},
		{
			name: "Bartender",
			bartender: "Bridie Connell",
			musicians: ["Fourplay with Judy"],
			performers: [
				{
					name: "Cal Wilson",
					quirk: "Angry about parking tickets (and honey badgers)",
				},
				{
					name: "Rhys Darby",
					quirk: "Sad about hipsters",
				},
				{
					name: "Steen Raskopoulos",
					quirk: "Happy about trains (and that he found fifty bucks)",
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Cal Wilson", "Bridie Connell"],
			fieldReporter: "Rhys Darby",
			onTheGreenScreen: "Closeups of people eating various foods",
		},
		{
			name: "Rock Out",
			musicians: "Fourplay with Judy",
			about: "Puberty",
		},
	],
};
