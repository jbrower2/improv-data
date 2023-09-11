import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Joanie Laurer"
	| "Laura Hall"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-08",
	airdate: "2002-11-15",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Joanie Laurer"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Scene to Music",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"Colin and his new wife Wayne are relaxing in a Jacuzzi at a health club, they are shocked when Ryan, the maintenance man, joins them in the tub to fix the jets",
			music: "Horror, Romance, Surfer Beach",
		},
		{
			name: "Dubbing",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			dubber: "Brad Sherwood",
			dubbed: "Joanie Laurer",
			scene:
				"Ballet dancer Colin is in love with his dancing partner, star ballerina Joanie, a passionate woman with violent tendencies, as they are limbering up, her jealous husband, tyrannical ballet coach Ryan, storms in",
		},
		{
			name: "Change Letter",
			performers: [
				"Brad Sherwood",
				"Colin Mochrie",
				"Ryan Stiles",
				"Wayne Brady",
			],
			scene:
				"It's new-members day at a nudist camp and experienced couple Brad and Colin are setting up a picnic",
			cantSay: "P",
			mustSay: "G",
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "The talking mirror image of everyone",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"A perky shoe shine who has brushes on his chest and an electric buffer in his butt",
				},
				{
					name: "Ryan Stiles",
					quirk: "All the characters in a gay Western",
				},
			],
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Knocked over the Christmas tree](https://whoselineisitanyway.fandom.com/wiki/Knocked_Over_the_Christmas_Tree_Irish_Drinking_Song)",
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Drew", "Joanie"],
			scene:
				"James Bond, Ryan, and his Bond girl, Colin, have been captured and left to die in a fiendish way by Dr. No, they must escape from his snowy alpine hideout and make their way back to the safety of Bond's luxury apartment",
		},
	],
};
