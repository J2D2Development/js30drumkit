/*
TODO
    1) html structure
    2) css styling - basic
    3) keycodes for drums
    4) css styling- on keypress add/remove classes
    4) audio api?  - use wes bos video for this part, do it last
*/
'use strict';

function init() {
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

document.addEventListener('DOMContentLoaded', init, false);