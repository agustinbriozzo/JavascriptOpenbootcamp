let markers, map;

function initMap() {
    const posicion = {
        lat: -25.363,
        lng: 131.044,
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion,
    });

    markers.push(
        new google.maps.Marker({
            position: {
                lat: -33.8175159,
                lng: -59.5066488,
            },
            map,
            title: "Baradero",
        })
    );
    markers.push(
        new google.maps.Marker({
            position: {
                lat: -34.6166382,
                lng: 58.4550299,
            },
            map,
            title: "Caballito",
            })
        );
        markers.push(
            new google.maps.Marker({
                position: {
                    lat: 41.2228251,
                    lng: -112.0550741,
                },
                map,
                title: "Ogden",
            })
        );
}