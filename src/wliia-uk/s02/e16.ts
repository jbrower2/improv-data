import { type Episode } from "../../types/episode.js";

export const e16: Episode<
	| "Clive Anderson"
	| "Ryan Stiles"
	| "Sandi Toksvig"
	| "Mike McShane"
	| "Josie Lawrence"
	| "Tony Slattery"
	| "Paul Merton"
	| "Greg Proops"
	| "Arthur Smith"
	| "Jonathan Pryce"
	| "Archie Hahn"
	| "John Sessions"
	| "Richard Vranch"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-16",
	airdate: "1990-03-09",
	host: "Clive Anderson",
	performers: [
		"Ryan Stiles",
		"Sandi Toksvig",
		"Mike McShane",
		"Josie Lawrence",
		"Tony Slattery",
		"Paul Merton",
		"Greg Proops",
		"Arthur Smith",
		"Jonathan Pryce",
		"Archie Hahn",
		"John Sessions",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Ryan Stiles", "Sandi Toksvig"],
					scene: "A couple meeting on a blind date",
					styles: [
						"Mel Brooks",
						"Andy Warhol",
						"Dog film",
						"Shakespeare",
						"Woody Allen",
					],
				},
			],
		},
		{
			name: "Duet",
			singers: ["Mike McShane", "Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Lemon squeezer",
			styles: ["Andrew Lloyd Webber"],
		},
		{
			name: "That'll Be Charlie Now",
			charlie: "Mike McShane",
			describers: ["Josie Lawrence", "Tony Slattery", "Paul Merton"],
			characteristics: [
				'Every time you say the word "train," he starts to run an aerobics class with us',
				'Grinds up against people whose first names begin with "J"',
				"Every time he speaks to somebody called Tony, he throws up into a galvanized bucket",
				"He spouts forth in that sort of heroic style as if he's making a big speech",
				"He tries to swallow his own foot",
			],
			scene: "Waiting for a train",
		},
		{
			name: "Interview",
			interviews: [
				{
					interviewer: "Tony Slattery",
					style: "A children's programme",
					name: "Greg Proops",
					character: "Noah",
				},
			],
		},
		{
			name: "Rap",
			performers: [
				"Josie Lawrence",
				"Arthur Smith",
				"Sandi Toksvig",
				"Mike McShane",
			],
			about: "Dustman",
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Ironing board",
			styles: ["Jazz"],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Paul Merton", "Tony Slattery"],
			scene: "Somebody taking a driving test",
			film: "_Stingray_ (1964)",
		},
		{
			name: "Party Quirks",
			host: "Paul Merton",
			guests: [
				{
					name: "Archie Hahn",
					quirk: "Lounge singer",
				},
				{
					name: "Jonathan Pryce",
					quirk: "Mad Highland dancer",
				},
				{
					name: "John Sessions",
					quirk: "A character from _The Great Escape_",
				},
			],
		},
		{
			name: "Musical Producers",
			producers: ["Tony Slattery", "Paul Merton"],
			singers: ["Mike McShane", "Josie Lawrence"],
			musician: "Richard Vranch",
			topics: ["Hairdressing"],
		},
	],
};
