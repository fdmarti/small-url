export const useCopy = () => {
	const hasCopied = ref<boolean>(false);

	const copyURI = (event: any) => {
		event.preventDefault();
		const { target } = event;

		navigator.clipboard
			.writeText(target.baseURI + target.getAttribute('href'))
			.then(() => {
				hasCopied.value = true;
			});

		setTimeout(() => {
			hasCopied.value = false;
		}, 1000);
	};

	return {
		copyURI,

		hasCopied,
	};
};
