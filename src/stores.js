import { writable } from 'svelte/store';

export const DurationMinute = 1000 * 60;

export const totalIssuesAmount = writable(null);

export const githubIssues = writable(null);

export const events = writable([
	{
		isOpened: false,
		timeISO: '2021-09-03T12:54:01.813Z',
		durationInMs: DurationMinute * 60,

		name: 'Docker and Appwrite',
		presenter: 'Brandon Leckemby from Appwrite',
		imageUrl: '/pictures/eldad.webp',
		description:
			'Short description of the event, lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet.'
	},

	{
		isOpened: false,
		timeISO: '2021-09-03T12:54:01.813Z',
		durationInMs: DurationMinute * 60,

		name: 'Docker and Appwrite',
		presenter: 'Brandon Leckemby from Appwrite',
		imageUrl: '/pictures/eldad.webp',
		description:
			'Short description of the event, lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet.'
	},

	{
		isOpened: false,
		timeISO: '2021-09-03T12:54:01.813Z',
		durationInMs: DurationMinute * 60,

		name: 'Docker and Appwrite',
		presenter: 'Brandon Leckemby from Appwrite',
		imageUrl: '/pictures/eldad.webp',
		description:
			'Short description of the event, lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet.'
	},

	{
		isOpened: false,
		timeISO: '2021-09-03T12:54:01.813Z',
		durationInMs: DurationMinute * 60,

		name: 'Docker and Appwrite',
		presenter: 'Brandon Leckemby from Appwrite',
		imageUrl: '/pictures/eldad.webp',
		description:
			'Short description of the event, lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet.'
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
		overlay: '+3000'
	}
]);

export const fetchGithubIssues = async () => {
	const issuesQuery = await fetch(
		'https://api.github.com/search/issues?q=org%3Aappwrite+org%3Autopia-php+is%3Aissue+label%3Ahacktoberfest+created%3A%3E2020-01-01&type=issues'
	);

	const issuesJson = await issuesQuery.json();

	console.log('Fetching data', Date.now());

	return issuesJson;
};

export const loadStore = (issuesJson) => {
	// TODO: Get data
	// console.log(issuesJson);

	// Ifs makes sure client is not limited
	if (issuesJson.total_count) {
		// Round to 20, 30, 50, 1520, 1970, ...
		const roundedIssuesAmount = Math.floor(issuesJson.total_count / 10) * 10;

		totalIssuesAmount.set(roundedIssuesAmount);
	}

	if (issuesJson.items) {
		githubIssues.set(
			issuesJson.items
				.filter((_issue, index) => {
					return index < 5;
				})
				.map((issue) => {
					return {
						githubUrl: issue.html_url,
						title: issue.title,
						tags: issue.labels.map((label) => {
							return {
								label: label.description,
								backgroundColor: label.color,
								style:
									label.color === 'a0ccf7' || label.color === 'a2eeef' ? 'text-black' : 'text-white'
							};
						})
					};
				})
		);
	}
};
