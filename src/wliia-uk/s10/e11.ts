import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Clive Anderson"
	| "Colin Mochrie"
	| "Phil LaMarr"
	| "Ryan Stiles"
	| "Greg Proops"
	| "Catherine O'Hara"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Laura Hall"
	| "Win Meyerson"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_10-11",
	airdate: "1998-07-02",
	host: "Clive Anderson",
	performers: [
		"Colin Mochrie",
		"Phil LaMarr",
		"Ryan Stiles",
		"Greg Proops",
		"Catherine O'Hara",
		"Brad Sherwood",
		"Wayne Brady",
	],
	musicians: ["Laura Hall", "Win Meyerson"],
	games: [
		{
			name: "Questions Only",
			performers: [
				"Colin Mochrie",
				"Phil LaMarr",
				"Ryan Stiles",
				"Greg Proops",
			],
			scenes: ["City boys have lost their way in hillbilly country"],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene:
				"A skier carrying his skis, and just about to take the lift to the mountaintop",
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit Bend",
			performers: ["Ryan Stiles", "Colin Mochrie", "Greg Proops"],
			scene:
				"Colin and Greg are two scientists who've come round to stop Dr. Jekyll turning himself into Mr. Hyde",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Uncontrollably Erect",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Bill",
				quirk: "A lap dancer",
			},
			sports: {
				name: "Catherine O'Hara",
				alternateName: "Hot Kitty Cat",
				quirk: "It's her first day on the job and she is shell-shocked",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Has had to bring his many children to work",
			},
		},
		{
			name: "Telethon",
			singers: ["Brad Sherwood", "Wayne Brady"],
			hosts: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall"],
			topic: "Charity anthem for pizza deliverers",
			celebrities: ["Bruce Springsteen", "Stevie Wonder"],
		},
		{
			name: "This Is the Story of Your Life",
			host: "Brad Sherwood",
			honoree: {
				name: "Wayne Brady",
				alternateName: 'sewer worker "Ralph Stool"',
			},
			guestsFromThePast: ["Colin Mochrie", "Ryan Stiles"],
		},
		{
			name: "Home Shopping",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			items: [
				"A shopping bag with no bottom",
				"Horoscopes for pigs",
				"A three-legged cheetah statue",
			],
		},
		{
			name: "Animals",
			performers: ["Colin Mochrie", "Ryan Stiles", "Greg Proops"],
			scene:
				"Colin and Ryan are two southern tadpoles on an illicit date who are interrupted in due course by a gun-toting bullfrog father",
			animals: "Tadpoles and frog",
		},
		{
			name: "Hoedown",
			performers: [
				"Greg Proops",
				"Phil LaMarr",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			musicians: ["Win Meyerson"],
			about:
				"[Presidential ethics](https://whoselineisitanyway.fandom.com/wiki/Presidential_Ethics_Hoedown)",
		},
	],
};
