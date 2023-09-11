import { type Episode } from "../../types/episode.js";

export const e19: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 19,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_1-19",
	airdate: "1999-03-17",
	productionNumber: "296717-110",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Brad Sherwood",
				alternateName: "Chesterfield Snapdragon McFisticuffs",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Blanched",
				quirk: "Too emotionally attached to the stories",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Sparky",
				quirk: "Don King",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Chip Jissyson",
				quirk: "Astronaut walking in space and things start going wrong",
			},
		},
		{
			name: "Duet",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Sarah, an IT consultant",
			styles: ["Disco ballad"],
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene: "It's Colin's wedding night on the _Titanic_",
		},
		{
			name: "Props",
			pairs: [
				["Brad Sherwood", "Ryan Stiles"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "In a pizza place",
		},
		{
			name: "Telethon",
			hosts: ["Ryan Stiles"],
			guest: "Colin Mochrie",
			singers: ["Brad Sherwood", "Wayne Brady"],
			musicians: ["Laura Hall"],
			topic: "Thumb-suckers",
			celebrities: [
				{
					name: "Brad Sherwood",
					celebrities: ["Bruce Springsteen", "Bob Dylan,"],
				},
				{
					name: "Wayne Brady",
					celebrities: ["Stevie Wonder", "Aaron Neville", "Sammy Davis Jr."],
				},
			],
		},
		{
			name: "Stand Sit Lie",
			alternateName: "Stand Sit and Bend",
			performers: ["Drew Carey", "Colin Mochrie", "Ryan Stiles"],
			scene:
				"Drew and his wife Colin are farmers who have called around a vet Ryan because they are worried about their prized cow",
		},
	],
};
