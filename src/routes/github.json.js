export const get = async (request) => {
	const issuesQuery = await fetch(
		'https://api.github.com/search/issues?q=org%3Aappwrite+org%3Autopia-php+is%3Aissue+label%3Ahacktoberfest+created%3A%3E2020-01-01&type=issues'
	);

	const issuesJson = await issuesQuery.json();

	issuesJson.items = issuesJson.items
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
