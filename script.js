function updateData() {

    let aqi = Math.floor(Math.random() * 151) + 1;
    let pm25 = Math.floor(Math.random() * 81) + 10;
    let co = (Math.random() * 6 + 1).toFixed(1);
    let temperature = Math.floor(Math.random() * 11) + 25;

    document.getElementById("aqi").innerText = aqi;
    document.getElementById("pm25").innerText = pm25;
    document.getElementById("co").innerText = co;
    document.getElementById("temperature").innerText =
        temperature + "°C";

    let status = document.getElementById("aqiStatus");
    let alertBox = document.getElementById("alertBox");

    if (aqi <= 50) {

        status.innerText = "Good";

        alertBox.innerHTML =
            "<h3>✅ Good Air Quality</h3>" +
            "<p>Air pollution level is low.</p>";

    } else if (aqi <= 100) {

        status.innerText = "Moderate";

        alertBox.innerHTML =
            "<h3>⚠️ Moderate Air Quality</h3>" +
            "<p>Air quality should be monitored.</p>";

    } else {

        status.innerText = "Poor";

        alertBox.innerHTML =
            "<h3>🚨 Poor Air Quality</h3>" +
            "<p>High pollution level detected.</p>";
    }
}