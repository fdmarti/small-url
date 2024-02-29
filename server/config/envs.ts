import env from 'env-var';

export const envs = {
	MONGO_URL: env.get('MONGO_URL').required().asUrlString(),
	MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
};
