// Set api token
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZGUxMDkiLCJhIjoiY2tuN21wbnZ3MGpseTJwbno3OGdpNXVkZCJ9.ppN8z4wDqZv3h78b2LY7CQ';

// Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-9.1365919, 38.7077507],
  zoom: 5

});

// Add the control to the map.
var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));


function lisabon() {

  var url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=nl';
  var locatie = 'lisabon';
  var apiKey = '0a1773633e75e29b25202df82290c678';

  var request = url + '&q=' + locatie + '&apikey=' + apiKey;

  fetch(request)

    .then(function (response) {
      return response.json();
    })

    .then(function (response) {
      var weatherBox = document.getElementById('lisabon');
      var naam = response.name;
      var type = response.weather[0].description;
      var temp = response.main.temp;
      weatherBox.innerHTML = naam + '<br>' + type + '<br>' + temp + '&#176;C';
    });
}

function bali() {

  var url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=nl';
  var locatie = 'bali';
  var apiKey = '0a1773633e75e29b25202df82290c678';

  var request = url + '&q=' + locatie + '&apikey=' + apiKey;

  fetch(request)

    .then(function (response) {
      return response.json();
    })

    .then(function (response) {
      var weatherBox = document.getElementById('bali');
      var naam = response.name;
      var type = response.weather[0].description;
      var temp = response.main.temp;
      weatherBox.innerHTML = naam + '<br>' + type + '<br>' + temp + '&#176;C';
    });
}

function sydney() {

  var url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=nl';
  var locatie = 'sydney';
  var apiKey = '0a1773633e75e29b25202df82290c678';

  var request = url + '&q=' + locatie + '&apikey=' + apiKey;

  fetch(request)

    .then(function (response) {
      return response.json();
    })

    .then(function (response) {
      var weatherBox = document.getElementById('sydney');
      var naam = response.name;
      var type = response.weather[0].description;
      var temp = response.main.temp;
      weatherBox.innerHTML = naam + '<br>' + type + '<br>' + temp + '&#176;C';
    });
}

function washington() {

  var url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=nl';
  var locatie = 'washington';
  var apiKey = '0a1773633e75e29b25202df82290c678';

  var request = url + '&q=' + locatie + '&apikey=' + apiKey;

  fetch(request)

    .then(function (response) {
      return response.json();
    })

    .then(function (response) {
      var weatherBox = document.getElementById('washington');
      var naam = response.name;
      var type = response.weather[0].description;
      var temp = response.main.temp;
      weatherBox.innerHTML = naam + '<br>' + type + '<br>' + temp + '&#176;C';
    });
}

function moscow() {

  var url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lang=nl';
  var locatie = 'moscow';
  var apiKey = '0a1773633e75e29b25202df82290c678';

  var request = url + '&q=' + locatie + '&apikey=' + apiKey;

  fetch(request)

    .then(function (response) {
      return response.json();
    })

    .then(function (response) {
      var weatherBox = document.getElementById('moscow');
      var naam = response.name;
      var type = response.weather[0].description;
      var temp = response.main.temp;
      weatherBox.innerHTML = naam + '<br>' + type + '<br>' + temp + '&#176;C';
    });
}

lisabon();
bali();
sydney();
washington();
moscow();
