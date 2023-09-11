import { type Episode } from "../../types/episode";

export const e14: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Karen Maruyama"
	| "Colin Mochrie"
	| "Ryan Stiles"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-14",
	airdate: "1997-10-09",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Karen Maruyama", "Colin Mochrie", "Ryan Stiles"],
	games: [
		{
			name: "Questions Only",
			scenes: [
				"Two couples have been on holiday",
				"an affair has been going on",
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "A fireman who gets a callout",
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Greg Proops", "Karen Maruyama"],
			scene:
				"Greg is firing Karen from her job as a Red Riding Hood at the fairy tale theme park",
			styles: ["_Star Trek_", "_Beavis", "Butthead_", "Tennessee Williams"],
		},
		{
			name: "Sportscasters",
			alternateName: "Sports Commentators",
			commentators: ["Greg Proops", "Karen Maruyama"],
			athletes: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Rival hot dog salesmen",
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["Greg Proops", "Karen Maruyama"],
			],
		},
		{
			name: "Home Shopping",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			items: [
				"An umbrella handle",
				"Somebody else's photos",
				"Cold onion gravy",
			],
		},
		{
			name: "Soap Opera",
			scene: "At a public toilet",
		},
		{
			name: "News Report",
			anchormen: ["Greg Proops", "Colin Mochrie"],
			reporter: "Karen Maruyama",
			variousCharacters: "Ryan Stiles",
			topic: "The extinction of dinosaurs",
		},
	],
};
