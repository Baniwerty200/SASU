const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bIMG;

var bg = "sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
background(bIMG);

    Engine.update(engine);
    fill("red");
    textSize(20);
    // write code to display time in correct format here
if(hour>=12){
    text("Time: " + hour%12 + " PM",600,100);
}else if (hour>=00){
    text("Time: " + hour%12 + " AM",600,100);
}



}

async function getBackgroundImg(){

    // write code to fetch time from API
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
var responseJSON=await response.json();
var dateTime=responseJSON.datetime;

    // write code slice the datetime
var hour=datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
if (hour>=04 && hour<=05){
bg="sunrise1.png";
}
else if (hour>=05 && hour<=08){
    bg="sunrise2.png";
    }
    else if (hour>=08 && hour<=10){
        bg="sunrise3.png";
        }
       else if (hour>=10 && hour<=12){
            bg="sunrise4.png";
            }else if (hour>=12 && hour<=17){
                bg="sunrise5.png";
                }
                else if (hour>=17 && hour<=18){
                    bg="sunrise6.png";
                    }
                    else if (hour>=18 && hour<=19){
                        bg="sunset7.png";
                        }
                        else if (hour>19 && hour<=20){
                            bg="sunset8.png";
                            }else if (hour>=20 && hour<=22){
                                bg="sunset10.png";
                                }else if (hour>=22 && hour<=23){
                                    bg="sunset11.png";
                                    }else{
                                        bg="sunset12.png";
                                    }
    //load the image in backgroundImg variable here
bIMG=loadImage(bg);
}
