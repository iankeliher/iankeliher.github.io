
console.log("this is working...");

// define speed variable globally 12FPS as default
let speed = 1000/12;

// set variables for different FPS buttons
var oneFPS = document.querySelector("#oneFPS");
var twelveFPS = document.querySelector('#twelveFPS');
var twentyfourFPS = document.querySelector('#twentyfourFPS');

// functions for setting speed according to button
oneFPS.onclick = function() {
  speed = 1000/1;
  oneFPS.classList.add('active-item');
  twelveFPS.classList.remove('active-item');
  twentyfourFPS.classList.remove('active-item');
  //console.log("1000");
}

twelveFPS.onclick = function() {
  speed = 1000/12;
  oneFPS.classList.remove('active-item');
  twelveFPS.classList.add('active-item');
  twentyfourFPS.classList.remove('active-item');
  //console.log("100");
}

twentyfourFPS.onclick = function() {
  speed = 1000/24;
  oneFPS.classList.remove('active-item');
  twelveFPS.classList.remove('active-item');
  twentyfourFPS.classList.add('active-item');
  //console.log("24");
}


let frames = [
	// movement works on a 16 frame loop
	// movement 1
	[{imgsrc: "img/horse/HIB_1.jpg", imgname: "01", framenumber: 10}, {imgsrc: "img/horse/HIB_17.jpg", imgname: "17", framenumber: 10}, {imgsrc: "img/horse/HIB_33.jpg", imgname: "33", framenumber: 10}],
	// movement 2
	[{imgsrc: "img/horse/HIB_2.jpg", imgname: "02", framenumber: 10}, {imgsrc: "img/horse/HIB_18.jpg", imgname: "18", framenumber: 10}, {imgsrc: "img/horse/HIB_34.jpg", imgname: "34", framenumber: 10}],
	// movement 3
	[{imgsrc: "img/horse/HIB_3.jpg", imgname: "03", framenumber: 10}, {imgsrc: "img/horse/HIB_19.jpg", imgname: "19", framenumber: 10}, {imgsrc: "img/horse/HIB_35.jpg", imgname: "35", framenumber: 10}],
	// movement 4
	[{imgsrc: "img/horse/HIB_4.jpg", imgname: "04", framenumber: 10}, {imgsrc: "img/horse/HIB_20.jpg", imgname: "20", framenumber: 10}, {imgsrc: "img/horse/HIB_36.jpg", imgname: "36", framenumber: 10}],
	// movement 5
	[{imgsrc: "img/horse/HIB_5.jpg", imgname: "05", framenumber: 10}, {imgsrc: "img/horse/HIB_21.jpg", imgname: "21", framenumber: 10}, {imgsrc: "img/horse/HIB_37.jpg", imgname: "37", framenumber: 10}],
	// movement 6
	[{imgsrc: "img/horse/HIB_6.jpg", imgname: "06", framenumber: 10}, {imgsrc: "img/horse/HIB_22.jpg", imgname: "22", framenumber: 10}],
	// movement 7
	[{imgsrc: "img/horse/HIB_7.jpg", imgname: "07", framenumber: 10}, {imgsrc: "img/horse/HIB_23.jpg", imgname: "23", framenumber: 10}],
	// movement 8
	[{imgsrc: "img/horse/HIB_8.jpg", imgname: "08", framenumber: 10}, {imgsrc: "img/horse/HIB_24.jpg", imgname: "24", framenumber: 10}],
	// movement 9
	[{imgsrc: "img/horse/HIB_9.jpg", imgname: "09", framenumber: 10}, {imgsrc: "img/horse/HIB_25.jpg", imgname: "25", framenumber: 10}],
	// movement 10
	[{imgsrc: "img/horse/HIB_10.jpg", imgname: "10", framenumber: 10}, {imgsrc: "img/horse/HIB_26.jpg", imgname: "26", framenumber: 10}],
	// movement 11
	[{imgsrc: "img/horse/HIB_11.jpg", imgname: "11", framenumber: 10}, {imgsrc: "img/horse/HIB_27.jpg", imgname: "27", framenumber: 10}],
	// movement 12
	[{imgsrc: "img/horse/HIB_12.jpg", imgname: "12", framenumber: 10}, {imgsrc: "img/horse/HIB_28.jpg", imgname: "28", framenumber: 10}],
	// movement 13
	[{imgsrc: "img/horse/HIB_13.jpg", imgname: "13", framenumber: 10}, {imgsrc: "img/horse/HIB_29.jpg", imgname: "29", framenumber: 10}],
	// movement 14
	[{imgsrc: "img/horse/HIB_14.jpg", imgname: "14", framenumber: 10}, {imgsrc: "img/horse/HIB_30.jpg", imgname: "30", framenumber: 10}],
	// movement 15
	[{imgsrc: "img/horse/HIB_15.jpg", imgname: "15", framenumber: 10}, {imgsrc: "img/horse/HIB_31.jpg", imgname: "31", framenumber: 10}],
	// movement 16
	[{imgsrc: "img/horse/HIB_16.jpg", imgname: "16", framenumber: 10}, {imgsrc: "img/horse/HIB_32.jpg", imgname: "32", framenumber: 10}],
]

let htmlImage = document.querySelector(".image-placeholder");
let imageData = document.querySelector(".data-placeholder");








let i = 0;
function changeFrame() {
	let frame = frames[i];
	let randomIndex = Math.floor(Math.random()*frame.length);
	let selectedImage = frame[randomIndex];
	let imageFilepath = selectedImage["imgsrc"];
	htmlImage.src = imageFilepath;

	// use this to inject metadata
	imageData.innerText = selectedImage["imgname"];

	// logging data and testing
	//console.log(imageData);
	//console.log("the loop is running");
	
	i++;
	if (i>=16) {
		i = 0;
	}
	setTimeout(() => {
		changeFrame();
	}, speed)
}

changeFrame();