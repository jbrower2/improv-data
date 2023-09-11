import { type Episode } from "../../types/episode";

export const e10: Episode<
	| "Clive Anderson"
	| "Lee Simpson"
	| "Jan Ravens"
	| "Tony Slattery"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-10",
	airdate: "1990-01-19",
	host: "Clive Anderson",
	performers: ["Lee Simpson", "Jan Ravens", "Tony Slattery", "Mike McShane"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_A Dabchick by the River Bank_",
			performers: [
				{
					name: "Lee Simpson",
					author: "T. E. Lawrence",
				},
				{
					name: "Jan Ravens",
					author: "Duchess of York",
				},
				{
					name: "Tony Slattery",
					author: "Package holiday brochure",
				},
				{
					name: "Mike McShane",
					author: "Joseph Wambaugh",
				},
			],
		},
		{
			name: "That'll Be Charlie Now",
			charlie: "Mike McShane",
			describers: ["Lee Simpson", "Jan Ravens", "Tony Slattery"],
			characteristics: [
				"Smokes 147 a day",
				"Pustulating sore on his nose",
				"Exposes himself to women and men",
				"Spits in people's ears and sucks it out",
				"Grabs hold of nipples and twists them",
			],
			scene: "Hotel reception",
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Jan Ravens", "Tony Slattery"],
			scene: "Two people on their honeymoon",
			film: "_Nabonga_ (1944)",
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "A sink plunger",
			styles: ["Motown"],
		},
		{
			name: "World's Worst",
			scenes: ["Thing to say or do when making love"],
		},
		{
			name: "Props",
			pairs: [
				["Lee Simpson", "Mike McShane"],
				["Tony Slattery", "Jan Ravens"],
			],
		},
		{
			name: "Rap",
			performers: [
				"Lee Simpson",
				"Jan Ravens",
				"Tony Slattery",
				"Mike McShane",
			],
			about: "Banking",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Lee Simpson",
					quirk: "Thinks he's in a play rehearsal",
				},
				{
					name: "Jan Ravens",
					quirk: "Air hostess",
				},
				{
					name: "Mike McShane",
					quirk: "Thinks he's Scarlet O'Hara",
				},
			],
		},
		{
			name: "American Musical",
			musician: "Richard Vranch",
			about: "Pulling out weeds, Walking in northern Italy, and Swimming",
		},
	],
};
