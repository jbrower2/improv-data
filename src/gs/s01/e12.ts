import { type Episode } from "../../types/episode";

export const e12: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Colin Mochrie"
	| "Jeff Davis"
	| "Greg Proops"
	| "Chip Esten"
	| "Kathy Kinney"
	| "Julie Larson"
	| "Jonathan Mangum"
	| "Sean Masterson"
> = {
	number: 12,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Green_Screen_12",
	airdate: "2005-11-08",
	host: "Drew Carey",
	performers: [
		"Brad Sherwood",
		"Colin Mochrie",
		"Jeff Davis",
		"Greg Proops",
		"Chip Esten",
		"Kathy Kinney",
		"Julie Larson",
		"Jonathan Mangum",
		"Sean Masterson",
	],
	games: [
		{
			name: "Scenes",
			performers: [
				"Greg Proops",
				"Colin Mochrie",
				"Jeff Davis",
				"Brad Sherwood",
			],
			theme: "In a hotel with Santa Claus",
		},
		{
			name: "Story",
			leader: "Drew Carey",
			storytellers: [
				"Colin Mochrie",
				"Chip Esten",
				"Julie Larson",
				"Jeff Davis",
				"Sean Masterson",
				"Greg Proops",
				"Brad Sherwood",
			],
			title: "_The Little Antelope That Could_",
		},
		{
			name: "Filler Clip",
			performers: ["Chip Esten", "Greg Proops"],
			scene: "Sports car drivers",
		},
		{
			name: "Whose Line?",
			alternateName: "Sentences",
			performers: ["Drew Carey", "Jonathan Mangum"],
			moderators: ["Greg Proops", "Brad Sherwood"],
			scenes: ["A dry cleaner's"],
			lines: [
				"Are you gonna eat that?",
				"Your eyes are a beautiful blue tonight.",
				"You're one of those hens who identifies as a rooster aren't you?",
				"Can I touch your tonsils?",
				"What is that on your toe?",
				"I like to eat noodles.",
				"Wow, I ate too much.",
				"Pass the butter, please.",
				"What did you put on this toast?",
				"Boy, you look down today.",
				"What color are your panties, honey.",
				"Let's hold hands and skip around.",
			],
		},
		{
			name: "Scenes",
			performers: [
				"Greg Proops",
				"Colin Mochrie",
				"Jeff Davis",
				"Chip Esten",
				"Brad Sherwood",
			],
			theme: "Spiders and A melting clock",
		},
	],
};
