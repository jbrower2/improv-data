import { type Episode } from "../../types/episode";

export const e22: Episode<
	| "Drew Carey"
	| "Jeff Davis"
	| "Chip Esten"
	| "Jonathan Mangum"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Bob Derkach"
> = {
	number: 22,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Improv-A-Ganza_22",
	airdate: "2011-05-10",
	host: "Drew Carey",
	performers: [
		"Jeff Davis",
		"Chip Esten",
		"Jonathan Mangum",
		"Greg Proops",
		"Ryan Stiles",
	],
	musicians: ["Bob Derkach"],
	games: [
		{
			name: "Quick Change",
			alternateName: "New Choice",
			performers: ["Greg Proops", "Ryan Stiles"],
			moderators: ["Jeff Davis"],
			scene: "Pumpkins and motherhood",
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Options",
			performers: ["Jonathan Mangum", "Drew Carey"],
			scene: "In jail on Devil's Island",
			styles: [
				"Horror",
				"Poetry",
				"Horror again",
				"Scorsese",
				"The 1750s",
				"Kabuki",
				"Food Network",
				"Discovery Channel",
				"Shakespeare",
			],
		},
		{
			name: "Moving People",
			performers: ["Drew Carey", "Chip Esten"],
			moversFromTheAudience: ["Erin", "Jen"],
			scene: "Tennis players",
		},
		{
			name: "Greatest Hits",
			singers: ["Chip Esten", "Jonathan Mangum", "Jeff Davis"],
			salesmen: ["Ryan Stiles", "Drew Carey", "Greg Proops"],
			musicians: ["Bob Derkach"],
			album: "_Hits of the Dietician_",
			songs: [
				{
					style: "Bob Marley",
					title: "Saturated Fat",
				},
			],
		},
	],
};
