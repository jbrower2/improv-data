import { type Episode } from "../../types/episode";

export const e23: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 23,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-23",
	airdate: "2002-01-24",
	productionNumber: "296734-416",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Superheroes",
			crisis: "Too many blue shoes",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Quick Rick",
				},
				{
					name: "Ryan Stiles",
					superpower: "Faking Injury for Sympathy Man",
				},
				{
					name: "Colin Mochrie",
					superpower: "Captain Coward",
				},
				{
					name: "Wayne Brady",
					superpower: "Show-Stopping Number Boy",
				},
			],
		},
		{
			name: "Multiple Personalities",
			performers: ["Ryan Stiles", "Wayne Brady", "Greg Proops"],
			scene: "A car breaks down in the forest in the middle of the night",
			props: [
				{
					prop: "Gas can",
					personality: "Richard Simmons",
				},
				{
					prop: "Map",
					personality: "John Wayne",
				},
				{
					prop: "Flashlight",
					personality: "Scooby-Doo",
				},
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Times when it would be nice to have the ability to be beamed up",
				"What really made the kids in _Blair Witch_ run off screaming",
				"What members of the _Whose Line_ cast say to their therapists",
				"Outtakes from the Hillbilly National Theater's Shakespeare Festival",
				'How the "naked Fridays" policy turned out at your office',
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Doctor_",
			songs: [
				{
					style: "Mambo",
					title: "This Is Gonna Hurt a Little",
				},
				{
					style: "Marilyn Monroe",
					title: "Gallstones Are a Girl's Worst Friend",
				},
				{
					style: "80s rock and roll",
					title: "My Gown Has No Back",
				},
			],
		},
		{
			name: "Sportscasters",
			commentators: ["Greg Proops", "Drew Carey"],
			athletes: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two rival pizza-makers trying to impress a female customer",
		},
	],
};
