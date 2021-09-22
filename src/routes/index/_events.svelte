<script lang="ts">
	import Button from '../../comps/Button.svelte';

	import { events } from '../../stores';
	import { slide } from 'svelte/transition';

	function getLocalDay(timeISO: string): number {
		const date = new Date(timeISO);

		return date.getDate();
	}

	function getLocalMonth(timeISO: string): string {
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];

		const date = new Date(timeISO);
		return monthNames[date.getMonth()];
	}

	function getLocalTimeVerbose(timeISO: string, durationInMs: number): string {
		const dateFrom = new Date(timeISO);
		const dateTo = new Date(dateFrom.getTime() + durationInMs);

		const hours = dateFrom.getHours();
		const minutes = dateFrom.getMinutes();

		const endHours = dateTo.getHours();
		const endMins = dateTo.getMinutes();

		return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes} - ${
			endHours < 10 ? '0' + endHours : endHours
		}:${endMins < 10 ? '0' + endMins : endMins}`;
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

	function onToggleEventDetail(eventIndex: number) {
		return () => {
			$events[eventIndex].isOpened = !$events[eventIndex].isOpened;
		};
	}
</script>

<section class="bg-white pt-[80px] pb[100px] pb-0" id="section-events">
	<div class="container mx-auto px-6">
		<div class="text-center max-w-4xl mx-auto px-8 lg:px-0">
			<p class="text-black uppercase text-[14px] title tracking-[2px]">events</p>
			<h1 class="title text-[32px] lg:text-[48px] font-semibold mt-[24px] mb-[40px]">
				Join our Hacktoberfest events
			</h1>

			<div class="flex justify-center mb-[80px]">
				<img class="h-[120px]" src="/icons/calendar.webp" width="280" height="120" alt="Calendar" />
			</div>

			<!-- <p class="text-black">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus laborum quibusdam, ea facilis laudantium! Quibusdam, dolorum sint? Velit optio ea quae tempore itaque totam ipsum aperiam provident ducimus explicabo!
			</p> -->
		</div>

		<div class="mx-auto max-w-4xl flex flex-col space-y-3 mt-20">
			{#each $events as event, eventIndex}
				<div class="custom-shadow border-[1px] border-[#F3F3F3] rounded-xl">
					<div class="px-8 mt-10 mb-8 md:my-4 grid gap-y-[24px] md:gap-3 grid-cols-12">
						<div
							class="col-span-12 md:col-span-6 flex items-center justify-center md:justify-start space-x-[18px]"
						>
							<span
								class="w-[50px] flex items-center justify-center text-[40px] font-semibold title text-[#DE2459]"
								>{getLocalDay(event.timeISO)}</span
							>
							<div class="flex flex-col space-y-0">
								<span class="title text-base font-semibold text-[#DE2459]"
									>{getLocalMonth(event.timeISO)}</span
								>
								<span class="text-[14px] text-[#808080]"
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
									<p class="title font-semibold text-xl md:text-base">{event.name}</p>
									<p
										class="text-[14px] text-[#808080] line-clamp-1"
										contenteditable="false"
										bind:innerHTML={event.presenter}
									/>
								</div>
							</div>
							<button
								aria-label="Toggle description"
								on:click={onToggleEventDetail(eventIndex)}
								class="hidden md:block rounded-full hover:bg-[#F3F3F3] p-4 text-black"
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
						<div transition:slide class="px-10 py-8 space-y-10 border-t-[1px] border-[#F3F3F3]">
							{#each event.sessions as session, sessionIndex}
								<div class="flex flex-col items-center justify-center md:flex-row md:items-start">
									<!-- Session name and time -->
									<div class="flex-1 flex flex-col items-center md:items-start">
										<p class="title font-semibold text-base text-center md:text-left">
											{session.name}
										</p>
										<div class="text-[#808080] text-sm">
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
													class="md:h-14 md:w-14 h-[72px] w-[72px]"
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
														class="max-h-9 max-w-[110px]"
														height="36"
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
										aria-label={event.isFinished ? 'Watch on YouTube' : 'RSVP for event'}
										target="_blank"
										class="block"
										href={event.link}
										><Button
											type="primary"
											icon={event.isFinished ? 'youtube' : 'none'}
											text={event.isFinished ? 'Watch on YouTube' : 'RSVP for event'}
										/></a
									>
								</div>
							{/if}
						</div>
					{/if}

					<div class="px-[32px] block md:hidden w-full border-t-[1px] border-[#F3F3F3]">
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
