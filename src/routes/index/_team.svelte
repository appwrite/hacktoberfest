<script>
	import Button from '../../comps/Button.svelte';
	import { teamMembers } from '../../stores';
</script>

<section class="bg-white pb-[100px]">
	<div class="container mx-auto px-6">
		<div class="text-center max-w-4xl mx-auto">
			<!-- <p class="text-black uppercase text-[14px] title">events</p> -->

			<h1 class="title text-[32px] lg:text-[48px] font-semibold mb-[45px]">
				Stuck? We’re here to help you
			</h1>
			<!-- <p class="text-black">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus laborum quibusdam, ea facilis laudantium! Quibusdam, dolorum sint? Velit optio ea quae tempore itaque totam ipsum aperiam provident ducimus explicabo!
			</p> -->
		</div>

		<div class="flex flex-col items-center space-y-20 mt-20">
			<div class="flex items-center justify-center space-x-[-32px]">
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
							class="custom-shadow group-hover:scale-110 bg-white group-hover:rotate-6 transition-all duration-500 transform group-hover:filter group-hover:brightness-110 rounded-full w-[99px] border-2 border-white"
							src={teamMember.image}
							alt="Github profile"
							width="99"
							height="99"
						/>

						{#if teamMember.overlay}
							<div
								class="flex flex-col space-y-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 transform absolute pointer-events-none text-[18px] font-semibold inset-4 text-gray-900 items-center justify-center"
							>
								<span>{teamMember.overlay}</span>
								<div
									class="group-hover:max-h-[50px] transition-all overflow-hidden duration-500 max-h-[0px] text-gray-300 uppercase text-[12px]"
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
				><Button type="primary" icon="discord" text="Join us on Discord" /></a
			>
		</div>
	</div>
</section>

<style>
	.custom-shadow {
		box-shadow: 0px 20px 20px 0px #0000000d;
	}
</style>
