import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Clive Anderson"
	| "Mike McShane"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-03",
	airdate: "1997-07-24",
	host: "Clive Anderson",
	performers: ["Mike McShane", "Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			scenes: ["Scenes from a passionate French love story"],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene:
				"Arriving at the honeymoon suite with his wife on their wedding night",
		},
		{
			name: "Number of Words",
			performers: [
				{
					name: "Ryan Stiles",
					quirk: "Frankenstein",
					words: 3,
				},
				{
					name: "Colin Mochrie",
					quirk: "Frankenstein's monster",
					words: 2,
				},
				{
					name: "Mike McShane",
					quirk: "Igor",
					words: 1,
				},
				{
					name: "Brad Sherwood",
					quirk: "Chief of Police",
					words: 5,
				},
			],
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Tight trousers](https://whoselineisitanyway.fandom.com/wiki/Tight_Trousers_Hoedown)",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Burnt Sandalwood",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Carl Drinkweather",
				quirk: "A bad stand-up comedian",
			},
			sports: {
				name: "Mike McShane",
				alternateName: "Friendly",
				quirk: "Has been sacked and it's his last day",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Elvis Presley",
			},
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Mike McShane",
					quirk: "Tyrannical European conductor",
				},
				{
					name: "Colin Mochrie",
					quirk: "Can't stop doing Riverdance",
				},
				{
					name: "Ryan Stiles",
					quirk: "Various things caught in a tornado",
				},
			],
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Chris", "Orly"],
			scene:
				"Ryan is on a very early emergency call out to Colin's farm to deliver a calf",
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Mike McShane"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Richard Vranch"],
			album: "_Songs of the DIY center_ or _Songs of the Hardware Store_",
			songs: [
				{
					style: "Disco",
					title: "I'm Your Nail, So Hammer Me",
				},
				{
					style: "60s protest",
					title: "What the Hell Is It with These Instructions",
				},
				{
					style: "70s Reggae",
					title: "What Have You Done with My Tool?",
				},
			],
		},
	],
};
