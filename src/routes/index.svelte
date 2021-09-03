<script>
	import Button from '../comps/Button.svelte';
	import ButtonGithub from '../comps/ButtonGithub.svelte';

	const teamMembers = [
		{
			image: 'https://avatars.githubusercontent.com/u/1297371?v=4',
			githubProfile: 'https://github.com/eldadfux'
		},
		{
			image: 'https://avatars.githubusercontent.com/u/20852629?v=4',
			githubProfile: 'https://github.com/christyjacob4'
		},
		{
			image: 'https://avatars.githubusercontent.com/u/1759475?v=4',
			githubProfile: 'https://github.com/TorstenDittmann'
		},
		{
			image: 'https://avatars.githubusercontent.com/u/6360216?v=4',
			githubProfile: 'https://github.com/lohanidamodar'
		},
		{
			image: 'https://avatars.githubusercontent.com/u/9708641?v=4',
			githubProfile: 'https://github.com/kodumbeats'
		},
		{
			image: 'https://avatars.githubusercontent.com/u/5857008?v=4',
			githubProfile: 'https://github.com/abnegate'
		},
		{
			image: 'https://avatars.githubusercontent.com/u/26739219?v=4',
			githubProfile: 'https://github.com/PineappleIOnic'
		},

		{
			image: 'https://avatars.githubusercontent.com/u/14176838?v=4',
			githubProfile: 'https://github.com/sarakaandorp'
		},

		{
			image: 'https://avatars.githubusercontent.com/u/19310830?v=4',
			githubProfile: 'https://github.com/Meldiron'
		},

		{
			image: 'https://avatars.githubusercontent.com/u/31401437?v=4',
			githubProfile: 'https://github.com/adityaoberai'
		}
	];
</script>

<!-- HERO START -->
<section class="bg-gray-50">
	<div class="container mx-auto sm:px-6 lg:px-0 px-4">
		<div class="grid gap-12 grid-cols-12 min-h-screen pt-[100px]">
			<div class="col-span-6 flex items-center">
				<div>
					<h1 class="text-5xl leading-snug max-w-lg title tracking-wide">
						Celebrate Hacktoberfest with Appwrite
					</h1>
					<p class="my-8 text-gray-500">Join us and help your favorite open source projects</p>

					<ButtonGithub />
				</div>
			</div>
			<div class="z-20 col-span-6 flex items-center justify-center">
				<img
					class="w-[80%] transform transition-transform duration-[4000ms] ease-in-out translate-y-0 hover:translate-y-[-40px]"
					src="/programmer.svg"
					alt="Programmer character"
				/>
			</div>
		</div>
	</div>
</section>

<div class="absolute right-0 top-0 h-screen w-[50%] bg-[#20007F]" />
<!-- HERO END -->

<!-- FEATURE ABOUT START -->
<section class="bg-white py-32">
	<div class="container mx-auto sm:px-6 lg:px-0 px-4">
		<div class="text-center max-w-4xl mx-auto">
			<h6 class="text-gray-500 uppercase">about the event</h6>
			<h1 class="title text-5xl font-semibold my-8">About Hacktoberfest</h1>
			<p class="text-black">
				Hacktoberfest is a monthlong celebration of open source software run by DigitalOcean.
				Hacktoberfest is open to everyone, from first-time contributors to seasoned open source
				contributors. Appwrite is one of the repositories that you can contribute to.
			</p>
		</div>

		<div class="grid grid-cols-12 gap-12 mt-12">
			<div class="col-span-4 pt-32">
				<div class="max-w-md">
					<h3 class="title text-4xl font-semibold">About Appwrite</h3>
					<p class="py-8">
						Appwrite is an open source, secure end-to-end backend server for Web, Mobile, and
						Flutter developers that is packaged as a set of Docker containers for easy deployment.
					</p>

					<Button type="secondary" icon="none" text="More about Appwrite" />
				</div>
			</div>

			<img class="w-full col-span-8" src="/appwrite-console.svg" alt="Appwrite console" />
		</div>
	</div>
</section>
<!-- FEATURE ABOUT END -->

<!-- FEATUER HOW TO START -->
<section class="relative bg-gray-50 py-32 mt-[-320px]">
	<div class="container mx-auto sm:px-6 lg:px-0 px-4">
		<div class="grid grid-cols-12 gap-12">
			<div class="col-span-4">
				<div class="max-w-sm">
					<h3 class="title text-4xl font-semibold">How can you contribute?</h3>
					<p class="py-8">
						There are different ways you can contribute to Appwrite. All valuable contributions
						qualify you for receiving Appwrite swag.
					</p>

					<ButtonGithub showBadge={false} />
				</div>
			</div>
			<div class="col-span-8 grid grid-cols-12 gap-12 gap-y-20">
				<div class="col-span-6">
					<div class="w-[max-content] h-[max-content] rounded-xl bg-white shadow-xl p-6">
						<!-- PUZZLE ICON -->
						<svg
							width="29"
							height="29"
							viewBox="0 0 29 29"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.3787 1.87868C14.8161 2.44129 14.5 3.20435 14.5 4V5.5C14.5 5.89782 14.3419 6.27936 14.0606 6.56066C13.7793 6.84196 13.3978 7 13 7H8.49998C8.10216 7 7.72063 7.15804 7.43932 7.43934C7.15802 7.72064 6.99998 8.10217 6.99998 8.5V13C6.99998 13.3978 6.84195 13.7794 6.56064 14.0607C6.27934 14.342 5.89781 14.5 5.49998 14.5H3.99998C3.20433 14.5 2.44127 14.8161 1.87866 15.3787C1.31606 15.9413 0.999985 16.7043 0.999985 17.5C0.999985 18.2956 1.31606 19.0587 1.87866 19.6213C2.44127 20.1839 3.20433 20.5 3.99998 20.5H5.49998C5.89781 20.5 6.27934 20.658 6.56064 20.9393C6.84195 21.2206 6.99998 21.6022 6.99998 22V26.5C6.99998 26.8978 7.15802 27.2794 7.43932 27.5607C7.72063 27.842 8.10216 28 8.49998 28H13C13.3978 28 13.7793 27.842 14.0606 27.5607C14.3419 27.2794 14.5 26.8978 14.5 26.5V25C14.5 24.2043 14.8161 23.4413 15.3787 22.8787C15.9413 22.3161 16.7043 22 17.5 22C18.2956 22 19.0587 22.3161 19.6213 22.8787C20.1839 23.4413 20.5 24.2043 20.5 25V26.5C20.5 26.8978 20.658 27.2794 20.9393 27.5607C21.2206 27.842 21.6022 28 22 28H26.5C26.8978 28 27.2793 27.842 27.5606 27.5607C27.8419 27.2794 28 26.8978 28 26.5V22C28 21.6022 27.8419 21.2206 27.5606 20.9393C27.2793 20.658 26.8978 20.5 26.5 20.5H25C24.2043 20.5 23.4413 20.1839 22.8787 19.6213C22.3161 19.0587 22 18.2956 22 17.5C22 16.7043 22.3161 15.9413 22.8787 15.3787C23.4413 14.8161 24.2043 14.5 25 14.5H26.5C26.8978 14.5 27.2793 14.342 27.5606 14.0607C27.8419 13.7794 28 13.3978 28 13V8.5C28 8.10217 27.8419 7.72064 27.5606 7.43934C27.2793 7.15804 26.8978 7 26.5 7H22C21.6022 7 21.2206 6.84196 20.9393 6.56066C20.658 6.27936 20.5 5.89782 20.5 5.5V4C20.5 3.20435 20.1839 2.44129 19.6213 1.87868C19.0587 1.31607 18.2956 1 17.5 1C16.7043 1 15.9413 1.31607 15.3787 1.87868Z"
								stroke="#F02E65"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>

					<div class="max-w-sm">
						<h4 class="mt-6 mb-3 title text-2xl font-semibold">Contributions to open issues</h4>

						<p>We have a full list of Hacktoberfest issues that are ready for you to pick up.</p>
					</div>
				</div>

				<div class="col-span-6">
					<div class="w-[max-content] h-[max-content] rounded-xl bg-white shadow-xl p-6">
						<!-- CODE ICON -->
						<svg
							width="36"
							height="36"
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 30L21 6M27 12L33 18L27 24M9 24L3 18L9 12"
								stroke="#F02E65"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>

					<div class="max-w-sm">
						<h4 class="mt-6 mb-3 title text-2xl font-semibold">Build a demo app</h4>

						<p>Build a demo app using your favourite technologies in combination with Appwrite.</p>
					</div>
				</div>

				<div class="col-span-6">
					<div class="w-[max-content] h-[max-content] rounded-xl bg-white shadow-xl p-6">
						<!-- PENCIL ICON -->
						<svg
							width="36"
							height="36"
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M22.848 7.84813L28.152 13.1521M25.098 5.59813C25.8014 4.89477 26.7553 4.49963 27.75 4.49963C28.7447 4.49963 29.6986 4.89477 30.402 5.59813C31.1054 6.30148 31.5005 7.25544 31.5005 8.25013C31.5005 9.24482 31.1054 10.1988 30.402 10.9021L9.75 31.5541H4.5V26.1961L25.098 5.59813Z"
								stroke="#F02E65"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path d="M7 24.5L11.5 29" stroke="#F02E65" stroke-width="2" />
						</svg>
					</div>

					<div class="max-w-sm">
						<h4 class="mt-6 mb-3 title text-2xl font-semibold">Write a blog post</h4>

						<p>
							Write a blog post related to Appwrite. For example about how you’ve used Appwrite for
							you project, or a written tutorial.
						</p>
					</div>
				</div>

				<div class="col-span-6">
					<div class="w-[max-content] h-[max-content] rounded-xl bg-white shadow-xl p-6">
						<!-- ACADEMIC CAP ICON -->
						<svg
							width="36"
							height="36"
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M18 21L31.5 13.5L18 6L4.5 13.5L18 21Z" stroke="#F02E65" />
							<path
								d="M17.9998 21.0001L27.2398 15.8671C28.4556 18.9542 28.8007 22.3158 28.2373 25.5856C24.4327 25.9548 20.8457 27.5305 17.9998 30.0826C15.1544 27.5308 11.568 25.9551 7.76384 25.5856C7.20014 22.3158 7.54519 18.9541 8.76134 15.8671L17.9998 21.0001Z"
								stroke="#F02E65"
							/>
							<path
								d="M18 21L31.5 13.5L18 6L4.5 13.5L18 21ZM18 21L27.24 15.867C28.4558 18.9541 28.8008 22.3158 28.2375 25.5855C24.4328 25.9548 20.8458 27.5304 18 30.0825C15.1546 27.5307 11.5681 25.9551 7.764 25.5855C7.2003 22.3158 7.54535 18.954 8.7615 15.867L18 21ZM12 30V18.75L18 15.417"
								stroke="#F02E65"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>

					<div class="max-w-sm">
						<h4 class="mt-6 mb-3 title text-2xl font-semibold">Make a tutorial</h4>

						<p>
							From video tutorials to written tutorials, help new community members get started!
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- FEATUER HOW TO END -->

<!-- FEATURE WIN SWAG START -->
<section class="bg-white py-32">
	<div class="container mx-auto sm:px-6 lg:px-0 px-4">
		<div class="text-center max-w-4xl mx-auto">
			<h6 class="text-gray-500 uppercase">swag</h6>
			<h1 class="title text-5xl font-semibold my-8">Win our swag!</h1>
			<!-- <p class="text-black">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus laborum quibusdam, ea facilis laudantium! Quibusdam, dolorum sint? Velit optio ea quae tempore itaque totam ipsum aperiam provident ducimus explicabo!
			</p> -->
		</div>

		<div class="grid grid-cols-12 gap-12 mt-12">TODO: Implement</div>
	</div>
</section>
<!-- FEATURE WIN SWAG END -->

<!-- FEATURE EVENTS START -->
<section class="bg-white py-32 border-t-2 border-gray-300">
	<div class="container mx-auto sm:px-6 lg:px-0 px-4">
		<div class="text-center max-w-4xl mx-auto">
			<h6 class="text-gray-500 uppercase">events</h6>
			<h1 class="title text-5xl font-semibold my-8">Join our Hacktoberfest events</h1>
			<!-- <p class="text-black">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus laborum quibusdam, ea facilis laudantium! Quibusdam, dolorum sint? Velit optio ea quae tempore itaque totam ipsum aperiam provident ducimus explicabo!
			</p> -->
		</div>

		<div class="grid grid-cols-12 gap-12 mt-12">TODO: Implement</div>
	</div>
</section>
<!-- FEATURE EVENTS END -->

<!-- FEATURE ISSUES START -->
<section class="bg-white py-32">
	<div class="container mx-auto bg-gray-50 py-20 rounded-3xl sm:px-6 lg:px-0 px-4">
		<div class="text-center max-w-4xl mx-auto">
			<h6 class="text-gray-500 uppercase">Hacktoberfest issues</h6>
			<h1 class="title text-5xl font-semibold my-8">Join the party</h1>
			<!-- <p class="text-black">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus laborum quibusdam, ea facilis laudantium! Quibusdam, dolorum sint? Velit optio ea quae tempore itaque totam ipsum aperiam provident ducimus explicabo!
			</p> -->
		</div>

		<div class="grid grid-cols-12 gap-12 mt-12">TODO: Implement</div>
	</div>
</section>
<!-- FEATURE ISSUES END -->

<!-- FEATURE CONTACT START -->
<section class="bg-white pb-32">
	<div class="container mx-auto sm:px-6 lg:px-0 px-4">
		<div class="text-center max-w-4xl mx-auto">
			<!-- <h6 class="text-gray-500 uppercase">events</h6> -->

			<h1 class="title text-5xl font-semibold my-8">Stuck? We’re here to help you</h1>
			<!-- <p class="text-black">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus laborum quibusdam, ea facilis laudantium! Quibusdam, dolorum sint? Velit optio ea quae tempore itaque totam ipsum aperiam provident ducimus explicabo!
			</p> -->
		</div>

		<div class=" flex flex-col items-center space-y-20 mt-20">
			<div class="flex items-center justify-center -space-x-12">
				{#each teamMembers as teamMember, i}
					<a href={teamMember.githubProfile}>
						<img
							class="rounded-full w-36 border-4 border-white"
							src={teamMember.image}
							alt="Github profile photo"
						/>
					</a>
				{/each}
			</div>

			<Button type="primary" icon="discord" text="Join us on Discord" />
		</div>
	</div>
</section>
<!-- FEATURE CONTACT END -->

<!-- FOOTER START -->
<footer class="bg-gray-50">
	<div class="container mx-auto sm:px-6 lg:px-0 px-4 py-20">
		<div class="grid grid-cols-12 gap-12">
			<div class="col-span-2">
				<!-- APPWRITE LOGO ONE-COLOR -->
				<svg
					viewBox="0 0 956 170"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:bx="https://boxy-svg.com"
					><path
						d="M196.289 87c0 35.899-29.101 65-65 65-16.675 0-31.883-6.279-43.389-16.601 18.433-8.298 31.266-26.827 31.266-48.353 0-21.553-12.865-40.101-31.335-48.384C99.346 28.304 114.581 22 131.289 22c35.899 0 65 29.101 65 65z"
						fill="#40404c"
					/><path
						d="M105.30600000000001 35.116a65 65 0 10-78.307 103.769 65 65 0 1078.307-103.77zM98.077 44.694a53 53 0 01-63.85 84.612 53 53 0 0163.85-84.612z"
						bx:shape="ring 186.727 313.243 53 53 65 65 1@f84c4233"
						bx:origin="0.499777 0.499705"
						fill="#40404c"
					/><path
						d="M271.084 39.297c8.92 0 16.523 2.31 22.81 6.93 6.287 4.62 10.61 10.743 12.97 18.37v-24.18h11.13v88.02h-11.13v-24.18c-2.36 7.633-6.683 13.76-12.97 18.38-6.287 4.62-13.89 6.93-22.81 6.93-7.953 0-15.073-1.827-21.36-5.48-6.287-3.653-11.177-8.893-14.67-15.72-3.493-6.827-5.24-14.807-5.24-23.94 0-9.24 1.747-17.273 5.24-24.1 3.493-6.82 8.357-12.03 14.59-15.63 6.233-3.6 13.38-5.4 21.44-5.4zm2.9 9.99c-9.887 0-17.813 3.143-23.78 9.43-5.96 6.287-8.94 14.857-8.94 25.71 0 10.853 2.98 19.423 8.94 25.71 5.967 6.287 13.893 9.43 23.78 9.43 6.233 0 11.847-1.45 16.84-4.35 5-2.9 8.923-7.01 11.77-12.33 2.847-5.32 4.27-11.473 4.27-18.46s-1.423-13.137-4.27-18.45c-2.847-5.32-6.77-9.433-11.77-12.34-4.993-2.9-10.607-4.35-16.84-4.35zm115.577-9.99c8.06 0 15.18 1.8 21.36 5.4 6.18 3.6 11.017 8.81 14.51 15.63 3.493 6.827 5.24 14.86 5.24 24.1 0 9.133-1.747 17.113-5.24 23.94-3.493 6.827-8.357 12.067-14.59 15.72-6.233 3.653-13.327 5.48-21.28 5.48-9.027 0-16.657-2.31-22.89-6.93-6.233-4.62-10.53-10.747-12.89-18.38v65.77h-11.29V40.417h11.29v24.18c2.36-7.627 6.657-13.75 12.89-18.37 6.233-4.62 13.863-6.93 22.89-6.93zm-3.06 9.99c-6.233 0-11.85 1.45-16.85 4.35-4.993 2.907-8.887 7.02-11.68 12.34-2.793 5.313-4.19 11.463-4.19 18.45s1.397 13.14 4.19 18.46 6.687 9.43 11.68 12.33c5 2.9 10.617 4.35 16.85 4.35 9.993 0 17.947-3.143 23.86-9.43 5.907-6.287 8.86-14.857 8.86-25.71 0-10.853-2.953-19.423-8.86-25.71-5.913-6.287-13.867-9.43-23.86-9.43zm111.547-9.99c8.06 0 15.18 1.8 21.36 5.4 6.18 3.6 11.017 8.81 14.51 15.63 3.493 6.827 5.24 14.86 5.24 24.1 0 9.133-1.747 17.113-5.24 23.94-3.493 6.827-8.357 12.067-14.59 15.72-6.233 3.653-13.327 5.48-21.28 5.48-9.027 0-16.657-2.31-22.89-6.93-6.233-4.62-10.53-10.747-12.89-18.38v65.77h-11.29V40.417h11.29v24.18c2.36-7.627 6.657-13.75 12.89-18.37 6.233-4.62 13.863-6.93 22.89-6.93zm-3.06 9.99c-6.233 0-11.85 1.45-16.85 4.35-4.993 2.907-8.887 7.02-11.68 12.34-2.793 5.313-4.19 11.463-4.19 18.45s1.397 13.14 4.19 18.46 6.687 9.43 11.68 12.33c5 2.9 10.617 4.35 16.85 4.35 9.993 0 17.947-3.143 23.86-9.43 5.907-6.287 8.86-14.857 8.86-25.71 0-10.853-2.953-19.423-8.86-25.71-5.913-6.287-13.867-9.43-23.86-9.43zM664.085 39.137h21.28l-24.02 89.3h-25.15l-19.18-64.96-19.67 64.96h-25.14l-23.86-89.3h22.73l14.51 68.99 19.82-68.99h24.02l19.99 68.99 14.67-68.99zm55.295 17.08c3.326-5.693 7.73-10.18 13.21-13.46 5.486-3.273 11.613-4.91 18.38-4.91v24.34h-6.61c-16.654 0-24.98 7.737-24.98 23.21v43.04h-22.73v-89.3h22.73v17.08zm41.587-42.72c0-3.653 1.29-6.633 3.87-8.94 2.58-2.313 5.964-3.47 10.15-3.47 4.194 0 7.58 1.157 10.16 3.47 2.58 2.307 3.87 5.287 3.87 8.94 0 3.547-1.29 6.477-3.87 8.79-2.58 2.313-5.966 3.47-10.16 3.47-4.186 0-7.57-1.157-10.15-3.47s-3.87-5.243-3.87-8.79zm2.58 25.64h22.73v89.3h-22.73v-89.3zm82.213 69.79h8.86v19.51h-11.93c-9.994 0-17.65-2.417-22.97-7.25-5.32-4.84-7.98-12.9-7.98-24.18v-38.69h-12.41v-19.18h12.41v-22.09h22.73v22.09h19.99v19.18h-19.99v39.01c0 4.3.86 7.31 2.58 9.03 1.72 1.713 4.623 2.57 8.71 2.57zm109.126-28.53c0 2.26-.267 4.84-.8 7.74h-65.45c.32 7.953 2.47 13.81 6.45 17.57 3.973 3.76 8.916 5.64 14.83 5.64 5.266 0 9.643-1.29 13.13-3.87 3.493-2.573 5.723-6.063 6.69-10.47h24.02c-1.18 6.233-3.704 11.82-7.57 16.76-3.874 4.947-8.844 8.817-14.91 11.61-6.074 2.793-12.817 4.19-20.23 4.19-8.707 0-16.447-1.853-23.22-5.56-6.767-3.707-12.03-9-15.79-15.88-3.767-6.88-5.65-14.993-5.65-24.34 0-9.353 1.883-17.493 5.65-24.42 3.76-6.933 9.023-12.227 15.79-15.88 6.773-3.653 14.513-5.48 23.22-5.48 8.806 0 16.516 1.827 23.13 5.48 6.606 3.653 11.71 8.677 15.31 15.07 3.6 6.393 5.4 13.673 5.4 21.84zm-22.89-2.25c.326-7.313-1.58-12.85-5.72-16.61s-9.217-5.64-15.23-5.64c-6.127 0-11.287 1.88-15.48 5.64-4.194 3.76-6.504 9.297-6.93 16.61h43.36z"
						style="white-space:pre"
						fill="#40404c"
					/><path
						d="M67.894 64.511c-.078.192-1.072 4.095-2.142 8.725-1.111 4.63-2.871 11.938-3.864 16.262-1.915 7.92-3.063 13.124-3.063 13.813 0 .19 1.187.345 2.64.345h2.641l1.185-5.282c.69-2.869 2.221-9.451 3.445-14.616 1.225-5.166 2.716-11.441 3.291-13.967.573-2.526 1.147-4.82 1.263-5.088.115-.344-.537-.458-2.526-.458-1.493 0-2.795.114-2.87.266zM47.345 81.079l-3.52 3.827 1.034 1.224c.572.688 2.143 2.411 3.482 3.827l2.449 2.601h6.964l-3.29-3.559c-1.8-1.911-3.292-3.749-3.292-3.978 0-.268 1.378-1.989 3.062-3.826 1.683-1.874 3.061-3.483 3.061-3.674 0-.153-1.454-.268-3.214-.268h-3.176l-3.56 3.826zm26.785-3.597c0 .116.651.842 1.453 1.646 2.987 2.984 5.091 5.511 4.976 6.007-.076.269-1.531 2.066-3.29 3.941l-3.175 3.482h3.557l3.559-.038 3.251-3.558c1.8-1.988 3.253-3.751 3.253-3.98 0-.19-1.53-1.989-3.444-4.016l-3.442-3.713h-3.331c-1.875 0-3.367.115-3.367.229z"
						fill="#40404c"
					/></svg
				>
			</div>
			<div class="col-span-6 text-center">TODO: Footer2?</div>

			<div class="col-span-4 flex items-center justify-end space-x-3">
				<div class="rounded-xl bg-gray-800 p-2 text-gray-50">
					<!-- TWITTER LOGO -->
					<svg class="w-4 h-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
						><title>Twitter</title><path
							fill="currentColor"
							d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
						/></svg
					>
				</div>

				<div class="rounded-xl bg-gray-800 p-2 text-gray-50">
					<!-- FACEBOOK LOGO -->
					<svg class="w-4 h-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
						><title>Facebook</title><path
							fill="currentColor"
							d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
						/></svg
					>
				</div>

				<div class="rounded-xl bg-gray-800 p-2 text-gray-50">
					<!-- LINKEDIN LOGO -->
					<svg class="w-4 h-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
						><title>LinkedIn</title><path
							fill="currentColor"
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						/></svg
					>
				</div>

				<div class="rounded-xl bg-gray-800 p-2 text-gray-50">
					<!-- DISCORD LOGO -->
					<svg class="w-4 h-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
						><title>Discord</title><path
							fill="currentColor"
							d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
						/></svg
					>
				</div>

				<div class="rounded-xl bg-gray-800 p-2 text-gray-50">
					<!-- DEVTO LOGO -->
					<svg class="w-4 h-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
						><title>dev.to</title><path
							fill="currentColor"
							d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"
						/></svg
					>
				</div>

				<div class="rounded-xl bg-gray-800 p-2 text-gray-50">
					<!-- GITHUB LOGO -->
					<svg class="w-4 h-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
						><title>GitHub</title><path
							fill="currentColor"
							d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
						/></svg
					>
				</div>
			</div>
		</div>
	</div>
</footer>
<!-- FOOTER END -->
