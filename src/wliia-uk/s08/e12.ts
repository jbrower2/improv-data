import { type Episode } from "../../types/episode";

export const e12: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Caroline Quentin"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_8-12",
	airdate: "1996-09-27",
	host: "Clive Anderson",
	performers: [
		"Josie Lawrence",
		"Caroline Quentin",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["Colin is serving at a lingerie counter"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "They've just taken off for an air-sea rescue mission",
			styles: [
				"_King Kong_",
				"_Tom & Jerry_",
				"_Free Willy_",
				"Biblical epic",
				"Film noir",
				"Horror",
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Josie Lawrence", "Caroline Quentin"],
			translators: ["Ryan Stiles", "Colin Mochrie"],
			languages: ["Russian"],
			title: "_Godzilla Eats the Dust_",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Caroline Quentin"],
				["Josie Lawrence", "Colin Mochrie"],
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "A surgeon doing an operation",
		},
		{
			name: "Press Conference",
			publicFigure: "Caroline Quentin",
			topic: "Given birth to an alien",
		},
		{
			name: "Dead Bodies",
			alternateName: "Fainting Bodies",
			actor: "Colin Mochrie",
			bodies: ["Ryan Stiles", "Josie Lawrence"],
			lastBody: "Caroline Quentin",
			scene:
				"Ryan and Josie are a couple on the first night of their honeymoon and in due course Caroline, an ex-lover, will come in and confront them",
		},
		{
			name: "Greatest Hits",
			singers: ["Josie Lawrence"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Richard Vranch"],
			album: "_Hits of the Bathroom_",
			songs: [
				{
					style: "Rock opera",
					title: "If You're Out of Toilet Paper, Use the Towel Marked 'His'",
				},
				{
					style: "50s hit",
					title: "You Are My Suds, I Am Your Sponge",
				},
				{
					style: "1962 protest",
					title: "I'm So Small 'Cause You Used All the Hot Water",
				},
			],
		},
	],
};
