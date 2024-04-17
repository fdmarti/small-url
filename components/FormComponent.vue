<template>
	<div>
		<div class="max-w-xl dark:bg-slate-600 bg-slate-300 mx-auto mt:0 sm:mt-16 text-gray-900 p-10 rounded-lg shadow-lg">
			<form
				class="flex flex-col gap-5 items-start relative"
				@submit.prevent="handleSubmitForm">
				<input
					type="url"
					placeholder="Enter a long url here"
					class="w-full rounded-md p-2 border-gray-100 border-2 focus:outline-1 focus:outline-gray-200 dark:focus:outline-gray-500"
					:class="{ 'border-red-400 border-2 focus:outline-red-400': hasError }"
					autofocus
					v-model="stUrl"
				/>
				<IconsWarning v-if="hasError" />
				<ButtonComponent :isLoading="isLoading"/>
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
