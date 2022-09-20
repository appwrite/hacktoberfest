<script>
	import Button from './Button.svelte';
	import { totalIssuesAmount, githubLink } from '../stores';

	export let showBadge = false;
	export let showIcon = false;
</script>

<a aria-label="View all Hacktoberfest issues" target="_blank" rel="noopener" href={githubLink}>
	<Button type="primary" icon={showIcon ? 'github' : 'none'} text="View all Hacktoberfest issues">
		{#if showBadge}
			{#if $totalIssuesAmount !== null}
				<div
					class="rounded-full transform translate-x-1/2 -translate-y-1/2 absolute top-0 right-0 px-2 text-sm py-1 bg-neutral-170 text-white"
				>
					+{$totalIssuesAmount}
				</div>
			{/if}
		{/if}
	</Button>
</a>
