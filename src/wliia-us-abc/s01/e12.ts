import { type Episode } from "../../types/episode";

export const e12: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-12",
	airdate: "1999-01-20",
	productionNumber: "296717-119",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Wayne Brady",
			guests: [
				{
					name: "Brad Sherwood",
					quirk: "Game show prize announcer",
				},
				{
					name: "Colin Mochrie",
					quirk: "The world's biggest glutton",
				},
				{
					name: "Ryan Stiles",
					quirk: "Talking chicken having trouble laying an egg",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Dana, a dental hygienist",
			styles: ["60s R&B song"],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Brad Sherwood"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Japanese macaques (snow monkeys)",
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film Theater and Television Styles",
			performers: ["Ryan Stiles", "Wayne Brady"],
			scene:
				"Wayne is the Birdman of Alcatraz, and Ryan is the prison warden who's come to his cell to tell him to get rid of his many birds",
			styles: ["Western", "Shakespeare", "Sumo wrestling", "Porno"],
		},
		{
			name: "Telethon",
			hosts: ["Colin Mochrie", "Ryan Stiles"],
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall"],
			topic: "NBA players",
			celebrities: [
				{
					name: "Brad Sherwood",
					celebrities: ["Bruce Springsteen", "Bob Dylan", "Fred Schneider"],
				},
				{
					name: "Wayne Brady",
					celebrities: ["Aaron Neville", "Michael Jackson", "Stevie Wonder"],
				},
			],
		},
		{
			name: "Hoedown",
			performers: ["Wayne Brady", "Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			about:
				"[Going bald](https://whoselineisitanyway.fandom.com/wiki/Going_Bald_Hoedown)",
		},
	],
};
