<script>
	import Button from '../../comps/Button.svelte';
</script>

<section class="bg-white pt-[80px]" id="section-about">
	<div class="container mx-auto px-6">
		<div class="text-center">
			<div class="max-w-4xl mx-auto">
				<p class="text-black uppercase text-[14px] title tracking-[2px]">about the event</p>
				<h1 class="title text-[32px] lg:text-[48px] font-semibold mt-[25px] mb-[32px]">
					About Hacktoberfest
				</h1>

				<div class="flex justify-center mb-[32px]">
					<img class="h-[140px]" src="/icons/bottles.svg" width="266" height="140" alt="Bottles" />
				</div>

				<p class="text-[16px] text-[#454545] leading-relaxed">
					Hacktoberfest is a month-long celebration of open source software run by DigitalOcean.
					Hacktoberfest is open to everyone, from first-time contributors to seasoned open source
					developers. Appwrite is one of the projects that you can contribute to.
				</p>
			</div>

			<div
				class="grid grid-cols-12 rounded-[1.5rem] mt-[5rem] mb-[1rem] lg:mt-[7.375rem] lg:mb-[5rem] p-[2.75rem] lg:p-[3.375rem] linear-bg"
			>
				<div class="w-full h-full flex items-center justify-center col-span-12 lg:col-span-3">
					<img src="/hacktoberfest.svg" class="max-w-sm lg:max-w-none w-full" alt="" />
				</div>
				<div
					class="lg:pl-20 col-span-12 lg:col-span-9 flex flex-col items-center justify-start lg:items-start"
				>
					<h1
						class="text-center lg:text-left title my-10 lg:my-8 font-semibold text-white text-[1.8rem] lg:text-[2.1rem]"
					>
						Our journey with Hacktoberfest
					</h1>
					<p class=" hidden lg:block text-justify pb-[3rem] text-[1.1rem] text-white">
						Hacktoberfest is an initiative that very deeply matters to us. We launched the first
						iteration of Appwrite as a mere open-source project back in September 2019.
						Hacktoberfest 2019 was truly a game-changer for us, as we saw over 200 contributions
						from some lovely members of the open-source fraternity that October.
					</p>

					<div class="w-full flex justify-center lg:justify-start">
						<a href="https://appwrite.io/hacktoberfest" target="_blank">
							<Button text="Read our blog post" type="red" />
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-12 gap-x-0 gap-y-12 lg:gap-12">
			<div class="col-span-12 lg:col-span-4 pt-20 flex items-center justify-center">
				<div class="lg:max-w-md flex flex-col items-center lg:items-start text-center lg:text-left">
					<h2 class="title text-[24px] lg:text-[32px] font-semibold">About Appwrite</h2>
					<p class="py-8 text-[16px] text-[#454545] leading-relaxed">
						Appwrite is an open source, secure end-to-end backend server for Web, Mobile, and
						Flutter developers that is packaged as a set of Docker containers for easy deployment.
					</p>

					<a rel="noopener" href="https://appwrite.io/" aria-label="More about Appwrite">
						<Button type="secondary" icon="none" text="More about Appwrite" /></a
					>
				</div>
			</div>

			<img
				class="w-full lg:mt-16 col-span-12 lg:col-span-8 custom-shadow rounded-t-lg"
				src="/console.webp"
				alt="Appwrite console"
				width="300"
				height="300"
			/>
		</div>
	</div>
</section>

<style>
	.custom-shadow {
		box-shadow: -20px -9px 20px 0px rgb(0 0 0 / 5%);
	}

	.linear-bg {
		background: linear-gradient(180deg, #f02e65 0%, #d72456 100%);
	}
</style>
