<script context="module">
	import { loadStore } from '../stores';

	export async function load({ fetch }) {
		// console.log("Loading data ...");

		const issuesUrl = `/github.json`;
		const issuesQuery = await fetch(issuesUrl);

		return {
			props: {
				issuesQuery
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

	export let issuesQuery;
	loadStore(issuesQuery);
</script>

<Header isReal={true} />

<!-- HERO START -->
<section class="bg-gray-50 relative">
	<div class="flex flex-col min-h-screen">
		<Header isReal={false} />

		<div class="flex-1 flex items-center justify-center">
			<div class="lg:container h-full lg:mx-auto grid gap-x-0 gap-y-12 lg:gap-12 grid-cols-12">
				<div class="px-6 col-span-12 lg:col-span-6 flex items-center">
					<div class="mt-12 flex flex-col lg:items-start items-center text-center lg:text-left">
						<h1
							class="text-[32px] lg:text-[48px] font-semibold !leading-[48px] lg:!leading-[72px] lg:max-w-lg title tracking-wide"
						>
							Celebrate Open Source with Hacktoberfest
						</h1>
						<p class="mt-[27px] mb-[40px] lg:max-w-lg leading-snug text-[18px] text-black">
							Your open source journey begins with a pull request. We've curated a list of beginner
							friendly issues for you to check out.
						</p>

						<ButtonGithub />
					</div>
				</div>
				<div
					class="py-[64px] bg-[#20007F] z-20 col-span-12 lg:col-span-6 flex items-center justify-center"
				>
					<img
						class="w-[80%] max-w-[500px] lg:w-full lg:max-w-none"
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
<!-- HERO END -->

<About />
<Howto />
<Rewards />

<div class="container mx-auto mt-[100px] max-w-[80vw]">
	<hr class="border-t-2 border-gray-300" />
</div>

<Events />
<Issues />
<Team />
<Footer />
