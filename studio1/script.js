( function(){
    'use strict';
    console.log('reading');
    const myVideo = document.querySelector('#myVideo');

    const line1 = document.querySelector('#line1'); 
    const line2 = document.querySelector('#line2'); 
    const line3 = document.querySelector('#line3'); 
    const line4 = document.querySelector('#line4'); 

    const beats = {
        // starts new line
        start: [3, 5, 9, 11, 16],

        //ends line
        stop: [4, 7, 10, 14, 19],

        line: [line1, line2, line3, line4, line5]
    }

    const loading = document.querySelector('img');

    // change playback speed based on mouse x location
    document.addEventListener('mousemove', function(event) {
        let mouseX = event.pageX;

        const width = window.innerWidth;
        
        // minimum speed: 0, maximum speed: 3
        const playbackRate = 0.5 + (mouseX / width) * 2.5;

        //continously update playback rate
        myVideo.playbackRate = playbackRate;
    });

    //shows one line at a time 
    const intervalID = setInterval(checkTime, 1000); 

    function checkTime(){
         
        for (let i = 0; i < beats.start.length; i++) {
            if (beats.start[i] < myVideo.currentTime && myVideo.currentTime < beats.stop[i]) {
                beats.line[i].className = "showing"; 
            } else {
                beats.line[i].className = "hidden"; 
            }
        }
    }

    //loading icon disappears when video fully loads
    myVideo.addEventListener('playing', function() {
        loading.style.display = 'none';
    });

})(); 