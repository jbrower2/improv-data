import { type Episode } from "../../types/episode";

export const e11: Episode<
	| "Clive Anderson"
	| "Rory Bremner"
	| "Greg Proops"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Brad Sherwood"
	| "Mike McShane"
	| "Stephen Frost"
	| "Josie Lawrence"
	| "Stephen Fry"
	| "Richard Vranch"
> = {
	number: 11,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_9-11",
	airdate: "1997-09-18",
	host: "Clive Anderson",
	performers: [
		"Rory Bremner",
		"Greg Proops",
		"Colin Mochrie",
		"Ryan Stiles",
		"Brad Sherwood",
		"Mike McShane",
		"Stephen Frost",
		"Josie Lawrence",
		"Stephen Fry",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Questions Only",
			performers: [
				"Rory Bremner",
				"Greg Proops",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			scenes: ["In the Olympic Village"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene:
				"Ryan's a zoologist who has been living with gorillas for about twenty years and Colin has arrived to tell him it's time to come home",
			styles: ["Pirate movie", "Muppets", "Western"],
		},
		{
			name: "Let's Make a Date",
			host: "Brad Sherwood",
			guests: [
				{
					name: "Mike McShane",
					quirk: "Dog making a dirty phone call",
				},
				{
					name: "Colin Mochrie",
					quirk: "Increasingly annoyed by Brad's stupidity",
				},
				{
					name: "Ryan Stiles",
					quirk: "Channelling the spirits of Brad's dead relatives",
				},
			],
		},
		{
			name: "Song Titles",
			performers: [
				"Brad Sherwood",
				"Stephen Frost",
				"Colin Mochrie",
				"Ryan Stiles",
			],
			scene: "At the racecourse",
		},
		{
			name: "Song Styles",
			singers: ["Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "Andy, an account manager for a fruit machine firm",
			styles: ["Big musical love song"],
		},
		{
			name: "Sportscasters",
			alternateName: "Sports Commentators",
			commentators: ["Greg Proops", "Rory Bremner"],
			athletes: ["Ryan Stiles", "Colin Mochrie"],
			scene: "Two guys at adjoining desks in an office",
		},
		{
			name: "Daytime Talk Show",
			host: "Josie Lawrence",
			guests: ["Stephen Fry", "Colin Mochrie", "Ryan Stiles"],
			topic: "Washing up",
		},
		{
			name: "Hollywood Director",
			alternateName: "Director",
			director: "Colin Mochrie",
			actors: ["Greg Proops", "Ryan Stiles"],
			scene:
				"In _Alien_, one of the members of the spaceship isn't feeling well",
			notes: [
				"Constantly give double-takes",
				"As if it's in a musical, and do it upbeat",
				"Do it as German strippers, with a shoulder disability",
			],
		},
		{
			name: "Song Styles",
			singers: ["Brad Sherwood"],
			musicians: ["Richard Vranch"],
			about: "Pauline, from Edinburgh, who sells cars",
			styles: ["Brit pop"],
		},
	],
};
