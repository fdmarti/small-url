<template>
	<nav class="flex justify-between p-10 sm:flex-row flex-col items-center gap-5 sm:gap-0">
		<div>
			<NuxtLink class="uppercase font-bold text-3xl text-slate-800 dark:text-white" to="/">SmallUrl</NuxtLink>
		</div>

		<div class="flex items-center gap-5">
			<button @click="changeTheme" class="w-6">
				<IconsSun v-if="isDark" />
				<IconsMoon v-else />
			</button>
			<ul class="flex gap-5">
				<li>
					<NuxtLink class="hover:opacity-80 font-semibold dark:text-white" to="/">Home</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>
<script lang="ts" setup>
	import { useDark } from '../composable';

	const { changeTheme, isDark, loadCurrentTheme } = useDark();

	onMounted(() => loadCurrentTheme('small-url-theme'));
</script>
