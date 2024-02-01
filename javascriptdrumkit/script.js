window.addEventListener("keydown", playSound);
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;//to replay the sound before it is done playing
    audio.play();
    key.classList.add("playing");
}
const keys = document.querySelectorAll('.key');
keys.forEach(k => k.addEventListener('transitionend', removeTransition));
function removeTransition(e) {
    if (e["propertyName"] !== 'transform') return;
    console.log(e);
    this.classList.remove('playing');
}