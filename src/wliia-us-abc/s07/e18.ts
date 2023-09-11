import { type Episode } from "../../types/episode";

export const e18: Episode<
	| "Drew Carey"
	| "Greg Proops"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
	| "Anne King"
> = {
	number: 18,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_7-18",
	airdate: "2005-04-04",
	productionNumber: "296744-7018",
	host: "Drew Carey",
	performers: ["Greg Proops", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"From _The Exorcist_, Wayne is the possessed daughter, Ryan is the distraught mother trying to tie her down to the bed, and Greg is the priest",
			notes: [
				"Do the scene forwards and backwards, forwards and backwards, like you're going forward and then you're rewinding",
				"Do it like _West Side Story_",
			],
		},
		{
			name: "Remote Control",
			topic: "The cow",
			performers: [
				{
					name: "Greg Proops",
					quirk: "Ricki Lake",
				},
				{
					name: "Wayne Brady",
					quirk: "Spanish game show",
				},
				{
					name: "Colin Mochrie",
					quirk: "_Wrestling Smackdown_",
				},
				{
					name: "Ryan Stiles",
					quirk: "_The Crocodile Hunter_",
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor", "Anne King"],
			about: "Jill, a volleyball coach at a high school in Calabasas",
			styles: ["Cab Calloway"],
		},
		{
			name: "Sound Effects (with Audience Members)",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Zara", "Elizabeth"],
			scene:
				"President Ryan and fighter pilot Colin are watching an Independence Day parade go by when an enormous alien ship appears overhead, ready to attack Earth",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If your thoughts were amplified on loudspeakers",
				"Things you shouldn't be doing while talking on the phone",
				"_Whose Line Is It Anyway?_ in different countries",
				"Things you can say about your boat, but not your girlfriend",
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[First speeding ticket](https://whoselineisitanyway.fandom.com/wiki/Speeding_Ticket_Hoedown)",
		},
	],
};
