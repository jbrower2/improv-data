import { type Episode } from "../../types/episode";

export const e07: Episode<
	| "Aisha Tyler"
	| "Ryan Stiles"
	| "Colin Mochrie"
	| "Wayne Brady"
	| "Brad Sherwood"
	| "Heather Morris"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 7,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-07",
	airdate: "2015-06-05",
	host: "Aisha Tyler",
	performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady", "Brad Sherwood"],
	guests: ["Heather Morris"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Gord Oftherings",
			},
			coAnchor: {
				name: "Brad Sherwood",
				alternateName: "Chimpy",
				quirk: "Colin's over-affectionate orangutan",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "A day in the life of Aisha",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Loopy Garoo",
				quirk: "Evil poltergeist causing havoc in the studio",
			},
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Heather Morris",
			scene:
				"~~Hunky~~ Foxy coach Ryan is audition new cheerleader Heather for the squad when suddenly her bitchy rival, Wayne, bursts in to compete",
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Heather"],
			scene:
				"Two rock-and-roll musicians rehearsing on their luxury yacht when it suddenly runs into trouble",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Lines you wouldn't expect to hear in a love song",
				"If cops spoke like Dr. Seuss",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Brad Sherwood", "Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Hospital_",
			songs: [
				{
					style: "Korean pop featuring Johnny Cash",
					title: "I Just Sewed Up My Watch in You",
				},
				{
					style: "Power metal",
					title: "I.C.U.",
				},
			],
		},
	],
};
