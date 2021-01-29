// Create a request var
var request = new XMLHttpRequest();

// Create a new connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);

// Send request
request.send();

// Load response
request.onload = function(){
    let data = JSON.parse(this.response);

    var population = data.reduce((i , country) => { return i + country.population},0);
    console.log(population);
}