import { type Episode } from "../../types/episode";

export const e14: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Gary Anthony Williams"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Adam Rippon"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_16-14",
	airdate: "2020-08-24",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Gary Anthony Williams",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Adam Rippon"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Rich Noiworkforthecw",
			},
			coAnchor: {
				name: "Gary Anthony Williams",
				quirk: "Colin's bitchy gossiping BFF",
			},
			sports: {
				name: "Ryan Stiles",
				alternateName: "Balls McGillicuddy",
				quirk: "Bad tempered repo man visiting the Whose Line studio",
			},
			weather: {
				name: "Wayne Brady",
				alternateName: "Dribbles McGee",
				quirk: "A TV going through lots of different channels",
			},
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"If team sports were done in a sexy way",
				"Unlikely questions from a school test",
				"Bad professions in which to play practical jokes",
				"Magic shows you'd never want to see",
			],
		},
		{
			name: "Dubbing",
			performers: ["Colin Mochrie", "Wayne Brady"],
			dubber: "Ryan Stiles",
			dubbed: "Adam Rippon",
			musicians: ["Laura Hall", "Linda Taylor"],
			scene:
				"Colin is the world's greatest female ice skater auditioning her young protege Adam to be her ice dance partner when suddenly her ex-partner Wayne skates in to prove he's still got what it takes",
		},
		{
			name: "Infomercial",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			product: "A kit to improve overall personal hygiene",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Gary Anthony Williams"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
	],
};
