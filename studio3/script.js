( function(){
    "use strict"; 
    console.log("reading.js"); 

    const window = document.querySelector("#window"); 
    let name = document.querySelector("div h3");
    let description = document.querySelector("div p");
    let color = document.querySelector("#pic");
    const close = document.querySelector(".fa-solid").addEventListener('click', function(){
        window.style.visibility = "hidden"; 
    })
    //get data from json file
    async function getData(){

        name.innerHTML = "";
        description.innerHTML = ""; 
        color.style.backgroundColor = ""; 

        //get files
        const cats = await fetch('cats.json'); 

        //lets us actually use the data 
        const catData = await cats.json(); 

        // generates a random card every time you click on search 
        const search = document.querySelector("button").addEventListener('click', function(){
            let rng = Math.floor(Math.random()*5); 
            window.style.visibility = "visible"; 
            name.innerHTML = catData[`${rng}`]['name']; 
            color.style.backgroundColor = catData[`${rng}`]['color']; 
            console.log(catData[`${rng}`]['color']);
            console.log(catData[`${rng}`]['name']); 
            console.log(rng); 
            description.innerHTML = catData[`${rng}`]['description']; 

        })

    };

    getData(); 

    // Interact library

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

    //granim stuff
    var granimInstance = new Granim({
        element: '#canvas-basic',
        direction: 'left-right',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#494C7E', '#252742'],
                    ['#26294B', '#5158AA'],
                    ['#484C7A', '#575DAA']
                ]
            }
        }
    });

})(); 