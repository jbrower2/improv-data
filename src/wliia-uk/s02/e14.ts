import { type Episode } from "../../types/episode.js";

export const e14: Episode<
	| "Clive Anderson"
	| "Ron West"
	| "Sandi Toksvig"
	| "Tony Slattery"
	| "Rory McGrath"
> = {
	number: 14,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_2-14",
	airdate: "1990-02-23",
	host: "Clive Anderson",
	performers: ["Ron West", "Sandi Toksvig", "Tony Slattery", "Rory McGrath"],
	games: [
		{
			name: "Authors",
			title: "_Annie the Orphan, Get Your Rifle_",
			performers: [
				{
					name: "Ron West",
					author: "Kurt Vonnegut Jr.",
				},
				{
					name: "Sandi Toksvig",
					author: "Enid Blyton Sr.",
				},
				{
					name: "Tony Slattery",
					author: "Marquis de Sade",
				},
				{
					name: "Rory McGrath",
					author: "Desmond Morris the third",
				},
			],
		},
		{
			name: "Film TV and Theater Styles",
			alternateName: "Film and Theater Styles",
			groups: [
				{
					performers: ["Ron West", "Sandi Toksvig"],
					scene: "Taking an animal to a vet",
					styles: ["Horror", "American gangster", "Disney", "Western"],
				},
				{
					performers: ["Tony Slattery", "Rory McGrath"],
					scene: "Two commandos in a submarine",
					styles: ["Farce", "_Jackanory_", "_Thunderbirds_", "Advert"],
				},
			],
		},
		{
			name: "Interview",
			interviews: [
				{
					interviewer: "Tony Slattery",
					style: "Rock magazine",
					name: "Sandi Toksvig",
					character: "Snow White",
				},
				{
					interviewer: "Rory McGrath",
					style: "_TV-am_",
					name: "Ron West",
					character: "Rasputin",
				},
			],
		},
		{
			name: "World's Worst",
			scenes: ["Thing to say or be or do at a funeral"],
		},
		{
			name: "Props",
			pairs: [
				["Tony Slattery", "Sandi Toksvig"],
				["Ron West", "Rory McGrath"],
			],
		},
		{
			name: "Film Dub",
			alternateName: "Film Dubbing",
			performers: ["Sandi Toksvig", "Ron West"],
			film: "_The Atomic Submarine_ (1959)",
		},
		{
			name: "Party Quirks",
			host: "Tony Slattery",
			guests: [
				{
					name: "Ron West",
					quirk: "Thinks he is a reptile",
				},
				{
					name: "Sandi Toksvig",
					quirk: "Having a secret affair with the host",
				},
				{
					name: "Rory McGrath",
					quirk: "Accident-prone",
				},
			],
		},
	],
};
