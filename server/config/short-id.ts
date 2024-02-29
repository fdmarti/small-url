const characters =
	'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const shortId = {
	getRandomSmallId() {
		const randomCharacteres = [];

		for (let i = 0; i <= 10; i++) {
			const randomNumber = Math.floor(Math.random() * characters.length);
			randomCharacteres.push(characters[randomNumber]);
		}

		return randomCharacteres.join('');
	},
};
