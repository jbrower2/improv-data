import { type Episode } from "../../types/episode.js";

export const e02: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Ryan Stiles"
	| "Greg Proops"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_6-02",
	airdate: "1994-07-08",
	host: "Clive Anderson",
	performers: ["Josie Lawrence", "Ryan Stiles", "Greg Proops", "Mike McShane"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Ryan Stiles", "Josie Lawrence"],
					scene:
						"Josie is a horse owner going to see Ryan, who's training horses for her at the stables",
					styles: ["Chinese horror", "Science fiction", "Chase film"],
				},
				{
					performers: ["Mike McShane", "Greg Proops"],
					scene: "Two enthusiasts fixing a motorbike",
					styles: ["_Starksy & Hutch_", "Biblical epic", "Disaster movie"],
				},
			],
		},
		{
			name: "Old Job, New Job",
			performers: ["Josie Lawrence", "Greg Proops"],
			oldJobPerformers: ["Ryan Stiles"],
			scene: "Josie and Greg have broken down and Ryan is an AA man",
			oldJob: "Ryan used to be a spacewalking astronaut",
		},
		{
			name: "Funeral",
			alternateName: "Funeral Oration",
			performers: [
				"Greg Proops",
				"Ryan Stiles",
				"Josie Lawrence",
				"Mike McShane",
			],
			musicians: ["Richard Vranch"],
			for: "Frederick, who died in a trampolining accident",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit Lie Down",
			performers: ["Ryan Stiles", "Greg Proops", "Josie Lawrence"],
			scene: "Patient, doctor, and visitor to hospital",
		},
		{
			name: "Props",
			pairs: [
				["Greg Proops", "Ryan Stiles"],
				["Josie Lawrence", "Mike McShane"],
			],
		},
		{
			name: "Duet",
			singers: ["Josie Lawrence", "Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "Cat litter tray",
			styles: ["Love song"],
		},
		{
			name: "Helping Hands",
			performers: [
				"Josie Lawrence",
				{
					body: "Ryan Stiles",
					hands: "Greg Proops",
				},
			],
			scene: "Gone to get some ice cream",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "Olympic ice skater",
				},
				{
					name: "Mike McShane",
					quirk: "Thinks he is a car",
				},
				{
					name: "Ryan Stiles",
					quirk: "Is going down the plughole",
				},
			],
		},
	],
};
