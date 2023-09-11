import { type Episode } from "../../types/episode";

export const e01: Episode<
	| "Clive Anderson"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 1,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_10-01",
	airdate: "1998-04-22",
	host: "Clive Anderson",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Let's Make a Date",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Wayne Brady",
					quirk: "Southern Baptist preacher",
				},
				{
					name: "Colin Mochrie",
					quirk: "Very nervous driving instructor",
				},
				{
					name: "Ryan Stiles",
					quirk: "Desperate actor who's only come on the show to be discovered",
				},
			],
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Barbara, an actress",
			styles: ["Modern pop love ballad"],
		},
		{
			name: "Quiz Show",
			host: "Brad Sherwood",
			title: "_Name That Amphibian_",
		},
		{
			name: "Scene to Rap",
			scene: "At an escalator in a mall",
		},
		{
			name: "Whose Line?",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scenes: [
				"A general briefing the president that the Earth is about to be destroyed by a comet",
			],
			lines: [
				"It's time to release the baboons.",
				"Help me John, I'm shrinking.",
				"I'm in the mood for a big one.",
				"Cover me in oil and let the games begin.",
			],
		},
		{
			name: "Daytime Talk Show",
			host: "Brad Sherwood",
			guests: ["Colin Mochrie", "Ryan Stiles"],
			audienceMembers: ["Wayne Brady"],
			topic: "Little Boy Blue",
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady", "Brad Sherwood"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall"],
			album: "_Songs for Hypochondriacs_",
			songs: [
				{
					style: "Reggae",
					title: "Does It Look Swollen to You?",
				},
				{
					style: "Beer-drinking German song",
					title: "I've Got Them and They Hang Like Grapes",
				},
				{
					style: "Disco",
					title: "Marry You I Can't, I've Got a Penile Implant",
				},
			],
		},
	],
};
