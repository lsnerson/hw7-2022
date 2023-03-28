// create all necessary variables
let video = document.querySelector("#player1");
let play_button = document.querySelector("#play");
let pause_button = document.querySelector("#pause");
let slow_down = document.querySelector("#slower");
let speed_up = document.querySelector("#faster");
let skip_ahead = document.querySelector("#skip");
let mute_button = document.querySelector("#mute");
let volume_slider = document.querySelector("#slider");
let volume = document.querySelector("#volume");
let styled = document.querySelector("#vintage");
let original = document.querySelector("#orig");

//load function to load the page, turn off autoplay and loop
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
	video.autoplay = false;
	video.loop = false;
	console.log("autoplay: " + video.autoplay)
	console.log("loop: " + video.loop)
});

//when play is clicked, put volume at 100% text and play the video
play_button.addEventListener("click", function(){
	video.play();
	volume.innerHTML = video.volume * 100 + "%";
	console.log("Play Video");
})

//when pause is clicked pause the video
pause_button.addEventListener("click", function(){
	video.pause();
	console.log("Pause Video");
})

//when slow down is clicked, slow the video by 10% each time its clicked
slow_down.addEventListener("click", function(){
	video.playbackRate *= 0.90;
	console.log(video.playbackRate);
})

//when speed up is clicked, increase the speed 
speed_up.addEventListener("click", function(){
	video.playbackRate *= 1.10;
	console.log(video.playbackRate);
})

//when skip ahead is clicked, advance the video by 10 seconds
skip_ahead.addEventListener("click", function(){
	if (video.currentTime + 10 >= 67.403333){
		video.currentTime = 0
		video.play()
	}
	else{
		video.currentTime += 10
	}
	console.log(video.currentTime)
})

//mute and unmite the video and update the text
mute.addEventListener("click", function(){
	if (video.muted == true){
		mute_button.innerHTML = "Mute";
		video.muted = false;
		console.log("It is muted.");
	} 
	else {
		mute_button.innerHTML = "Unmute";
		video.muted = true;
		console.log("It is Unmuted.");
	}
})

//chnage the volume based on the slider and update the text
volume_slider.addEventListener("change", function(){
	video.volume = volume_slider.value / 100;
	volume.innerHTML = video.volume * 100 + "%";
})

//change style to old school when button is clicked
styled.addEventListener("click", function(){
	video.className += " oldSchool";
	console.log("It is styled.");
})

//change style back to original when button is clicked
original.addEventListener("click", function(){
	video.className = "video";
	console.log("It is not styled.");
})

