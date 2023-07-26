//1. We need to create a search butto on click to run the getCoords function 
    //run first fetch here 
//2. Taking the response from the api call from step 1 to then place into getweaterfunction(lat, long)
    //run recont fetch here 
//3. list of 4o but we only need 5 days for the forecast so we need to do is find a way to get one of the time points in the 40 list to get the 5 days (PUT IN ARRAY)
//4. those 5 days will beplaced into the cards

var response = fetch("https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=15a19c21cf148d2b92e9e11c314a78f5")
    .then(function (response) { return response.json() })
    .then(
        function(data) {
            console.log(data) 
            //code for data goes here
        }
    )
