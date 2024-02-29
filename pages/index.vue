<template>
	<main class="px-5 ">
		<FormComponent />
	</main>
</template>
<script setup lang="ts">
	await useFetch('/url/url');

	useHead({
		title: 'Small Url',
		meta: [{ name: 'description', content: 'Small url' }],
	});
</script>
