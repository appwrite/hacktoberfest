<script>
	import ButtonGithub from '../../comps/ButtonGithub.svelte';

	import { githubIssues } from '../../stores';
</script>

<section class="bg-white py-[100px]" id="section-issues">
	<div class="relative container mx-auto bg-gray-50 py-[80px] rounded-3xl px-6">
		<div class="text-center max-w-4xl mx-auto">
			<p class="text-black uppercase text-[14px] title tracking-[2px]">Hacktoberfest issues</p>
			<h1 class="title text-[32px] lg:text-[48px] font-semibold mt-[25px] mb-[38px]">
				Join the party
			</h1>

			<div class="flex justify-center mb-[32px]">
				<img class="h-[120px]" src="/icons/confetti.webp" width="232" height="120" alt="Confetti" />
			</div>
			<!-- <p class="text-black">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus laborum quibusdam, ea facilis laudantium! Quibusdam, dolorum sint? Velit optio ea quae tempore itaque totam ipsum aperiam provident ducimus explicabo!
			</p> -->
		</div>

		{#if $githubIssues !== null}
			<div class="max-w-4xl mx-auto mt-12">
				<div class="group relative flex flex-col space-y-6">
					{#each $githubIssues as githubIssue}
						<a
							rel="noopener"
							class="hover:scale-[102%] transform sacle-100 transition duration-500"
							aria-label="Appwrite Issue"
							href={githubIssue.githubUrl}
							target="_blank"
						>
							<div class="custom-shadow rounded-xl bg-white p-[32px]">
								<h2 class="title font-semibold text-[16px]">{githubIssue.title}</h2>

								<!-- <p class="text-[#808080] py-[18px]">

								</p> -->

								<div class="mt-4">
									{#each githubIssue.tags as tag}
										<div
											style="background-color: #{tag.backgroundColor}"
											class={tag.style +
												' mb-[8px] mr-[8px] text-[12px] inline-flex rounded-full py-[4px] px-[12px]'}
										>
											{tag.label}
										</div>
									{/each}
								</div>
							</div>
						</a>
					{/each}

					<div
						class="rounded-xl group-hover:opacity-0 opacity-100 scale-100 group-hover:scale-110 transform transition duration-500 z-20 absolute bottom-0 left-0 w-full h-[130px] pointer-events-none bg-gradient-to-b from-[rgba(249,250,251,0)] via-[rgba(249,250,251,0.8)] to-[rgba(249,250,251,1)]"
					/>
				</div>
			</div>
		{:else}
			<p class="text-center text-xl text-gray-400 mb-12">Loading ...</p>
		{/if}

		<div class="mt-[24px] flex items-center justify-center">
			<ButtonGithub />
		</div>
	</div>
</section>

<style>
	.custom-shadow {
		box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.05);
	}
</style>
