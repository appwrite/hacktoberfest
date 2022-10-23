<script>
	import ButtonGithub from '../../comps/ButtonGithub.svelte';

	import { githubIssues } from '../../stores';
</script>

<section class="pt-[8.75rem] pb-40">
	<div class="relative container mx-auto bg-neutral-190 py-[80px] rounded-3xl px-6" id="section-issues">
		<div class="text-center max-w-4xl mx-auto">
			<p class="h2-eyebrow tracking-[2px]">Hacktoberfest issues</p>
			<h2 class="title text-[32px] lg:text-[48px] font-semibold mt-[25px] mb-[38px]">
				Join the party
			</h2>
		</div>

		{#if $githubIssues !== null}
			<div class="max-w-4xl mx-auto mt-16">
				<div class="group relative flex flex-col space-y-4">
					{#each $githubIssues as githubIssue}
						<a
							rel="noopener"
							class="hover:scale-[102%] transform sacle-100 transition duration-500 "
							aria-label="Appwrite Issue"
							href={githubIssue.githubUrl}
							target="_blank"
						>
							<div
								class="custom-shadow bg-neutral-170 rounded-xl border-neutral-150 p-[32px] pb-[24px]"
							>
								<h3 class="font-semibold text-base">{githubIssue.title}</h3>

								<!-- <p class="text-[#808080] py-[18px]">

								</p> -->

								<div class="mt-4">
									{#each githubIssue.tags as tag}
										<div
											style="background-color: #{tag.backgroundColor}"
											class={tag.style +
												' mb-[8px] mr-[8px] text-[12px] inline-flex rounded-full py-[4px] px-[12px] hidden'}
										>
											{tag.label}
										</div>
										<div
											style="border-color: #{tag.backgroundColor}; color: #{tag.backgroundColor}; background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), #{tag.backgroundColor}"
											class="font-semibold mb-[8px] mr-[8px] text-[12px] inline-flex rounded-full py-[4px] px-[12px] border"
										>
											{tag.label}
										</div>
									{/each}
								</div>
							</div>
						</a>
					{/each}

					<div
						class="rounded-xl group-hover:opacity-0 opacity-100 scale-100 group-hover:scale-110 transform transition duration-500 z-20 absolute bottom-0 left-0 w-full h-[130px] pointer-events-none bg-gradient-to-b from-transparent via-neutral-190/95 to-neutral-190"
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
