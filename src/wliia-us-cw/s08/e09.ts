import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-09",
	airdate: "2020-06-29",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Greg Proops", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Greg Proops",
			scene:
				"In a luxury hotel room, hunky CIA agent Ryan is seducing female enemy spy Colin when suddenly, metal-limbed villain Wayne smashes his way in",
			notes: [
				"Everybody is a different famous celebrity",
				"Everybody is a catwalk model",
				"You're sadists and masochists, you choose",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Unlikely lines from romance novels",
				"Unlikely opening lines of a sermon",
				"Things you shouldn't do to try and impress your date",
				"Things guaranteed to kill the mood in the bedroom",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scenes: [
				"Snow White",
				"Colin",
				"has been woken with a kiss from a gallant prince",
				"Ryan",
			],
			lines: [
				"Can I have your sister's phone number?",
				"Say that again, I'll cut you.",
				"Get out!  It's gonna blow!",
				"That's the smallest one I've ever seen.",
			],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Greg Proops"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Greatest Hits",
			salesmen: ["Greg Proops", "Colin Mochrie"],
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of the Motel_",
			songs: [
				{
					style: "Snoop Dogg and Li'l Wayne",
					title: "Room 237",
				},
				{
					style: "Cab Calloway",
					title: "What's That Stain on the Lampshade?",
				},
			],
		},
	],
};
