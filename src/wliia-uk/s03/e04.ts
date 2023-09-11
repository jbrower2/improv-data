import { type Episode } from "../../types/episode.js";

export const e04: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Paul Merton"
	| "Julian Clary"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-04",
	airdate: "1991-02-08",
	host: "Clive Anderson",
	performers: ["Josie Lawrence", "Paul Merton", "Julian Clary", "Mike McShane"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Julian Clary", "Paul Merton"],
					scene: "Door-to-door salesman",
					styles: ["Greek tragedy", "Disney", "Berkoff", "Pirate movie"],
				},
				{
					performers: ["Josie Lawrence", "Mike McShane"],
					scene: "One suspects the other one is having an affair",
					styles: ["Australian soap", "_Twin Peaks_", "Old-time musical"],
				},
			],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Paul Merton", "Julian Clary"],
			scene: "An escort agency",
			film: "_Stingray_ (1964)",
		},
		{
			name: "Interview",
			interviews: [
				{
					interviewer: "Julian Clary",
					style: "Fan-zine",
					name: "Mike McShane",
					character: "Julius Caesar",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane", "Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Electric drills",
			styles: ["Reggae (Mike)", "Heavy metal (Josie)"],
		},
		{
			name: "Props",
			pairs: [
				["Mike McShane", "Julian Clary"],
				["Josie Lawrence", "Paul Merton"],
			],
		},
		{
			name: "Alphabet",
			performers: ["Julian Clary", "Paul Merton"],
			scene: "Somebody being arrested",
			startingLetter: "A",
		},
		{
			name: "Expert Translation",
			expert: "Josie Lawrence",
			translator: "Paul Merton",
			language: "Swedish",
			topic: "Volvos",
		},
		{
			name: "Gospel",
			musician: "Richard Vranch",
			about: "Sewing",
		},
	],
};
