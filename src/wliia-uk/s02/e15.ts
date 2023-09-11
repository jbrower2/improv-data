import { type Episode } from "../../types/episode";

export const e15: Episode<
	| "Clive Anderson"
	| "Josie Lawrence"
	| "Paul Merton"
	| "Tony Slattery"
	| "Mike McShane"
	| "Richard Vranch"
> = {
	number: 15,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-15",
	airdate: "1990-03-02",
	host: "Clive Anderson",
	performers: [
		"Josie Lawrence",
		"Paul Merton",
		"Tony Slattery",
		"Mike McShane",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Authors",
			title: "_Day at the Seaside in Singapore Having a Hungarian Meal_",
			performers: [
				{
					name: "Josie Lawrence",
					author: "Nursery rhymes",
				},
				{
					name: "Paul Merton",
					author: "Yakoshimo Okomo",
				},
				{
					name: "Tony Slattery",
					author: "The person who writes ITV Continuity announcements",
				},
				{
					name: "Mike McShane",
					author: "Mark Twain",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Josie Lawrence", "Paul Merton"],
					scene: "Cinderella meeting the fairy godmother",
					styles: ["_Kung Fu_", "Oscar Wilde", "3D", "Billy Smart's Circus"],
				},
				{
					performers: ["Tony Slattery", "Mike McShane"],
					scene: "Mike is recruiting Tony for his Magnificent Seven",
					styles: ["Amateur dramatics", "_Easy Rider_", "Tennessee Williams"],
				},
			],
		},
		{
			name: "Song Styles",
			singers: ["Mike McShane", "Josie Lawrence"],
			musicians: ["Richard Vranch"],
			about: "A toaster",
			styles: ["Gospel (Mike)", "Motown (Josie)"],
		},
		{
			name: "World's Worst",
			scenes: ["Person to be stuck in a lift with"],
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Paul Merton",
					quirk: "Obsessed with trivial facts",
				},
				{
					name: "Josie Lawrence",
					quirk: "Cave woman",
				},
				{
					name: "Mike McShane",
					quirk: "Narrating the party",
				},
			],
		},
		{
			name: "Opera",
			alternateName: "Rock Opera",
			musician: "Richard Vranch",
			about: "Carpentry, Washing the car, and Rugby",
		},
	],
};
