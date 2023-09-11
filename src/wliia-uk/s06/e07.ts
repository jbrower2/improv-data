import { type Episode } from "../../types/episode.js";

export const e07: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Rory Bremner"
	| "Tony Slattery"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_6-07",
	airdate: "1994-08-12",
	host: "Clive Anderson",
	performers: [
		"Josie Lawrence",
		"Rory Bremner",
		"Tony Slattery",
		"Mike McShane",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"What your adolescence was really like",
				"Two politicians meet in the urinals",
				"The last ever James Bond film",
				"Unlikely erogenous zones",
				"The biggest jerk in the world",
				"Those three little words",
				"Pointless things to take when crossing the Sahara",
			],
		},
		{
			name: "News Report",
			alternateName: "Sports Report",
			presenter: "Rory Bremner",
			expert: "Tony Slattery",
			reporter: "Josie Lawrence",
			variousCharacters: "Mike McShane",
			topic: "The race between the tortoise and the hare",
		},
		{
			name: "Film Dub",
			performers: ["Tony Slattery", "Rory Bremner"],
			scene: "Three men argue over what to have for lunch",
			film: "Episode of _The Saint_",
		},
		{
			name: "Prison Visitor",
			visitor: "Josie Lawrence",
			musician: "Richard Vranch",
			prisoners: [
				{
					name: "Tony Slattery",
					crime: "Stolen a jumbo jet",
				},
				{
					name: "Mike McShane",
					crime: "Smuggled a grandfather clock into the country",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: [
				"Person to be president of the world in some sort of intergalactic crisis",
			],
		},
		{
			name: "Props",
			pairs: [
				["Rory Bremner", "Tony Slattery"],
				["Josie Lawrence", "Mike McShane"],
			],
		},
		{
			name: "Duet",
			singers: ["Josie Lawrence", "Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "An old boiler",
			styles: ["Early rock & roll"],
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "Football player",
				},
				{
					name: "Rory Bremner",
					quirk: "Thinks he's Tony",
				},
				{
					name: "Mike McShane",
					quirk: "Pig wrangler",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Mike McShane",
				{
					body: "Josie Lawrence",
					hands: "Tony Slattery",
				},
			],
			scene:
				"Mike is a passenger on an airplane Josie is the stewardess explaining the safety regulations and serving food",
		},
		{
			name: "Hoedown",
			about:
				"[Pony trekking](https://whoselineisitanyway.fandom.com/wiki/Pony_Trekking_Hoedown)",
			musicians: ["Richard Vranch"],
		},
	],
};
