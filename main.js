let projectPictures = document.getElementsByClassName("projectPic");

window.addEventListener( 'resize', sizePictures);

size(600)
function size(min) {
  if (document.getElementById('pageTop') != null) {
    if (window.innerWidth < min) {
      document.getElementById('pageTop').style.flexDirection = 'column';
      document.getElementById('tyson').style.scale = '0.9';
      let projects = document.getElementsByClassName('projectBox')
      for (let i = 0; i < projects.length; i++) {
          projects[i].style.flexDirection = "column"
      }

      let experiences = document.getElementsByClassName('experience-box')
      for (let i = 0; i < experiences.length; i++) {
          experiences[i].style.flexDirection = "column"
      }
    } else {
      document.getElementById('pageTop').style.flexDirection = 'row';
      let projects = document.getElementsByClassName('projectBox')
      for (let i = 0; i < projects.length; i++) {
          projects[i].style.flexDirection = "row"
      }

      let experiences = document.getElementsByClassName('experience-box')
      for (let i = 0; i < experiences.length; i++) {
          experiences[i].style.flexDirection = "row"
      }
    } 
  }

  if (document.getElementById('restaurant') != null) {
    if (window.innerWidth < min) {
      document.getElementById('restaurant').style.flexDirection = 'column';
      document.getElementById('restaurant').style.marginTop = '20%';

    } else {
      document.getElementById('restaurant').style.flexDirection = 'row';
      document.getElementById('restaurant').style.marginTop = '8%';
    } 
  } 
}


sizePictures();
function sizePictures() {
    for (let i = 0; i < projectPictures.length; i++) {
        let w = (window.innerWidth / 5) + 'px';
        projectPictures[i].style.width = w;    
        projectPictures[i].style.height = 'auto';
    }

    size(800)
}


function addSmoothScroll(id, targetID) {
    let anchor = document.getElementById(id);

    anchor.addEventListener('click', () => {        
        let el = document.getElementById(targetID)
        el.scrollIntoView({behavior: "smooth"});
    });
}


if (document.getElementById('pageTop') != null) {
  addSmoothScroll("about-anchor", "aboutMe");
  addSmoothScroll("project-anchor", "projects");
  addSmoothScroll("experience-anchor", "experience");
  addSmoothScroll("gallery-anchor", "gall");
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
