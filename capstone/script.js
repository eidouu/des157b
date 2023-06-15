( function(){
    "use strict"; 
    console.log('reading js');

    //hover icon to change logo
    const logo = document.querySelector("#topbar img");
    const title = document.querySelector("#topbar h1"); 
    logo.addEventListener('mouseout', function(){
        logo.src = "images/CowLogoColor.svg"; 
        title.style.color = "#ffeaec"; 
    })
    logo.addEventListener('mouseover', function(){
        logo.src = "images/CowLogoBW.svg"; 
        title.style.color = "white"; 
    });
    

    // open welcome window by clicking on welcome icon
    const welcome = document.querySelector("#welcome");
    welcome.addEventListener('click', function(){
        welcomeWin.style.visibility = "visible"; 
    });

    const welcomeWin = document.querySelector("#welcomeWin");

    //close welcome window
    const welcomeClose = document.querySelector("#welcomeClose").addEventListener('click', function(){
        welcomeWin.style.visibility = "hidden"; 
    })

    // open about window by clicking on welcome icon
    const about = document.querySelector("#about");
    about.addEventListener('click', function(){
        aboutWin.style.visibility = "visible"; 
    });

    const aboutWin = document.querySelector("#aboutWin");

    //close about window
    const aboutClose = document.querySelector("#aboutClose").addEventListener('click', function(){
        aboutWin.style.visibility = "hidden"; 
    })


    // target elements with the "draggable" class
    interact('.draggable')
    .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    modifiers: [
        interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
        })
    ],
    // enable autoScroll
    autoScroll: true,

    listeners: {
        // call this function on every dragmove event
        move: dragMoveListener,

        // call this function on every dragend event
        // end (event) {
        // var textEl = event.target.querySelector('p')

        // textEl && (textEl.textContent =
        //     'moved a distance of ' +
        //     (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
        //             Math.pow(event.pageY - event.y0, 2) | 0))
        //     .toFixed(2) + 'px')
        // }
    }
    })

    function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
    }

    // this function is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener
})(); 