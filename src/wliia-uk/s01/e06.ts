import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Clive Anderson"
	| "Graeme Garden"
	| "Jan Ravens"
	| "George McGrath"
	| "John Sessions"
	| "Richard Vranch"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_1-06",
	airdate: "1988-10-28",
	host: "Clive Anderson",
	performers: [
		"Graeme Garden",
		"Jan Ravens",
		"George McGrath",
		"John Sessions",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_The Sleeping Beauty_",
			performers: [
				{
					name: "Graeme Garden",
					author: "J. B. Priestly",
				},
				{
					name: "Jan Ravens",
					author: "Pam Ayres",
				},
				{
					name: "George McGrath",
					author: "Dr. Roget, the thesaurus guy",
				},
				{
					name: "John Sessions",
					author: "D. H. Lawrence",
				},
			],
		},
		{
			name: "Story",
			title: "_A Day in the Life of a Rubber Duck_",
			moral: "A rolling stone gathers no moss",
		},
		{
			name: "Props",
			pairs: [
				["John Sessions", "Jan Ravens"],
				["Graeme Garden", "George McGrath"],
			],
		},
		{
			name: "Party Quirks",
			host: "Graeme Garden",
			guests: [
				{
					name: "George McGrath",
					quirk: "An alien",
				},
				{
					name: "Jan Ravens",
					quirk: "Thinks it's her house",
				},
				{
					name: "John Sessions",
					quirk: "A leprechaun",
				},
			],
		},
		{
			name: "Every Other Line",
			performers: ["John Sessions", "Graeme Garden"],
			play: "_Hay Fever_ by Noel Coward",
			scene: "Pilot talking to someone in Mission Control",
			endLine: "Don't accept lifts from a stranger.",
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Jan Ravens", "George McGrath"],
			scene: "Two people the morning after a heavy night before",
		},
		{
			name: "American Musical",
			musician: "Richard Vranch",
			about:
				"Puberty, Making a cup of tea, and Coming to see a television show recorded",
		},
	],
};
