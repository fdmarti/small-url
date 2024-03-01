import { UrlModel } from '~/server/data/mongo/models/url.model';

export default defineEventHandler(async (event) => {
	const shortUrl = getRouterParam(event, 'id');
	const fullUrlData = await UrlModel.findOne({ shortUrl });

	if (fullUrlData) {
		sendRedirect(event, fullUrlData.fullUrl!);
	} else {
		sendRedirect(event, '/');
	}

	return {
		fullUrlData,
	};
});
