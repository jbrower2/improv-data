import { type Episode } from "../../types/episode";

export const e10: Episode<
	| "Clive Anderson"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Greg Proops"
	| "Catherine O'Hara"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Laura Hall"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_10-10",
	airdate: "1998-06-25",
	host: "Clive Anderson",
	performers: [
		"Colin Mochrie",
		"Ryan Stiles",
		"Greg Proops",
		"Catherine O'Hara",
		"Brad Sherwood",
		"Wayne Brady",
	],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "Two farmers relaxing but there is a tornado approaching",
			styles: ["Spanish soap opera", "_Star Wars_", "Peckinpah"],
		},
		{
			name: "Superheroes",
			crisis: "There's a hole in the dike",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Viagra Boy",
				},
				{
					name: "Ryan Stiles",
					superpower: "Uncertain of Your Sexuality Boy",
				},
				{
					name: "Colin Mochrie",
					superpower: "Interpretive Dance Man",
				},
				{
					name: "Catherine O'Hara",
					superpower: "Sad Drunk Woman",
				},
			],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "A day in the life of the Queen",
		},
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Harold Bloodpost",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Curly Nail",
				quirk:
					"Has huge debts and he's desperate to raise the money by any method",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Chauncey",
				quirk: "An angry mother",
			},
			weather: {
				name: "Ryan Stiles",
				quirk:
					"Up in the sky with the Skycam traffic, but has had to take over the controls because the pilot has collapsed",
			},
		},
		{
			name: "Quick Change",
			performers: ["Colin Mochrie", "Brad Sherwood"],
			moderators: ["Ryan Stiles"],
			scene: "Two prisoners-of-war checking the final plans to make an escape",
		},
		{
			name: "Secret",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			scene: "William Tell and his son",
			secretLocation: "In the apple",
		},
		{
			name: "Improbable Mission",
			alternateName: "Mission: Impossible",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Brad Sherwood",
			mission: "Changing diapers",
		},
		{
			name: "Gospel",
			singers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
			musician: "Laura Hall",
			about: "Plastic surgery",
		},
	],
};
