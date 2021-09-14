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

		return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes} • ${
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

<section class="bg-white pt-[80px] pb[100px] pb-0">
	<div class="container mx-auto px-6">
		<div class="text-center max-w-4xl mx-auto px-8 lg:px-0">
			<p class="text-black uppercase text-[14px] title">events</p>
			<h1 class="title text-[32px] lg:text-[48px] font-semibold mt-[24px] mb-[54px]">
				Join our Hacktoberfest events
			</h1>
			<!-- <p class="text-black">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus laborum quibusdam, ea facilis laudantium! Quibusdam, dolorum sint? Velit optio ea quae tempore itaque totam ipsum aperiam provident ducimus explicabo!
			</p> -->
		</div>

		<div class="mx-auto max-w-4xl flex flex-col space-y-3 mt-20">
			{#each $events as event, eventIndex}
				<div
					class={(event.isOpened ? 'custom-shadow' : '') +
						' py-[24px] border-2 border-gray-300 rounded-xl'}
				>
					<div class="px-[32px] grid gap-y-[24px] md:gap-3 grid-cols-12">
						<div
							class="col-span-12 md:col-span-6 flex items-center justify-center md:justify-start space-x-[18px]"
						>
							<span class="text-[40px] font-bold title text-[#DE2459]"
								>{getLocalDay(event.timeISO)}</span
							>
							<div class="flex flex-col space-y-0">
								<span class="title text-[16px] font-semibold text-[#DE2459]"
									>{getLocalMonth(event.timeISO)}</span
								>
								<span class="text-[14px] text-[#808080]"
									>{getLocalTimeVerbose(event.timeISO, event.durationInMs)}
									<span class="">({getClientState()} time)</span></span
								>
							</div>
						</div>
						<div
							class="order-first md:order-last col-span-12 md:col-span-6 flex items-center justify-center text-center md:text-left md:justify-between"
						>
							<div
								class="flex flex-col space-y-[24px] md:flex-row md:space-y-0 items-center md:space-x-[24px]"
							>
								<img
									src={event.imageUrl}
									class="w-[56px] rounded-full shadow-inner"
									alt="Presenter"
									width="56"
									height="56"
								/>

								<div class="flex flex-col space-y-2 md:space-y-0">
									<p class="title font-semibold text-[16px]">{event.name}</p>
									<p class="text-[14px] text-[#808080]">{event.presenter}</p>
								</div>
							</div>
							<button
								on:click={onToggleEventDetail(eventIndex)}
								class="hidden md:block rounded-full hover:bg-gray-300 p-4 text-black"
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
						<div transition:slide class="px-[32px] my-[28px]">
							<p class="mb-6 text-[16px]">{event.description}</p>

							<Button type="primary" icon="none" text="RSVP for event" />
						</div>
					{/if}

					<div class="px-[32px] block md:hidden w-full mt-4 border-t-2 pt-[6px] border-gray-300">
						<button
							on:click={onToggleEventDetail(eventIndex)}
							class="px-4 pt-4 flex w-full justify-center space-x-2 items-center"
						>
							<span>
								{event.isOpened ? 'Show less' : 'More information'}
							</span>

							<svg
								class={(event.isOpened ? 'rotate-180' : 'rotate-0') +
									' transition-transform duration-300 transform w-4'}
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
