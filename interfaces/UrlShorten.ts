export interface UrlShorten {
	fullUrl: string;
	shortUrl: string;
	currentDate: Date;
}

export interface UrlShortenMongo extends UrlShorten {
	_id: string;
	__v: string;
}
