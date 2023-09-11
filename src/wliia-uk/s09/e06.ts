import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Clive Anderson"
	| "Stephen Frost"
	| "Colin Mochrie"
	| "Brad Sherwood"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-06",
	airdate: "1997-08-14",
	host: "Clive Anderson",
	performers: [
		"Stephen Frost",
		"Colin Mochrie",
		"Brad Sherwood",
		"Ryan Stiles",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Superheroes",
			crisis: "Acid rain",
			performers: [
				{
					name: "Colin Mochrie",
					superpower: "Captain Buttocks Promiscuous Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Can't Move Without Hurting Himself Boy",
				},
				{
					name: "Brad Sherwood",
					superpower: "Hilarious Punchlines Boy",
				},
				{
					name: "Stephen Frost",
					superpower: "Professor Hugs Too Hard",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Brad Sherwood"],
			musicians: ["Richard Vranch"],
			about: "Anna, a nurse",
			styles: ["Upbeat love song"],
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two frisky geriatrics in an old people's home",
			secretLocation: "In the commode",
		},
		{
			name: "Addicts Anonymous",
			host: "Brad Sherwood",
			addictedTo: "Game shows",
		},
		{
			name: "Sportscasters",
			alternateName: "Sports Commentators",
			commentators: ["Stephen Frost", "Brad Sherwood"],
			athletes: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two hunks on the beach",
		},
		{
			name: "Film Dub",
			performers: ["Stephen Frost", "Ryan Stiles"],
			scene: "Going on an expedition",
		},
		{
			name: "Animals",
			performers: ["Ryan Stiles", "Colin Mochrie", "Brad Sherwood"],
			scene:
				"Ryan and Colin are two gazelles with illegal substances and are rather scared that the lion, played by Brad, who is also the cop, might be about to bust them",
			animals: "Gazelles and a lion",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Peter Sprinkle",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Dexter",
				quirk: "Having a breakdown because he used to be the sole presenter",
			},
			sports: {
				name: "Stephen Frost",
				alternateName: "Chuck",
				quirk: "A rowdy football fan",
			},
			weather: {
				name: "Ryan Stiles",
				quirk: "Being distracted by a couple making love in front of him",
			},
		},
	],
};
