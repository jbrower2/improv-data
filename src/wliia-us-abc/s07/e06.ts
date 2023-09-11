import { type Episode } from "../../types/episode.js";

export const e06: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Kathy Greenwood"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Cece Worrall-Rubin"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-06",
	airdate: "2005-01-31",
	productionNumber: "296744-7006",
	host: "Drew Carey",
	performers: [
		"Wayne Brady",
		"Kathy Greenwood",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Kathy Greenwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Temperamental queen bee gathering nectar from people's faces",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Born to be wild biker chick going from guy to guy to find a new stud to ride behind",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Is having an entire relationship with the stool Colin is sitting on",
				},
			],
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: [
				"Indiana Jones",
				"played by Ryan",
				"his feisty female companion",
				"played by Colin",
				"are trapped in a snake-infested Egyptian tomb",
				"their torches are about to go out",
			],
			lines: [
				"Let me strip for you, big boy.",
				"You are one ugly woman.",
				"Time to make a booty call.",
				"Rub my rump and call me Louis.",
			],
		},
		{
			name: "Dead Bodies",
			actor: "Colin Mochrie",
			bodies: ["Ryan Stiles", "Kathy Greenwood"],
			audienceMember: "Kelsey",
			scene:
				"Bosley, Ryan, is being held captive by a beautiful villainess, Kelsey, who is torturing him with sexual seduction when one of Charlie's Angels, Kathy, bursts in to rescue him",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor", "Cece Worrall-Rubin"],
			album: "_Songs of the Fast Food Worker_",
			songs: [
				{
					style: "Dixieland",
					title: "You're My Happy Meal and I'm Your Big Mac",
				},
				{
					style: "Ice-T",
					title: "Fast Food",
				},
			],
		},
		{
			name: "Props",
			pairs: [
				["Wayne Brady", "Colin Mochrie"],
				["Ryan Stiles", "Drew Carey"],
			],
		},
	],
};
