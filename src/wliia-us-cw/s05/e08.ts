import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Ralph Macchio"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_13-08",
	airdate: "2017-08-03",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Ralph Macchio"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Questions with Wigs",
			alternateName: "Questions",
			scene: "Passions erupt at a plastic surgeon's office",
		},
		{
			name: "Duet",
			singers: ["Wayne Brady", "Jonathan Mangum"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Ralph",
			styles: ["80s movie montage"],
		},
		{
			name: "Themed Restaurant",
			diners: ["Ralph Macchio", "Jonathan Mangum"],
			waiters: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			scene: "Two businessmen having a meeting over dinner",
			theme: "Horror movies",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Things that you wouldn't see or hear on a cooking show",
				"Things you can say during a sports game that you can't say about your partner",
			],
		},
		{
			name: "Doo-wop",
			singers: ["Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Shirley, who died tragically in a floral-related accident",
		},
		{
			name: "Helping Hands",
			performers: [
				"Ralph Macchio",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"An energetic karate instructor preparing his protege for a big contest",
		},
	],
};
