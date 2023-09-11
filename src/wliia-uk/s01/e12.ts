import { type Episode } from "../../types/episode.js";

export const e12: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "John Sessions"
	| "Tony Slattery"
	| "Rory McGrath"
	| "Jonathan Pryce"
	| "Mike McShane"
	| "Stephen Fry"
	| "Richard Vranch"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_1-12",
	airdate: "1988-12-09",
	host: "Clive Anderson",
	performers: [
		"Josie Lawrence",
		"John Sessions",
		"Tony Slattery",
		"Rory McGrath",
		"Jonathan Pryce",
		"Mike McShane",
		"Stephen Fry",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["John Sessions", "Josie Lawrence"],
			scene: "A tour guide showing somebody 'round a museum",
			styles: [
				"Bill Forsyth movie",
				"_Dirty Harry_",
				"_Doctor in the House_",
				"Fred Astaire",
				"Ginger Rogers",
			],
		},
		{
			name: "Story",
			alternateName: "Story Teller",
			leader: "Rory McGrath",
			performers: ["John Sessions", "Tony Slattery", "Jonathan Pryce"],
			title: "_I Was a Russian Fighter Pilot_",
			moral: "Never do it on the first date.",
		},
		{
			name: "Rap",
			performers: [
				"John Sessions",
				"Tony Slattery",
				"Josie Lawrence",
				"Mike McShane",
			],
			musician: "Richard Vranch",
			about: "Handbags",
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "A television set",
			styles: ["_Eurovision_ song contest"],
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Rory McGrath",
					quirk: "Compulsive liar",
				},
				{
					name: "Jonathan Pryce",
					quirk: "Undertaker drumming up business",
				},
				{
					name: "John Sessions",
					quirk: "Character from _Thunderbirds_",
				},
			],
		},
		{
			name: "Every Other Line",
			performers: ["Josie Lawrence", "Stephen Fry"],
			play: "_The Happiest Days of Your Life_",
			scene: "Trying to book an airline ticket in a bit of a hurry",
			endLine: "It's not as small as it looks.",
		},
		{
			name: "American Musical",
			performers: [
				"Josie Lawrence",
				"Mike McShane",
				"Tony Slattery",
				"John Sessions",
			],
			musician: "Richard Vranch",
			about:
				"Going to a party, Getting lost in a maze, and Going gliding in a plane",
		},
	],
};
