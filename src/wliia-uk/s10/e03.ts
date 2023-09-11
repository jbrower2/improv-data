import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Karen Maruyama"
	| "Colin Mochrie"
	| "Ryan Stiles"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_10-03",
	airdate: "1998-05-06",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Karen Maruyama", "Colin Mochrie", "Ryan Stiles"],
	games: [
		{
			name: "Questions Only",
			scenes: ["In the White House"],
		},
		{
			name: "Quiz Show",
			host: "Greg Proops",
			title: "_What's My Disease?_",
		},
		{
			name: "Film Dub",
			performers: ["Greg Proops", "Ryan Stiles", "Karen Maruyama"],
			scene: "A threesome on a date",
		},
		{
			name: "Hats",
			topic: "World's worst dating agency video",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Wide Butnotpainful",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Bill",
				quirk:
					"Has lost his notes and is desperately searching for them while making up the news",
			},
			sports: {
				name: "Karen Maruyama",
				quirk: "Doing seductive poses for a magazine",
			},
			weather: {
				name: "Ryan Stiles",
				quirk:
					"Strapped to a bomb which will explode ten seconds after he moves",
			},
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Karen Maruyama",
					quirk: "Greg's teenage daughter throwing a tantrum",
				},
				{
					name: "Colin Mochrie",
					quirk: "Animals being pulled into a water hole by crocodiles",
				},
				{
					name: "Ryan Stiles",
					quirk: "Finds mundane activities as thrilling as a rollercoaster",
				},
			],
		},
		{
			name: "Daytime Talk Show",
			host: "Greg Proops",
			guests: ["Karen Maruyama", "Ryan Stiles"],
			audienceMembers: ["Colin Mochrie"],
			topic: "Little Miss Muffet",
		},
	],
};
