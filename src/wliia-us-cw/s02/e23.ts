import { type Episode } from "../../types/episode.js";

export const e23: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Jonathan Mangum"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Wendi McLendon-Covey"
> = {
	number: 23,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_10-23",
	airdate: "2014-11-14",
	host: "Aisha Tyler",
	performers: [
		"Wayne Brady",
		"Jonathan Mangum",
		"Colin Mochrie",
		"Ryan Stiles",
	],
	guests: ["Wendi McLendon-Covey"],
	games: [
		{
			name: "Hollywood Director",
			director: "Colin Mochrie",
			scene:
				"Two intrepid arctic explorers on husky-drawn sleds stop to explore an ice cave, Wayne is a prehistoric man who bursts from the ice block that he was previously frozen in",
			notes: [
				"You are all girls on spring break",
				"You (Ryan) Jimmy Stewart, you (Jonathan) all the Muppets, you (Wayne) Chris Rock",
			],
		},
		{
			name: "Dubbing",
			performers: ["Wayne Brady", "Ryan Stiles"],
			dubber: "Colin Mochrie",
			dubbed: "Wendi McLendon-Covey",
			scene:
				"Ryan is the boyfriend of sexy sorority girl Wendi when she suddenly becomes possessed and then Wayne enters as the priest who comes to perform an exorcism",
		},
		{
			name: "Film Dub",
			performers: [
				"Ryan Stiles",
				"Jonathan Mangum",
				"Colin Mochrie",
				"Wayne Brady",
			],
			scene: "Returning from a party",
			film: "_The Manster_ (1959)",
		},
		{
			name: "Secret",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "Peter Pan and Wendi",
			secret: "Cardboard cutout of a sexy Colin",
		},
		{
			name: "Living Scenery",
			actors: ["Ryan Stiles", "Colin Mochrie"],
			props: ["Wayne", "Wendi"],
			scene:
				"A couple who've won big in the lottery are enjoying their new mansion and their luxury lifestyle",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Weird things for a driving instructor to say",
				"Excerpts from self-help DVDs that wouldn't sell",
				"Things a dentist says that you can't say to your partner",
				"Names of restaurants you'd never want to eat at",
			],
		},
	],
};
