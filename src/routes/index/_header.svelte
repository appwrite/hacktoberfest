<script lang="ts">
	import { onMount } from 'svelte';

	import Button from '../../comps/Button.svelte';
	import ButtonGithub from '../../comps/ButtonGithub.svelte';

	import { currentSection } from '../../stores';

	let sections = [
		{
			name: 'about the event',
			id: 'about'
		},
		{
			name: 'swag',
			id: 'swag'
		},
		{
			name: 'events',
			id: 'events'
		},
		{
			name: 'Hacktoberfest issues',
			id: 'issues'
		}
	];

	let menuLineWidth = 0;
	let menulineLeft = 0;
	let currentSectionId = null;
	let isAutomaticallyScrolling = false;

	onMount(() => {
		currentSection.subscribe((newSection) => {
			const buttonEl = <HTMLDivElement>document.querySelector(`#menu-section-${newSection.id}`);

			if (!buttonEl) {
				menuLineWidth = 0;
				menulineLeft = 0;
				return;
			}

			if (newSection.scroll) {
				const sectionEl = <HTMLDivElement>document.querySelector(`#section-${newSection.id}`);

				if (sectionEl) {
					isAutomaticallyScrolling = true;
					scrollToSmoothly(sectionEl.offsetTop - 100, 800);
					setTimeout(() => {
						isAutomaticallyScrolling = false;
						onScroll(null, true);
					}, 820);
				}
			}

			currentSectionId = newSection.id;
			const rectangle = buttonEl.getBoundingClientRect();
			menuLineWidth = rectangle.width;
			menulineLeft = rectangle.left;
		});

		document.onscroll = onScroll;
	});

	function activateSection(sectionId: string) {
		return () => {
			currentSection.set({
				id: sectionId,
				scroll: true
			});
		};
	}

	let debounceTimeout = null;
	function onScroll(event, isForced = false) {
		// Debounce stuff
		if (debounceTimeout || isAutomaticallyScrolling) {
			if (!isForced) {
				return;
			}
		}

		debounceTimeout = setTimeout(() => {
			clearInterval(debounceTimeout);
			debounceTimeout = null;
		}, 500);

		// Actual login on scroll
		let topScroll = window.pageYOffset || document.documentElement.scrollTop;
		// Increase by 2/3 of the screen to have animation at better point
		topScroll += (window.innerHeight / 3) * 2;

		const elements = [];
		// Push from bottom to top!!!

		const issuesEl = <HTMLDivElement>document.querySelector('#section-issues');
		const eventsEl = <HTMLDivElement>document.querySelector('#section-events');
		const swagEl = <HTMLDivElement>document.querySelector('#section-swag');

		issuesEl && elements.push({ el: issuesEl, id: 'issues' });
		eventsEl && elements.push({ el: eventsEl, id: 'events' });
		swagEl && elements.push({ el: swagEl, id: 'swag' });

		let sectionExists = false;
		for (const sectionObj of elements) {
			const topPos = sectionObj.el.offsetTop;

			if (topPos <= topScroll) {
				currentSection.set({
					id: sectionObj.id,
					scroll: false
				});
				sectionExists = true;
				break;
			}
		}

		if (!sectionExists) {
			currentSection.set({
				id: 'about',
				scroll: false
			});
		}
	}

	// https://stackoverflow.com/questions/17733076/smooth-scroll-anchor-links-without-jquery
	/*
	
   @param pos: the y-position to scroll to (in pixels)
   @param time: the exact amount of time the scrolling will take (in milliseconds)
	*/
	function scrollToSmoothly(pos, time) {
		var currentPos = window.pageYOffset;
		var start = null;
		if (time == null) time = 500;
		(pos = +pos), (time = +time);
		window.requestAnimationFrame(function step(currentTime) {
			start = !start ? currentTime : start;
			var progress = currentTime - start;
			if (currentPos < pos) {
				window.scrollTo(0, ((pos - currentPos) * progress) / time + currentPos);
			} else {
				window.scrollTo(0, currentPos - ((currentPos - pos) * progress) / time);
			}
			if (progress < time) {
				window.requestAnimationFrame(step);
			} else {
				window.scrollTo(0, pos);
			}
		});
	}
</script>

<div class="relative z-20">
	<header class=" border-b-[1px] border-[#C4C4C4] z-30 left-0 top-0 w-full bg-white p-[24px]">
		<div
			class="container mx-auto lg:space-y-0 space-y-4 flex-col lg:space-x-6 lg:flex-row sm:px-6 lg:px-0 px-4 flex items-center justify-between"
		>
			<a
				rel="noopener"
				aria-label="Appwrite"
				href="https://appwrite.io/"
				class="flex items-center justify-start space-x-[32px]"
			>
				<!-- APPWRITE LOGO -->
				<svg
					class="w-full"
					width="181"
					height="32"
					viewBox="0 0 181 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
				>
					<rect width="181" height="32" fill="url(#pattern0)" />
					<defs>
						<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
							<use
								xlink:href="#image0"
								transform="translate(-0.000364849) scale(0.00333577 0.0188679)"
							/>
						</pattern>
						<image
							id="image0"
							width="300"
							height="53"
							xlink:href="data:image/png;base64,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"
						/>
					</defs>
				</svg>

				<svg
					class="w-full"
					width="129"
					height="50"
					viewBox="0 0 2295 889"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2197 114.81L2196.42 90.9L2124.37 90.4399C2128.87 171.5 2128.87 200.77 2128.87 337.66C2155.87 349.37 2185.61 361.53 2197.32 370.08L2253.61 307.49C2237.85 306.14 2211.28 297.14 2196.42 288.58C2196.42 207.97 2196.42 182.76 2197.32 155.29L2197 114.81Z"
						fill="#F74700"
					/>
					<path
						d="M1193.92 288.58L1126.37 337.66C1153.37 349.37 1180.87 361.53 1192.57 370.08L1248.86 307.49C1233.1 306.14 1208.78 297.14 1193.92 288.58Z"
						fill="#B53A25"
					/>
					<path
						d="M675.57 142.68L720.36 81.4503L719.71 80.9902L600.37 134.13C604.88 187.26 604.88 232.74 604.88 323.71C635.05 332.71 683.68 351.62 722.88 370.08L775.57 307.49C744.5 302.99 695.42 292.18 672.45 278.67C672.45 221.03 672.45 189.06 675.6 142.67L675.57 142.68Z"
						fill="#F74700"
					/>
					<path
						d="M440.35 308.08L431.93 305.24C407.16 298.94 382.85 290.83 362.59 278.67C362.59 221.03 363.59 188.95 366.73 142.57H366.9L411.26 82L409.87 81L290.54 134.13C295.04 187.26 295.04 232.74 295.04 323.71C320.26 330.01 355.83 351.62 388.7 370.08C388.7 370.08 429.23 321.9 439.14 310.19L440.35 308.08Z"
						fill="#F74700"
					/>
					<path
						d="M1525.81 317L1450.6 306.64C1423.14 299.89 1394.77 291.78 1372.71 278.72C1372.71 221.53 1372.71 189.56 1375.86 144.08L1376.17 144.13L1429 81L1300.67 134.14C1305.17 187.27 1305.17 232.75 1305.17 323.72C1330.38 330.02 1378.57 356.59 1397.48 370.09L1525.81 317Z"
						fill="#F74700"
					/>
					<path
						d="M2057.51 218.3H2002.27H1947.34C1947.79 192.63 1948.69 170.12 1950.49 142.65L1950.82 142.75L1994.68 81L1875.34 134.14C1879.85 187.27 1879.85 232.75 1879.85 323.72C1910.01 332.72 1958.65 351.63 1997.85 370.09L2050.54 307.5C2019.47 303 1970.39 292.19 1947.42 278.68V238.14L2004.61 260.66C2023.8 244.15 2033.71 235.15 2057.56 218.33"
						fill="#F74700"
					/>
					<path
						d="M79.3199 90.8999L190.54 104.4L205.86 27.8499L71.1499 14.3799L79.2899 91.3099L79.3199 90.8999Z"
						fill="#B53A25"
					/>
					<path
						d="M220.72 399.81C216.21 318.75 216.21 260.66 216.21 169.7C190.99 163.4 138.31 136.83 119.4 123.31C119.4 123.31 93.5299 152.09 76.8599 170.66V190C100.64 197.18 124.86 205.72 144.17 218.74C144.17 290.79 144.17 327.74 139.66 408.74L220.72 399.81Z"
						fill="#B53A25"
					/>
					<path
						d="M2128.59 338.12C2155.47 349.76 2185.59 361.59 2197.28 370.12L2253.57 307.53C2238.68 306.25 2212.29 296.62 2197.09 288.53L2128.59 338.12Z"
						fill="#B53A25"
					/>
					<path
						d="M1281.72 740L1266.62 670.69L1188.42 684.02C1173.31 644.92 1166.64 622.7 1156.87 583.6C1179.08 569.83 1227.07 539.17 1247.51 522.29C1283.51 531.17 1319.94 541.84 1349.26 541.84L1330.6 614.26C1302.16 608.04 1261.28 592.49 1234.6 580.94L1259.92 655.58L1327.92 634.7C1339.92 670.7 1347.92 704.01 1355.92 746.7C1327.49 765.81 1301.27 792.46 1285.28 806.7C1238.18 797.82 1212.41 792.93 1163.09 792.93C1170.2 761.38 1183.09 736.06 1195.09 716.93L1281.72 740Z"
						fill="#B53A25"
					/>
					<path
						d="M1493.65 531.15H1532.75L1526.53 575.15H1492.32C1491.43 612.48 1491.43 653.79 1491.43 726.22C1506.1 734.66 1530.09 743.55 1545.64 744.88L1490.1 806.64C1478.55 798.2 1451.44 786.2 1424.78 774.64C1424.78 692 1424.78 629.35 1423.9 575.14H1402.57C1410.57 555.59 1414.57 550.7 1422.57 531.14C1422.13 512.93 1421.24 495.14 1420.35 477.82L1495.88 486.71C1495 503.16 1494.1 517.38 1493.65 531.15Z"
						fill="#B53A25"
					/>
					<path
						d="M1424.78 774.64C1424.78 692 1424.78 629.35 1423.9 575.14H1402.57C1410.57 555.59 1414.57 550.7 1422.57 531.14C1422.13 512.93 1421.24 495.14 1420.35 477.82L1495.88 486.71C1495 503.15 1494.11 517.37 1493.66 531.14H1532.76L1526.54 575.14H1492.33C1491.44 612.47 1491.44 653.78 1491.44 726.21"
						fill="#F74700"
					/>
					<path
						d="M1198.52 682.28L1268.36 652.98L1259.95 655.56L1234.63 580.92L1244.85 524.4C1223.19 541.62 1178.19 570.4 1156.85 583.58C1166.62 622.68 1173.29 644.9 1188.4 684L1198.52 682.28Z"
						fill="#F74700"
					/>
					<path
						d="M1281.72 740L1195.08 716.9C1183.08 736.01 1170.2 761.33 1163.08 792.9C1212.4 792.9 1238.17 797.79 1285.27 806.67C1301.05 792.67 1326.79 766.51 1354.79 747.47L1281.72 740Z"
						fill="#F74700"
					/>
					<path
						d="M1107 552.75L1106.09 657.67C1081.78 674.79 1071.87 683.8 1052.51 700.46L995.32 677.94V718.47C1018.32 731.98 1067.32 742.79 1098.44 747.29L1045.75 809.88C1006.58 791.42 957.94 772.51 927.75 763.5C927.75 672.5 927.75 627.05 923.25 573.92L1042.59 520.79C1061.52 534.29 1079.07 539.7 1107 552.75ZM1050.25 658.12V603.19C1034.04 595.09 1019.18 589.19 998.47 582.48C996.67 609.94 995.77 632.48 995.32 658.12H1050.25Z"
						fill="#F74700"
					/>
					<path
						d="M1001.38 582.48L1001.31 583.42C1020.53 589.78 1034.81 595.47 1050.25 603.19V658.12H1105.46L1106.09 657.67L1107 552.75C1080.35 540.3 1063.15 534.75 1045.2 522.58L1001.38 582.48Z"
						fill="#B53A25"
					/>
					<path
						d="M831.645 814.341L832.286 813.965C831.395 710.524 832.286 674.394 834.949 563.855H858.977L878.11 513.139H836.291L841.5 470C868.642 461.384 890.046 447.036 910.5 444C909.619 443.486 855.543 410.699 844 396C832.426 405.632 792.7 418.315 766.009 431.519C767.34 457.379 768.682 484.757 769.573 513.15H769.132L750 563.866H771.355C771.605 572.722 771.846 581.213 772.076 589.441H763.125C764.026 652.14 764.026 776.019 764.026 871.596C791.058 884.96 787.955 879.231 799.668 889L863.743 829.657C847.965 828.105 846.523 825.354 831.645 815.597V814.341Z"
						fill="#B53A25"
					/>
					<path
						d="M841 477.5L865.5 464L909.065 492.312L939.538 445.77C939.523 445.498 939.415 444.501 939.381 444.277L851.773 387.44C826.868 403.099 779.984 424.52 760 433L841 477.5Z"
						fill="#B53A25"
					/>
					<path
						d="M836.406 513.253L841 477L851 388C842.798 394.854 807.289 410.684 789.15 419.96V419.617L759.532 432.857C760.424 452.916 761.336 473.501 761.788 494.542C761.497 494.862 761.487 502.458 761.607 513.208H727.547L710 563.973H762.499C762.82 578.526 763.101 589.572 763.101 589.572C764.004 652.331 764.003 776.33 764.003 872L831.724 815.946V814.701L832.365 814.324C831.473 710.784 832.365 674.618 835.032 563.973H878.257L898 513.253H836.406Z"
						fill="#F74700"
					/>
					<path
						d="M79.2898 91.3099L71.1498 14.3799H70.7598C50.0498 31.4999 24.8298 51.2999 2.31978 65.2599C6.81978 146.32 5.01977 276.01 0.509766 361.12H81.1198C78.9798 320.47 77.4198 273.62 76.8598 226.81V144.93L79.2898 91.3099Z"
						fill="#F74700"
					/>
					<path
						d="M917.62 138.29C919.44 86.2898 919.62 46.7598 921.46 14.3398L844.91 23.3398C849.41 104.34 848.52 224.17 848.52 361.07H917V239.5L917.62 138.29Z"
						fill="#F74700"
					/>
					<path
						d="M1045.29 230.49C1029.99 223.73 1012.87 215.63 998.92 208.43L1035.83 194.43V113.86C1001.62 102.6 989.91 95.8602 965.14 80.9902C965.14 80.9902 933.76 115.57 917.97 133.35L917.86 145.35C939.48 149.35 948.93 151.21 968.3 156.6V180.5C968.3 184.99 937.4 209.63 917.13 227.63L917.04 238.31L918.04 239.1C944.04 248.54 963.84 256.62 977.77 262.91C977.77 285.43 977.32 343.51 977.32 362.43L1045.32 370.53C1043 335.87 1043 270.12 1045.29 230.49Z"
						fill="#B53A25"
					/>
					<path
						d="M675.57 142.68C703.94 152.13 721.96 159.34 746.27 174.2L784.1 113C756.5 100.09 739.03 94.65 720.36 81.48L675.57 142.68Z"
						fill="#B53A25"
					/>
					<path
						d="M502.64 288.58C501.9 208.06 502.18 189.06 502.18 127.37C477.53 121.2 431 95.71 411.27 82L366.85 142.73L366.91 142.95C394.59 147.95 411.99 155.48 434.64 165.25C434.64 206.25 433.53 242.69 431.93 305.25L440.35 308.09L439.29 310.44C456.84 339.15 481.05 362.01 492.29 370.09L548.57 307.5C533.26 305.24 517.49 297.14 502.64 288.58Z"
						fill="#B53A25"
					/>
					<path
						d="M1126.37 337.66C1126.37 253.91 1126.37 190.41 1125.48 135.47H1103.86C1111.96 115.66 1116.02 110.71 1124.12 90.8999C1123.67 72.4299 1122.77 54.4199 1121.87 36.8999L1198.42 45.8999C1197.53 62.5599 1196.62 76.9699 1196.17 90.8999H1235.79L1229.49 135.47H1194.82C1193.92 173.3 1193.92 215.18 1193.92 288.58L1126.37 337.66Z"
						fill="#F74700"
					/>
					<path
						d="M1376 144.34L1380.41 144.87C1406.46 149.75 1432.95 156.25 1453.81 165.2C1453.81 207.52 1453.81 240.84 1450.65 306.59L1525.81 317C1521.31 235.94 1521.31 189.11 1521.31 127.42C1496.09 121.11 1447.9 94.54 1428.99 81.04L1376 144.34Z"
						fill="#B53A25"
					/>
					<path
						d="M1664 135C1666.62 77.1101 1665.7 30.2201 1666.75 0.850098L1595.6 23.3701C1596.95 104.37 1596.05 262.03 1596.05 323.73C1621.27 330.03 1669.46 356.6 1688.37 370.1L1807.73 317V316.86L1732.28 308.57V308.4C1704.05 303.4 1686.53 295.8 1663.63 285.92C1663.63 263.92 1663.63 205.77 1664.08 145.43L1664 135Z"
						fill="#F74700"
					/>
					<path
						d="M1807.72 316.81C1803.23 263.74 1803.23 218.25 1803.23 127.37C1778 121.06 1742.43 99.4502 1709.56 80.9902C1709.56 80.9902 1678.76 117.45 1664.25 134.82V145.42C1689.86 151.72 1714.59 160.26 1735.71 172.42C1735.71 229.53 1734.65 262.56 1732.3 308.54L1807.72 316.81Z"
						fill="#B53A25"
					/>
					<path
						d="M1950.6 143.1L1953.48 144.01C1972.71 150.37 1986.41 155.25 2001.85 163.01V217.95L2057.48 218.37C2057.7 218.21 2058.48 217.58 2058.65 217.43L2059 113C2032.35 100.54 2012.8 93 1994.85 80.79L1950.6 143.1Z"
						fill="#B53A25"
					/>
					<path
						d="M2223.85 81.8901L2197.73 114.31L2197.09 115.02V154.93L2200.3 156.58C2214.22 162.445 2227.81 169.078 2241 176.45L2295 114.76C2273.83 104.4 2245.91 92.6901 2223.85 81.8901Z"
						fill="#B53A25"
					/>
					<path
						d="M319.56 685.86L387 596.22L398.21 548.6C379.11 555.22 360.77 566.17 344.21 576.1L321.04 537.1C344.46 530.48 360.51 524.1 383.43 515.45L445.82 551.62L420.61 621.9L369.68 676.4C393.61 676.4 418.06 676.65 440.22 673.34L427.48 711.54H334.07L319.56 685.86Z"
						fill="#677662"
					/>
					<path
						d="M613.18 546.82C613.18 581.71 613.44 640.82 615.99 686.63L543.41 716.63C532.71 708.99 505.46 693.96 491.2 690.4C491.2 638.95 490.95 580.64 488.4 550.59L560.98 520.59C571.67 528.23 598.92 543.25 613.18 546.82ZM573.46 680.77C575.24 643.59 574.98 592.15 574.98 568.21C562.51 562.86 546.46 559.04 530.93 556.21C529.15 582.69 529.4 632.61 529.4 664.95C541.88 672.37 557.92 677 573.46 680.77V680.77Z"
						fill="#677662"
					/>
					<path
						d="M1651.08 685.86L1718.57 596.22L1729.77 548.6C1710.67 555.22 1692.34 566.17 1675.77 576.1L1652.6 537.1C1676.03 530.48 1692.07 524.1 1714.99 515.45L1777.38 551.62L1752.17 621.9L1701.24 676.4C1725.18 676.4 1749.63 676.65 1771.78 673.34L1759.05 711.54H1665.6L1651.08 685.86Z"
						fill="#677662"
					/>
					<path
						d="M1833.17 716.93C1833.17 697.07 1831.38 605.64 1831.38 571.27L1854.05 556.49H1819.92L1826.55 520.59H1872.38L1869.58 556.24C1869.84 612.01 1870.35 687.39 1872.38 711.84L1833.17 716.93Z"
						fill="#677662"
					/>
				</svg>
			</a>

			<section class="hidden md:flex items-center justify-end space-x-[12px]">
				<a
					rel="noopener"
					aria-label="Get help on Discord"
					target="_blank"
					href="https://appwrite.io/discord"
					><Button icon="discord" text="Get help on Discord" type="secondary" /></a
				>

				<ButtonGithub showBadge={true} />
			</section>
		</div>
	</header>
</div>

<div
	class="hidden md:block sticky top-0 bg-white z-30
"
>
	<div class="relative flex items-center justify-center space-x-[136px] py-[26px]">
		{#each sections as section}
			<button
				on:click={activateSection(section.id)}
				id="menu-section-{section.id}"
				class="relative transition duration-200 uppercase title text-[14px] tracking-[2px] hover:text-[#F02E65] {currentSectionId ===
				section.id
					? 'text-[#F02E65]'
					: 'text-black'}">{section.name}</button
			>
		{/each}

		<div class="absolute !ml-0 m-0 p-0 left-0 bottom-0 w-full pointer-events-none">
			<div
				style="width: {menuLineWidth}px; margin-left: {menulineLeft}px;"
				class="transition-all duration-300 h-[4px] bg-[#F02E65]"
			/>
		</div>
	</div>
</div>
