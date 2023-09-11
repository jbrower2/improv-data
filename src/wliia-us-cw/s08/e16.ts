import { type Episode } from "../../types/episode";

export const e16: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jeff Davis"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 16,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-16",
	airdate: "2020-10-05",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Jeff Davis", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			alternateName: "Dating App",
			host: "Jeff Davis",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Has a secret identity, the superhero 'Angry Grandma'",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Hannibal Lecter trying to find another body that tastes as good as his own",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Zombie gathering an army of the undead to take over the studio",
				},
			],
		},
		{
			name: "Doo-wop",
			singers: ["Jeff Davis", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Ruby, who died tragically in a seafood accident",
		},
		{
			name: "Forward Rewind",
			performers: ["Wayne Brady", "Colin Mochrie", "Ryan Stiles", "Jeff Davis"],
			scene:
				"Wayne and Colin are two firemen responding to a fire at a farm, Ryan's the panicking farmer desperately trying to save his animals, Jeff is Ryan's lusty daughter who bursts out of the burning farmhouse",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If famous movie scenes were performed on caffeine",
				"What _Star Wars_ characters say while making love",
				"What superheroes do when they think they're alone",
				"The world's worst thing to say to a bride on her wedding day",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Jeff Davis", "Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Car_",
			songs: [
				{
					style: "Garage rock",
					title: "Beep Beep, Snore Snore",
				},
				{
					style: "Greek wedding",
					title: "Out of Gas",
				},
			],
		},
	],
};
