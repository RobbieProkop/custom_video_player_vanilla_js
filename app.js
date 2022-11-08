// app
//dom elements
const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//functions

//used to play and pause the video
const toggleVideoStatus = () => {
  if (video.paused) {
    return video.play();
  }

  video.pause();
};

//update play/pause icon
const updatePlayIcon = () => {
  if (video.paused) {
    return (play.innerHTML = '<i class="fa fa-play fa-2x"></i>');
  }

  play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
};

//update the progress and timestamp
const updateProgress = () => {};

// set video time to progress
const setVideoProgress = () => {};

//stops the video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
  play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
};

//event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
