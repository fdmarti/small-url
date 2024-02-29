<template>
	<div>
		<SpinnerComponent v-if="isLoading" />
		<section v-else class="mt-10 text-gray-800 flex flex-col gap-4">
			<div
				class="bg-gray-100 p-4 rounded flex justify-between"
				v-for="url in urlsList"
			>
				<div class="max-w-[500px]">
					<a :href="url.fullUrl" target="_blank">{{ url.fullUrl }}</a>
				</div>
				<div class="flex gap-3 items-center">
					<a
						:href="`url/${url.shortUrl}`"
						target="_blank"
						@click="copyURI"
						class="font-bold hover:opacity-70 hover:text-green-700"
					>
						{{ url.shortUrl }}
					</a>
					<IconsCheck v-if="hasCopied" />
				</div>
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
	import { useUrlShortener, useCopy } from '../composable';

	const { handleDeleteUrl, loadUrls, urlsList, isLoading } = useUrlShortener();
	const { copyURI, hasCopied } = useCopy();

	onBeforeMount(() => {
		loadUrls();
	});
</script>
