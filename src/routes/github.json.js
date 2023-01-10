import { githubQuery } from '../stores';

export const get = async (request) => {
	const queryString = [
		`q=${githubQuery}`,
		'type=issues',
		'per_page=10',
		'sort=updated',
		'order=asc'
	].join('&');
	const issuesQuery = await fetch(`https://api.github.com/search/issues?${queryString}`);

	const issuesJson = await issuesQuery.json();

	issuesJson.items = issuesJson.items
		.filter((issue, index) => {
			const firstIndex = issuesJson.items.findIndex((i) => i.title === issue.title);
			return firstIndex === index;
		})
		.filter((_issue, index) => {
			return index < 5;
		})
		.map((issue) => {
			return {
				githubUrl: issue.html_url,
				title: issue.title,
				tags: issue.labels.map((label) => {
					return {
						label: label.name,
						backgroundColor: label.color,
						style: ['22F50E', 'a0ccf7', 'a2eeef', '03CA45'].includes(label.color)
							? 'text-black'
							: 'text-white'
					};
				})
			};
		});

	// Round to 20, 30, 50, 1520, 1970, ...
	issuesJson.total_count = Math.floor(issuesJson.total_count / 10) * 10;

	return {
		body: {
			total_count: issuesJson.total_count,
			items: issuesJson.items
		}
	};
};
