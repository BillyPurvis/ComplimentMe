document.addEventListener('DOMContentLoaded', () => {
	const complimentArray = [
		'I like your style.',
		'You are like a spring flower; beautiful and vivacious.',
		'You complete me.',
		'Your mouse told me that you have very soft hands',
		'You kick ass.'	,
		'You are irreplaceable.',
		'I am so proud of you',
		'Mistakes are proof that you are trying. Keep at it.',
		'Your value does not decrease based on someones inability to see your worth.',
		'Remember, today is the tomorrow you worried about yesterday',
		'Some days there wont be a song in your heart. Sing anyway',
		'Be strong, you never know who you are inspiring',
		'It might be stormy now, but it cannot rain forever',
		'You have not failed until you quit trying',
		'Obsessed is a word the lazy use to describe the dedicated.',
		'Do not let your struggle become your identity.',
	]
	let clickCount = 0;
	document.querySelector('#button').addEventListener('click', () => {
		clickCount++;
		let randomNum = Math.floor(Math.random() * complimentArray.length);
		document.querySelector('#quote').innerHTML = complimentArray[randomNum];

		if (clickCount >= 3) {
			document.querySelector('audio').play();
		}
	})
})