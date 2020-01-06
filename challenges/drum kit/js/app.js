function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}
function playSound(e) {
  const audio = document.querySelector(`audio [data-key=:${e.keyCode}]`);
  const key = document.querySelector(`div[data-key=${e.keyCode}]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
const timers = {};
window.addEventListener("keydown", e => {
  const key = e.keyCode;
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  if (audio) {
    const timerId = `timer-${key}`;
    if (timers[timerId] && timers[timerId].clearTimeout) {
      timers[timerId].clearTimeout();
    }
    audio.currentTime = 0;
    audio.play();
    const div = document.querySelector(`div.key[data-key="${key}"]`);
    div.classList.add("playing");
    timers[timerId] = setTimeout(() => div.classList.remove("playing"), 200);
  }
});
