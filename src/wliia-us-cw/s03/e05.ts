import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Scott Porter"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_11-05",
	airdate: "2015-05-15",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Scott Porter"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Greg Proops",
			guests: [
				{
					name: "Wayne Brady",
					quirk:
						"Hells Angel rounding up his biker gang to terrorize the neighborhood",
				},
				{
					name: "Colin Mochrie",
					quirk:
						"Toddler tasting everything in sight to find his favorite treat",
				},
				{
					name: "Ryan Stiles",
					quirk: "Lizard going on a dangerous journey",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Scott",
			styles: ["A boy band"],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Scott Porter",
			scene:
				"Ryan is an Army doctor examining mild-mannered Bruce Banner, played by Scott, who suddenly starts turning into The Hulk when Wayne enters as She-Hulk to take him on",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Hillbilly versions of famous movies",
				"Sportscasters at home",
				"Dr. Seuss breakup lines",
			],
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Scott"],
			scene:
				"Working out in a gym when all of a sudden one of them gets hurt and is rushed to the hospital",
		},
	],
};
