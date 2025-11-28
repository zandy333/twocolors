window.onload=function() {
  //document.body.style.overflow = "hidden"; 
  let container = document.getElementById("container");
  let menubtn = document.getElementById("menubtn");
  let content = document.getElementById("content");
  let isPortrait = window.matchMedia("(orientation: portrait)").matches;
  let w = window.innerWidth;
  let h = window.innerHeight;
  let cwidth = 0;
  let cheight = 0;
  let cellSize = 0;
  let c11 = document.getElementById("c11");
  let c12 = document.getElementById("c12");
  let c13 = document.getElementById("c13");
  let c14 = document.getElementById("c14");
  let c21 = document.getElementById("c21");
  let c22 = document.getElementById("c22");
  let c23 = document.getElementById("c23");
  let c24 = document.getElementById("c24");
  let c31 = document.getElementById("c31");
  let c32 = document.getElementById("c32");
  let c33 = document.getElementById("c33");
  let c34 = document.getElementById("c34");
  let c41 = document.getElementById("c41");
  let c42 = document.getElementById("c42");
  let c43 = document.getElementById("c43");
  let c44 = document.getElementById("c44");
  let whitedot = "";
  let pause_or_play = document.getElementById("pause-or-play");
  let music_on_off = document.getElementById("music-on-off");

  function displayPortrait() {
    w = window.innerWidth;
    h = window.innerHeight;

    content.style.width = "100vw";
    content.style.height = "100vw";
    content.style.margin = "auto";
  }

  function displayLandscape() { 
    w = window.innerWidth;
    h = window.innerHeight;

    content.style.width = "100vh";
    content.style.height = "100vh";
    content.style.margin = "auto";
  }
/*
  function updateComputedStylesPortrait() {
    cwidth = container.offsetWidth;
    cellSize = Math.round(cwidth/4);
  }

  function updateComputedStylesLandscape() {
    cheight = container.offsetHeight;
    cellSize = Math.round(cheight/4);
  }*/

  /*
  function updateCellSize() {

    c11.style.width = cellSize + "px";
    c11.style.height = cellSize + "px";
    c12.style.width = cellSize + "px";
    c12.style.height = cellSize + "px";
    c13.style.width = cellSize + "px";
    c13.style.height = cellSize + "px";
    c14.style.width = cellSize + "px";
    c14.style.height = cellSize + "px";

    c21.style.width = cellSize + "px";
    c21.style.height = cellSize + "px";
    c22.style.width = cellSize + "px";
    c22.style.height = cellSize + "px";
    c23.style.width = cellSize + "px";
    c23.style.height = cellSize + "px";
    c24.style.width = cellSize + "px";
    c24.style.height = cellSize + "px";

    c31.style.width = cellSize + "px";
    c31.style.height = cellSize + "px";
    c32.style.width = cellSize + "px";
    c32.style.height = cellSize + "px";
    c33.style.width = cellSize + "px";
    c33.style.height = cellSize + "px";
    c34.style.width = cellSize + "px";
    c34.style.height = cellSize + "px";

    c41.style.width = cellSize + "px";
    c41.style.height = cellSize + "px";
    c42.style.width = cellSize + "px";
    c42.style.height = cellSize + "px";
    c43.style.width = cellSize + "px";
    c43.style.height = cellSize + "px";
    c44.style.width = cellSize + "px";
    c44.style.height = cellSize + "px";
  }*/

  function updateCellSizePortrait() {

    c11.style.width = "25vw";
    c11.style.height = "25vw";
    c12.style.width = "25vw";
    c12.style.height = "25vw";
    c13.style.width = "25vw";
    c13.style.height = "25vw";
    c14.style.width = "25vw";
    c14.style.height = "25vw";

    c21.style.width = "25vw";
    c21.style.height = "25vw";
    c22.style.width = "25vw";
    c22.style.height = "25vw";
    c23.style.width = "25vw";
    c23.style.height = "25vw";
    c24.style.width = "25vw";
    c24.style.height = "25vw";

    c31.style.width = "25vw";
    c31.style.height = "25vw";
    c32.style.width = "25vw";
    c32.style.height = "25vw";
    c33.style.width = "25vw";
    c33.style.height = "25vw";
    c34.style.width = "25vw";
    c34.style.height = "25vw";

    c41.style.width = "25vw";
    c41.style.height = "25vw";
    c42.style.width = "25vw";
    c42.style.height = "25vw";
    c43.style.width = "25vw";
    c43.style.height = "25vw";
    c44.style.width = "25vw";
    c44.style.height = "25vw";
  }

  function updateCellSizeLandscape() {
    c11.style.width = "25vh";
    c11.style.height = "25vh";
    c12.style.width = "25vh";
    c12.style.height = "25vh";
    c13.style.width = "25vh";
    c13.style.height = "25vh";
    c14.style.width = "25vh";
    c14.style.height = "25vh";

    c21.style.width = "25vh";
    c21.style.height = "25vh";
    c22.style.width = "25vh";
    c22.style.height = "25vh";
    c23.style.width = "25vh";
    c23.style.height = "25vh";
    c24.style.width = "25vh";
    c24.style.height = "25vh";

    c31.style.width = "25vh";
    c31.style.height = "25vh";
    c32.style.width = "25vh";
    c32.style.height = "25vh";
    c33.style.width = "25vh";
    c33.style.height = "25vh";
    c34.style.width = "25vh";
    c34.style.height = "25vh";

    c41.style.width = "25vh";
    c41.style.height = "25vh";
    c42.style.width = "25vh";
    c42.style.height = "25vh";
    c43.style.width = "25vh";
    c43.style.height = "25vh";
    c44.style.width = "25vh";
    c44.style.height = "25vh";
  }

  function setCellBorders() {
    c11.style.backgroundImage = "url('imgs/c11.png')";
    c11.style.backgroundSize = "cover";
    c11.style.backgroundRepeat = "no-repeat";
    c11.style.backgroundPosition = "center";

    c12.style.backgroundImage = "url('imgs/c12.png')";
    c12.style.backgroundSize = "cover";
    c12.style.backgroundRepeat = "no-repeat";
    c12.style.backgroundPosition = "center";
  }

  function setWhiteDotPortrait() {
    whitedot = document.createElement("img");
    whitedot.src = "imgs/whitedot.png";
    whitedot.style.width = "8vw";
    whitedot.style.height = "8vw";

    c11.appendChild(whitedot);
    c11.style.textAlign = "right";
    c11.style.verticalAlign = "top";
  }

  function setWhiteDotLandscape() {
    whitedot = document.createElement("img");
    whitedot.src = "imgs/whitedot.png";
    whitedot.style.width = "8vh";
    whitedot.style.height = "8vh";

    c11.appendChild(whitedot);
    c11.style.textAlign = "right";
    c11.style.verticalAlign = "top";
  }

  c11.style.backgroundColor = "#aaaaaa";
  c12.style.backgroundColor = "#aaaaaa";

  if ((w <= h) || (isPortrait)){
    displayPortrait();
    updateCellSizePortrait();
    setCellBorders();
    if (whitedot) {
      whitedot.remove();
    } 
    setWhiteDotPortrait();
    
  } else {
    displayLandscape();
    updateCellSizeLandscape();
    setCellBorders();
    if (whitedot) {
      whitedot.remove();
    }
    setWhiteDotLandscape();
  }

  // Listen for orientation changes
  window.matchMedia("(orientation: portrait)").addEventListener("change", (e) => {
    if (e.matches) {
      displayPortrait();
      updateCellSizePortrait();
      setCellBorders();
      if (whitedot) {
      whitedot.remove();
      }
      setWhiteDotPortrait();

    } else {
      displayLandscape();
      updateCellSizeLandscape();
      setCellBorders();
      if (whitedot) {
      whitedot.remove();
      }
      setWhiteDotLandscape();    
    }
  });

  window.onresize = function(){ if (w <= h) {
    displayPortrait();
    updateCellSizePortrait();
    setCellBorders();
    if (whitedot) {
      whitedot.remove();
    }
    setWhiteDotPortrait();
        
  } else {
    displayLandscape();
    updateCellSizeLandscape();
    setCellBorders();
    if (whitedot) {
      whitedot.remove();
    }
    setWhiteDotLandscape();

    } 
  }
}