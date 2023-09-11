import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Nyima Funk"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_17-05",
	airdate: "2021-02-05",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Nyima Funk", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "P.T. Cuzidontdrinkcoffee",
			},
			coAnchor: {
				name: "Nyima Funk",
				alternateName: "The Bitch",
				quirk: "Colin's bitter ex-wife dishing the dirt on him",
			},
			sports: {
				name: "Wayne Brady",
				quirk: "Leading the audience in a prison break",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Marcel",
				quirk: "The World's Angriest Mime",
			},
		},
		{
			name: "Two-Line Vocabulary",
			performers: ["Colin Mochrie", "Ryan Stiles", "Wayne Brady"],
			scene:
				"Colin is a naval commander whose submarine has come under attack and is leaking water",
			lines: [
				{
					name: "Wayne Brady",
					lines: ["Do you want to take this outside?", "Wow, that's huge."],
				},
				{
					name: "Ryan Stiles",
					lines: ["Is this helping?", "Why?"],
				},
			],
		},
		{
			name: "Newsflash",
			anchormen: ["Ryan Stiles", "Nyima Funk"],
			fieldReporter: "Colin Mochrie",
			onTheGreenScreen: "Male strippers",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Bad Breakup lines",
				"The dating videos of fictional characters",
				"Things that would ruin the atmosphere at a dinner party",
				"If doctors broke into song",
			],
		},
		{
			name: "Sideways Scene",
			performers: ["Colin Mochrie", "Nyima Funk", "Wayne Brady"],
			scene:
				"Wild West pioneer Colin has brought his frisky new bride Nyima back to his log cabin for their first night together, and excitable neighbor Wayne is washed in on a torrent of water to tell them that the river has burst its bank",
			styles: "_X-Men_ movie, Haunted house, _Peter Pan_, _Angry Birds_",
		},
	],
};
