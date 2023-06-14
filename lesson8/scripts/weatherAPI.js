async function resolveWeatherInfo() {
    let longitute = document.getElementById("longitute").value;
    let latitute = document.getElementById("latitute").value;
    let result = document.getElementById("result");

    let infoFromApi = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitute}&longitude=${longitute}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`, {
        method: "GET"
    });

    let infoFromApiInJson = await infoFromApi.json();

    result.innerHTML = `
    <p> Temerature at the longitute of ${longitute} and at the latitute of ${latitute} is: ${infoFromApiInJson.current_weather.temperature} </p>
    `

}