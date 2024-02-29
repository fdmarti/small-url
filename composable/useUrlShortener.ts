import type { Response, UrlShorten } from '../interfaces';
import { useLocalStorage } from './useLocalStorage';

export const useUrlShortener = () => {
	const stUrl = ref<string>('');
	const listComponentKey = ref<number>(0);
	const isLoading = ref<boolean>(false);
	const hasError = ref<boolean>(false);
	const urlsList = ref<UrlShorten[]>([]);

	const handleSubmitForm = async () => {
		isLoading.value = true;

		try {
			const resp: Response = await $fetch('api/url', {
				method: 'POST',
				body: {
					url: stUrl.value.trim(),
				},
			});

			useLocalStorage.setMyCurrentUrl(resp.urlShort);
			stUrl.value = '';
			forceReRenderList();
		} catch (error) {
			hasError.value = true;
			resetErrorStatus();
		}

		isLoading.value = false;
	};

	const loadUrls = () => {
		urlsList.value = useLocalStorage.getMyCurrentUrl();
		isLoading.value = false;
	};

	const resetErrorStatus = () => {
		setTimeout(() => {
			hasError.value = false;
		}, 3000);
	};

	const handleDeleteUrl = async (shortUrl: string) => {
		useLocalStorage.deleteUrl(shortUrl);
		loadUrls();
	};

	const forceReRenderList = () => {
		listComponentKey.value += 1;
	};

	return {
		handleSubmitForm,
		handleDeleteUrl,
		loadUrls,

		stUrl,
		isLoading,
		hasError,
		urlsList,
		listComponentKey,
	};
};
