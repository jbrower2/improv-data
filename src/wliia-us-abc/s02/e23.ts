import { type Episode } from "../../types/episode";

export const e23: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 23,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-23",
	airdate: "2000-02-10",
	productionNumber: "296718-216",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Great Afterdark",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "A Puritan who is convinced that Greg is a witch",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "A knight looking to rescue a damsel in distress",
			},
			weather: {
				name: "Ryan Stiles",
				quirk:
					"Refuses to abandon his dream of performing in a Busby Berkeley musical",
			},
		},
		{
			name: "African Chant",
			singer: "Wayne Brady",
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Chris, who does visual effects",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Public service announcements you'll never see",
				"Other gifts the three wise men considered",
				"Phrases you can use to describe a truck, but not your girlfriend",
				"Odd things to hear from a talking doll",
				"What doctors really see when they look in your ears",
				"The title for Drew Carey's second book",
			],
		},
		{
			name: "Scene with an Audience Member",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			audienceMember: "Margie",
			scene:
				"Ryan is a sheriff who bursts into a saloon to win back his sweetheart Ms. Kitty from evil gambler, Colin",
		},
		{
			name: "Hats",
			alternateName: "Dating Service Video",
			topic: "World's worst dating service video",
		},
		{
			name: "Alphabet",
			alternateName: "90-Second Alphabet",
			performers: ["Ryan Stiles", "Colin Mochrie", "Drew Carey"],
			scene:
				"Two park rangers, Colin and Drew, are desperately trying to talk crotchety old recluse, Ryan, into evacuating his cabin because a nearby volcano is about to blow",
			startingLetter: "Q",
		},
	],
};
