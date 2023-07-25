var response = fetch("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=15a19c21cf148d2b92e9e11c314a78f5")
    .then(function (response) { return response.json() })
    .then(
        function(data) {
            console.log(data) 
            //code for data goes here
        }
    )
