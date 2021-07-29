const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const durationInput = document.getElementById('duration');
const startimer = startButton.addEventListener('click', start);
const pauseTimer = pauseButton.addEventListener('click', pause);
let inter;

function start() {
	inter = setInterval(tick, 1000);
}
function pause() {
	clearInterval(inter);
}
function tick() {
	const timeRemaining = durationInput.value;
	durationInput.value = timeRemaining - 1;
	if (timeRemaining - 1 <= 0) {
		pause();
	}
}
