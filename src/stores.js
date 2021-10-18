import { writable } from 'svelte/store';

export const DurationMinute = 1000 * 60;

export const githubLink =
	'https://github.com/search?q=org%3Aappwrite+org%3Autopia-php+is%3Aissue+label%3Ahacktoberfest+created%3A%3E2021-01-01+is%3Aopen&type=issues';

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
		timeISO: '2021-09-21T16:00:00.000Z',
		durationInMs: DurationMinute * 90,
		name: 'Hacktoberfest Kickoff #1',
		presenter: 'Jina AI, n8n.io, Hoppscotch, Mattermost',
		link: 'https://www.youtube.com/watch?v=egHfCH_ZR4Q',
		isFinished: true,
		sessions: [
			{
				name: 'What is Hacktoberfest?',
				timeISO: '2021-09-21T16:00:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Aditya Oberai',
						image: '/presenters/aditya.png',
						companyImage: '/companies/appwrite.png'
					}
				]
			},
			{
				name: 'Neural Search with Jina AI',
				timeISO: '2021-09-21T16:30:00.000Z',
				durationInMs: DurationMinute * 15,
				presenters: [
					{
						name: 'Cristian Mitroi',
						image: '/presenters/cristian.png',
						companyImage: '/companies/jinaai.png'
					}
				]
			},
			{
				name: 'Extendable workflow automation with n8n',
				timeISO: '2021-09-21T16:45:00.000Z',
				durationInMs: DurationMinute * 15,
				presenters: [
					{
						name: 'Harshil Agrawal',
						image: '/presenters/harshil.png',
						companyImage: '/companies/n8n.png'
					}
				]
			},
			{
				name: 'Hoppscotch - Open Source API development ecosystem',
				timeISO: '2021-09-21T17:00:00.000Z',
				durationInMs: DurationMinute * 15,
				presenters: [
					{
						name: 'Liyas Thomas',
						image: '/presenters/liyas.png',
						companyImage: '/companies/hoppscotch.svg'
					}
				]
			},
			{
				name: 'Getting started with Mattermost',
				timeISO: '2021-09-21T17:15:00.000Z',
				durationInMs: DurationMinute * 15,
				presenters: [
					{
						name: 'PJ Hagerty',
						image: '/presenters/pj.png',
						companyImage: '/companies/mattermost.png'
					}
				]
			}
		]
	},

	{
		isOpened: false,
		timeISO: '2021-09-25T16:00:00.000Z',
		durationInMs: DurationMinute * 90,
		name: 'Intro to Open Source',
		presenter: 'Major League Hacking, GitHub, Microsoft',
		link: 'https://www.youtube.com/watch?v=enNcIje4dXQ',
		isFinished: true,
		sessions: [
			{
				name: 'Intro to Git and creating your first PR',
				timeISO: '2021-09-25T16:00:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Brandon Leckemby',
						image: '/presenters/brandon.png',
						companyImage: '/companies/appwrite.png'
					}
				]
			},
			{
				name: 'Panel: Building Open source communities',
				timeISO: '2021-09-25T16:30:00.000Z',
				durationInMs: DurationMinute * 60,
				presenters: [
					{
						name: 'Mike Swift',
						image: '/presenters/mike.png',
						companyImage: '/companies/mlh.png'
					},
					{
						name: 'Juan Pablo',
						image: '/presenters/juan.png',
						companyImage: '/companies/github.png'
					},
					{
						name: 'Jen Looper',
						image: '/presenters/jen.png',
						companyImage: '/companies/microsoft.png'
					}
				]
			}
		]
	},

	{
		isOpened: false,
		timeISO: '2021-09-29T15:00:00.000Z',
		durationInMs: DurationMinute * 105,
		name: 'Hacktoberfest Kickoff #2',
		link: 'https://www.youtube.com/watch?v=cyJAz-c1OWs',
		presenter: 'Julia, Lazy Git, Forem, HashiCorp, Symfony',
		isFinished: true,
		sessions: [
			{
				name: 'What is Hacktoberfest?',
				timeISO: '2021-09-29T15:00:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Christy Jacob',
						image: '/presenters/christy.png',
						companyImage: '/companies/appwrite.png'
					}
				]
			},
			{
				name: 'The Julia Programming Language',
				timeISO: '2021-09-29T15:30:00.000Z',
				durationInMs: DurationMinute * 15,
				presenters: [
					{
						name: 'Logan Kilpatrick',
						image: '/presenters/logan.png',
						companyImage: '/companies/julia.png'
					}
				]
			},
			{
				name: 'Lazy Git - Terminal UI for git commands',
				timeISO: '2021-09-29T15:45:00.000Z',
				durationInMs: DurationMinute * 15,
				presenters: [
					{
						name: 'Jesse Duffield',
						image: '/presenters/jesse.png',
						companyImage: '/companies/lazygit.png'
					}
				]
			},
			{
				name: 'Forem - The New Community Web',
				timeISO: '2021-09-29T16:00:00.000Z',
				durationInMs: DurationMinute * 15,
				presenters: [
					{
						name: 'Nick Taylor',
						image: '/presenters/nick.png',
						companyImage: '/companies/forem.png'
					}
				]
			},
			{
				name: 'Infrastructure automation with HashiCorp',
				timeISO: '2021-09-29T16:15:00.000Z',
				durationInMs: DurationMinute * 15,
				presenters: [
					{
						name: 'Melissa Gurney Greene',
						image: '/presenters/melissa.png',
						companyImage: '/companies/hashicorp.png'
					}
				]
			},
			{
				name: 'Getting started with Symfony',
				timeISO: '2021-09-29T16:30:00.000Z',
				durationInMs: DurationMinute * 15,
				presenters: [
					{
						name: 'Nicolas Grekas',
						image: '/presenters/nicolas.png',
						companyImage: '/companies/symfony.png'
					}
				]
			}
		]
	},

	{
		isOpened: false,
		timeISO: '2021-10-01T03:00:00.000Z',
		durationInMs: DurationMinute * 60,
		name: 'Hacktoberfest Countdown Party! 🥳',
		link: 'https://www.linkedin.com/events/hacktoberfestcountdownparty6849034378459287554/',
		presenter: 'Let the Hacktoberfest begin.',
		isFinished: false,
		sessions: []
	},

	{
		isOpened: false,
		timeISO: '2021-10-06T16:00:00.000Z',
		durationInMs: DurationMinute * 120,
		name: 'DevOps Day',
		presenter: 'Appwrite, Grafana, GitLab, DigitalOcean',
		link: 'https://www.youtube.com/watch?v=T8Pu20HIAiY',
		isFinished: true,
		sessions: [
			{
				name: 'Intro to Docker Compose and Appwrite',
				timeISO: '2021-10-06T16:00:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Brandon Leckemby',
						image: '/presenters/brandon.png',
						companyImage: '/companies/appwrite.png'
					}
				]
			},
			{
				name: 'Observability with Prometheus and Beyond',
				timeISO: '2021-10-06T16:30:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Richard Hartman',
						image: '/presenters/richard.png',
						companyImage: '/companies/grafana.png'
					}
				]
			},
			{
				name: 'Intro to GitLab: The DevOps Platform',
				timeISO: '2021-10-06T17:00:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'PJ Metz',
						image: '/presenters/pj_metz.png',
						companyImage: '/companies/gitlab.png'
					}
				]
			},
			{
				name: 'Improving a Distributed System Post-Incident',
				timeISO: '2021-10-06T17:30:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Julius Zerwick',
						image: '/presenters/julius.png',
						companyImage: '/companies/digitalocean.png'
					}
				]
			}
		]
	},

	{
		isOpened: false,
		timeISO: '2021-10-13T16:00:00.000Z',
		durationInMs: DurationMinute * 90,
		name: 'Flutter Day',
		presenter: 'Appwrite, Stream, Telia, Very Good Ventures',
		isFinished: true,
		link: 'https://www.youtube.com/watch?v=zJ7TqYn6hKs',
		sessions: [
			{
				name: 'Connecting your Flutter app to Appwrite',
				timeISO: '2021-10-13T16:00:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Damodar Lohani',
						image: '/presenters/damodar.png',
						companyImage: '/companies/appwrite.png'
					}
				]
			},

			{
				name: 'Structuring a Flutter desktop application with macos_ui',
				timeISO: '2021-10-13T16:30:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Reuben Turner',
						image: '/presenters/reuben.webp',
						companyImage: '/companies/getstream.png'
					}
				]
			},

			{
				name: 'Scalable Flutter app development',
				timeISO: '2021-10-13T17:00:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Majid Hajian',
						image: '/presenters/majid.webp',
						companyImage: '/companies/telia.png'
					}
				]
			},

			{
				name: 'Generating a Scalable Flutter App in Seconds with Very Good CLI',
				timeISO: '2021-10-13T17:30:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Erick Zanardo',
						image: '/presenters/erick.webp',
						companyImage: '/companies/very_good_ventures.png'
					}
				]
			}
		]
	},
	{
		isOpened: true,
		timeISO: '2021-10-20T16:00:00.000Z',
		durationInMs: DurationMinute * 90,
		name: 'Web Day',
		presenter: 'Appwrite, SingleStore, Beyond',
		link: 'https://www.linkedin.com/events/hacktoberfest-webday6851168021701025792/',
		sessions: [
			{
				name: 'Connecting your Web App to Appwrite',
				timeISO: '2021-10-20T16:00:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Torsten Dittmann',
						image: '/presenters/torsten.png',
						companyImage: '/companies/appwrite.png'
					}
				]
			},

			{
				name: 'Getting Started with SingleStore - The Best Kept Secret in Data',
				timeISO: '2021-10-20T16:30:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Joe Karlsson',
						image: '/presenters/joe.png',
						companyImage: '/companies/singlestore.png'
					}
				]
			},

			{
				name: 'How to start with TypeScript as a JavaScript developer',
				timeISO: '2021-10-20T17:00:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Nacho Iacovino',
						image: '/presenters/nacho.png',
						companyImage: '/companies/beyond.png'
					}
				]
			}
		]
	}
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
		image: '/pictures/torsten.webp',
		githubProfile: 'https://github.com/TorstenDittmann'
	},
	{
		image: '/pictures/damodar.webp',
		githubProfile: 'https://github.com/lohanidamodar'
	},
	{
		image: '/pictures/kodumbeats.webp',
		githubProfile: 'https://github.com/kodumbeats'
	},
	{
		image: '/pictures/jake.webp',
		githubProfile: 'https://github.com/abnegate'
	},
	{
		image: '/pictures/ionic.webp',
		githubProfile: 'https://github.com/PineappleIOnic'
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
		image: '/pictures/empty.webp',
		githubProfile: 'https://appwrite.io/discord',
		overlay: '+4100'
	}
]);

export const loadStore = (issuesJson) => {
	totalIssuesAmount.set(issuesJson.total_count);
	githubIssues.set(issuesJson.items);
};
