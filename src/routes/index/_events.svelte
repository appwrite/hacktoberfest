<script lang="ts">
	import Button from '../../comps/Button.svelte';

	import { events } from '../../stores';
	import { slide } from 'svelte/transition';

	function getLocalDay(timeISO: string): number {
		const date = new Date(timeISO);

		return date.getDate();
	}

	function getLocalMonth(timeISO: string): string {
		const date = new Date(timeISO);
		const formatter = new Intl.DateTimeFormat(undefined, { month: 'long' });
		return formatter.format(date);
	}

	function getLocalTimeVerbose(timeISO: string, durationInMs: number): string {
		const dateFrom = new Date(timeISO);
		const dateTo = new Date(dateFrom.getTime() + durationInMs);

		const formatter = new Intl.DateTimeFormat(undefined, {
			hour12: false,
			hour: '2-digit',
			minute: '2-digit'
		});

		return formatter.format(dateFrom) + ' - ' + formatter.format(dateTo);
	}

	function getClientState(): string {
		const timeZone = Intl.DateTimeFormat()
			.resolvedOptions()
			.timeZone.split('-')
			.join(' ')
			.split('_')
			.join(' ');

		if (!timeZone.includes('/')) {
			return timeZone;
		}

		const timeZoneChunks = timeZone.split('/');

		return timeZoneChunks[timeZoneChunks.length - 1];
	}

	const now = new Date().getTime();
	let nextEvent = -1;
	$events.forEach((event, eventIndex) => {
		const startingTime = new Date(event.timeISO).getTime();
		if (startingTime < now) {
			$events[eventIndex].hasStarted = true;
		}
		if (nextEvent < 0 && startingTime > now) {
			nextEvent = eventIndex;
		}
	});

	$events[nextEvent].isOpened = true;

	function onToggleEventDetail(eventIndex: number) {
		return () => {
			$events[eventIndex].isOpened = !$events[eventIndex].isOpened;
		};
	}
</script>

<section class="pt-[80px] pb[100px] pb-0" id="section-events">
	<div class="container mx-auto px-6">
		<div class="text-center max-w-4xl mx-auto px-8 lg:px-0">
			<p class="h2-eyebrow tracking-[2px]">events</p>
			<h2 class="mt-[24px] mb-[40px]">Join our Hacktoberfest events</h2>

			<!-- <p class="text-black">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus laborum quibusdam, ea facilis laudantium! Quibusdam, dolorum sint? Velit optio ea quae tempore itaque totam ipsum aperiam provident ducimus explicabo!
			</p> -->
		</div>

		<div class="mx-auto max-w-4xl flex flex-col space-y-3 mt-20">
			{#each $events as event, eventIndex}
				<div class="custom-shadow border-[1px] bg-neutral-190 border-neutral-170 rounded-xl">
					<div class="px-8 mt-10 mb-8 md:my-4 grid gap-y-[24px] md:gap-3 grid-cols-12">
						<div
							class="col-span-12 md:col-span-6 flex items-center justify-center md:justify-start space-x-[18px]"
						>
							<span
								class="w-[50px] flex items-center justify-center text-[40px] font-semibold title text-primary"
								>{getLocalDay(event.timeISO)}</span
							>
							<div class="flex flex-col space-y-0">
								<span class="title text-base font-semibold text-primary"
									>{getLocalMonth(event.timeISO)}</span
								>
								<span class="text-[14px]"
									>{getLocalTimeVerbose(event.timeISO, event.durationInMs)}
									<span class=""> • {getClientState()} time</span></span
								>
							</div>
						</div>
						<div
							class="order-first md:order-last col-span-12 md:col-span-6 flex items-center justify-center text-center md:text-left md:justify-between"
						>
							<div
								class="flex flex-col space-y-[24px] md:flex-row md:space-y-0 items-center md:space-x-[24px]"
							>
								<div class="flex flex-col space-y-2 md:space-y-0">
									<h3 class="font-semibold text-xl md:text-base">{event.name}</h3>
									<p
										class="text-[14px] line-clamp-1"
										contenteditable="false"
										bind:innerHTML={event.presenter}
									/>
								</div>
							</div>
							<button
								aria-label="Toggle description"
								on:click={onToggleEventDetail(eventIndex)}
								class="hidden md:block rounded-full hover:text-white p-4"
							>
								<svg
									class={(event.isOpened ? 'rotate-180' : 'rotate-0') +
										' transition-transform duration-300 transform'}
									width="18"
									height="18"
									viewBox="0 0 18 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M1 1L9.24242 8.5L17 1"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</button>
						</div>
					</div>

					{#if event.isOpened}
						<div transition:slide class="px-10 py-8 space-y-10 border-t-[1px] border-neutral-150">
							{#each event.sessions as session}
								<div class="flex flex-col items-center justify-center md:flex-row md:items-start">
									<!-- Session name and time -->
									<div class="flex-1 flex flex-col items-center md:items-start">
										<h4 class="max-w-sm font-semibold text-base text-center md:text-left">
											{session.name}
										</h4>
										<div class="text-sm">
											<span>{getLocalTimeVerbose(session.timeISO, session.durationInMs)}</span>
											<span> • {getClientState()} time</span>
										</div>
									</div>

									<!-- Presenter Information -->
									<div class="flex-1 items-center flex-col space-y-10 mt-4 md:mt-0">
										{#each session.presenters as presenter, presenterIndex}
											<div
												class="flex-1 flex flex-col md:flex-row items-center space-y-3 md:space-y-0"
											>
												<img
													src={presenter.image}
													class="md:h-14 md:w-14 h-[72px] w-[72px] rounded-full"
													height="72"
													width="72"
													alt={presenter.name}
												/>
												<div
													class="flex flex-1 flex-col items-center ml-0 md:ml-3 md:flex-row md:space-y-0 space-y-3 md:justify-between"
												>
													<p class="title md:font-semibold text-sm">{presenter.name}</p>
													<img
														src={presenter.companyImage}
														style="max-height: {presenter.companyImageHeight || '72'}px"
														class="max-w-[110px]"
														height={presenter.companyImageHeight || '72'}
														alt="Company"
													/>
												</div>
											</div>
										{/each}
									</div>
								</div>
							{/each}

							{#if event.link}
								<div class="flex items-center justify-center md:justify-start">
									<a
										rel="noopener"
										aria-label={event.hasStarted ? 'Watch on YouTube' : 'Notify Me'}
										target="_blank"
										class="block"
										href={event.link}
										><Button
											type="primary"
											icon={event.hasStarted ? 'youtube' : 'none'}
											text={event.hasStarted ? 'Watch on YouTube' : 'Notify Me'}
										/></a
									>
								</div>
							{/if}
						</div>
					{/if}

					<div class="px-[32px] block md:hidden w-full border-t-[1px] border-neutral-150">
						<button
							aria-label="Toggle description"
							on:click={onToggleEventDetail(eventIndex)}
							class="px-4 py-4 flex w-full justify-center space-x-2 items-center"
						>
							<span class="text-sm">
								{event.isOpened ? 'Show less' : 'More information'}
							</span>

							<svg
								class={(event.isOpened ? 'rotate-180' : 'rotate-0') +
									' transition-transform duration-300 transform w-[14px]'}
								width="18"
								height="18"
								viewBox="0 0 18 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1L9.24242 8.5L17 1"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.custom-shadow {
		box-shadow: 0px 10px 70px 0px rgba(0, 0, 0, 0.05);
	}
</style>
