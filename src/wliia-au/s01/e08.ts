import { type Episode } from "../../types/episode.js";

export const e08: Episode<
	| "Tommy Little"
	| "Susie Youssef"
	| "Steen Raskopoulos"
	| "Bridie Connell"
	| "Rhys Darby"
	| "Fourplay with Judy"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/AU_Episode_1-08",
	airdate: "2017-01-29",
	host: "Tommy Little",
	performers: [
		"Susie Youssef",
		"Steen Raskopoulos",
		"Bridie Connell",
		"Rhys Darby",
	],
	musicians: [
		{
			name: "Fourplay with Judy",
			alternateName: "The Pregnant Teens",
		},
	],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Tinder date ice-breakers",
				"Outtakes from _Antiques Roadshow_",
				"If pets went to therapy",
			],
		},
		{
			name: "Press Conference",
			publicFigure: "Rhys Darby",
			topic: "Announcing he married a hot dog bun",
		},
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scenes: ["In the foyer of a fancy hotel", "In an enchanted forest"],
		},
		{
			name: "Weird Newscasters",
			alternateName: "Weird Newsreaders",
			anchor: {
				name: "Susie Youssef",
				alternateName: "Constantly Disappointed",
			},
			coAnchor: {
				name: "Bridie Connell",
				alternateName: "Pedro El Stripo",
				quirk: "An old mariachi singer with a crush on Susie",
			},
			sports: {
				name: "Rhys Darby",
				alternateName: "Darren Bingle",
				quirk: "An Australian tourism commercial",
			},
			weather: {
				name: "Steen Raskopoulos",
				alternateName: "Barney Twosocks",
				quirk:
					"A scenic helicopter pilot trying to catch his wife (Amanda from the audience) cheating",
			},
		},
		{
			name: "World's Worst",
			scenes: ["Things to say at a family dinner", "Personal trainer"],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Steen Raskopoulos", "Susie Youssef"],
			singers: ["Bridie Connell"],
			musicians: ["Fourplay with Judy"],
			album: "_Greatest Hits about Telemarketers_",
			songs: [
				{
					style: "Opera",
					title: "Stop Calling Me!",
				},
				{
					style: "Rap",
					title:
						"I Could Have Been a Doctor, but I'm Stuck in This Call Center, Please Call Home, I Need Someone to Talk to",
				},
			],
		},
		{
			name: "Rock Out",
			musicians: "Fourplay with Judy",
			about: "Nudie runs",
		},
	],
};
