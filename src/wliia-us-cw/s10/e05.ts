import { type Episode } from "../../types/episode";

export const e05: Episode<
	| "Aisha Tyler"
	| "Wayne Brady"
	| "Nyima Funk"
	| "Colin Mochrie"
	| "Ryan Stiles"
	| "Shawn Johnson"
	| "Laura Hall"
	| "Linda Taylor"
> = {
	number: 5,
	wikiUrl: "https://whoselineisitanyway.fandom.com/wiki/Episode_18-05",
	airdate: "2021-11-06",
	host: "Aisha Tyler",
	performers: ["Wayne Brady", "Nyima Funk", "Colin Mochrie", "Ryan Stiles"],
	guests: ["Shawn Johnson"],
	musicians: ["Laura Hall", "Linda Taylor"],
	games: [
		{
			name: "Weird Newscasters",
			anchor: {
				name: "Colin Mochrie",
				alternateName: "Al Beback",
			},
			coAnchor: {
				name: "Nyima Funk",
				alternateName: "Beulah",
				quirk: "A grumpy old woman shouting abuse at everyone from her porch",
			},
			sports: {
				name: "Wayne Brady",
				alternateName: "Timmy",
				quirk:
					"Performing a one-man show charting the history of the United States of America",
			},
			weather: {
				name: "Ryan Stiles",
				alternateName: "Happy Geegaw",
				quirk:
					"An upbeat children's TV host who suffers a meltdown live on air",
			},
		},
		{
			name: "Song Styles",
			alternateName: "Song Style",
			singers: ["Wayne Brady"],
			musicians: ["Laura Hall", "Linda Taylor"],
			about: "Shawn",
			styles: ["High School Musical Glee-esque"],
		},
		{
			name: "Forward Rewind",
			scene:
				"Demanding ice hockey coach Colin is trying out rookie player Wayne and hot-headed star Ryan comes in to confront him about why he's been cut from the team and then Wayne's sassy girlfriend Nyima comes in to support her boyfriend",
		},
		{
			name: "Scenes from a Hat",
			scenes: [
				"Scenes you'd never see on the starship _Enterprise_",
				"If they had action-movie trailers for mundane jobs",
				"The spells Harry Potter tries when he thinks no one is looking",
			],
		},
		{
			name: "Greatest Hits",
			singers: ["Wayne Brady"],
			salesmen: ["Ryan Stiles", "Colin Mochrie"],
			musicians: ["Laura Hall", "Linda Taylor"],
			album: "_Songs of a Plumber_",
			songs: [
				{
					style: "Adele",
					title: "My Pants Don't Fit and My Crack Is Out",
				},
				{
					style: "Macklemore",
					title: "I'm Gonna Charge You More Than a Doctor",
				},
			],
		},
	],
};
