<script context="module">
	import { githubIssues, loadStore } from '../stores';

	export async function load({ fetch }) {
		// console.log("Loading data ...");

		const issuesUrl = `/github.json`;
		const issuesQuery = await fetch(issuesUrl);
		const issuesJson = await issuesQuery.json();

		return {
			props: {
				issuesJson
			}
		};
	}
</script>

<script lang="ts">
	import ButtonGithub from '../comps/ButtonGithub.svelte';
	import About from './index/_about.svelte';
	import Events from './index/_events.svelte';
	import Footer from './index/_footer.svelte';
	import Header from './index/_header.svelte';
	import Howto from './index/_howto.svelte';
	import Issues from './index/_issues.svelte';
	import Rewards from './index/_rewards.svelte';
	import Team from './index/_team.svelte';
	import { onMount } from 'svelte';

	export let issuesJson;

	onMount(() => {
		loadStore(issuesJson);
	});
</script>

<Header />

<!-- HERO START -->
<section class="bg-white relative">
	<div class="flex flex-col min-h-[calc(100vh-100px)]">
		<div class="flex-1 flex items-center justify-center">
			<div class="lg:container h-full lg:mx-auto grid gap-x-0 gap-y-12 lg:gap-12 grid-cols-12">
				<div class="px-6 col-span-12 lg:col-span-6 flex items-center">
					<div class="mt-12 flex flex-col lg:items-start items-center text-center lg:text-left">
						<h1
							class="text-[32px] lg:text-[54px] font-semibold !leading-[54px] lg:!leading-[72px] lg:max-w-lg title tracking-wide"
						>
							Celebrate Open Source with Hacktoberfest
						</h1>
						<p class="mt-[27px] mb-[40px] lg:max-w-lg leading-snug text-[18px] text-[#454545]">
							Your open source journey begins with a pull request. We've curated a list of beginner
							friendly issues for you to check out.
						</p>

						<ButtonGithub />
					</div>
				</div>
				<div
					class="py-[64px] lg:py-0 bg-[#20007F] z-20 col-span-12 lg:col-span-6 flex items-center justify-center"
				>
					<img
						class="w-[80%] max-w-[500px] lg:max-w-[600px] lg:w-[90%]"
						width="300"
						height="300"
						src="/programmer.webp"
						alt="Programmer character"
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="hidden lg:block absolute right-0 top-0 h-full w-[50%] bg-[#20007F]" />
</section>
<div class="mx-auto container"><div class="bg-[#C4C4C4] w-full h-[1px]" /></div>

<!-- HERO END -->

<About />
<Howto />
<Rewards />

<div class="container mx-auto mt-[100px] max-w-[80vw]">
	<hr class="border-t-[1px] border-gray-300" />
</div>

<Events />
<Issues />
<Team />
<Footer />
