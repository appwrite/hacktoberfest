<script>
	import Button from '../../comps/Button.svelte';
	import ButtonGithub from '../../comps/ButtonGithub.svelte';
	import { githubLink } from '../../stores';
</script>

<section class="pt-[80px]" id="section-about">
	<div class="container mx-auto px-6">
		<div class="text-center">
			<div class="max-w-4xl mx-auto">
				<p class="h2-eyebrow tracking-[2px]">about the event</p>
				<h2 class="mt-[25px] mb-[32px]">About Hacktoberfest</h2>

				<p class="leading-relaxed">
					Hacktoberfest is a month-long celebration of open source software run by DigitalOcean.
					Hacktoberfest is open to everyone, from first-time contributors to seasoned open source
					developers. Appwrite is one of the projects that you can contribute to.
				</p>
			</div>

			<div
				class="our-journey grid grid-cols-12 rounded-[1.5rem] mt-[5rem] mb-[1rem] lg:mt-[7.375rem] lg:mb-[5rem] p-[2.75rem] lg:p-[3.375rem]"
			>
				<div
					class="img-container w-full h-full flex items-center justify-center col-span-12 lg:col-span-4 relative"
				>
					<img src="/hacktoberfest.svg" class="max-w-sm lg:max-w-none w-full relative" alt="" />
					<!-- <div class="absolute">
						<img src="/hacktoberfest.svg" class="max-w-sm lg:max-w-none w-full" alt="" />
						<div class="glow" />
					</div> -->
				</div>
				<div
					class="lg:pl-20 col-span-12 lg:col-span-8 flex flex-col items-center justify-start lg:items-start"
				>
					<h3 class="text-center lg:text-left my-10 lg:my-8">Our journey with Hacktoberfest</h3>
					<p class="hidden lg:block text-justify pb-[3rem]">
						Hacktoberfest is an initiative that matters very deeply to us. We launched the first
						iteration of Appwrite as a mere open-source project in September 2019. Hacktoberfest
						2019 was truly a game-changer for us, as we saw over 200 contributions from some lovely
						members of the open-source community that October.
					</p>

					<div class="w-full flex justify-center lg:justify-start">
						<a href="https://appwrite.io/hacktoberfest" target="_blank">
							<Button text="Read our blog post" type="primary" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="about-background mt-96 lg:mt-60" />
		<div class="container lg:mt-44 mx-auto px-6 relative z-10">
			<div class="grid grid-cols-12 gap-x-0 gap-y-12 lg:gap-12">
				<div class="col-span-12 lg:col-span-4 flex items-center justify-center">
					<div
						class="lg:max-w-md flex flex-col items-center lg:items-start text-center lg:text-left"
					>
						<h2 class="">About Appwrite</h2>
						<p class="pt-3.5 pb-8 leading-relaxed">
							Appwrite is an open source, secure end-to-end backend server for Web, Mobile, and
							Flutter developers that is packaged as a set of Docker containers for easy deployment.
						</p>

						<a
							rel="noopener"
							target="_blank"
							href="https://appwrite.io/"
							aria-label="More about Appwrite"
						>
							<Button type="primary" icon="none" text="More about Appwrite" /></a
						>
					</div>
				</div>

				<img
					class="console w-full col-span-12 lg:col-span-8"
					src="/console.png"
					alt="Appwrite console"
				/>
			</div>
			<div class="contribute mt-20 grid grid-cols-12 gap-x-0 gap-y-12 lg:gap-x-[40px]">
				<div class="col-span-12 lg:col-span-4">
					<div class="lg:max-w-sm flex flex-col text-left items-start">
						<h3 id="how-can-you-contribute">How can you contribute?</h3>
						<p class="py-8 leading-relaxed">
							There are many different ways you can contribute to Appwrite. All accepted
							contributions qualify for digital Appwrite Swag!
						</p>

						<!-- <ButtonGithub showBadge={false} /> -->
					</div>
				</div>
				<div
					class="col-span-12 lg:col-span-8 grid grid-cols-6 lg:grid-cols-12 gap-x-0 gap-y-[48px] lg:gap-[40px] lg:gap-y-[80px]"
				>
					<div class="col-span-6">
						<img src="/icons/puzzle.svg" alt="Puzzle Icon" />

						<div class="max-w-sm">
							<h4 class="mt-[40px] mb-[16px]">Contributions to open issues</h4>

							<p class="mb-[1.875rem] leading-relaxed">
								We have a curated list of Hacktoberfest issues that are ready for you to pick up.
							</p>

							<a
								rel="noopener"
								target="_blank"
								href={githubLink}
								class="flex items-center space-x-[0.44rem] leading-relaxed text-neutral-5 font-semibold"
							>
								<span>View issues</span>

								<svg
									width="14"
									height="8"
									viewBox="0 0 14 8"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
								>
									<path
										d="M13.3536 3.64645C13.5488 3.84171 13.5488 4.15829 13.3536 4.35355L10.1716 7.53553C9.97631 7.7308 9.65973 7.7308 9.46447 7.53553C9.2692 7.34027 9.2692 7.02369 9.46447 6.82843L12.2929 4L9.46447 1.17157C9.2692 0.976311 9.2692 0.659728 9.46447 0.464466C9.65973 0.269204 9.97631 0.269204 10.1716 0.464466L13.3536 3.64645ZM13 4.5H0V3.5H13V4.5Z"
									/>
								</svg>
							</a>
						</div>
					</div>

					<div class="col-span-6">
						<img src="/icons/code.svg" alt="Code Icon" />

						<div class="max-w-sm">
							<h4 class="mt-[40px] mb-[16px]">Build a demo app</h4>

							<p class="mb-[1.875rem] leading-relaxed">
								Build a demo app with your favourite technologies using an Appwrite Backend.
							</p>

							<a
								rel="noopener"
								target="_blank"
								href="https://github.com/appwrite/appwrite/issues?q=is%3Aopen+label%3Ahacktoberfest+label%3Ademo"
								class="flex items-center space-x-[0.44rem] leading-relaxed text-neutral-5 font-semibold"
							>
								<span>View issues</span>

								<svg
									width="14"
									height="8"
									viewBox="0 0 14 8"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.3536 3.64645C13.5488 3.84171 13.5488 4.15829 13.3536 4.35355L10.1716 7.53553C9.97631 7.7308 9.65973 7.7308 9.46447 7.53553C9.2692 7.34027 9.2692 7.02369 9.46447 6.82843L12.2929 4L9.46447 1.17157C9.2692 0.976311 9.2692 0.659728 9.46447 0.464466C9.65973 0.269204 9.97631 0.269204 10.1716 0.464466L13.3536 3.64645ZM13 4.5H0V3.5H13V4.5Z"
									/>
								</svg>
							</a>
						</div>
					</div>

					<!-- <div class="col-span-6">
						<img src="/icons/pencil.svg" alt="Pencil Icon" />

						<div class="max-w-sm">
							<h4 class="mt-[40px] mb-[16px]">Write a blog post</h4>

							<p class="mb-[1.875rem] leading-relaxed">
								Used Appwrite in a recent project? Built something cool with Appwrite? Tell the
								community about it in an awesome blog post.
							</p>

							<a
								rel="noopener"
								target="_blank"
								href="https://github.com/appwrite/appwrite/issues?q=is%3Aopen+label%3Ahacktoberfest+label%3Ablog								"
								class="flex items-center space-x-[0.44rem] leading-relaxed text-neutral-5 font-semibold"
							>
								<span>View issues</span>
								<svg
									width="14"
									height="8"
									viewBox="0 0 14 8"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.3536 3.64645C13.5488 3.84171 13.5488 4.15829 13.3536 4.35355L10.1716 7.53553C9.97631 7.7308 9.65973 7.7308 9.46447 7.53553C9.2692 7.34027 9.2692 7.02369 9.46447 6.82843L12.2929 4L9.46447 1.17157C9.2692 0.976311 9.2692 0.659728 9.46447 0.464466C9.65973 0.269204 9.97631 0.269204 10.1716 0.464466L13.3536 3.64645ZM13 4.5H0V3.5H13V4.5Z"
									/>
								</svg>
							</a>
						</div>
					</div>

					<div class="col-span-6">
						<img src="/icons/academic_cap.svg" alt="Academic Cap Icon" />

						<div class="max-w-sm">
							<h4 class="mt-[40px] mb-[16px]">Make a tutorial</h4>

							<p class="mb-[1.875rem] leading-relaxed">
								From video tutorials to written tutorials, help new community members get started
								with Appwrite!
							</p>

							<a
								rel="noopener"
								target="_blank"
								href="https://github.com/appwrite/appwrite/issues?q=is%3Aopen+label%3Ahacktoberfest+label%3Atutorial"
								class="flex items-center space-x-[0.44rem] leading-relaxed text-neutral-5 font-semibold"
							>
								<span>View issues</span>

								<svg
									width="14"
									height="8"
									viewBox="0 0 14 8"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M13.3536 3.64645C13.5488 3.84171 13.5488 4.15829 13.3536 4.35355L10.1716 7.53553C9.97631 7.7308 9.65973 7.7308 9.46447 7.53553C9.2692 7.34027 9.2692 7.02369 9.46447 6.82843L12.2929 4L9.46447 1.17157C9.2692 0.976311 9.2692 0.659728 9.46447 0.464466C9.65973 0.269204 9.97631 0.269204 10.1716 0.464466L13.3536 3.64645ZM13 4.5H0V3.5H13V4.5Z"
									/>
								</svg>
							</a>
						</div>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.our-journey {
		background: url('/texture.png');
	}

	.our-journey .img-container:before {
		content: '';
		background: linear-gradient(90deg, #ffe27d 0%, #64e3ff 50.52%, #9192ff 100%);
		width: inherit;
		height: inherit;
		position: absolute;
		opacity: 0.2;
		filter: blur(150px);
	}

	.about-background {
		width: 100%;
		height: 988px;
		position: absolute;
		left: 0;
		clip-path: polygon(0% 20%, 100% 0%, 100% 100%, 0% 100%);
		background: linear-gradient(180deg, #282a3b 12.6%, #14141f 96.45%);
	}

	.console {
		filter: drop-shadow(28px 49px 45px rgba(0, 0, 0, 0.25));
		-webkit-filter: drop-shadow(28px 49px 45px rgba(0, 0, 0, 0.25));
	}

	.contribute img {
		box-shadow: 15px 15px 24px 0px rgba(0, 0, 0, 0.04);
	}
</style>
