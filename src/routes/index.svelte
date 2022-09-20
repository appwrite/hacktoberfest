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
	import { Rive } from 'rive-js';
	import ButtonGithub from '../comps/ButtonGithub.svelte';
	import About from './index/_about.svelte';
	import Events from './index/_events.svelte';
	// import Footer from './index/_footer.svelte';
	import Header from './index/_header.svelte';
	import Issues from './index/_issues.svelte';
	import Rewards from './index/_rewards.svelte';
	import Team from './index/_team.svelte';
	import { onMount } from 'svelte';

	export let issuesJson;
	let canvas, rive;

	onMount(() => {
		loadStore(issuesJson);
		rive = new Rive({
			src: '/factory.riv',
			// Or the path to a local Rive asset
			// src: './example.riv',
			canvas: canvas,
			autoplay: true
		});
	});
</script>

<Header />

<!-- HERO START -->
<section class="relative mt-[59px]">
	<div class="flex flex-col">
		<div class="flex-1 flex items-center justify-center">
			<div class="lg:container h-full lg:mx-auto grid gap-x-0 gap-y-12 lg:gap-12 grid-cols-12">
				<div class="px-6 col-span-12 lg:col-span-5 flex items-center">
					<div class="flex flex-col lg:items-start items-center text-center lg:text-left">
						<h1 class="lg:max-w-lg title">
							Celebrate<br />Open Source with Hacktoberfest
						</h1>
						<p class="mt-[27px] mb-[40px] lg:max-w-lg leading-snug">
							Your open source journey begins with a pull request. We've curated a list of beginner
							friendly issues for you to check out.
						</p>

						<ButtonGithub showIcon />
					</div>
				</div>
				<div
					class="img-container py-[64px] lg:py-0 z-20 col-span-12 lg:col-span-7 flex items-center justify-center relative w-full"
				>
					<canvas class="w-full h-auto" height={1054} width={1080} bind:this={canvas} />

					<!-- img src="/factory.svg" alt="Hacktoberfest 2022" /-->
				</div>
			</div>
		</div>
	</div>
</section>

<!-- HERO END -->

<About />
<Rewards />

<div class="container mx-auto mt-[100px] px-6">
	<hr class="border-t-[1px] border-neutral-150" />
</div>

<Events />
<Issues />
<Team />

<style>
	.img-container:before {
		content: '';
		background: linear-gradient(90deg, rgba(100, 227, 255, 0.5) 0%, rgba(145, 146, 255, 0.5) 100%);
		width: 100%;
		height: 100%;
		position: absolute;
		opacity: 0.35;
		filter: blur(150px);
	}
</style>
