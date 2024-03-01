<template>
	<div class="flex gap-3 items-center">
		<a
			:href="`url/${shortUrl}`"
			target="_blank"
			@click="copyURI"
			class="font-bold hover:opacity-70 hover:text-green-700"
		>
			{{ shortUrl }}
		</a>
		<IconsCheck v-if="hasCopied" />
	</div>
</template>
<script setup lang="ts">
	import { useCopy } from '../composable';
	const { copyURI, hasCopied } = useCopy();

	interface Props {
		shortUrl: string;
	}

	const { shortUrl } = defineProps<Props>();
</script>
