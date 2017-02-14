'use strict';

function init() {
    console.log('init fired!');
    function keyPressHandler(evt) {
        const key = evt.keyCode.toString();
        play(key);
    }

    function play(key) {
        const active = document.querySelectorAll(`[data-key='${key}']`)[0];
        const audio = document.querySelectorAll(`[data-key='${key}']`)[1];
        if(active && audio) {
            //rewind sound before playing
            audio.currentTime = 0;
            audio.play();

            //highlight key
            active.classList.add('active');
            setTimeout(() => {
                active.classList.remove('active');
            }, 200);
        }
    }

    document.addEventListener('keypress', keyPressHandler, false);
}

window.addEventListener('load', init, false);