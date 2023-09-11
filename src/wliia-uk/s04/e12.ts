import { type Episode } from "../../types/episode";

export const e12: Episode<
	| "Clive Anderson"
	| "Greg Proops"
	| "Ron West"
	| "Ryan Stiles"
	| "Brad Sherwood"
	| "Richard Vranch"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_4-12",
	airdate: "1992-04-10",
	host: "Clive Anderson",
	performers: ["Greg Proops", "Ron West", "Ryan Stiles", "Brad Sherwood"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Emotion Options",
			performers: ["Ryan Stiles", "Brad Sherwood"],
			scene: "Two guys on a production line",
			emotions: ["Paranoia", "Nostalgia", "Angst", "Ecstasy"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Greg Proops", "Ron West"],
			scene:
				"Greg is under siege because he is a kidnapper inside the house with his victim, Ron is the policeman outside with a megaphone trying to draw him out",
			styles: [
				"Burlesque",
				"Soviet realism",
				"Spaghetti western",
				"Japanese horror",
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"A convention of bodyguards",
				"Short-lived children's board games",
				"Strange good luck charms",
				"_The Sting_",
				"Sports that will never make the Olympics",
				"The big lie",
				"Early experiments with gunpowder",
				"When pickpockets meet",
			],
		},
		{
			name: "Whose Line?",
			performers: ["Ryan Stiles", "Brad Sherwood"],
			scenes: ["Being stopped by a cop"],
			lines: [
				"Always keep a jellyfish in your handbag.",
				"Send for the King and a plate of spaghetti!",
				"Grab me, big boy, and kiss me like there's no tomorrow.",
				"My god, we're caught in quicksand!",
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to pick up as a hitchhiker"],
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Brad Sherwood"],
				["Greg Proops", "Ron West"],
			],
		},
		{
			name: "Helping Hands",
			performers: [
				"Brad Sherwood",
				{
					body: "Ryan Stiles",
					hands: "Greg Proops",
				},
			],
			scene: "Brad has come to find out how to ice or decorate a cake",
		},
		{
			name: "Superheroes",
			crisis: "Airplane going down",
			performers: [
				{
					name: "Greg Proops",
					superpower: "Soap Man",
				},
				{
					name: "Ryan Stiles",
					superpower: "Tight Underwear Man",
				},
				{
					name: "Ron West",
					superpower: "Ripped Off in the Divorce Settlement Man",
				},
				{
					name: "Brad Sherwood",
					superpower: "Overreaction Man",
				},
			],
		},
		{
			name: "Old Job, New Job",
			alternateName: "New Job, Old Job",
			performers: ["Greg Proops", "Brad Sherwood"],
			oldJobPerformers: ["Ryan Stiles"],
			scene: "A dentist and patient, joined by another dentist",
			oldJob: "Ryan used to be a car mechanic",
		},
		{
			name: "Hoedown",
			about:
				"[Motorcycling](https://whoselineisitanyway.fandom.com/wiki/Motorcycling_Hoedown)",
			musicians: ["Richard Vranch"],
		},
	],
};
