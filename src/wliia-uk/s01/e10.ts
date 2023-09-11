import { type Episode } from "../../types/episode";

export const e10: Episode<
	| "Clive Anderson"
	| "Stephen Fry"
	| "Josie Lawrence"
	| "Enn Reitel"
	| "John Sessions"
> = {
	number: 10,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/UK_Episode_1-10",
	airdate: "1988-11-25",
	host: "Clive Anderson",
	performers: ["Stephen Fry", "Josie Lawrence", "Enn Reitel", "John Sessions"],
	games: [
		{
			name: "Authors",
			title: "_The Day I Became a Merchant Banker_",
			performers: [
				{
					name: "Stephen Fry",
					author: "_The 1001 Arabian Nights_",
				},
				{
					name: "Josie Lawrence",
					author: "Mary Shelley",
				},
				{
					name: "Enn Reitel",
					author: "Dashiell Hammett",
				},
				{
					name: "John Sessions",
					author: "Frank Richards",
				},
			],
		},
		{
			name: "Story",
			leader: "Stephen Fry",
			title: "_Tarzan and The Lager Louts_",
			moral: "Don't put all your eggs in one basket",
		},
		{
			name: "World's Worst",
			scenes: [
				"Person to be or thing to say when being introduced to a member of the Royal Family",
			],
		},
		{
			name: "Props",
			pairs: [
				["John Sessions", "Stephen Fry"],
				["Josie Lawrence", "Enn Reitel"],
			],
		},
		{
			name: "Couples",
			performers: ["John Sessions", "Enn Reitel"],
			scene: "A fortune-teller and the customer",
			couples: [
				"Dustin Hoffman and Laurence Olivier",
				"Edward Fox and Donald Sinden",
				"Sim Price and Alec Guinness",
				"Sean Connery and Dame Edna",
				"Fred Flintstone and Barney Rubble",
				"Ronald Reagan and Mikhail Gorbachev‎",
			],
		},
		{
			name: "Wrong Theme Tune",
			performers: ["Stephen Fry", "Josie Lawrence"],
			show: "A documentary on contraception",
		},
		{
			name: "Rap",
			about: "Sheep",
		},
	],
};
