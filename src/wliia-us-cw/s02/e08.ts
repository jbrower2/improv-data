import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Mircea Monroe"
	| "Laura Hall"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-08",
	airdate: "2014-05-02",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Mircea Monroe"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Glenn Closebutnocigar",
			},
			coAnchor: {
				name: "Gary Anthony Williams",
				quirk:
					"Colin's loudmouth grandfather for whom Colin is a constant disappointment",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Going through an entire relationship with Aisha",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Phil",
				quirk:
					"Drill sergeant putting the whole audience through physical training",
			},
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Mircea Monroe",
			scene:
				"Ryan is a lustful teenager making out in a car with a student Mircea, a full moon appears, Mircea starts to turn into a werewolf, and then Wayne enters as another werewolf on the lookout for a mate",
		},
		{
			name: "World's Worst",
			scenes: ["Commercial"],
		},
		{
			name: "Secret",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "The Lone Ranger and Tonto",
			secret: "Inflatable female doll",
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall"],
			about:
				"[Divorce](https://whoselineisitanyway.fandom.com/wiki/Divorce_Irish_Drinking_Song)",
		},
		{
			name: "Helping Hands",
			performers: [
				"Mircea Monroe",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"Ryan is James Bond on a date with a Russian spy Mircea in a casino, and he is trying to get information out of this Russian spy",
		},
	],
};
