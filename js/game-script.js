window.onload=function() {

  //document.body.style.overflow = "hidden"; 
  let container = document.getElementById("container");
  let menubtn = document.getElementById("menubtn");
  let content = document.getElementById("content");
  let board = document.getElementById("board");
  let isPortrait = window.matchMedia("(orientation: portrait)").matches;
  let isLandscape = window.matchMedia("(orientation: landscape)").matches;
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
  
  function displayPortrait() {
    /*w = window.innerWidth;
    h = window.innerHeight;*/

    content.style.width = "80vw";
    content.style.height = "80vw";
    content.style.margin = "auto";

    /*board.style.width = "80vw";
    board.style.height = "80vw";
    /*board.style.backgroundImage = "url('imgs/drawing2.png')";
    board.style.backgroundSize = "cover";
    board.style.backgroundRepeat = "no-repeat";
    board.style.backgroundPosition = "center";*/
  }

  function displayLandscape() { 
    /*w = window.innerWidth;
    h = window.innerHeight;*/

    content.style.width = "80vh";
    content.style.height = "80vh";
    content.style.margin = "auto";

    /*board.style.width = "80vh";
    board.style.height = "80vh";
    /*board.style.backgroundImage = "url('imgs/drawing2.png')";
    board.style.backgroundSize = "cover";
    board.style.backgroundRepeat = "no-repeat";
    board.style.backgroundPosition = "center";*/
  }

  function updateCellSizePortrait() {

    c11.style.width = "20vw";
    c11.style.height = "20vw";
    c12.style.width = "20vw";
    c12.style.height = "20vw";
    c13.style.width = "20vw";
    c13.style.height = "20vw";
    c14.style.width = "20vw";
    c14.style.height = "20vw";

    c21.style.width = "20vw";
    c21.style.height = "20vw";
    c22.style.width = "20vw";
    c22.style.height = "20vw";
    c23.style.width = "20vw";
    c23.style.height = "20vw";
    c24.style.width = "20vw";
    c24.style.height = "20vw";

    c31.style.width = "20vw";
    c31.style.height = "20vw";
    c32.style.width = "20vw";
    c32.style.height = "20vw";
    c33.style.width = "20vw";
    c33.style.height = "20vw";
    c34.style.width = "20vw";
    c34.style.height = "20vw";

    c41.style.width = "20vw";
    c41.style.height = "20vw";
    c42.style.width = "20vw";
    c42.style.height = "20vw";
    c43.style.width = "20vw";
    c43.style.height = "20vw";
    c44.style.width = "20vw";
    c44.style.height = "20vw";
  }

  function updateCellSizeLandscape() {
    c11.style.width = "20vh";
    c11.style.height = "20vh";
    c12.style.width = "20vh";
    c12.style.height = "20vh";
    c13.style.width = "20vh";
    c13.style.height = "20vh";
    c14.style.width = "20vh";
    c14.style.height = "20vh";

    c21.style.width = "20vh";
    c21.style.height = "20vh";
    c22.style.width = "20vh";
    c22.style.height = "20vh";
    c23.style.width = "20vh";
    c23.style.height = "20vh";
    c24.style.width = "20vh";
    c24.style.height = "20vh";

    c31.style.width = "20vh";
    c31.style.height = "20vh";
    c32.style.width = "20vh";
    c32.style.height = "20vh";
    c33.style.width = "20vh";
    c33.style.height = "20vh";
    c34.style.width = "20vh";
    c34.style.height = "20vh";

    c41.style.width = "20vh";
    c41.style.height = "20vh";
    c42.style.width = "20vh";
    c42.style.height = "20vh";
    c43.style.width = "20vh";
    c43.style.height = "20vh";
    c44.style.width = "20vh";
    c44.style.height = "20vh";
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

    c13.style.backgroundImage = "url('imgs/c13.png')";
    c13.style.backgroundSize = "cover";
    c13.style.backgroundRepeat = "no-repeat";
    c13.style.backgroundPosition = "center";

    c14.style.backgroundImage = "url('imgs/c14.png')";
    c14.style.backgroundSize = "cover";
    c14.style.backgroundRepeat = "no-repeat";
    c14.style.backgroundPosition = "center";

    c21.style.backgroundImage = "url('imgs/c21.png')";
    c21.style.backgroundSize = "cover";
    c21.style.backgroundRepeat = "no-repeat";
    c21.style.backgroundPosition = "center";

    c22.style.backgroundImage = "url('imgs/c22.png')";
    c22.style.backgroundSize = "cover";
    c22.style.backgroundRepeat = "no-repeat";
    c22.style.backgroundPosition = "center";

    c23.style.backgroundImage = "url('imgs/c23.png')";
    c23.style.backgroundSize = "cover";
    c23.style.backgroundRepeat = "no-repeat";
    c23.style.backgroundPosition = "center";

    c24.style.backgroundImage = "url('imgs/c24.png')";
    c24.style.backgroundSize = "cover";
    c24.style.backgroundRepeat = "no-repeat";
    c24.style.backgroundPosition = "center";

    c31.style.backgroundImage = "url('imgs/c31.png')";
    c31.style.backgroundSize = "cover";
    c31.style.backgroundRepeat = "no-repeat";
    c31.style.backgroundPosition = "center";

    c32.style.backgroundImage = "url('imgs/c32.png')";
    c32.style.backgroundSize = "cover";
    c32.style.backgroundRepeat = "no-repeat";
    c32.style.backgroundPosition = "center";

    c33.style.backgroundImage = "url('imgs/c33.png')";
    c33.style.backgroundSize = "cover";
    c33.style.backgroundRepeat = "no-repeat";
    c33.style.backgroundPosition = "center";

    c34.style.backgroundImage = "url('imgs/c34.png')";
    c34.style.backgroundSize = "cover";
    c34.style.backgroundRepeat = "no-repeat";
    c34.style.backgroundPosition = "center";

    c41.style.backgroundImage = "url('imgs/c41.png')";
    c41.style.backgroundSize = "cover";
    c41.style.backgroundRepeat = "no-repeat";
    c41.style.backgroundPosition = "center";

    c42.style.backgroundImage = "url('imgs/c42.png')";
    c42.style.backgroundSize = "cover";
    c42.style.backgroundRepeat = "no-repeat";
    c42.style.backgroundPosition = "center";

    c43.style.backgroundImage = "url('imgs/c43.png')";
    c43.style.backgroundSize = "cover";
    c43.style.backgroundRepeat = "no-repeat";
    c43.style.backgroundPosition = "center";

    c44.style.backgroundImage = "url('imgs/c44.png')";
    c44.style.backgroundSize = "cover";
    c44.style.backgroundRepeat = "no-repeat";
    c44.style.backgroundPosition = "center";
  }

  function setWhiteDotPortrait() {
    whitedot = document.createElement("img");
    //whitedot.src = "imgs/whitedot.png";
    whitedot.src = "imgs/tickmark.png";
    whitedot.style.width = "8vw";
    whitedot.style.height = "8vw";

    whitedot.style.float = "right";
    whitedot.style.top = "0";
    c11.appendChild(whitedot);
    
  }

  function setWhiteDotLandscape() {
    whitedot = document.createElement("img");
    //whitedot.src = "imgs/whitedot.png";
    whitedot.src = "imgs/tickmark.png";
    whitedot.style.width = "8vh";
    whitedot.style.height = "8vh";

    whitedot.style.float = "right";
    whitedot.style.top = "0";
    c11.appendChild(whitedot);
    
  }

  c11.style.backgroundColor = "#aaaaaa";
  c12.style.backgroundColor = "#cccccc";
  c13.style.backgroundColor = "#aaaaaa";
  c14.style.backgroundColor = "#cccccc";
  c21.style.backgroundColor = "#cccccc";
  c22.style.backgroundColor = "#aaaaaa";
  c23.style.backgroundColor = "#cccccc";
  c24.style.backgroundColor = "#aaaaaa";
  c31.style.backgroundColor = "#aaaaaa";
  c32.style.backgroundColor = "#cccccc";
  c33.style.backgroundColor = "#aaaaaa";
  c34.style.backgroundColor = "#cccccc";
  c41.style.backgroundColor = "#cccccc";
  c42.style.backgroundColor = "#aaaaaa";
  c43.style.backgroundColor = "#cccccc";
  c44.style.backgroundColor = "#aaaaaa";/*

  c11.style.backgroundColor = "transparent";
  c12.style.backgroundColor = "transparent";
  c13.style.backgroundColor = "transparent";
  c14.style.backgroundColor = "transparent";
  c21.style.backgroundColor = "transparent";
  c22.style.backgroundColor = "transparent";
  c23.style.backgroundColor = "transparent";
  c24.style.backgroundColor = "transparent";
  c31.style.backgroundColor = "transparent";
  c32.style.backgroundColor = "transparent";
  c33.style.backgroundColor = "transparent";
  c34.style.backgroundColor = "transparent";
  c41.style.backgroundColor = "transparent";
  c42.style.backgroundColor = "transparent";
  c43.style.backgroundColor = "transparent";
  c44.style.backgroundColor = "transparent";*/

  if ((w <= h) /*|| (isPortrait)*/) {
    displayPortrait();
    updateCellSizePortrait();
    setCellBorders();
    if (whitedot) {
      whitedot.remove();
    } 
    //setWhiteDotPortrait();
    
  } else if ((w > h) /*|| (isLandscape)*/) {
    displayLandscape();
    updateCellSizeLandscape();
    setCellBorders();
    if (whitedot) {
      whitedot.remove();
    }
    //setWhiteDotLandscape();
  };

  // Listen for orientation changes
  /*window.matchMedia("(orientation: portrait)").addEventListener("change", (e) => {
    
    setTimeout( function() {  
      if (e.matches) {
        displayPortrait().then(function() {
        updateCellSizePortrait();
        }).then(function() {
        setCellBorders();
        });
        /*if (whitedot) {
        whitedot.remove();
        }
        setWhiteDotPortrait();*/

    /*  } else {
        displayLandscape().then(function() {
        updateCellSizeLandscape();
        }).then(function() {
        setCellBorders();
        });
      }
    }, 2000);
  });

  // Listen for orientation changes
  window.matchMedia("(orientation: landscape)").addEventListener("change", (e) => {
    
    setTimeout( function() {    
    if (e.matches) {
      displayLandscape().then(function() {
      updateCellSizeLandscape();
      }).then(function() {
      setCellBorders();
      });
      /*if (whitedot) {
      whitedot.remove();
      }
      setWhiteDotLandscape();*/
   /* }  else {
        displayPortrait().then(function() {
        updateCellSizePortrait();
        }).then(function() {
        setCellBorders();
        });
    }
    }, 2000);
  });*/
/*
  window.onresize = function() { 
    //w = window.innerWidth;
    //h = window.innerHeight;
    setTimeout( function() {
    if ((w <= h) /*|| (isPortrait)*//*) {
    /*
    displayPortrait();/*.then(function() {*/
    //updateCellSizePortrait();
    //}).then(function() {
    //setCellBorders();
    //});*/
    /*if (whitedot) {
      whitedot.remove();
    }
    //setWhiteDotPortrait();
  
        
  } else if ((w > h) /*|| (isLandscape)) {
    
    displayLandscape();/*.then(function() {*/
    /*updateCellSizeLandscape();
    //}).then(function() {
    //setCellBorders();
    //});*/
    /*if (whitedot) {
      whitedot.remove();
    }
    //setWhiteDotLandscape();
     
  }
  }, 2000);
  };*/

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer); // Clear any existing timer
  resizeTimer = setTimeout(() => {
    // This code will execute only after 200ms of no further resize events
    console.log("Window resize completed!");
    // Place your resize-dependent logic here
    // For example, update layout, recalculate positions, etc.
    w = window.innerWidth;
    h = window.innerHeight;

    //alert("w: "+  w + ";  h: " + h);
    
    if ((w <= h)) {
    
    displayPortrait();
    updateCellSizePortrait();
    setCellBorders();
    /*if (whitedot) {
      whitedot.remove();
    }*/
    //setWhiteDotPortrait(); 
        
  } else if ((w > h) /*|| (isLandscape)*/) {
    
    displayLandscape();
    updateCellSizeLandscape();
    setCellBorders();
    /*if (whitedot) {
      whitedot.remove();
    }*/
    //setWhiteDotLandscape();
     
  }
  }, 200); // Adjust the debounce delay (in milliseconds) as needed
});
}
