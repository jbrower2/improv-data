import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Ryan Stiles"
	| "Josie Lawrence"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_5-05",
	airdate: "1993-04-02",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Ryan Stiles", "Josie Lawrence", "Mike McShane"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Josie Lawrence", "Ryan Stiles"],
			scene: "Josie visiting Ryan in hospital",
			styles: ["Disaster movie", "Bolshoi Ballet", "Weepy"],
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence", "Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "Paperweight",
			styles: ["Love duet"],
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Greg Proops"],
			scenes: ["Getting volunteers in the trenches"],
			lines: [
				"I demand to have some booze!",
				"Lick my earlobes and call me mama.",
				"Dip it in gin and reduce the swelling.",
				"Put on the wetsuit and cover me in trifle.",
			],
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Standing Sitting Bending",
			performers: ["Josie Lawrence", "Greg Proops", "Ryan Stiles"],
			scene: "A singles bar",
		},
		{
			name: "News Report",
			interviewer: "Greg Proops",
			expert: "Ryan Stiles",
			reporter: "Josie Lawrence",
			variousCharacters: "Mike McShane",
			topic: "Little Bo Peep",
		},
		{
			name: "Song Titles",
			performers: ["Greg Proops", "Ryan Stiles", "Mike McShane"],
			scene: "In a launderette",
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "Thinks she's a cow",
				},
				{
					name: "Mike McShane",
					quirk: "River boat gambler",
				},
				{
					name: "Ryan Stiles",
					quirk: "President's bodyguard",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Josie Lawrence",
				{
					body: "Ryan Stiles",
					hands: "Greg Proops",
				},
			],
			scene: "Mixing a cocktail for Josie",
		},
		{
			name: "American Musical",
			alternateName: "Musical",
			musician: "Richard Vranch",
			about:
				"Teaching a business course, Going to Australia, and Coming 3rd in a rock & roll championship",
		},
	],
};
