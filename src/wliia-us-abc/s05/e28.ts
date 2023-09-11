import { type Episode } from "../../types/episode.js";

export const e28: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Undarma Darihu"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 28,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_5-28",
	airdate: "2003-08-08",
	productionNumber: "296736-608",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Undarma Darihu"],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Scene to Music",
			performers: ["Ryan Stiles", "Colin Mochrie", "Wayne Brady"],
			scene:
				"A newlywed couple, Colin and Wayne, are in their honeymoon suite in a luxury hotel, just as they are getting undressed a gung-ho pest exterminator, Ryan, knocks on the door to tell them that their room is infested with roaches",
			music: "Horror, Native American, Romance, _Indiana Jones_, Irish",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Famous film roles as played by Scooby-Doo",
				"If welcome signs in European countries were truthful",
				"Things you don't want to hear your grandmother singing about",
				"What the first fight between a man and a woman was about",
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			about: "Undarma Darihu",
			styles: ["Prince"],
		},
		{
			name: "Change Letter",
			performers: [
				"Greg Proops",
				"Wayne Brady",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			scene:
				"Greg the team doctor is treating naked star basketball player Wayne after the game in the locker room, Colin, a flirtatious female reporter, enters to interview Wayne, when suddenly, the coach, Ryan, comes in to tell Wayne he's been benched",
			cantSay: "B",
			mustSay: "W",
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Undarma"],
			scene:
				"Arctic explorers on a race to the North Pole run into trouble and must find food, warmth, and shelter until they can be rescued",
		},
		{
			name: "Hats",
			alternateName: "Dating Service Video",
			topic: "World's worst dating service video",
		},
		{
			name: "Sportscasters",
			commentators: ["Greg Proops", "Drew Carey"],
			athletes: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two rival office workers trying to impress their boss",
		},
	],
};
