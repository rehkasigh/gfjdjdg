nosex=0;
nosey=0;
function preload(){
    mustache=loadImage('https://i.postimg.cc/65TZzkyF/mustache-student-math-favorite-for-friday-the-the-1.png'); 
} 
function setup(){
    canvas=createCanvas(300,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet is initilized');
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x -33;
    nosey=results[0].pose.nose.y +10 ;
        console.log("nose x="+results[0].pose.nose.x); 
        console.log("nose y="+results[0].pose.nose.y);
    }
}
  function draw(){
    image(video,0,0,300,300);
    image(mustache,nosex,nosey,80,60);
  }


function take_snapshot(){
    save('myfilterimage.png');
}