import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-11",
	airdate: "1999-01-13",
	productionNumber: "296717-113",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Wayne Brady",
			guests: [
				{
					name: "Greg Proops",
					quirk: "President Clinton",
				},
				{
					name: "Colin Mochrie",
					quirk: "Gradually being eaten by soldier ants",
				},
				{
					name: "Ryan Stiles",
					quirk: "A masochist",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film Theater and Television Styles",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene:
				"Greg is a farmer who comes to complain to Ryan, a neighboring farmer, about some giant killer bees coming from his barn",
			styles: ["Horror", "Kabuki", "Elvis", "_Sesame Street_", "Greek tragedy"],
		},
		{
			name: "Hats",
			alternateName: "Dating Service Video",
			topic: "World's worst dating service video",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Burn Nightly",
			},
			coAnchor: {
				name: "Greg Proops",
				quirk: "Captain Kirk",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "On a video tape that's speeding up and slowing down",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Skippy Bartholomew",
				quirk: "An excited rock star in front of a big crowd",
			},
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			album: "_Songs of the Postal Worker_",
			songs: [
				{
					style: "Latin",
					title: "Mail",
				},
				{
					style: "40s boogie woogie",
					title: "Put It in the Slot",
				},
				{
					style: "Tina Turner",
					title: "Hey Man, Tie Up Your Dog",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Drew Carey",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "Ryan is a pet care guru teaching Drew how to look after his dog",
		},
	],
};
