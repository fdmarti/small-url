<template>
	<div>
		<SpinnerComponent v-if="isLoading" />
		<section v-else class="mt-10 text-gray-800 dark:text-gray-100 flex flex-col gap-4">
			<div
				class="bg-gray-100 dark:bg-gray-600 p-4 rounded flex justify-between shadow overflow-auto"
				v-for="url in urlsList"
			>
				<LinkFullComponent :fullUrl="url.fullUrl" />
				<LinkShortComponent :shortUrl="url.shortUrl" />

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
