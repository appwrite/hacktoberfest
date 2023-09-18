import { writable } from 'svelte/store';

export const DurationMinute = 1000 * 60;

export const githubQuery = [
	'org:appwrite',
	'org:utopia-php',
	'org:open-runtimes',
	'label:hacktoberfest',
	'created:>2021-01-01',
	'state:open'
]
	.map(encodeURIComponent)
	.join('+');

const gitHubQueryString = [`q=${githubQuery}`, 'type=issues', 's=updated', 'o=asc'].join('&');

export const githubLink = `https://github.com/search?${gitHubQueryString}`;

export const totalIssuesAmount = writable(null);

export const githubIssues = writable(null);

export const currentSection = writable({
	id: 'about',
	scroll: false
});
// about, swag, events, issues

export const events = writable([
	{
		isOpened: false,
		timeISO: '2023-09-27T16:00:00.000Z',
		durationInMs: DurationMinute * 60,
		name: 'IllaCloud LiveStream',
		presenter: 'Wesley Cope',
		//link: 'https://lu.ma/hf-kickoff-blr',
		hasStarted: false,
		sessions: []
	},
	{
		isOpened: false,
		timeISO: '2023-10-01T16:00:00.000Z',
		durationInMs: DurationMinute * 480,
		name: 'Hacktoberfest Kickoff!',
		presenter: 'Appwrite and DigitalOcean',
		link: 'https://lu.ma/hf-kickoff-blr',
		hasStarted: false,
		sessions: []
	},
	{
		isOpened: false,
		timeISO: '2023-10-05T16:00:00.000Z',
		durationInMs: DurationMinute * 60,
		name: 'Appwrite and Hacktoberfest: How To Contribute',
		presenter: 'Aditya Oberai',
		//link: 'https://lu.ma/hf-kickoff-blr',
		hasStarted: false,
		sessions: []
	},
	{
		isOpened: false,
		timeISO: '2023-10-10T16:00:00.000Z',
		durationInMs: DurationMinute * 60,
		name: 'Appwrite x GitHub Education livestream',
		presenter: 'Aditya Oberai',
		//link: 'https://lu.ma/hf-kickoff-blr',
		hasStarted: false,
		sessions: []
	},
	{
		isOpened: false,
		timeISO: '2023-10-12T16:00:00.000Z',
		durationInMs: DurationMinute * 60,
		name: 'Appwrite x Novu livestream',
		presenter: 'Aditya Oberai',
		//link: 'https://lu.ma/hf-kickoff-blr',
		hasStarted: false,
		sessions: []
	},
	{
		isOpened: false,
		timeISO: '2023-10-17T14:00:00.000Z',
		durationInMs: DurationMinute * 60,
		name: 'Building Appwrite Functions',
		presenter: 'Aditya Oberai',
		//link: 'https://lu.ma/hf-kickoff-blr',
		hasStarted: false,
		sessions: []
	}
	// {
	// 	isOpened: false,
	// 	timeISO: '2022-09-24T16:00:00.000Z',
	// 	durationInMs: DurationMinute * 120,
	// 	name: 'Hacktoberfest Kickoff Event #1!',
	// 	presenter: 'Microsoft Learn Student Ambassadors, RapidAPI',
	// 	link: 'https://www.youtube.com/watch?v=oPswl1Vvpxc',
	// 	hasStarted: false,
	// 	sessions: [
	// 		{
	// 			name: 'What is Hacktoberfest?',
	// 			timeISO: '2021-09-21T16:00:00.000Z',
	// 			durationInMs: DurationMinute * 15,
	// 			presenters: [
	// 				{
	// 					name: 'Aditya Oberai',
	// 					image: '/presenters/aditya.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				},
	// 				{
	// 					name: 'Tessa Mero',
	// 					image: '/presenters/tessa.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				}
	// 			]
	// 		},
	// 		{
	// 			name: 'Creating Your First Pull Request',
	// 			timeISO: '2021-09-21T16:15:00.000Z',
	// 			durationInMs: DurationMinute * 45,
	// 			presenters: [
	// 				{
	// 					name: 'Muhammad Hassan',
	// 					image: '/presenters/muhammad.jpeg',
	// 					companyImage: '/companies/mlsa.png'
	// 				}
	// 			]
	// 		},
	// 		{
	// 			name: 'Why Contributing to Open Source Will Help Your Career (Fireside Chat)',
	// 			timeISO: '2021-09-21T17:00:00.000Z',
	// 			durationInMs: DurationMinute * 60,
	// 			presenters: [
	// 				{
	// 					name: 'Ahmad Awais',
	// 					image: '/presenters/ahmad.webp',
	// 					companyImage: '/companies/rapidapi.svg'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	isOpened: false,
	// 	timeISO: '2022-09-26T15:00:00.000Z',
	// 	durationInMs: DurationMinute * 120,
	// 	name: 'Hacktoberfest Event #2!',
	// 	presenter: 'GitHub, Jono Bacon Consulting',
	// 	link: 'https://www.youtube.com/watch?v=BtP2e-u4HjU',
	// 	hasStarted: false,
	// 	sessions: [
	// 		{
	// 			name: 'What is Hacktoberfest?',
	// 			timeISO: '2022-09-25T15:00:00.000Z',
	// 			durationInMs: DurationMinute * 30,
	// 			presenters: [
	// 				{
	// 					name: 'Christy Jacob',
	// 					image: '/presenters/christy.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				},
	// 				{
	// 					name: 'Tessa Mero',
	// 					image: '/presenters/tessa.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				}
	// 			]
	// 		},
	// 		{
	// 			name: 'Intro to Git and GitHub',
	// 			timeISO: '2022-09-25T15:30:00.000Z',
	// 			durationInMs: DurationMinute * 30,
	// 			presenters: [
	// 				{
	// 					name: 'Rizèl Scarlett',
	// 					image: '/presenters/rizel.jpeg',
	// 					companyImage: '/companies/github.png'
	// 				}
	// 			]
	// 		},
	// 		{
	// 			name: "Open Source Advocacy: Why it's important? (Fireside Chat)",
	// 			timeISO: '2022-09-25T16:00:00.000Z',
	// 			durationInMs: DurationMinute * 60,
	// 			presenters: [
	// 				{
	// 					name: 'Jono Bacon',
	// 					image: '/presenters/jono.jpeg',
	// 					companyImage: '/companies/jonobaconconsulting.png'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	isOpened: false,
	// 	timeISO: '2022-09-28T16:00:00.000Z',
	// 	durationInMs: DurationMinute * 90,
	// 	name: 'Hacktoberfest Event #3!',
	// 	link: 'https://www.youtube.com/watch?v=WraJDMrWYf8',
	// 	presenter: 'Linkfree, Front-End Foxes',
	// 	hasStarted: false,
	// 	sessions: [
	// 		{
	// 			name: 'Why Get Started with Open Source, Project Showcase #1 (LinkFree)',
	// 			timeISO: '2022-09-28T16:00:00.000Z',
	// 			durationInMs: DurationMinute * 60,
	// 			presenters: [
	// 				{
	// 					name: 'Eddie Jaoude',
	// 					image: '/presenters/eddie.jpeg',
	// 					companyImage: '/companies/linkfree.png'
	// 				}
	// 			]
	// 		},
	// 		// {
	// 		// 	name: 'Project Showcase #2 - Front-End Foxes',
	// 		// 	timeISO: '2022-09-28T17:00:00.000Z',
	// 		// 	durationInMs: DurationMinute * 30,
	// 		// 	presenters: [
	// 		// 		{
	// 		// 			name: 'Jen Looper',
	// 		// 			image: '/presenters/jen.png',
	// 		// 			companyImage: '/companies/frontendfoxes.svg'
	// 		// 		},
	// 		// 	]
	// 		// },
	// 		{
	// 			name: 'How to Contribute to Appwrite',
	// 			timeISO: '2022-09-28T17:00:00.000Z',
	// 			durationInMs: DurationMinute * 30,
	// 			presenters: [
	// 				{
	// 					name: 'Vincent Ge',
	// 					image: '/presenters/vincent.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	isOpened: false,
	// 	timeISO: '2022-10-04T16:00:00.000Z',
	// 	durationInMs: DurationMinute * 30,
	// 	name: 'Hackerfest Project Showcase #3',
	// 	link: 'https://www.youtube.com/watch?v=UgCVnt8alxQ',
	// 	presenter: 'Ockam',
	// 	hasStarted: false,
	// 	sessions: [
	// 		{
	// 			name: 'Ockam',
	// 			timeISO: '2022-10-04T16:00:00.000Z',
	// 			durationInMs: DurationMinute * 30,
	// 			presenters: [
	// 				{
	// 					name: 'Sabeen Syed',
	// 					image: '/presenters/sabeen.jpeg',
	// 					companyImage: '/companies/ockam.svg'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	isOpened: false,
	// 	timeISO: '2022-10-06T16:00:00.000Z',
	// 	durationInMs: DurationMinute * 30,
	// 	name: 'Project Showcase #4',
	// 	link: 'https://www.youtube.com/watch?v=ZI2zV7ol-s0',
	// 	presenter: 'Awesome Appwrite Snippets',
	// 	hasStarted: false,
	// 	sessions: [
	// 		{
	// 			name: 'Awesome Appwrite Snippets',
	// 			timeISO: '2022-10-06T16:00:00.000Z',
	// 			durationInMs: DurationMinute * 30,
	// 			presenters: [
	// 				{
	// 					name: 'Bishwajeet Parhi',
	// 					image: '/presenters/bishwajeet.jpeg',
	// 					companyImage: '/companies/bishwajeetparhi.png'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	isOpened: false,
	// 	timeISO: '2022-10-08T16:00:00.000Z',
	// 	durationInMs: DurationMinute * 60,
	// 	name: 'Community Chats',
	// 	link: 'https://www.youtube.com/watch?v=LUbsoyjEheE',
	// 	presenter: 'Appwrite',
	// 	hasStarted: false,
	// 	sessions: [
	// 		{
	// 			name: 'Community Chats on Discord Stage',
	// 			timeISO: '2022-10-08T16:00:00.000Z',
	// 			durationInMs: DurationMinute * 60,
	// 			presenters: [
	// 				{
	// 					name: 'Aditya Oberai',
	// 					image: '/presenters/aditya.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				},
	// 				{
	// 					name: 'Matej Bačo',
	// 					image: '/presenters/matej.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	isOpened: false,
	// 	timeISO: '2022-10-11T16:00:00.000Z',
	// 	durationInMs: DurationMinute * 30,
	// 	name: 'Project Showcase #5',
	// 	link: 'https://www.youtube.com/watch?v=k8bIhUbpq_k',
	// 	presenter: 'Lazygit',
	// 	hasStarted: false,
	// 	sessions: [
	// 		{
	// 			name: 'LazyGit',
	// 			timeISO: '2022-10-11T16:00:00.000Z',
	// 			durationInMs: DurationMinute * 30,
	// 			presenters: [
	// 				{
	// 					name: 'Jesse Duffield',
	// 					image: '/presenters/jesse.png',
	// 					companyImage: '/companies/lazygit.png'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	isOpened: false,
	// 	timeISO: '2022-10-13T16:00:00.000Z',
	// 	durationInMs: DurationMinute * 30,
	// 	name: 'Project Showcase #6',
	// 	link: 'https://www.youtube.com/watch?v=PMQb5qN5ob8',
	// 	presenter: 'Deepgram',
	// 	hasStarted: false,
	// 	sessions: [
	// 		{
	// 			name: 'Deepgram',
	// 			timeISO: '2022-10-13T16:00:00.000Z',
	// 			durationInMs: DurationMinute * 30,
	// 			presenters: [
	// 				{
	// 					name: 'Bekah Hawrot Weigel',
	// 					image: '/presenters/bekah.jpeg',
	// 					companyImage: '/companies/deepgram.svg'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	isOpened: false,
	// 	timeISO: '2022-10-22T16:00:00.000Z',
	// 	durationInMs: DurationMinute * 60,
	// 	name: 'Community Chats/PR Review Party',
	// 	link: 'https://www.youtube.com/watch?v=87g3QplUOBc',
	// 	presenter: 'Appwrite',
	// 	hasStarted: false,
	// 	sessions: [
	// 		{
	// 			name: 'Community Chats on Discord Stage',
	// 			timeISO: '2022-10-22T16:00:00.000Z',
	// 			durationInMs: DurationMinute * 60,
	// 			presenters: [
	// 				{
	// 					name: 'Aditya Oberai',
	// 					image: '/presenters/aditya.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				},
	// 				{
	// 					name: 'Matej Bačo',
	// 					image: '/presenters/matej.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				},
	// 				{
	// 					name: 'Haimantika Mitra',
	// 					image: '/presenters/haimantika.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	isOpened: false,
	// 	timeISO: '2022-10-25T16:00:00.000Z',
	// 	durationInMs: DurationMinute * 30,
	// 	name: 'Project Showcase #7',
	// 	link: 'https://www.youtube.com/watch?v=m0-B6VYTRVU',
	// 	presenter: 'Oh My Posh',
	// 	hasStarted: false,
	// 	sessions: [
	// 		{
	// 			name: 'Oh My Posh',
	// 			timeISO: '2022-10-25T16:00:00.000Z',
	// 			durationInMs: DurationMinute * 30,
	// 			presenters: [
	// 				{
	// 					name: 'Jan Dobbeleer',
	// 					image: '/presenters/jan.jpeg',
	// 					companyImage: '/companies/ohmyposh.svg'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	isOpened: false,
	// 	timeISO: '2022-10-27T16:00:00.000Z',
	// 	durationInMs: DurationMinute * 30,
	// 	name: 'Project Showcase #8',
	// 	link: 'https://www.youtube.com/watch?v=obRy9Afsxs0',
	// 	presenter: 'Novu',
	// 	hasStarted: false,
	// 	sessions: [
	// 		{
	// 			name: 'Novu',
	// 			timeISO: '2022-10-27T16:00:00.000Z',
	// 			durationInMs: DurationMinute * 30,
	// 			presenters: [
	// 				{
	// 					name: 'Emil Pearce',
	// 					image: '/presenters/emil.jpeg',
	// 					companyImage: '/companies/novu.svg'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	isOpened: false,
	// 	timeISO: '2022-10-29T16:00:00.000Z',
	// 	durationInMs: DurationMinute * 60,
	// 	name: 'Community Chats/PR Review Party',
	// 	link: 'https://www.youtube.com/watch?v=LULeKaJ4k2Y',
	// 	presenter: 'Appwrite',
	// 	hasStarted: false,
	// 	sessions: [
	// 		{
	// 			name: 'Community Chats on Discord Stage',
	// 			timeISO: '2022-10-29T16:00:00.000Z',
	// 			durationInMs: DurationMinute * 60,
	// 			presenters: [
	// 				{
	// 					name: 'Aditya Oberai',
	// 					image: '/presenters/aditya.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				},
	// 				{
	// 					name: 'Matej Bačo',
	// 					image: '/presenters/matej.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				},
	// 				{
	// 					name: 'Vincent Ge',
	// 					image: '/presenters/vincent.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	isOpened: false,
	// 	timeISO: '2022-10-31T16:00:00.000Z',
	// 	durationInMs: DurationMinute * 60,
	// 	name: 'Closing Ceremony',
	// 	link: 'https://www.youtube.com/watch?v=HFwHlEnGbRo',
	// 	presenter: 'Appwrite',
	// 	hasStarted: false,
	// 	sessions: [
	// 		{
	// 			name: "What's Next",
	// 			timeISO: '2022-10-31T16:00:00.000Z',
	// 			durationInMs: DurationMinute * 60,
	// 			presenters: [
	// 				{
	// 					name: 'Aditya Oberai',
	// 					image: '/presenters/aditya.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				},
	// 				{
	// 					name: 'Vincent Ge',
	// 					image: '/presenters/vincent.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				},
	// 				{
	// 					name: 'Haimantika Mitra',
	// 					image: '/presenters/haimantika.jpeg',
	// 					companyImage: '/companies/appwrite.png'
	// 				}
	// 			]
	// 		}
	// 	]
	// }
]);

export const teamMembers = writable([
	{
		image: '/pictures/eldad.webp',
		githubProfile: 'https://github.com/eldadfux'
	},
	{
		image: '/pictures/christy.webp',
		githubProfile: 'https://github.com/christyjacob4'
	},
	{
		image: '/pictures/damodar.webp',
		githubProfile: 'https://github.com/lohanidamodar'
	},
	{
		image: '/pictures/torsten.webp',
		githubProfile: 'https://github.com/TorstenDittmann'
	},
	{
		image: '/pictures/codercatdev.webp',
		githubProfile: 'https://github.com/codercatdev'
	},
	{
		image: '/pictures/ionic.webp',
		githubProfile: 'https://github.com/PineappleIOnic'
	},
	{
		image: '/pictures/jake.webp',
		githubProfile: 'https://github.com/abnegate'
	},
	{
		image: '/pictures/sara.webp',
		githubProfile: 'https://github.com/sarakaandorp'
	},
	{
		image: '/pictures/meldiron.webp',
		githubProfile: 'https://github.com/Meldiron'
	},
	{
		image: '/pictures/aditya.webp',
		githubProfile: 'https://github.com/adityaoberai'
	},
	{
		image: '/pictures/tenne.webp',
		githubProfile: 'https://github.com/TenneG'
	},
	{
		image: '/pictures/empty.svg',
		githubProfile: 'https://appwrite.io/discord',
		overlay: '+9800'
	}
]);

export const loadStore = (issuesJson) => {
	totalIssuesAmount.set(issuesJson.total_count);
	githubIssues.set(issuesJson.items);
};
