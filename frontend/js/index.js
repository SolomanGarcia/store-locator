let map;

function initMap() {
  let losAngeles = { lat: 34.06338, lng: -118.35808 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: losAngeles,
    zoom: 8
  });

  createMarker();
}

const createMarker = () => {
  var marker = new google.maps.Marker({
    position: { lat: 34.06338, lng: -118.35808 },
    map: map
  });
};
