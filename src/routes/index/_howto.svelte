<script>
	import ButtonGithub from '../../comps/ButtonGithub.svelte';
</script>

<section class="relative bg-gray-50 py-[100px]">
	<div class="container mx-auto px-6">
		<div class="grid grid-cols-12 gap-x-0 gap-y-12 lg:gap-x-[40px]">
			<div class="col-span-12 lg:col-span-4">
				<div class="lg:max-w-sm flex flex-col text-left items-start">
					<h2 class="title text-[24px] lg:text-[32px] font-semibold">How can you contribute?</h2>
					<p class="py-8 text-[16px]">
						There are different ways you can contribute to Appwrite. All accepted contributions
						qualify for receiving Appwrite Swag!
					</p>

					<ButtonGithub showBadge={false} />
				</div>
			</div>
			<div
				class="col-span-12 lg:col-span-8 grid grid-cols-6 lg:grid-cols-12 gap-x-0 gap-y-[48px] lg:gap-[40px] lg:gap-y-[80px]"
			>
				<div class="col-span-6">
					<div class="w-[max-content] h-[max-content] rounded-xl bg-white custom-shadow p-[22px]">
						<!-- PUZZLE ICON -->
						<svg
							width="27"
							height="27"
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M17.3787 3.87868C16.8161 4.44129 16.5 5.20435 16.5 6V7.5C16.5 7.89782 16.3419 8.27936 16.0606 8.56066C15.7793 8.84196 15.3978 9 15 9H10.5C10.1022 9 9.72063 9.15804 9.43932 9.43934C9.15802 9.72064 8.99998 10.1022 8.99998 10.5V15C8.99998 15.3978 8.84195 15.7794 8.56064 16.0607C8.27934 16.342 7.89781 16.5 7.49998 16.5H5.99998C5.20433 16.5 4.44127 16.8161 3.87866 17.3787C3.31606 17.9413 2.99998 18.7043 2.99998 19.5C2.99998 20.2956 3.31606 21.0587 3.87866 21.6213C4.44127 22.1839 5.20433 22.5 5.99998 22.5H7.49998C7.89781 22.5 8.27934 22.658 8.56064 22.9393C8.84195 23.2206 8.99998 23.6022 8.99998 24V28.5C8.99998 28.8978 9.15802 29.2794 9.43932 29.5607C9.72063 29.842 10.1022 30 10.5 30H15C15.3978 30 15.7793 29.842 16.0606 29.5607C16.3419 29.2794 16.5 28.8978 16.5 28.5V27C16.5 26.2043 16.8161 25.4413 17.3787 24.8787C17.9413 24.3161 18.7043 24 19.5 24C20.2956 24 21.0587 24.3161 21.6213 24.8787C22.1839 25.4413 22.5 26.2043 22.5 27V28.5C22.5 28.8978 22.658 29.2794 22.9393 29.5607C23.2206 29.842 23.6022 30 24 30H28.5C28.8978 30 29.2793 29.842 29.5606 29.5607C29.8419 29.2794 30 28.8978 30 28.5V24C30 23.6022 29.8419 23.2206 29.5606 22.9393C29.2793 22.658 28.8978 22.5 28.5 22.5H27C26.2043 22.5 25.4413 22.1839 24.8787 21.6213C24.3161 21.0587 24 20.2956 24 19.5C24 18.7043 24.3161 17.9413 24.8787 17.3787C25.4413 16.8161 26.2043 16.5 27 16.5H28.5C28.8978 16.5 29.2793 16.342 29.5606 16.0607C29.8419 15.7794 30 15.3978 30 15V10.5C30 10.1022 29.8419 9.72064 29.5606 9.43934C29.2793 9.15804 28.8978 9 28.5 9H24C23.6022 9 23.2206 8.84196 22.9393 8.56066C22.658 8.27936 22.5 7.89782 22.5 7.5V6C22.5 5.20435 22.1839 4.44129 21.6213 3.87868C21.0587 3.31607 20.2956 3 19.5 3C18.7043 3 17.9413 3.31607 17.3787 3.87868Z"
								stroke="#F02E65"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>

					<div class="max-w-sm">
						<h3 class="mt-[40px] mb-[16px] text-[18px] font-bold">Contributions to open issues</h3>

						<p class="text-[16px]">
							We have a curated list of Hacktoberfest issues that are ready for you to pick up
						</p>
					</div>
				</div>

				<div class="col-span-6">
					<div class="w-[max-content] h-[max-content] rounded-xl bg-white custom-shadow p-[22px]">
						<!-- CODE ICON -->
						<svg
							width="27"
							height="27"
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
						<h3 class="mt-[40px] mb-[16px] text-[18px] font-bold">Build a demo app</h3>

						<p class="text-[16px]">
							Build a demo app using your favourite technologies using an Appwrite Backend.
						</p>
					</div>
				</div>

				<div class="col-span-6">
					<div class="w-[max-content] h-[max-content] rounded-xl bg-white custom-shadow p-[22px]">
						<!-- PENCIL ICON -->
						<svg
							width="27"
							height="27"
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
						<h3 class="mt-[40px] mb-[16px] text-[18px] font-bold">Write a blog post</h3>

						<p class="text-[16px]">
							Used Appwrite in a recent project ? Built something cool with Appwrite ? Tell the
							community about it in an awesome blog post.
						</p>
					</div>
				</div>

				<div class="col-span-6">
					<div class="w-[max-content] h-[max-content] rounded-xl bg-white custom-shadow p-[22px]">
						<!-- ACADEMIC CAP ICON -->
						<svg
							width="27"
							height="27"
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
						<h3 class="mt-[40px] mb-[16px] title text-[18px] font-bold">Make a tutorial</h3>

						<p class="text-[16px]">
							From video tutorials to written tutorials, help new community members get started with
							Appwrite!
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.custom-shadow {
		box-shadow: 15px 15px 24px 0px rgba(0, 0, 0, 0.1);
	}
</style>
