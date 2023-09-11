import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Rory Bremner"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-01",
	airdate: "1997-07-10",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Rory Bremner", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Rory Bremner",
					quirk: "Princess Diana",
				},
				{
					name: "Colin Mochrie",
					quirk: "1940's gangster squealer",
				},
				{
					name: "Ryan Stiles",
					quirk: "Hollywood star doing photo shoot",
				},
			],
		},
		{
			name: "Animals",
			performers: ["Ryan Stiles", "Colin Mochrie", "Greg Proops"],
			scene:
				"Colin is being comforted by her mother, Greg, after a bad first date with the local stud ram, played for comic purposes by Ryan",
			animals: "Sheep",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Longer Thaniamwide",
			},
			coAnchor: {
				name: "Colin Mochrie",
				quirk: "Listening to a horse race on his Walkman",
			},
			sports: {
				name: "Rory Bremner",
				quirk: "Bill Clinton",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Turning into a werewolf",
			},
		},
		{
			name: "World's Worst",
			scenes: ["Person to present a _Joy of Sex_ video"],
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["Greg Proops", "Rory Bremner"],
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Greg Proops"],
			fieldReporter: "Rory Bremner",
			onTheGreenScreen: "Nudist beach",
		},
		{
			name: "Improbable Mission",
			alternateName: "Mission: Impossible",
			agents: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Greg Proops",
			mission: "Putting on a pair of tights and waxing the bikini line",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[World leaders](https://whoselineisitanyway.fandom.com/wiki/World_Leaders_Hoedown)",
		},
	],
};
