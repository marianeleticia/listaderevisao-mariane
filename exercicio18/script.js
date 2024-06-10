// Mariane Letícia Souza Moreira
function initMap() {
    var myLatLng = {lat: -23.5505, lng: -46.6333};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 12
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'São Paulo'
    });
}