var img="";
var objects=[];
var status="";

function preload () {
video=createVideo("bugatti.mp4")
}

function setup () {
canvas=createCanvas(500,600);
canvas.center();
video.hide();
}
function draw () {
image(video,0,0,500,600);
}
function licuuf () {
video.loop();
video.speed(1);
video.volume(2);
}