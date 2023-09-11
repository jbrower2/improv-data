import { type Episode } from "../../types/episode";

export const e21: Episode<
	| "Drew Carey"
	| "Heather Anne Campbell"
	| "Jeff Davis"
	| "Chip Esten"
	| "Jonathan Mangum"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 21,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_21",
	airdate: "2011-05-09",
	host: "Drew Carey",
	performers: [
		"Heather Anne Campbell",
		"Jeff Davis",
		"Chip Esten",
		"Jonathan Mangum",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Jonathan Mangum", "Drew Carey"],
			scene: "Nursing",
			styles: [
				"Kabuki",
				"Quentin Tarantino",
				"Kazakhstan",
				"Kazakhstan Tarantino",
				"Broadway musical",
				"Kazakhstan Tarantino musical",
				"Three-",
				"Eight-word sentences",
				"Victorian",
				"Kazakhstan Victorian",
				"1980s",
				"Western",
				"_The Princess Bride_",
				"Horror",
				"Sportsbook",
				"Edgar Allan Poe",
				"Shel Silverstein",
				"Dr. Seuss",
			],
		},
		{
			name: "Forward Rewind",
			alternateName: "Forward and Reverse",
			performers: [
				"Jeff Davis",
				"Ryan Stiles",
				"Chip Esten",
				"Jonathan Mangum",
			],
			moderators: ["Drew Carey"],
			scene: "A weekend away at Cabo St. Lucas",
		},
		{
			name: "Show-Stopping Number",
			alternateName: "Bob's Call",
			performers: ["Chip Esten", "Drew Carey"],
			scene: "Transformers collectors",
		},
		{
			name: "Greatest Hits",
			singers: ["Jonathan Mangum", "Jeff Davis", "Chip Esten"],
			salesmen: ["Heather Anne Campbell", "Drew Carey", "Ryan Stiles"],
			musicians: ["Bob Derkach"],
			album: "_Greatest Hits of the Executioner_",
			songs: [
				{
					style: "Old school rap",
					title: "Lethal Injection",
				},
			],
		},
	],
};
