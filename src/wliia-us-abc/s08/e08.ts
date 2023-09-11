import { type Episode } from "../../types/episode";

export const e08: Episode<
	| "Drew Carey"
	| "Brad Sherwood"
	| "Wayne Brady"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Laura Hall"
> = {
	number: 8,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_8-08",
	airdate: "2006-03-21",
	productionNumber: "296751-8011",
	host: "Drew Carey",
	performers: ["Brad Sherwood", "Wayne Brady", "Colin Mochrie", "Ryan Stiles"],
	musicians: ["Laura Hall"],
	games: [
		{
			name: "Daytime Talk Show",
			host: "Brad Sherwood",
			guests: ["Wayne Brady", "Ryan Stiles"],
			audienceMembers: ["Colin Mochrie"],
			topic: "Noah's ark",
		},
		{
			name: "Sound Effects",
			actorPerformers: ["Colin Mochrie"],
			soundPerformers: ["Ryan Stiles"],
			scene:
				"Indiana Jones trying to find an ancient treasure in a booby-trapped cave",
		},
		{
			name: "Scene to Rap",
			musicians: ["Laura Hall"],
			scene: "Train wreck",
		},
		{
			name: "Ice Skaters",
			performers: ["Ryan Stiles", "Colin Mochrie"],
			subject: "Getting up in the morning",
		},
		{
			name: "Improbable Mission",
			agents: ["Colin Mochrie", "Ryan Stiles"],
			voiceOnTape: "Brad Sherwood",
			mission:
				"Mowing the lawn (The American embassy in the Central American country of Pacalacalacawa has a very overgrown yard.)",
		},
		{
			name: "Dead Bodies",
			actor: "Colin Mochrie",
			bodies: ["Ryan Stiles", "Wayne Brady"],
			audienceMember: "Julie",
			scene:
				"It's the deleted scene from _Titanic_, Jack, who is Ryan, is drawing Rose, who is Julie, in the nude when her fiancee Wayne bursts in and announces they've just struck an iceberg",
		},
		{
			name: "Questions Only",
			performers: ["Drew Carey", "Wayne Brady", "Ryan Stiles", "Colin Mochrie"],
			scenes: ["Tension breaks out in the gangster world of 1930s Chicago"],
		},
	],
};
