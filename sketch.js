let currentSong = 0;
let isButtonPressed = false;
let restartButton;
let songRate;
let loro, tripoli, syracuse;
let baseFontSize;


function preload() {
  loro = loadSound("assets/PinbackLoro.mp3");
  tripoli = loadSound("assets/PinbackTripoli.mp3");
  syracuse = loadSound("assets/PinbackSyracuse.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  baseFontSize = calculateBaseFontSize();
  textFont("Comic Neue");

  createButtons();
}

function createButtons() {
    
  // Create buttons for each page
  createButton("Loro").addClass("button-30").position(width/2 - 100, height/2).mousePressed(() => {
      currentSong = 1;
      loro.play();
      isButtonPressed = true;
      hideButtons();
    });

  createButton("Tripoli").addClass("button-30").position(width/2, height/2).mousePressed(() => {
      currentSong = 2;
      tripoli.play();
      isButtonPressed = true;
      hideButtons();
    });

  createButton("Syracuse").addClass("button-30").position(width/2 + 100, height/2).mousePressed(() => {
      currentSong = 3;
      syracuse.play();
      isButtonPressed = true;
      hideButtons();
    });
}

function hideButtons() {
  const buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.visibility = "hidden";
  }

  restartButton = createButton("Restart").addClass("button-30").position(width/2, height/2 +300);
  restartButton.mousePressed(() => {
    currentSong = 0;
    isButtonPressed = false;
    restartButton.remove();
    createButtons();
    loro.stop();
    tripoli.stop();
    syracuse.stop();
  });
}

function draw() {
  background(0);
  
  const dynamicFontSize = baseFontSize * 0.7;
  textSize(dynamicFontSize);
  fill(255)
  text("PINBACK", width/2, height/8);
  if (isButtonPressed) {
    // Check the current page and display content accordingly
    if (currentSong === 1) {
      playLoro();
    } else if (currentSong === 2) {
      playTripoli();
    } else if (currentSong === 3) {
      playSyracuse();
    }
  }
  
  rateTracker();
}

function playLoro() {
  textStyle(NORMAL);
  iSawPinback();
  textStyle(BOLD);  
  text("LORO", width / 4 + 50, height / 2 - 150);
  songSpeedText();
}

function playTripoli() {
  textStyle(NORMAL);
  iSawPinback();
  textStyle(BOLD);  
  text("TRIPOLI", width / 4 + 50, height / 2 - 150);
  songSpeedText();
}

function playSyracuse() {
  
  textStyle(NORMAL);
  iSawPinback();
  textStyle(BOLD);  
  text("SYRACUSE", width / 4 + 50, height / 2 - 150);
  songSpeedText();
}

function songSpeedText() {
  if (mouseY < height / 2) {
    text("...slow...", width / 2 + 150, height / 2 - 20);
  } else {
    text("Fast!!!", width / 2 + 150, height / 2 - 20);
  }
}

function iSawPinback() {
  fill(255);
const dynamicFontSize = baseFontSize * 0.7;
  textSize(dynamicFontSize);
  text("I went and saw pinback and they played", width / 2, height / 4);

  text(" a little...", width / 2, height / 2 - 90);
}

function rateTracker() {
  songRate = map(mouseY, 0.1, height, 0, 2);
  songRate = constrain(songRate, 0.8, 1.5);

  loro.rate(songRate);
  tripoli.rate(songRate);
  syracuse.rate(songRate);
}

function calculateBaseFontSize() {
  const canvasSize = min(width, height);
  return canvasSize / 15; // Adjust the scaling factor as needed
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  baseFontSize = calculateBaseFontSize();
}
