import mongoose from 'mongoose';

interface ConectionOptions {
	mongoUrl: string;
	dbName: string;
}

export class MongoDataBaseConection {
	static async connect(options: ConectionOptions) {
		const { dbName, mongoUrl } = options;

		try {
			await mongoose.connect(mongoUrl, {
				dbName,
			});
		} catch (error) {
			console.log('Error to connect database');
			throw error;
		}
	}
}
