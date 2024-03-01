<template>
	<div class="max-w-[500px]">
		<a :href="fullUrl" target="_blank">{{ validateLongUrlLength }}</a>
	</div>
</template>
<script setup lang="ts">
	interface Props {
		fullUrl: string;
	}

	const { fullUrl } = defineProps<Props>();

	const validateLongUrlLength = computed(() => {
		return fullUrl.length > 50 ? fullUrl.slice(0, 50) + '...' : fullUrl;
	});
</script>
