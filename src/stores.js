import { writable } from 'svelte/store';

export const DurationMinute = 1000 * 60;

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
		presenter: 'Jina AI, n8n.io, Mattermost',
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
				name: 'Jina AI',
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
				name: 'n8n.io',
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
				name: 'Mattermost',
				timeISO: '2021-09-21T17:00:00.000Z',
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
		presenter: 'Major League Hacking, Github, Microsoft',
		sessions: [
			{
				name: 'Intro to Git and creating your first PR',
				timeISO: '2021-09-25T16:00:00.000Z',
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
						name: 'Juan Pablo Flores Cortés',
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
		presenter: 'Julia, Lazy Git, Forem, HashiCorp, Symfony',
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
				name: 'Julia Programming Language',
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
				name: 'Lazy Git',
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
				name: 'Forem',
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
				name: 'HashiCorp',
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
				name: 'Symfony',
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
		timeISO: '2021-10-06T16:00:00.000Z',
		durationInMs: DurationMinute * 90,
		name: 'DevOps Day',
		presenter: 'Appwrite, TBA',
		sessions: [
			{
				name: 'Intro to Docker compose and Appwrite',
				timeISO: '2021-10-06T16:00:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Brandon Leckemby',
						image: '/presenters/brandon.png',
						companyImage: '/companies/appwrite.png'
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
		presenter: 'Appwrite, TBA',
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
			}
		]
	},
	{
		isOpened: false,
		timeISO: '2021-10-20T16:00:00.000Z',
		durationInMs: DurationMinute * 90,
		name: 'Web Day',
		presenter: 'Appwrite, TBA',
		sessions: [
			{
				name: 'Connecting your Web app to Appwrite',
				timeISO: '2021-10-20T16:00:00.000Z',
				durationInMs: DurationMinute * 30,
				presenters: [
					{
						name: 'Torsten Dittmann',
						image: '/presenters/torsten.png',
						companyImage: '/companies/appwrite.png'
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
		image: '/pictures/empty.webp',
		githubProfile: 'https://appwrite.io/discord',
		overlay: '+2800'
	}
]);

export const loadStore = (issuesJson) => {
	totalIssuesAmount.set(issuesJson.total_count);
	githubIssues.set(issuesJson.items);
};
