import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Clive Anderson"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Caroline Quentin"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_7-04",
	airdate: "1995-08-18",
	host: "Clive Anderson",
	performers: [
		"Colin Mochrie",
		"Ryan Stiles",
		"Caroline Quentin",
		"Tony Slattery",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Press Conference",
			publicFigure: "Tony Slattery",
			topic: "Had his head transplanted onto body of dog",
		},
		{
			name: "Stand Sit Lie",
			performers: ["Caroline Quentin", "Ryan Stiles", "Colin Mochrie"],
			scene: "Colin's coming home to find his wife with her lover",
		},
		{
			name: "Foreign Film Dub",
			actors: ["Tony Slattery", "Caroline Quentin"],
			translators: ["Colin Mochrie", "Ryan Stiles"],
			languages: ["Hungarian"],
			film: "_The Masked Onion_",
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Susan", "Earl"],
			scene: "Ryan is a drill sergeant putting Colin through his paces",
		},
		{
			name: "World's Worst",
			scenes: ["Person to sleep with"],
		},
		{
			name: "Picture",
			performers: ["Tony Slattery", "Colin Mochrie"],
			scene: "On their honeymoon",
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "Breakfast in a diner",
		},
		{
			name: "Old Job, New Job",
			performers: ["Tony Slattery", "Caroline Quentin"],
			oldJobPerformers: ["Ryan Stiles"],
			scene:
				"Caroline is giving birth to a baby and Tony is her husband, Ryan is the obstetrician",
			oldJob: "Ryan used to be a hostage negotiator",
		},
		{
			name: "Helping Hands",
			alternateName: "Hands Through",
			performers: [
				"Caroline Quentin",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene: "A lounge singer and somebody in the audience",
		},
		{
			name: "Hoedown",
			about:
				"[Being stood up](https://whoselineisitanyway.fandom.com/wiki/Being_Stood_Up_Hoedown)",
			musicians: ["Richard Vranch"],
		},
	],
};
