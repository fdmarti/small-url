const characters =
	'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const shortId = {
	getRandomSmallId(valueNumber: number = 10): string {
		const randomCharacteres = [];

		for (let i = 0; i <= valueNumber; i++) {
			const randomNumber = Math.floor(Math.random() * characters.length);
			randomCharacteres.push(characters[randomNumber]);
		}

		return randomCharacteres.join('');
	},
};
