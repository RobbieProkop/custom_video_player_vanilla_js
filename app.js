// app
//dom elements
const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//functions

//used to play and pause the video
const toggleVideoStatus = () => {};

//update play/pause icon
const updatePlayIcon = () => {};

//update the progress and timestamp
const updateProgress = () => {};

// set video time to progress
const setVideoProgress = () => {};

//stops the video
const stopVideo = () => {};

//event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
