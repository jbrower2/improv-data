import { type Episode } from "../../types/episode";

export const e09: Episode<
	| "Clive Anderson"
	| "Mike McShane"
	| "Tony Slattery"
	| "Josie Lawrence"
	| "John Sessions"
	| "Richard Vranch"
> = {
	number: 9,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_1-09",
	airdate: "1988-11-18",
	host: "Clive Anderson",
	performers: [
		"Mike McShane",
		"Tony Slattery",
		"Josie Lawrence",
		"John Sessions",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_Knight of the Crumpet_",
			performers: [
				{
					name: "Mike McShane",
					author: "Louis L'Amour",
				},
				{
					name: "Josie Lawrence",
					author: "The Brothers Grimm",
				},
				{
					name: "Tony Slattery",
					author: "Dr. Alex Comfort",
				},
				{
					name: "John Sessions",
					author: "William Faulkner",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theatre Styles",
			groups: [
				{
					performers: ["Josie Lawrence", "Mike McShane"],
					scene: "A wife who is trying to murder her husband",
					styles: [
						"Russ Meyer",
						"Film noir",
						"_Star Wars_",
						"Gilbert & Sullivan",
					],
				},
				{
					performers: ["Tony Slattery", "John Sessions"],
					scene:
						"Tony is having a dinner party, and has to pop next door to the neighbour to borrow some coffee",
					styles: [
						"Documentary (stock exchange information film)",
						"Escape movie",
						"Restoration comedy",
					],
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Person to be comimg forward to receive an Oscar"],
		},
		{
			name: "Remote Control",
			topic: "Hedgehogs",
			performers: [
				{
					name: "Mike McShane",
					quirk: "_Miami Vice_",
				},
				{
					name: "Josie Lawrence",
					quirk: "_Treasure Hunt_",
				},
				{
					name: "Tony Slattery",
					quirk: "_Game for a Laugh_",
				},
				{
					name: "John Sessions",
					quirk: "_Floyd on Fish_",
				},
			],
		},
		{
			name: "American Musical",
			musician: "Richard Vranch",
			about: "Playing football, Stopped by the police, and Waking up",
		},
	],
};
