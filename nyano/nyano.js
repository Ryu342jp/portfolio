document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => playSound(key.dataset.note));
});

document.addEventListener('keydown', e => {
    if (e.repeat) return;
    const key = e.key.toLowerCase();
    const button = document.querySelector(`#key${key.toUpperCase()}`);
    if (button) {
        playSound(button.dataset.note);
    }
});

function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}

