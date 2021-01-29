// Create a request var
var request = new XMLHttpRequest();

// Create a new connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);

// Send request
request.send();

// Load response
request.onload = function(){
    let data = JSON.parse(this.response);   

    data.forEach((country) => {
        console.log(`Name : ${country.name}, Capital : ${country.capital}, Flag : ${country.flag}`);
    });
}