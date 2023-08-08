<script>
	import Button from '../../comps/Button.svelte';
	import { teamMembers } from '../../stores';
</script>

<section class="pt-[8.75rem] pb-[100px]">
	<div class="container mx-auto px-6">
		<div class="text-center max-w-4xl mx-auto">
			<!-- <p class="text-black uppercase text-[14px] title">events</p> -->

			<h3 class="mb-8">Stuck? We're here to help you</h3>
			<!-- <p class="text-black">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus laborum quibusdam, ea facilis laudantium! Quibusdam, dolorum sint? Velit optio ea quae tempore itaque totam ipsum aperiam provident ducimus explicabo!
			</p> -->
		</div>

		<div class="flex flex-col items-center space-y-20">
			<div class="flex items-center justify-center space-x-[-27px]">
				{#each $teamMembers as teamMember, teamMemberIndex}
					<a
						rel="noopener"
						aria-label="Github Profile"
						target="_blank"
						class="{teamMemberIndex > 4 && teamMemberIndex !== $teamMembers.length - 1
							? 'hidden sm:block'
							: 'block'} group relative"
						href={teamMember.githubProfile}
					>
						<img
							class="group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 transform group-hover:filter group-hover:brightness-110 rounded-full w-[71px] border border-neutral-150"
							src={teamMember.image}
							alt="Github profile"
						/>

						{#if teamMember.overlay}
							<div
								class="flex flex-col space-y-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 transform absolute pointer-events-none font-semibold inset-4 text-neutral-5 items-center justify-center leading-tight"
							>
								<span>{teamMember.overlay}</span>
								<div
									class="group-hover:max-h-[50px] transition-all overflow-hidden duration-500 max-h-[0px] text-neutral-30 uppercase text-[0.6rem]"
								>
									discord
								</div>
							</div>
						{/if}
					</a>
				{/each}
			</div>

			<a
				target="_blank"
				rel="noopener"
				href="https://appwrite.io/discord"
				aria-label="Join us on Discord"
				><Button class="w-64" type="primary" icon="none" text="Join us on Discord" /></a
			>
		</div>
	</div>
</section>

<style>
</style>
