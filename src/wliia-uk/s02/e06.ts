import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Clive Anderson"
	| "Ron West"
	| "Jimmy Mulville"
	| "Paul Merton"
	| "John Sessions"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-06",
	airdate: "1989-12-22",
	host: "Clive Anderson",
	performers: ["Ron West", "Jimmy Mulville", "Paul Merton", "John Sessions"],
	games: [
		{
			name: "Authors",
			title: "_Goat-herding in Leamington Spa_",
			performers: [
				{
					name: "Ron West",
					author: "D.C. Comics",
				},
				{
					name: "Jimmy Mulville",
					author: "Sigmund Freud",
				},
				{
					name: "Paul Merton",
					author: "Edgar Allan Poe",
				},
				{
					name: "John Sessions",
					author: "The diaries of Andy Warhol",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Ron West", "Paul Merton"],
					scene: "Asking for the daughter's hand in marriage",
					styles: [
						"Sam Peckinpah film",
						"Slapstick and/or Keystone Cops",
						"One-woman show",
						"Coming-soon style trailer",
					],
				},
				{
					performers: ["Jimmy Mulville", "John Sessions"],
					scene: "Two people planning a bank robbery",
					styles: [
						"Music hall",
						"Medieval mystery play",
						"_Come Dancing_",
						"Nativity",
					],
				},
			],
		},
		{
			name: "Interview",
			interviews: [
				{
					interviewer: "Ron West",
					style: "Literary magazine",
					name: "John Sessions",
					character: "Neptune",
				},
				{
					interviewer: "Paul Merton",
					style: "_DIY_ magazine",
					name: "Jimmy Mulville",
					character: "Claudius",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Chat-up line"],
		},
		{
			name: "Props",
			pairs: [
				["Paul Merton", "John Sessions"],
				["Jimmy Mulville", "Ron West"],
			],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Paul Merton", "Ron West"],
		},
		{
			name: "Party Quirks",
			host: "Paul Merton",
			guests: [
				{
					name: "Ron West",
					quirk: "Nine year old genius",
				},
				{
					name: "Jimmy Mulville",
					quirk: "S.A.S. commando",
				},
				{
					name: "John Sessions",
					quirk: "Australian soap opera actor",
				},
			],
		},
	],
};
