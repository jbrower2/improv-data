import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Mike McShane"
	| "Ryan Stiles"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_7-02",
	airdate: "1995-08-04",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Mike McShane", "Ryan Stiles", "Tony Slattery"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene: "Two high-tech thieves breaking into a gallery",
			styles: ["_Baywatch_", "Cable shopping", "Racing film"],
		},
		{
			name: "Remote Control",
			topic: "Earthquake",
			performers: [
				{
					name: "Greg Proops",
					quirk: "_Oprah Winfrey_",
				},
				{
					name: "Mike McShane",
					quirk: "_WWF_",
				},
				{
					name: "Ryan Stiles",
					quirk: "_ER_",
				},
				{
					name: "Tony Slattery",
					quirk: "_Brookside_",
				},
			],
		},
		{
			name: "Film Dub",
			performers: ["Ryan Stiles", "Greg Proops"],
			scene: "Two compulsive gamblers",
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane"],
			musicians: ["Richard Vranch"],
			about: "Little red triangle",
			styles: ["German drinking song"],
		},
		{
			name: "World's Worst",
			scenes: ["Person to be a Cub Scout leader"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Tony Slattery"],
				["Greg Proops", "Mike McShane"],
			],
		},
		{
			name: "Scene to Music",
			performers: ["Greg Proops", "Mike McShane"],
			scene:
				"Mike is about to get married and is asking Greg, his flatmate, to move out",
		},
		{
			name: "News Report",
			interviewer: "Greg Proops",
			expert: "Mike McShane",
			reporter: "Tony Slattery",
			variousCharacters: "Ryan Stiles",
			topic: "The Three Little Pigs",
		},
		{
			name: "Helping Hands",
			alternateName: "Hands Through",
			performers: [
				"Mike McShane",
				{
					body: "Ryan Stiles",
					hands: "Greg Proops",
				},
			],
			scene: "A surgeon and a scrub nurse",
		},
		{
			name: "Hoedown",
			about:
				"[Excessive drinking](https://whoselineisitanyway.fandom.com/wiki/Excessive_Drinking_Hoedown)",
			musicians: ["Richard Vranch"],
		},
	],
};
