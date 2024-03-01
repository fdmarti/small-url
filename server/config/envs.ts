import env from 'env-var';

export const envs = {
	MONGO_URL: env.get('MONGO_URL').required().asUrlString(),
	MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
	MONGO_INITDB_ROOT_USERNAME: env
		.get('MONGO_INITDB_ROOT_USERNAME')
		.required()
		.asString(),
	MONGO_INITDB_ROOT_PASSWORD: env.get('MONGO_INITDB_ROOT_PASSWORD').required(),
};
