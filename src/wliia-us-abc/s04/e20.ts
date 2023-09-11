import { type Episode } from "../../types/episode";

export const e20: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 20,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_4-20",
	airdate: "2001-12-13",
	productionNumber: "296734-415",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Wayne is a store detective and he's in a pet shop and he suspects Ryan of shoplifting, Brad is the police officer who's been called to the scene",
			notes: [
				"Do it like Elvis, you're all Elvises",
				"Do the whole scene backwards",
				"Do it like catty Vegas showgirls",
			],
		},
		{
			name: "Infomercial",
			performers: [
				{
					name: "Ryan Stiles",
					alternateName: "Dr. Philip Glassman",
				},
				{
					name: "Colin Mochrie",
					alternateName: "Billy",
				},
			],
			problem: "Acne",
		},
		{
			name: "Party Quirks",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Family coming to blows on _The Jerry Springer Show_",
				},
				{
					name: "Colin Mochrie",
					quirk: "Synchronized swimming teammate of the others",
				},
				{
					name: "Ryan Stiles",
					quirk: "Series of animals spotting and charging the cameras",
				},
			],
		},
		{
			name: "Title Sequence",
			singers: ["Wayne Brady", "Brad Sherwood"],
			actors: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall", "Linda Taylor"],
			sitcom: "_George Washington and the Ventriloquist_",
		},
		{
			name: "Helping Hands",
			performers: [
				"Drew Carey",
				{
					body: "Ryan Stiles",
					hands: "Colin Mochrie",
				},
			],
			scene:
				"The bad-tempered owner of an ice cream parlor, Ryan, is teaching his new soda jerk Drew how to make the ultimate ice cream sundae",
		},
	],
};
