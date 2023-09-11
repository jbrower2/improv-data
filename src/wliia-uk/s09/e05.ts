import { type Episode } from "../../types/episode.js";

export const e05: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Stephen Frost"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Richard Vranch"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-05",
	airdate: "1997-08-07",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Stephen Frost", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Superheroes",
			crisis: "Pants are getting too small",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Captain Caterpillar",
				},
				{
					name: "Ryan Stiles",
					superpower: "Cat Cleaning Himself Man",
				},
				{
					name: "Colin Mochrie",
					superpower: "Nude and Proud of It Boy",
				},
				{
					name: "Stephen Frost",
					superpower: "Nipple Tweak Boy",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Greg Proops", "Stephen Frost"],
			scene:
				"Greg is a Top Gun pilot on an aircraft carrier who's doing the final checks on his plane, Stephen is the mechanic making the final adjustments",
			styles: [
				"Hospital drama",
				"Swedish porn movie",
				"_Beavis",
				"Butthead_",
				"Hammer horror",
				"_Pride",
				"Prejudice_",
			],
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Greg Proops",
				alternateName: "Longer Thanyoucouldpossiblyimagine",
			},
			coAnchor: {
				name: "Ryan Stiles",
				alternateName: "Billy",
				quirk: "Thinks he's back in 'Nam",
			},
			financial: {
				name: "Stephen Frost",
				quirk: "A compulsive gambler",
			},
			weather: {
				name: "Colin Mochrie",
				alternateName: "Sheila",
				quirk: "Recently split up with Greg",
			},
		},
		{
			name: "Moving People",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			moversFromTheAudience: ["Joann", "Lorna"],
			scene:
				"Two high-tech criminals stealing a famous painting from a gallery",
		},
		{
			name: "Props",
			pairs: [
				["Colin Mochrie", "Ryan Stiles"],
				["Greg Proops", "Stephen Frost"],
			],
		},
		{
			name: "Party Quirks",
			host: "Greg Proops",
			guests: [
				{
					name: "Stephen Frost",
					quirk: "Prisoner on a roof-top protest",
				},
				{
					name: "Colin Mochrie",
					quirk: "Has a stomach full of fireworks",
				},
				{
					name: "Ryan Stiles",
					quirk: "Someone's holiday snaps",
				},
			],
		},
		{
			name: "Sportscasters",
			alternateName: "Sports Commentators",
			commentators: ["Stephen Frost", "Greg Proops"],
			athletes: ["Colin Mochrie", "Ryan Stiles"],
			scene: "Two rival businessmen sitting next to each other on an aeroplane",
		},
		{
			name: "Hoedown",
			musicians: ["Richard Vranch"],
			about:
				"[Weddings](https://whoselineisitanyway.fandom.com/wiki/Weddings_Hoedown)",
		},
	],
};
