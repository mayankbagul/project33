




function setup() {
  createCanvas(800,400);
}

function preload(){
  getTime()


}
function draw() {

 } 

 

async function getTime() {
  var response = await fetch ("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
 
  var responseJSON = await response.json()

  var time = responseJSON.datetime;

  var hour = time.slice(11,13)
 


  if (hour >= 06 && hour <= 19){
      bg = "sprites/snow1.jpg"
  }
  else
      {
          bg = "sprites/snow2.jpg"
      }

      backgroundImg = loadImage(bg)
      console.log(backgroundImg)
   
    }
