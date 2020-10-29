var map;

function initMap() {
  let losAngeles = { lat: 34.06338, lng: -118.35808 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: losAngeles,
    zoom: 8
  });
  getStores();
  createMarker();
}

const getStores = () => {
  const API_URL = "http://localhost:3000/api/stores";
  fetch(API_URL)
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then((data) => {
      searchLocationsNear(data);
    });
};

const searchLocationsNear = (stores) => {
  let bounds = new google.maps.LatLngBounds();
  stores.forEach((store, index) => {
    let latlng = new google.maps.LatLng(
      store.location.coordinates[1],
      store.location.coordinates[0]
    );
    let name = store.storeName;
    let address = store.addressLines[0];
    bounds.extend(latlng);
    createMarker(latlng, name, address);
  });
  map.fitBounds(bounds);
};

const createMarker = (latlng, name, address) => {
  var marker = new google.maps.Marker({
    position: latlng,
    map: map
  });
};
