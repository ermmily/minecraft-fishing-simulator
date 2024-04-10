// Functionize Minecraft Fishing Start Code
//HTML variables

let result = document.getElementById("result-img");
let codCount = document.getElementById("num-cod");
let salmonCount = document.getElementById("num-salmon");
let tropicalCount = document.getElementById("num-tropical");
let pufferCount = document.getElementById("num-puffer");
//fish count vaialbels
let numC = 0;
let numS = 0;
let numT = 0;
let numP = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  //determine selected character
  let character = document.getElementById("character-select").value;
  if (character === "steve") {
    //Fish with steve
    //steve fish simulator
    let randNum = Math.random();
    if (randNum < 0.7) {
      result.src = "img/Raw-Cod.png";
      console.log("Cod");
      numC++;
      codCount.innerHTML = numC;
    } else if (randNum < 0.9) {
      result.src = "img/Raw-Salmon.png";
      console.log("Salmmon");
      numS++;
      salmonCount.innerHTML = numS;
    } else if (randNum < 0.95) {
      result.src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numT++;
      tropicalCount.innerHTML = numT;
    } else {
      result.src = "img/Pufferfish.png";
      console.log("Puffer");
      numP++;
      pufferCount.innerHTML = numP;
    }
    console.log(randNum);
  } else if (character === "alex") {
    //fish with alex
    //alex fish simualtor
    let randNum = Math.random();
    if (randNum < 0.5) {
      result.src = "img/Pufferfish.png";
      console.log("Puffer");
      numP++;
      pufferCount.innerHTML = numP;
    } else if (randNum < 0.8) {
      result.src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numT++;
      tropicalCount.innerHTML = numT;
    } else if (randNum < 0.9) {
      result.src = "img/Raw-Salmon.png";
      console.log("Salmmon");
      numS++;
      salmonCount.innerHTML = numS;
    } else {
      result.src = "img/Raw-Cod.png";
      console.log("Cod");
      numC++;
      codCount.innerHTML = numC;
    }
    console.log(randNum);
  } else if (character === "villager") {
    //villlager fishing simualtor
    let randNum = Math.random();
    if (randNum < 0.25) {
      result.src = "img/Raw-Cod.png";
      console.log("Cod");
      numC++;
      codCount.innerHTML = numC;
    } else if (randNum < 0.5) {
      result.src = "img/Raw-Salmon.png";
      console.log("Salmmon");
      numS++;
      salmonCount.innerHTML = numS;
    } else if (randNum < 0.75) {
      result.src = "img/Tropical-Fish.png";
      console.log("Tropical");
      numT++;
      tropicalCount.innerHTML = numT;
    } else {
      result.src = "img/Pufferfish.png";
      console.log("Puffer");
      numP++;
      pufferCount.innerHTML = numP;
    }
    console.log(randNum);
  }
}
