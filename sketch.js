let mySong;
let myImage;
let myImage_2;
var analyzer;

 function preload() {
  // put preload code here
  mySong = loadSound("./assets/passenger.mp3");
  myImage = loadImage("./assets/car_4.png");
  myImage_2 = loadImage("./assets/car_moves.png");

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  
  // The analyzer allows to perform analysis on a sound file
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
  
}

function backgroundImage(img) { // standard function to use an image as a full screen background
  push();
  translate(width/2,height/2);
  imageMode(CENTER);
  let scale = Math.max(width/img.width,height/img.height);
  image(img,0,0,img.width*scale,img.height*scale)
  pop();
}

function draw() {
  // put drawing code here

  var volume = 0;

  backgroundImage(myImage); // background stays still

  // get the volume and remap it to a bigger value
  volume = analyzer.getLevel();
  volume = map(volume,0,1,0,height); 

  imageMode(CENTER);
  image(myImage_2, (windowWidth/2), (windowHeight/2) - (volume/10), (volume/10) + 1600, (volume/10) + 900); // the car should move and scale depending on the volume 

  
  // click to start the song and the car
  if (mySong.isPlaying() == false) {
    var textPlay = "Click to start the car";
    textFont("EB Garamond");
    textAlign(CENTER);
    textSize(50);
    fill("white");
    text(textPlay, width/2, height*4/5);
  }

  /* else {
       lyrics();  
  } */
  
} 


// when the song is playing
// doesn't work as it should

/* function lyrics() {
  var textWord = "I am a passenger and I ride, and I ride, I ride through the city's backsides I see the stars come out of the sky. Yeah, they're bright in a hollow sky, you know it looks so good tonight. I am the passenger, I stay under glass, I look through my window so bright, I see the stars come out tonight, I see the bright and hollow sky, over the city's ripped back sky, and everything looks good tonight. Singin' la la la la la la la la, la la la la la la la la La la la la la la la la, la la. Get into the car, we'll be the passenger, we'll ride through the city tonight, see the city's ripped backsides, we'll see the bright and hollow sky, we'll see the stars that shine so bright, oh, stars made for us tonight. Oh, the passenger, how, how he rides. Oh, the passenger, he rides and he rides, he looks through his window. What does he see? He sees the silent hollow sky, he sees the stars come out tonight, he sees the city's ripped backsides, he sees the winding ocean drive, and everything was made for you and me, all of it was made for you and me,'cause it just belongs to you and me, so let's take a ride and see what's mine. Singin' la la la la la la la la, la la la la la la la la, la la la la la la la la, la la. Oh, the passenger, he rides and he rides, he sees things from under glass, he looks through his window's eye, he sees the things that he knows are his, he sees the bright and hollow sky, he sees the city asleep at night, he sees the stars are out tonight, and all of it is yours and mine, and all of it is yours and mine, so let's ride and ride and ride and ride. Singin' la la la la la la la la, la la la la la la la la, la la la la la la la la, la la. Singin' la la la la la la la la, la la la la la la la la, la la la la la la la la, la la";
    textFont("EB Garamond");
    textAlign(screenLeft);
    textSize(30);
    fill("white");
    text(textWord, (windowWidth)-frameCount, windowHeight*4/5);
} */

// once the mouse is clicked the song starts
function mouseClicked() {
  if (mySong.isPlaying() == false) {
    mySong.play();
  } 
}
