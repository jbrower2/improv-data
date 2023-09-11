import { type Episode } from "../../types/episode";

export const e28: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 28,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-28",
	airdate: "2002-03-07",
	productionNumber: "296734-431",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Frozen Underpants",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Frosty Chatterbox",
				quirk: "Psycho hitchhiker getting a ride with the anchor",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Nippy Frostbite",
				quirk:
					"Very enthusiastic bikini car wash girl looking for shiny surfaces to clean",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Brisk Icecubepants",
				quirk:
					"Hollywood's most demanding temperamental star trying to give an award-winning performance",
			},
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If human doctors acted like animal doctors",
				"The good news and the bad news",
				"Refreshingly honest statements that could earn you a black eye",
			],
		},
		{
			name: "Two-Line Vocabulary",
			scene:
				"An army captain, Colin, is looking for two volunteers to go on a dangerous mission",
			lines: [
				{
					name: "Brad Sherwood",
					lines: ["That's easy for you to say.", "Is that good?"],
				},
				{
					name: "Ryan Stiles",
					lines: ["What are those?", "I'm sorry, I wasn't listening."],
				},
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Flight Attendant_",
			songs: [
				{
					style: "Tom Petty",
					title: "You Can't Use the First Class Can",
				},
				{
					style: "A flapper tune",
					title: "Don't Call Me a Waitress",
				},
				{
					style: "Thrash",
					title: "Do You Want Meat or Fish?",
				},
			],
		},
		{
			name: "Foreign Film Dub",
			actors: ["Drew Carey", "Wayne Brady"],
			translators: ["Ryan Stiles", "Brad Sherwood"],
			languages: ["Swedish"],
			film: "_Meatballs Blow Up_",
		},
	],
};
