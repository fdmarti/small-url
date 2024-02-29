import { Schema, model } from 'mongoose';
import { shortId } from '../../../config';

const UrlSchema = new Schema({
	fullUrl: {
		type: String,
		require: true,
	},
	shortUrl: {
		type: String,
		require: true,
		default: () => shortId.getRandomSmallId(),
	},
	currentDate: {
		type: Date,
		default: Date.now(),
	},
});

export const UrlModel = model('UrlShort', UrlSchema);
