// Paramètrage de l'horloge.

clock();

function clock() {

  // Récupération de la date et de l'heure du jour via windows.

  const date = new Date();

  // getHours + 11, vu que le cadran va jusqu'à 12 et que 12 est considéré comme 0, donc 11.
  // +1 pour rajouter une heure une fois la condition atteinte.

  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

  // Paramètrage de la rotation des aiguilles.
  
  document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;

  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

  document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
}

// Paramètrage de l'interval de la fonction "clock" avec un délai de 1000 millisecondes.

setInterval(clock, 1000);






// Paramètrage de la météo.

/*const APIkey = '434c80403bcedf26b6852e0317eae912';
let resultatsAPI;

const temperature = document.querySelector('.temperature1');
let url = `https://api.openweathermap.org/data/2.5/forecast?q=Besancon&units=metric&lang=fr&appid=${APIkey}`

const temperatureLendemain = document.querySelector('.temperature2');

let apiCall = function(city){
fetch(url).then( response => 
  response.json().then((data => {
    console.log(data)
    document.querySelector('.villeChoisie').innerHTML = data.name;
    document.querySelector('.temperature1').innerHTML = data.temp;
  }
)
  ))

  //temperature.innerText = `${Math.trunc(resultatsAPI.current.temp)}°C`;
  //localisation.innerText = resultatsAPI.name;
  //temperatureLendemain.innerText = `${Math.trunc(resultatsAPI.daily[1].temp.day)}°C`;

/*function AppelAPI(cityname) {

}
 fetch(`api.openweathermap.org/data/2.5/forecast/daily?q=${cityname}&cnt=${cnt}&appid=${APIkey}`)
  .then((reponse) => {
    return reponse.json();
})
.then((data) => {
 console.log(data);
})
  /*resultatsAPI = data;

  temperature.innerText = `${Math.trunc(resultatsAPI.current.temp)}°C`;
  localisation.innerText = resultatsAPI.name;
  temperatureLendemain.innerText = `${Math.trunc(resultatsAPI.daily[1].temp.day)}°C`;

/*if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {

    //console.log(position);
    let long = position.coords.longitude;
    let lat = position.coords.latitude;
    AppelAPI(long,lat);

  }, () =>{
    alert(`vous avez refusé la géolocalisation, l'application ne peut pas fonctionner, veuillez l'activer.`)
  } )
}

function AppelAPI(long,lat) {
  
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${APIkey}`)
  .then((reponse) => {
    return reponse.json();
})
.then((data) => {
 console.log(data);

  resultatsAPI = data;

  temperature.innerText = `${Math.trunc(resultatsAPI.current.temp)}°C`;
  localisation.innerText = resultatsAPI.timezone;
  temperatureLendemain.innerText = `${Math.trunc(resultatsAPI.daily[1].temp.day)}°C`;

})
}

function AppelAPI2(long,lat) {
  
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${APIkey}`)
  .then((reponse) => {
    return reponse.json();
})
.then((data) => {
 console.log(data);

  resultatsAPI = data;

  temperatureLendemain.innerText = `${Math.trunc(resultatsAPI.daily.1.temp.day)}°C`;
  
})
}
*/