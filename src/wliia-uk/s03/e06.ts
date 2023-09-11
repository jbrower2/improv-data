import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Clive Anderson"
	| "Mike McShane"
	| "Josie Lawrence"
	| "Denalda Williams"
	| "Sandi Toksvig"
	| "Richard Vranch"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_3-06",
	airdate: "1991-02-22",
	host: "Clive Anderson",
	performers: [
		"Mike McShane",
		"Josie Lawrence",
		"Denalda Williams",
		"Sandi Toksvig",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Emotion Options",
			alternateName: "Emotion Option",
			performers: ["Denalda Williams", "Josie Lawrence"],
			scene: "Traffic warden giving a ticket to a car",
			emotions: ["Panic", "Paranoia", "Embarrassment", "Ecstasy"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Sandi Toksvig", "Mike McShane"],
			scene: "Five minutes before their daughter's wedding",
			styles: [
				"_Prisoner: Cell Block H_",
				"Biblical epic",
				"Spaghetti western",
				"School play",
				"James Bond",
			],
		},
		{
			name: "Expert Translation",
			expert: "Denalda Williams",
			translator: "Sandi Toksvig",
			language: "Polynesian",
			topic: "The drains",
		},
		{
			name: "Psychiatrist",
			psychiatrist: "Josie Lawrence",
			musician: "Richard Vranch",
			performers: [
				{
					name: "Denalda Williams",
					quirk: "Scared of peanut butter",
				},
				{
					name: "Mike McShane",
					quirk: "In love with Easter Bunnies",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Mike McShane", "Denalda Williams"],
				["Sandi Toksvig", "Josie Lawrence"],
			],
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence", "Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "A stapler",
			styles: ["Irish Jig (Josie)", "Soul (Mike)"],
		},
		{
			name: "News Report",
			interviewer: "Sandi Toksvig",
			expert: "Mike McShane",
			reporter: "Denalda Williams",
			variousCharacters: "Josie Lawrence",
			topic: "Little Bo Peep",
		},
		{
			name: "Alphabet",
			performers: ["Sandi Toksvig", "Josie Lawrence"],
			scene: "One is encouraging the other to take a parachute jump",
			startingLetter: "A",
		},
		{
			name: "Gospel",
			musician: "Richard Vranch",
			about: "Woodwork",
		},
	],
};
