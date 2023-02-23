function addSmoothScroll(id, targetID) {
    let anchor = document.getElementById(id);

    anchor.addEventListener('click', () => {        
        let el = document.getElementById(targetID)
        el.scrollIntoView({behavior: "smooth"});
    });
}


if (document.getElementById('about-overlay') != null) {
  addSmoothScroll("about-anchor", "fake-nav");
  addSmoothScroll("project-anchor", "projects-title");
  addSmoothScroll("experience-anchor", "experience-title");
  addSmoothScroll("gallery-anchor", "gallery-title");
}

// From google places API.
var map;
var service;
var infowindow;

function initMap() {
  var sydney = new google.maps.LatLng(41.8268, -71.4025);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('map'), {center: sydney, zoom: 15});

  var request = {
    query: 'Brown University Hall',
    fields: ['name', 'geometry'],
  };

  service = new google.maps.places.PlacesService(map);

  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}

// End of places code.

let totalResults = []

function retrieveRestaurants() {
  var request = {
    keyword: 'restaurant',
    type: 'restaurant',
    location: {lat: 41.8268, lng: -71.4025},
    radius: '2000',
    fields: ['name', 'geometry'],
    openNow: true,
  };
  let searching = false;

  service.nearbySearch(request, function(results, status, pagination) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log('im being called')
      for (var i = 0; i < results.length; i++) {
        totalResults.push(results[i])
      }
      if (pagination && pagination.hasNextPage) {
          if (!searching) {
            document.getElementById('loading').style.visibility = 'visible';
          }
          pagination.nextPage();
          // set some boolean true, make something appear (once setting it true)
      } else {
        document.getElementById('loading').style.visibility = 'hidden';
        let chosen = totalResults[Math.floor(Math.random()*totalResults.length)];
        createMarker(chosen)
        map.setCenter(chosen.geometry.location)
        document.getElementById('result').innerHTML = chosen.name;
      }
    }
  });
}
  
window.initMap = initMap;

if (document.getElementById('restaurant') != null) {
  document.getElementById('restaurant-search').addEventListener("click", retrieveRestaurants)
} 
