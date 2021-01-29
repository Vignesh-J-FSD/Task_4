// Create a request var
var request = new XMLHttpRequest();

// Create a new connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);

// Send request
request.send();

// Load response
request.onload = function(){
    let data = JSON.parse(this.response);
    //console.log(data[0]);

    var asia_countries = data.filter((country) => {return country.currencies[0].code === 'USD'});
    //console.log(asia_countries.length);

    for(var country of asia_countries){
        console.log(country);
    }
}