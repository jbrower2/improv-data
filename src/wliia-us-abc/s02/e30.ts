import { type Episode } from "../../types/episode";

export const e30: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 30,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_2-30",
	airdate: "2000-03-30",
	productionNumber: "296718-233",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Wayne Brady",
			guests: [
				{
					name: "Brad Sherwood",
					quirk: "Frisky dog going rabid",
				},
				{
					name: "Colin Mochrie",
					quirk: "World's ugliest man looking for action",
				},
				{
					name: "Ryan Stiles",
					quirk: "Quasimodo determined to rescue Esmerelda",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene:
				"Two hikers on donkeys are at each other's throats after three days lost in Echo Valley",
			styles: ["Science fiction", "Mystery", "Silent", "_Afterschool Special_"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Brad Sherwood"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Colin Mochrie", "Brad Sherwood"],
			fieldReporter: "Ryan Stiles",
			onTheGreenScreen: "Alligators",
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady", "Brad Sherwood"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Psychiatrist_",
			songs: [
				{
					style: "80s rhythm and blues",
					title: "Your Time's Up",
				},
				{
					style: "Reggae",
					title: "Half a Phobia's Better Than None",
				},
				{
					style: "Early rock",
					title: "Freud or Jung?  Who Knows?",
				},
			],
		},
		{
			name: "World's Worst",
			performers: [
				"Brad Sherwood",
				"Drew Carey",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			scenes: ["Night club act"],
		},
	],
};
