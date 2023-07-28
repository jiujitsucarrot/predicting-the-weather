# 06 Weather Man

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the 5 Day Weather Forecast to retrieve weather data for cities. The base URL should look like the following: https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

Hint: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use localStorage to store any persistent data. For more information on how to work with the OpenWeather API, refer to the Full-Stack Blog on how to use API keys.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

```

## Series of Events

First, the challenge is unfortunately incomplete. Still have more work to do but at the moment, these are the events that took place. This was a challenging assignment to attack. I started with getting access to the API key, followed by structuring the HTML and CSS to give me a bit of a visual where data would appear. I then moved over to the JavaScript, the goal was to display a 5 day weather forecast. I then set up a couple fetch calls in order to retrieve the data needed for the page. The original code I wrote gave me a temperature reading in Kelvin instead of Farenheit. I converted it over by adding &units=imperial which then gave me my reading in Farenheit. Functions were set to display weather data, get unique dates, and get the forecast for the date. Unfortunately I have hit a bit of a wall and have more work to do. I will be re submitting my assignment as soon as I finish it. 



## Sources 

Sources for this challenge so far have been revisting course lectures, looking over notess, reaching out to my colleagues and classmates. I have been utilizing office hours, class, weekly tutoring session. I have also utilized YouTube, Google, JavaScript for Dummies, class activities, podcasts, and having conversations with others about coding concepts.


## Screenshots

* ![Alt text](<Screenshot 2023-07-27 at 11.46.53 PM (2).png>)

## Final Submission

* https://jiujitsucarrot.github.io/predicting-the-weather/
* https://github.com/jiujitsucarrot/predicting-the-weather

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

## Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.
>
> * Uses the OpenWeather API to retrieve weather data.
>
> * Uses localStorage to store persistent data.

## Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository that contains application code.

## Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the challenge instructions.

## Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, scrrenshot, and link to deployed application.

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

