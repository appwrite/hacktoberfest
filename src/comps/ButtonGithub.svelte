<script>
	import Button from './Button.svelte';
	import { totalIssuesAmount } from '../stores';

	export let showBadge = false;
</script>

<a
	aria-label="View all Hacktoberfest issues"
	target="_blank"
	rel="noopener"
	href="https://github.com/search?q=org%3Aappwrite+org%3Autopia-php+is%3Aissue+label%3Ahacktoberfest+created%3A%3E2020-01-01&type=issues"
>
	<Button type="primary" icon="github" text="View all Hacktoberfest issues">
		{#if showBadge}
			{#if $totalIssuesAmount !== null}
				<div
					class="rounded-full transform translate-x-1/2 -translate-y-1/2 absolute top-0 right-0 px-2 text-sm py-1 bg-[#F02E65] text-white"
				>
					+{$totalIssuesAmount}
				</div>
			{/if}
		{/if}
	</Button>
</a>
