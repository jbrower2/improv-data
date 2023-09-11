import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Drew Carey"
	| "Chip Esten"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anna Wanselius"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-05",
	airdate: "1999-10-07",
	productionNumber: "296718-220",
	host: "Drew Carey",
	performers: ["Chip Esten", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Orlan Curtainback",
			},
			coAnchor: {
				name: "Chip Esten",
				alternateName: "Steve Incredible",
				quirk: "In the middle of a Broadway musical",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Flappy",
				quirk: "Drew's no.1 teenage fan",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Sonny Skies",
				quirk: "Desperate to quell rumors that he's gay",
			},
		},
		{
			name: "Duet",
			singers: ["Chip Esten", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Anna Wanselius"],
			about: "Connie, a receptionist at a doctor's office",
			styles: ["Jumpin' jive"],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Baseball umpires at home",
				"Ill-advised Valentine's Day gifts",
				"Favorite pranks of nuns",
				"Other things the first man on the moon might have said",
				"Opening lines to foreign national anthems",
				"Lines you wouldn't hear in a western",
				"Rejected _Jeopardy_ categories",
				"People who won't be appearing on currency any time soon",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"Ryan is Rhett Butler",
				"Colin is Scarlett O'Hara",
				"Rhett finally tells Scarlett that he's leaving",
			],
			lines: [
				"You look like two pigs wrestling under a blanket.",
				"Hey, what smells?",
				"I'm wearing a thong.",
				"What'chu talkin' 'bout, Willis?",
			],
		},
		{
			name: "Hoedown",
			musicians: ["Laura Hall"],
			about: "[Men](https://whoselineisitanyway.fandom.com/wiki/Men_Hoedown)",
		},
		{
			name: "Questions Only",
			performers: ["Drew Carey", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			scenes: ["_Godzilla_"],
		},
	],
};
