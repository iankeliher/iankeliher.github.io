//Hello world test
//console.log("this test is working for sunset");

// LIGHT / DARK MODE
// default is site set to light mode
// if site time is between sunset and sunrise, add darkmode class

$(document).ready(function(){


	// get user time in milliseconds
	var userTimeNow = Date.now();

	// get overall user time
	var userTime = new Date();

	// get user hours
	var userTimeHours = userTime.getHours();

	// get user minutes
	var userTimeMinutes = userTime.getMinutes();

	// get user seconds
	var userTimeSeconds = userTime.getSeconds();

	//pad times w/ 0s
	var userTimeHoursPad = userTimeHours.toString().padStart(2,"0");
	var userTimeMinutesPad = userTimeMinutes.toString().padStart(2,"0");
	var userTimeSecondsPad = userTimeSeconds.toString().padStart(2,"0");

	//put time in 00:00:00 24 hour format
	var userTime24 = userTimeHoursPad+":"+userTimeMinutesPad+":"+userTimeSecondsPad;

		// test value
		console.log("user time 24 hour clock: "+userTime24);


	// convert user time to 00:00:00 XX
	// user hours to 12 hour clock using modular arithmatic and an OR operator for the 12 at 0
	var userHoursAMPM = (userTimeHours % 12) || 12;

	// set am or pm by checking user hours and use conditional to set pm if true, am if false
	var AMPM = userTimeHours >= 12 ? "PM":"AM";

	// put it all together
	userTimeAMPM = userHoursAMPM+":"+userTimeMinutes+":"+userTimeSeconds+" "+AMPM;

		// check variable
		//console.log(userTimeAMPM);



	///////////////////////////////////////////////
	// SET SUN FUNCTION
	///////////////////////////////////////////////

	// create sun element based on Figma
	// fixed position
	// for top, calculate based on time b/t sunrise and sunset
	// Sunrise (low) mid-day (high) sunset (high)

	// 0% (value=0) of sun , 50% (value=1) of sun, 100% (value=0) of sun

	// get time

	// test values for sunrise and sunset
	// EDIT USERTIME VALUE FOR SUN MOVEMENT
	// HOOK THIS UP TO API INFO AND CURRENT USER TIME TO MAKE VARIABLE
	var sunriseValue = 100;
	var sunsetValue = 200;
	var userTimeValue = 200;

	var day = sunsetValue - sunriseValue;
	var elapsedTime = userTimeValue - sunriseValue;

	// get progress through day
	var dayProgress = (elapsedTime / day)*100;

	// test progress value
	console.log("the day's progress is..."+dayProgress);

	// empty sunheight value
	var sunHeight = 0;

	if (dayProgress <= 50) {
		var sunHeight = 100 - dayProgress*2;
		$(".sun").css("top",sunHeight+"%");
	} else {
		var sunHeight = dayProgress*2 - 100;
		$(".sun").css("top",sunHeight+"%")
		console.log("the sun height is..."+sunHeight);
	}



	// test value
	console.log("This is the value for day: "+day);



	///////////////////////////////////////////////
	// SET STARS FUNCTION
	///////////////////////////////////////////////

	for (let i=0; i < 100; i++) {

		// create a random number between 5 and 10 for width and height
		var size = Math.floor(Math.random() * 4) + 3;
		// create a random number for x position
		var xPos = Math.floor(Math.random() * 100) + 1;
		// create a random number for y position
		var yPos = Math.floor(Math.random() * 100) + 1;

		// create a div with styling, class = star
		$(".entries-container").append(

			'<div class="stars hide" style="position:fixed; top:'+yPos+'%; left:'+xPos+'%; width:'+size+'px; height:'+size+'px; border-radius:50%; background-color:white;"></div>'

			);


	}



	///////////////////////////////////////////////
	// API GET request for Sunrise Sunset API, get JSON
	///////////////////////////////////////////////

	var ssAPI = $.get("https://api.sunrise-sunset.org/json", function(data) {
		
		// focus on the Results section
		var ssAPIResults = data["results"];

		//test the data...
		console.log(ssAPIResults);
		console.log(ssAPIResults.sunset);

		// set data to variables
		var sunriseTime = ssAPIResults.sunrise;
		var sunsetTime = ssAPIResults.sunset;

		// change AM PM to 24 Hour clock by converting to UNIX date stamp
		// https://stackoverflow.com/questions/27117730/how-to-compare-time-with-am-pm-in-javascript

		// for time to sunset, take sunset time and subtract current time from it
		// use timeout 1000ms to have it refresh every second

		// for sunset time, convert time...

		//console.log(sunriseTime);

		//console.log(userTime);
		//console.log(sunsetTime);
		//console.log(sunriseTime);



		///////////////////////////////////////////////
		// GET SUNSET TIME INTO 00:00:00 24 HOUR FORMAT
		///////////////////////////////////////////////

		// split sunset time string using a regular expression to capture : and space
		var sunsetTimeArray = sunsetTime.split(/:| /);
		//console.log(sunsetTimeArray);

		// set hours of the array to manipulable numbers
		var sunsetTimeHourNum = +sunsetTimeArray[0];
		
		// if PM is used, add 12 to the time for 24 hour clock
		if (sunsetTimeArray[3]==="PM") {
			var sunsetTimeHourNum = sunsetTimeHourNum + 12;	
		}

		var sunsetTimeMinNum = sunsetTimeArray[1].padStart(2,"0");
		var sunsetTimeSecNum = sunsetTimeArray[2].padStart(2,"0");

		var sunsetTimeHourNum = sunsetTimeHourNum.toString();

		var sunsetTimeHourNum = sunsetTimeHourNum.padStart(2,"0");

		var sunsetTime24 = sunsetTimeHourNum+":"+sunsetTimeMinNum+":"+sunsetTimeSecNum;

		console.log("usertime 24 hour is "+userTime24+" and sunset time 24 is "+sunsetTime24);





		///////////////////////////////////////////////
		// GET SUNRISE TIME INTO 00:00:00 24 HOUR FORMAT
		///////////////////////////////////////////////

		// split sunset time string using a regular expression to capture : and space
		var sunriseTimeArray = sunriseTime.split(/:| /);
		//console.log("sunrise time array is "+sunriseTimeArray);

		// set hours of the array to manipulable numbers
		var sunriseTimeHourNum = +sunriseTimeArray[0];
		
		// if PM is used, add 12 to the time for 24 hour clock
		if (sunriseTimeArray[3]==="PM") {
			var sunriseTimeHourNum = sunriseTimeHourNum + 12;	
		}

		var sunriseTimeMinNum = sunriseTimeArray[1].padStart(2,"0");
		var sunriseTimeSecNum = sunriseTimeArray[2].padStart(2,"0");

		var sunriseTimeHourNum = sunriseTimeHourNum.toString();

		var sunriseTimeHourNum = sunriseTimeHourNum.padStart(2,"0");

		var sunriseTime24 = sunriseTimeHourNum+":"+sunriseTimeMinNum+":"+sunriseTimeSecNum;

		console.log("usertime 24 hour is "+userTime24+" and sunrise time 24 is "+sunriseTime24);




		///////////////////////////////////////////////
		// GET TWILIGHT TIMES INTO 00:00:00 24 HOUR FORMAT
		///////////////////////////////////////////////






		// set up static date for sunrise and sunset

		var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

		var newDate = new Date();
		var month = monthNames[newDate.getMonth()];

		var newDay = newDate.getDate();
		var year = newDate.getYear()+1900;

		// test string together
		//console.log(month+" "+newDay+", "+year+" "+sunriseTime24);

		var staticSunriseDate = new Date(month+" "+newDay+", "+year+" "+sunriseTime24);
		var staticSunsetDate = new Date(month+" "+newDay+", "+year+" "+sunsetTime24);

		// test output
		console.log(staticSunriseDate);
		console.log(staticSunsetDate);


		// set variables for in and out points for sunset
		var sunsetIn = staticSunsetDate.setTime(staticSunsetDate.getTime() - (10*60*1000));
		var sunsetOut = staticSunsetDate.setTime(staticSunsetDate.getTime() + (10*60*1000));

		// test
		console.log("sunset is "+staticSunsetDate+" 10 min before should be "+sunsetIn+" 10 min after should be "+sunsetOut);


		// if time is past sunset, add twelve hours
		if (newDate >= staticSunsetDate) {
			staticSunsetDate.setTime(staticSunsetDate.getTime() + (12*60*60*1000));
			console.log("this should be added "+staticSunsetDate);
		}

		


		timeWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "sixty"]

		


		//console.log(sunsetCountSeconds);
		//console.log(sunsetCountMinutes);
		//console.log(timeWords[sunsetCountHours]);
		//console.log(timeWords[sunsetCountMinutes]);
		//console.log(timeWords[sunsetCountSeconds]);

		// update the countdown every second and push it to the html
		var countdownTimer = setInterval(function() {

			// redefine new date to get updated every second
			var newDate = new Date();
			// get countdown to sunset in milliseconds
			timeToSunset = staticSunsetDate - newDate;
			// test
			console.log(timeToSunset);

			// get hours, min, and seconds
			var sunsetCountHours = Math.floor((timeToSunset % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var sunsetCountMinutes = Math.floor((timeToSunset % (1000 * 60 * 60)) / (1000 * 60));
			var sunsetCountSeconds = Math.floor((timeToSunset % (1000 * 60)) / 1000);

			$("#setting-time").html(timeWords[sunsetCountHours]+" hours, "+timeWords[sunsetCountMinutes]+"&nbsp;minutes, and "+timeWords[sunsetCountSeconds]+"&nbsp;seconds.");

		},1000);

		//var sunriseNewDate = newDate.setHours(sunriseTimeHourNum, sunriseTimeMinNum, sunriseTimeSecNum);
		//var sunsetNewDate = newDate.setHours(sunsetTimeHourNum, sunsetTimeMinNum, sunsetTimeSecNum);
		var userNewDate = newDate.setHours(userTimeHoursPad, userTimeMinutesPad, userTimeSecondsPad);
		
		// test output
		//console.log("new sunset date "+sunsetNewDate);
		//console.log("new sunrise date "+sunriseNewDate);
		//console.log("new user date "+userNewDate);
		
		///////////////////////////////////////
		// LIGHTMODE VS DARKMODE
		///////////////////////////////////////

		// Set light vs dark as if/else statement to remove flash during dark...
		// if time is greater than sunset OR (||) less than sunrise, use dark mode by adding classes

		//test an early user time
		//userTime24 = "07:00:00";

		// DARK MODE TEST
		// test a late user time
		//userTime24 = "20:00:00";

		// SUNSET TEST
		// test a time between sunset window
		//var userTimeNow = 1667597988000;



		if (userTime24 >= sunsetTime24 | userTime24 <= sunriseTime24) {
			
			//add darkmode class to different elements w/ lightmode class...
			$(".background-lm").addClass("background-dm");
			$(".color-lm").addClass("color-dm");
			$(".rule-lm").addClass("rule-dm");
			$(".stars").removeClass("hide");
			$(".sun").addClass("hide");

			console.log("this works");

		} else if(userTimeNow > sunsetIn && userTimeNow < sunsetOut) {
			
			console.log("time now vs sunset in vs sunset out is ... "+userTimeNow+" "+sunsetIn+" "+sunsetOut)
			$("#sunset-slide").removeClass("hide");

		} else {
			console.log("it is during the day");
		}


		// Set sunset time section

		$("#sunset-time").append(sunsetTime);
		


	}, "json");

	///////////////////////////////////////////////
	// END GET API REQUEST
	///////////////////////////////////////////////


	///////////////////////////////////////////////
	// PLACE NAMES
	///////////////////////////////////////////////

	// Create an array of 10+ cities
	// Choose a random number the length of the array
	// Use that to choose city randomly
	// Append that to span in page body
	

	

	





	///////////////////////////////////////////////
	// SHOW VS HIDE MORE INFO
	///////////////////////////////////////////////

	// on button click, reveal the more info section
	$('#sunset-button').click(function() {
		$('#more-info').toggleClass("hide");
	});

});

// 
// 
