import { type Episode } from "../../types/episode";

export const e02: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Paul Merton"
	| "Ryan Stiles"
	| "Josie Lawrence"
	| "Richard Vranch"
> = {
	number: 2,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_4-02",
	airdate: "1992-01-31",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Paul Merton", "Ryan Stiles", "Josie Lawrence"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Ryan Stiles", "Greg Proops"],
					scene: "Painting a bridge",
					styles: [
						"Disney",
						"Greek tragedy",
						"Woody Allen",
						"Early talkies",
						"Horror",
					],
				},
				{
					performers: ["Josie Lawrence", "Paul Merton"],
					scene: "Two people at a seance",
					styles: [
						"Western",
						"_Thunderbirds_",
						"_Terminator_",
						"_Clangers_",
						"Porno gangster film",
					],
				},
			],
		},
		{
			name: "Video Player",
			remoteController: "Greg Proops",
			film: "_Inside the Walls of Folsom Prison_",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Family reunion at the dentist's",
				"Something stirs in the scientist's lab",
				"Buying a sandcastle",
				"Elephants packing to go on a holiday",
				"A weight watchers party",
				"Inside a microwave",
				"Transylvanian hospital",
				"People who can't stop moving",
				"A Morris Dancing convention",
			],
		},
		{
			name: "Expert",
			interviewer: "Josie Lawrence",
			expert: "Ryan Stiles",
			topic: "Karate & Pigs",
		},
		{
			name: "Party Quirks",
			host: "Paul Merton",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "Masseuse",
				},
				{
					name: "Greg Proops",
					quirk: "Rap artist",
				},
				{
					name: "Ryan Stiles",
					quirk: "Thinks he's a reptile",
				},
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Paul Merton",
				{
					body: "Ryan Stiles",
					hands: "Greg Proops",
				},
			],
			scene: "Going to a clinic to learn how to feed and change a baby",
		},
		{
			name: "March",
			musician: "Richard Vranch",
			about: "Childbirth",
		},
	],
};
