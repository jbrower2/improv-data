import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Candy Girard"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_3-06",
	airdate: "2000-11-02",
	productionNumber: "296722-306",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Candy Girard"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "The Wicked Witch of the West and her flying monkey army",
				},
				{
					name: "Colin Mochrie",
					quirk: "Drunk fireman responding to a call",
				},
				{
					name: "Ryan Stiles",
					quirk: "Goldfish in a bowl of water with a five-second memory",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Candy Girard"],
			about: "Kim, who sells light bulbs",
			styles: ["Jewish wedding"],
		},
		{
			name: "Infomercial",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			product: "Cellulite cream",
		},
		{
			name: "Scenes Cut from a Movie",
			movies: [
				"_Psycho_",
				"_Showgirls_",
				"_Pulp Fiction_",
				"_Forrest Gump_",
				"_Saving Private Ryan_",
				"_Caddyshack_",
				"_Braveheart_",
			],
		},
		{
			name: "Irish Drinking Song",
			musicians: ["Laura Hall", "Candy Girard"],
			about:
				"[Slept with an ugly woman](https://whoselineisitanyway.fandom.com/wiki/Slept_With_an_Ugly_Woman_Irish_Drinking_Song)",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Wayne Brady", "Drew Carey"],
			translators: ["Brad Sherwood", "Ryan Stiles"],
			languages: ["French"],
			title: "_Uh-huh!_",
		},
	],
};
