<script>
	import Button from './Button.svelte';

	export let showBadge = false;
</script>

<a target="_blank" href="https://github.com/appwrite/appwrite/issues">
	<Button type="primary" icon="github" text="View all Hacktoberfest issues">
		{#if showBadge}
			<div
				class="rounded-full transform translate-x-1/2 -translate-y-1/2 absolute top-0 right-0 px-2 text-sm py-1 bg-[#F02E65] text-white"
			>
				+200
			</div>
		{/if}
	</Button>
</a>
