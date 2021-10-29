img="";
status="";
objects=[];
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="status : Detecting object";
}
function preload(){
    img=loadImage("tvs.jpg");
}
function modelLoaded(){
    console.log("👍");
    status="true";
    objectDetector.detect(img, gotResult);
}
function gotResult(error,results){
if(error){
    console.log(error);
}
else
console.log(results);
objects=results;
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
  for(i=0;1<objects.length;i++)
  {
      document.getElementById("status").innerHTML="status: Object Detected";
      fill("#42f595");
      percent=floor(objects[i].confidence*100);
      text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
      noFill();
      stroke("#09a7db");
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
  }
    }
}
