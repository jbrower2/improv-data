import { type Episode } from "../../types/episode";

export const e06: Episode<
	| "Tommy Little"
	| "Tom Walker"
	| "Susie Youssef"
	| "Steen Raskopoulos"
	| "Cal Wilson"
	| "Fourplay with Judy"
> = {
	number: 6,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/AU_Episode_1-06",
	airdate: "2017-01-15",
	host: "Tommy Little",
	performers: [
		"Tom Walker",
		"Susie Youssef",
		"Steen Raskopoulos",
		"Cal Wilson",
	],
	musicians: [
		{
			name: "Fourplay with Judy",
			alternateName: "The Spotted Dicks",
		},
	],
	games: [
		{
			name: "Scenes from a Hat",
			scenes: [
				"Nicknames your partner doesn't want to be called",
				"Things you instantly regret",
				"Things you can say on a golf course, but not in bed",
			],
		},
		{
			name: "Secret",
			performers: ["Tom Walker", "Susie Youssef"],
			scene: "Holiday lovers saying goodbye on the last day of summer",
			secret: "A flamingo costume",
		},
		{
			name: "Hats",
			alternateName: "Dating Service",
		},
		{
			name: "Weird Newscasters",
			alternateName: "Weird Newsreaders",
			anchor: {
				name: "Cal Wilson",
				alternateName: "Ursula Pepperpot Pendragon",
			},
			coAnchor: {
				name: "Susie Youssef",
				alternateName: "Pikachu Jones",
				quirk: "Cal's mother, trying to set her up with a nice husband",
			},
			sports: {
				name: "Steen Raskopoulos",
				alternateName: "Slats O'Flaherty",
				quirk:
					"Prisoner tunneling out of Alcatraz (joined by Steve from the audience)",
			},
			weather: {
				name: "Tom Walker",
				alternateName: "Glenn Terabithia",
				quirk: "Satan auditioning for a talent show",
			},
		},
		{
			name: "Props",
			pairs: [
				["Cal Wilson", "Susie Youssef"],
				["Tom Walker", "Steen Raskopoulos"],
			],
		},
		{
			name: "Dubbing",
			performers: ["Cal Wilson", "Susie Youssef"],
			dubber: "Tom Walker",
			dubbed: "Steen Raskopoulos",
			scene:
				"Steen and Cal are famous lion-tamers who've fallen on hard times, Susie enters to repossess the lions",
		},
		{
			name: "Rock Out",
			musicians: "Fourplay with Judy",
			about: "Botched nose job",
		},
	],
};
