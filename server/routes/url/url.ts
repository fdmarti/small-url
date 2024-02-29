import { envs } from "~/server/config";
import { MongoDataBaseConection } from "~/server/data";

export default defineEventHandler(async (event) => {
	await MongoDataBaseConection.connect({
		dbName: envs.MONGO_DB_NAME,
		mongoUrl: envs.MONGO_URL,
	});

	return {
		message: 'Server running',
	};
});
