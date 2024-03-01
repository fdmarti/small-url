<template>
	<div>
		<SpinnerComponent v-if="isLoading" />
		<section v-else class="mt-10 text-gray-800 flex flex-col gap-4">
			<div
				class="bg-gray-100 p-4 rounded flex justify-between"
				v-for="url in urlsList"
			>
				<FullLinkComponent :fullUrl="url.fullUrl" />
				<ShortLinkComponent :shortUrl="url.shortUrl" />

				<section>
					<IconsTrash
						@click="handleDeleteUrl(url.shortUrl)"
						class="hover:opacity-80 hover:cursor-pointer"
					/>
				</section>
			</div>
		</section>
	</div>
</template>
<script setup lang="ts">
	import { useUrlShortener } from '../composable';

	const { handleDeleteUrl, loadUrls, urlsList, isLoading } = useUrlShortener();

	onBeforeMount(() => {
		loadUrls();
	});
</script>
