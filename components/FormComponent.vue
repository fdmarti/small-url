<template>
	<div>
		<div class="max-w-xl bg-white mx-auto mt-16 text-gray-900 p-10 rounded-lg">
			<form
				class="flex flex-col gap-5 items-start relative"
				@submit.prevent="handleSubmitForm"
			>
				<input
					type="url"
					placeholder="Enter a long url here"
					class="w-full rounded-md p-2 border-gray-100 border-2 focus:outline-1 focus:outline-gray-400"
					:class="{ 'border-red-400 border-2 focus:outline-red-400': hasError }"
					autofocus
					v-model="stUrl"
				/>
				<IconsWarning v-if="hasError" />
				<button
					class="bg-green-600 text-white p-3 w-full rounded-md hover:opacity-70"
					:class="{ 'cursor-wait': isLoading }"
					:disabled="isLoading"
				>
					<SpinnerButton v-if="isLoading" />
					<span v-else>Shorten URL</span>
				</button>
			</form>
		</div>
		<ClientOnly>
			<ListUrlsComponent :key="listComponentKey" />
		</ClientOnly>
	</div>
</template>
<script setup lang="ts">
	import { useUrlShortener } from '../composable';
	const { handleSubmitForm, stUrl, isLoading, listComponentKey, hasError } =
		useUrlShortener();
</script>
