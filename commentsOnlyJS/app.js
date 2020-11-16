// Personal API Key for OpenWeatherMap API
const server = require('../server');
const url = "api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}";
// Event listener to add function to existing HTML DOM element
const btn = document.getElementById('generate');


/* Function called by event listener */
btn.onclick = () => {
    postData();
}


/* Function to GET Web API Data*/
function getData() {

}

/* Function to POST data */
function postData () {
    const zip = document.getElementById('zip').value;
    const fell = document.getElementById('feelings').value;

    let projectData = server.projectData;
    projectData = {
        zip: zip,
        fell: fell
    }
};

/* Function to GET Project Data */

