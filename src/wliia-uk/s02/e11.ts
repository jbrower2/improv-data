import { type Episode } from "../../types/episode.js";

export const e11: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Arthur Smith"
	| "Sandi Toksvig"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-11",
	airdate: "1990-01-26",
	host: "Clive Anderson",
	performers: [
		"Josie Lawrence",
		"Arthur Smith",
		"Sandi Toksvig",
		"Mike McShane",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Arthur Smith", "Josie Lawrence"],
					scene: "One is interviewing the other for a job as a butler",
					styles: ["Gangster movie", "Pantomime"],
				},
				{
					performers: ["Sandi Toksvig", "Mike McShane"],
					scene:
						"A housewife coming home to find a plumber up to his knees in water",
					styles: [
						"Feydeau farce",
						"Sadomasochists",
						"_Rocky_",
						"_James Bond_ film",
					],
				},
			],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Sandi Toksvig", "Arthur Smith"],
			scene: "Returning home from holiday",
			film: "_Fireball XL5_ (1962-63)",
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane", "Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Lemon squeezer",
			styles: ["Heavy metal (Mike)", "Folk song (Josie)"],
		},
		{
			name: "World's Worst",
			scenes: ["Person to go on holiday with"],
		},
		{
			name: "Props",
			pairs: [
				["Sandi Toksvig", "Mike McShane"],
				["Josie Lawrence", "Arthur Smith"],
			],
		},
		{
			name: "Party Quirks",
			host: "Sandi Toksvig",
			guests: [
				{
					name: "Arthur Smith",
					quirk: "Shady dealer (spiv)",
				},
				{
					name: "Josie Lawrence",
					quirk: "Schoolgirl from a girls' comic",
				},
				{
					name: "Mike McShane",
					quirk: "Possessed by the devil",
				},
			],
		},
		{
			name: "Musical Producers",
			producers: ["Sandi Toksvig", "Arthur Smith"],
			singers: ["Mike McShane", "Josie Lawrence"],
			musician: "Richard Vranch",
			topics: ["Bricklaying"],
		},
	],
};
