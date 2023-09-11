import { type Episode } from "../../types/episode";

export const e04: Episode<
	| "Clive Anderson"
	| "Jim Sweeney"
	| "Stephen Frost"
	| "Josie Lawrence"
	| "Tony Slattery"
	| "Richard Vranch"
> = {
	number: 4,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_4-04",
	airdate: "1992-02-14",
	host: "Clive Anderson",
	performers: [
		"Jim Sweeney",
		"Stephen Frost",
		"Josie Lawrence",
		"Tony Slattery",
	],
	musicians: ["Richard Vranch"],
	games: [
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			performers: ["Jim Sweeney", "Stephen Frost"],
			scene: "Jim is asking for Stephen's daughter's hand in marriage",
			styles: ["Pantomime", "_Flower Pot Men_", "Shakespeare", "Western"],
		},
		{
			name: "Emotion Options",
			performers: ["Josie Lawrence", "Tony Slattery"],
			scene: "Two people in the laundrette",
			emotions: ["Depressed", "Greedily", "Pity", "Lustily"],
		},
		{
			name: "Helping Hands",
			performers: [
				"Stephen Frost",
				{
					body: "Jim Sweeney",
					hands: "Tony Slattery",
				},
			],
			scene: "Going to help prepare a party",
		},
		{
			name: "Props",
			pairs: [
				["Tony Slattery", "Jim Sweeney"],
				["Josie Lawrence", "Stephen Frost"],
			],
		},
		{
			name: "Old Job, New Job",
			performers: ["Tony Slattery", "Jim Sweeney"],
			oldJobPerformers: ["Stephen Frost"],
			scene:
				"Working in a pizza parlor, joined by Stephen who used to be a mountain climber",
		},
		{
			name: "Prison Visitor",
			alternateName: "Prison Cell",
			visitor: "Josie Lawrence",
			musician: "Richard Vranch",
			prisoners: [
				{
					name: "Jim Sweeney",
					crime: "Burgled from Buckingham Palace",
				},
				{
					name: "Stephen Frost",
					crime: "Has killed a bald dachshund",
				},
				{
					name: "Tony Slattery",
					crime: "Has run off with a sumo wrestler",
				},
			],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Josie Lawrence", "Stephen Frost"],
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Josie Lawrence",
					quirk: "Thinks she's in a washing powder advert",
				},
				{
					name: "Jim Sweeney",
					quirk: "Blackmailer",
				},
				{
					name: "Stephen Frost",
					quirk: "Heavyweight boxer",
				},
			],
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Noddy's town after an earthquake",
				"A bald man going into a hairdresser's demanding a haircut",
				"Shipwrecked on a desert island",
				"Think they can hear a ghost in their house",
				"If Steve Davis were a concert violinist",
				"Behind the bike sheds",
				"Ballet in a chip shop",
				"Dropping a contact lens in a bubble bath",
			],
		},
	],
};
