import { regularExps } from '../config/regular-exp';
import { UrlModel } from '../data/mongo/models/url.model';

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { url } = body;

	const isValidUrl = regularExps.url.test(url.trim());
	if (!isValidUrl) {
		setResponseStatus(event, 400);
		return { error: 'Invalid url' };
	}

	try {
		const urlShort = new UrlModel({
			fullUrl: url,
		});
		await urlShort.save();

		return {
			urlShort,
			status: true,
		};
	} catch (error) {
		return {
			error,
			status: false,
		};
	}
});
