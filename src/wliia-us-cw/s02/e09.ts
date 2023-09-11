import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Keegan-Michael Key"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-09",
	airdate: "2014-05-09",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Keegan-Michael Key",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Keegan-Michael Key",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Flamboyant glamour photographer getting people to pose for sexy photos",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"All of Ryan and Wayne's former lovers returning for one last fling",
				},
				{
					name: "Ryan Stiles",
					quirk:
						"Angry bee who thinks people's possessions are pollen to take to the queen, Colin",
				},
			],
		},
		{
			name: "Forward Rewind",
			scene:
				"Wayne is a heavily-pregnant woman whose water breaks, she has to be driven to the hospital by her panicking husband Colin, Ryan enters as the gung-ho midwife, and Keegan is whatever character strikes his fancy",
		},
		{
			name: "Film Dub",
			performers: [
				"Ryan Stiles",
				"Keegan-Michael Key",
				"Colin Mochrie",
				"Wayne Brady",
			],
			scene: "One morning on the slopes",
			film: "_Beast from Haunted Cave_ (1959)",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Strange things to see or hear in a children's TV show",
				"Names of cars that would never sell",
				"If the Old Testament were a soap opera",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of Spring Break_",
			songs: [
				{
					style: "Macklemore",
					title: "Show Your Boobies",
				},
				{
					style: "Lady Gaga",
					title: "Twelve in a Room",
				},
			],
		},
	],
};
