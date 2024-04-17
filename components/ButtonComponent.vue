<template>
	<button
		class="bg-green-600 dark:bg-green-700 text-white p-3 w-full rounded-md hover:opacity-70"
		:class="{ 'cursor-wait': isLoading }"
		:disabled="isLoading"
	>
		<SpinnerButton v-if="isLoading" />
		<span v-else>Shorten URL</span>
	</button>
</template>

<script setup lang="ts">
	interface Props {
		isLoading: boolean;
	}

	const props = defineProps<Props>();
	const { isLoading } = toRefs(props);
</script>
