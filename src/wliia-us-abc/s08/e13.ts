import { type Episode } from "../../types/episode";

export const e13: Episode<
	| "Drew Carey"
	| "Wayne Brady"
	| "Denny Siegel"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 13,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-13",
	airdate: "2006-11-07",
	productionNumber: "296751-8008",
	host: "Drew Carey",
	performers: ["Wayne Brady", "Denny Siegel", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Denny Siegel",
				alternateName: "Fifi Leadbottom",
			},
			coAnchor: {
				name: "Colin Mochrie",
				alternateName: "Rock Solid",
				quirk: "Awkward teenager on his first date with the anchor",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Richard Simmons",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Rock Paperandscissors",
				quirk: "Attached to the anchor by a strong rubber band",
			},
		},
		{
			name: "Song Styles",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall"],
			about: "Shelley, a housewife",
			styles: ["James Brown"],
		},
		{
			name: "Film Noir",
			alternateName: "Narrate",
			performers: ["Colin Mochrie", "Ryan Stiles"],
			scene: "In a bowling alley",
		},
		{
			name: "Props",
			pairs: [
				["Ryan Stiles", "Denny Siegel"],
				["Colin Mochrie", "Wayne Brady"],
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Colin Mochrie", "Ryan Stiles"],
			musicians: ["Laura Hall"],
			album: "_Songs of the Fish Cutter_",
			songs: [
				{
					style: "Swing",
					title: "Of Cod and Country",
				},
				{
					style: "Reggae",
					title: "Someone Call the Carps",
				},
				{
					style: "Rock and roll",
					title: "Your Place or Mine?",
				},
			],
		},
		{
			name: "Dead Bodies",
			actor: "Colin Mochrie",
			bodies: ["Drew Carey", "Denny Siegel"],
			audienceMember: "Jaris",
			scene:
				"Drew is a _Baywatch_ lifeguard who has just saved our audience member from drowning, Denny is Drew's jealous girlfriend",
		},
	],
};
