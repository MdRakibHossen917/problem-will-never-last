console.log("External file");

//Option 2 to handel event

function makeSteelblue() {
  document.body.style.backgroundColor = "steelblue";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//Option 3: to get element by id and than set onclick

const btnMakeBlue = document.getElementById("btn-make-blue");
//console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

//Option 3: slidly different version

const btnMakePurple = document.getElementById("btn-make-purple");
//console.log(btnMakePurple);
btnMakePurple.onclick = makePurple;
function makePurple() {
  document.body.style.backgroundColor = "purple";
}

//Option 4 most of the time use this code

//getElementById.addEventListener('event type',handler)
document.getElementById("btn-make-green").addEventListener("click", function makeGreen() {
    document.body.style.backgroundColor = "green";
  });


//practice option 4
document.getElementById("btn-make-yellow").addEventListener("click", function makeyellow() {
    document.body.style.backgroundColor = "yellow";
  });
  //practice option 4

document
  .getElementById("btn-make-skyblue")
  .addEventListener("mouseover", function btnMakeSkyBlue() {
    document.body.style.backgroundColor = "skyBlue";
  });
  //practice option 4
  document
    .getElementById("btn-make-gold")
    .addEventListener("mouseout", function () {
      document.body.style.backgroundColor = "gold";
    });
