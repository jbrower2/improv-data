import { type Episode } from "../../types/episode";

export const e03: Episode<
	| "Clive Anderson"
	| "Jim Sweeney"
	| "Paul Merton"
	| "Steve Steen"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 3,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_4-03",
	airdate: "1992-02-07",
	host: "Clive Anderson",
	performers: ["Jim Sweeney", "Paul Merton", "Steve Steen", "Tony Slattery"],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Emotion Options",
			performers: ["Jim Sweeney", "Steve Steen"],
			scene: "Policeman interrogating a suspect",
			emotions: ["Jealously", "Constipatedly", "Triumphantly", "Ecstasy"],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Paul Merton", "Tony Slattery"],
			scene:
				"One is running a bar and the other has gone into that bar to drown his sorrows",
			styles: [
				"School play",
				"Musical",
				"One-man show",
				"Shakespeare",
				"Farce",
			],
		},
		{
			name: "Change Letter",
			alternateName: "Letter Changes",
			performers: ["Jim Sweeney", "Steve Steen"],
			rulesPerPlayer: [
				{
					name: "Jim Sweeney",
					cantSay: "B",
					mustSay: "F",
				},
				{
					name: "Steve Steen",
					cantSay: "S",
					mustSay: "T",
				},
			],
			scene: "At a barbecue",
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Tony Slattery", "Paul Merton"],
			scene: "Chat-up",
			film: "_Dangerous Passage_ (1944)",
		},
		{
			name: "March",
			musician: "Richard Vranch",
			about: "Traffic jams",
		},
		{
			name: "Props",
			pairs: [
				["Tony Slattery", "Steve Steen"],
				["Jim Sweeney", "Paul Merton"],
			],
		},
		{
			name: "Courtroom Scene",
			judge: "Jim Sweeney",
			prosecutor: "Paul Merton",
			witnesses: ["Tony Slattery", "Steve Steen"],
			crime: "Stealing LEGO bricks",
		},
		{
			name: "Helping Hands",
			performers: [
				"Paul Merton",
				{
					body: "Jim Sweeney",
					hands: "Steve Steen",
				},
			],
			scene: "Paying for groceries",
		},
		{
			name: "Party Quirks",
			host: "Paul Merton",
			guests: [
				{
					name: "Steve Steen",
					quirk: "Thinks he's mucking out stables",
				},
				{
					name: "Jim Sweeney",
					quirk: "Railway station announcer",
				},
				{
					name: "Tony Slattery",
					quirk: "Thinks he's King Arthur",
				},
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Snorkeling in a vat of Angel Delight",
				"A party in a goldfish bowl",
				"Garden gnomes at a wife-swapping party",
				"Message in a bottle",
				"Prison nativity play",
				"A cartload of monkeys",
				"Blind date",
				"Beetles making love on a leaf",
			],
		},
	],
};
