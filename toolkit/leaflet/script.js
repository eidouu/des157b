(function(){
    'use strict';

    // add your script here

    var map = L.map('map').setView([38.418129, -121.393257], 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([38.537424, -121.752892]).addTo(map);

    var circle = L.circle([38.397577, -121.396866], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var polygon = L.polygon([
        [38.405800,-121.414609],
        [38.405817,-121.413105],
        [38.406405,-121.413836]
    ]).addTo(map);
    
    marker.bindPopup("<b>Hello!</b><br>This is where I'm studying!.").openPopup();
    circle.bindPopup("This is my high school!");
    polygon.bindPopup("My favorite place to shop!");

    var popup = L.popup()
    .setLatLng([38.418129, -121.393257])
    .setContent("My hometown!")
    .openOn(map);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);

    function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
    }
    
    map.on('click', onMapClick);

    var popup = L.popup();

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }

    map.on('click', onMapClick);
}());

