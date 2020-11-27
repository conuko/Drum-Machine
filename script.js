
const allKeys = Array.from(document.querySelectorAll('.key'));

// outputs the audio linked to the klicked key
const playSound = (event) => {
    // select the audio tags:
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    // select the class="key":
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    // make sure we get no error message when we hit a button not connected to a audio:
    if(!audio) return; 
    // make sure we can hit the button over and over very fast and the audio will still be played:
    audio.currentTime = 0;
    // Else if we hit a button connected to audio, audio will be played:
    audio.play();
    key.classList.add('playing');
}

const removePlayingEffect = (event) => {
    // skip it if it's not a transform:
    if (event.propertyName !== 'transform') return;
    // else, remove the playing class:
    event.target.classList.remove('playing')
}


allKeys.forEach(key => key.addEventListener('transitionend', removePlayingEffect));
window.addEventListener('keydown', playSound);
