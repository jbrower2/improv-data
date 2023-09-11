import { type Episode } from "../../types/episode";

export const e17: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 17,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-17",
	airdate: "2001-11-28",
	productionNumber: "296734-412",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: "Brad Sherwood",
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Barney Smallpants",
				quirk:
					"Has just found his boyfriend Brad is having an affair with someone else on the show (and he wants to know who it is)",
			},
			sports: {
				name: "Wayne Brady",
				quirk:
					"Farm boy defending his title in the finals of the National Greased Pig Roundup",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Sparky McSparksparker",
				quirk: "First-time mother going from conception to birth",
			},
		},
		{
			name: "Two-Line Vocabulary",
			scene:
				"Submarine commander Captain Colin is questioning two seamen (Ryan and Brad) because he suspects one of them of being a spy",
			lines: [
				{
					name: "Brad Sherwood",
					lines: ["Says who?", "What the hell is that?"],
				},
				{
					name: "Ryan Stiles",
					lines: ["That can't be good.", "When's lunch?"],
				},
			],
		},
		{
			name: "Quick Change",
			performers: ["Brad Sherwood", "Colin Mochrie", "Ryan Stiles"],
			moderators: ["Wayne Brady"],
			scene:
				"Outlaw Brad is giving Miss Kitty, Colin, a hard time in the saloon when Sheriff Ryan enters to sort things out",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Latin American soccer announcers on their day off",
				"Weird things for people to find beautiful",
				"Weird things for your grandmother to give you for Christmas",
				"What politicians' wives are really thinking as they smile and wave from the podium",
			],
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Graduation](https://whoselineisitanyway.fandom.com/wiki/Graduation_Irish_Drinking_Song_(US_4-17))",
		},
	],
};
