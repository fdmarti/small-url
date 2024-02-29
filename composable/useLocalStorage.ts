import type { UrlShortenMongo, UrlShorten } from '../interfaces';

export const useLocalStorage = {
	getMyCurrentUrl() {
		let urls = localStorage.getItem('short-urls');

		if (!urls) {
			localStorage.setItem('short-urls', JSON.stringify([]));
			return (urls = '[]');
		}

		return JSON.parse(urls);
	},

	setMyCurrentUrl(shortUrl: UrlShortenMongo) {
		const urls = this.getMyCurrentUrl();
		const { _id, __v, ...rest } = shortUrl;

		urls.push({ ...rest });

		localStorage.setItem('short-urls', JSON.stringify(urls));
	},

	setUrl(urlsList: UrlShorten[]) {
		localStorage.setItem('short-urls', JSON.stringify(urlsList));
	},

	deleteUrl(shortUrl: string) {
		const urls = this.getMyCurrentUrl();

		const urlsFiltered = urls.filter(
			(url: UrlShorten) => url.shortUrl !== shortUrl,
		);

		this.setUrl(urlsFiltered);
	},
};
