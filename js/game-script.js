window.onload=function() {

  let container = document.getElementById("container");
  let menubtn = document.getElementById("menubtn");
  let content = document.getElementById("content");
  let board = document.getElementById("board");
  let w = window.innerWidth;
  let h = window.innerHeight;
  let tbl = document.getElementsByTagName("table");
  let td = document.getElementsByTagName("td");
  let d = document.getElementsByClassName("d");
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
  let d11 = document.getElementById("d11");
  let d12 = document.getElementById("d12");
  let d13 = document.getElementById("d13");
  let d14 = document.getElementById("d14");
  let d21 = document.getElementById("d21");
  let d22 = document.getElementById("d22");
  let d23 = document.getElementById("d23");
  let d24 = document.getElementById("d24");
  let d31 = document.getElementById("d31");
  let d32 = document.getElementById("d32");
  let d33 = document.getElementById("d33");
  let d34 = document.getElementById("d34");
  let d41 = document.getElementById("d41");
  let d42 = document.getElementById("d42");
  let d43 = document.getElementById("d43");
  let d44 = document.getElementById("d44");
  let tickmark11 = "";
  let tickmark12 = "";
  let tickmark13 = "";
  let tickmark14 = "";
  let tickmark21 = "";
  let tickmark22 = "";
  let tickmark23 = "";
  let tickmark24 = "";
  let tickmark31 = "";
  let tickmark32 = "";
  let tickmark33 = "";
  let tickmark34 = "";
  let tickmark41 = "";
  let tickmark42 = "";
  let tickmark43 = "";
  let tickmark44 = "";
  let clicks11 = 0;
  let clicks12 = 0;
  let clicks13 = 0;
  let clicks14 = 0;
  let clicks21 = 0;
  let clicks22 = 0;
  let clicks23 = 0;
  let clicks24 = 0;
  let clicks31 = 0;
  let clicks32 = 0;
  let clicks33 = 0;
  let clicks34 = 0;
  let clicks41 = 0;
  let clicks42 = 0;
  let clicks43 = 0;
  let clicks44 = 0;
  let editable = true;
  let red11 = false;
  let red12 = false;
  let red13 = false;
  let red14 = false;
  let red21 = false;
  let red22 = false;
  let red23 = false;
  let red24 = false;
  let red31 = false;
  let red32 = false;
  let red33 = false;
  let red34 = false;
  let red41 = false;
  let red42 = false;
  let red43 = false;
  let red44 = false;
  let blue11 = false;
  let blue12 = false;
  let blue13 = false;
  let blue14 = false;
  let blue21 = false;
  let blue22 = false;
  let blue23 = false;
  let blue24 = false;
  let blue31 = false;
  let blue32 = false;
  let blue33 = false;
  let blue34 = false;
  let blue41 = false;
  let blue42 = false;
  let blue43 = false;
  let blue44 = false;
    
  function displayPortrait() {

    for (let i = 0; i < tbl.length; i++) {
      tbl[i].style.border = "0.5vw solid #ffffff";
      tbl[i].style.width = "85vw";
      tbl[i].style.height = "85vw";
    };

    for (let i = 0; i < td.length; i++) {
      td[i].style.border = "0.5vw solid #ffffff";
      td[i].style.width = "20vw";
      td[i].style.height = "20vw";
    };

    for (let i = 0; i < d.length; i++) {
      d[i].style.width = "21vw"; // 21vw instead of 20vw is used to avoid unexpected spacing
      d[i].style.height = "21vw"; // 21vw instead of 20vw is used to avoid unexpected spacing
    };

    /*content.style.width = "85vw";
    content.style.height = "85vw";*/
    //content.style.margin = "auto";
  }

  function displayLandscape() { 

    for (let i = 0; i < tbl.length; i++) {
      tbl[i].style.border = "0.5vh solid #ffffff";
      tbl[i].style.width = "85vh";
      tbl[i].style.height = "85vh";
    };

    for (let i = 0; i < td.length; i++) {
      td[i].style.border = "0.5vh solid #ffffff";
      td[i].style.width = "20vh";
      td[i].style.height = "20vh";
    };

    for (let i = 0; i < d.length; i++) {
      d[i].style.width = "21vh"; // 21vw instead of 20vw is used to avoid unexpected spacing
      d[i].style.height = "21vh"; // 21vw instead of 20vw is used to avoid unexpected spacing
    };

    /*content.style.width = "85vh";
    content.style.height = "85vh";*/
    //content.style.margin = "auto";
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


    d11.style.width = "20vw";
    d11.style.height = "20vw";
    d12.style.width = "20vw";
    d12.style.height = "20vw";
    d13.style.width = "20vw";
    d13.style.height = "20vw";
    d14.style.width = "20vw";
    d14.style.height = "20vw";

    d21.style.width = "20vw";
    d21.style.height = "20vw";
    d22.style.width = "20vw";
    d22.style.height = "20vw";
    d23.style.width = "20vw";
    d23.style.height = "20vw";
    d24.style.width = "20vw";
    d24.style.height = "20vw";

    d31.style.width = "20vw";
    d31.style.height = "20vw";
    d32.style.width = "20vw";
    d32.style.height = "20vw";
    d33.style.width = "20vw";
    d33.style.height = "20vw";
    d34.style.width = "20vw";
    d34.style.height = "20vw";

    d41.style.width = "20vw";
    d41.style.height = "20vw";
    d42.style.width = "20vw";
    d42.style.height = "20vw";
    d43.style.width = "20vw";
    d43.style.height = "20vw";
    d44.style.width = "20vw";
    d44.style.height = "20vw";
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


    d11.style.width = "20vh";
    d11.style.height = "20vh";
    d12.style.width = "20vh";
    d12.style.height = "20vh";
    d13.style.width = "20vh";
    d13.style.height = "20vh";
    d14.style.width = "20vh";
    d14.style.height = "20vh";

    d21.style.width = "20vh";
    d21.style.height = "20vh";
    d22.style.width = "20vh";
    d22.style.height = "20vh";
    d23.style.width = "20vh";
    d23.style.height = "20vh";
    d24.style.width = "20vh";
    d24.style.height = "20vh";

    d31.style.width = "20vh";
    d31.style.height = "20vh";
    d32.style.width = "20vh";
    d32.style.height = "20vh";
    d33.style.width = "20vh";
    d33.style.height = "20vh";
    d34.style.width = "20vh";
    d34.style.height = "20vh";

    d41.style.width = "20vh";
    d41.style.height = "20vh";
    d42.style.width = "20vh";
    d42.style.height = "20vh";
    d43.style.width = "20vh";
    d43.style.height = "20vh";
    d44.style.width = "20vh";
    d44.style.height = "20vh";
  }

/*
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
  }*/
/*
  function setCellBorders() {

    d11.style.backgroundImage = "url('imgs/c11.png')";
    d11.style.backgroundSize = "cover";
    d11.style.backgroundRepeat = "no-repeat";
    d11.style.backgroundPosition = "center";

    d12.style.backgroundImage = "url('imgs/c12.png')";
    d12.style.backgroundSize = "cover";
    d12.style.backgroundRepeat = "no-repeat";
    d12.style.backgroundPosition = "center";

    d13.style.backgroundImage = "url('imgs/c13.png')";
    d13.style.backgroundSize = "cover";
    d13.style.backgroundRepeat = "no-repeat";
    d13.style.backgroundPosition = "center";

    d14.style.backgroundImage = "url('imgs/c14.png')";
    d14.style.backgroundSize = "cover";
    d14.style.backgroundRepeat = "no-repeat";
    d14.style.backgroundPosition = "center";

    d21.style.backgroundImage = "url('imgs/c21.png')";
    d21.style.backgroundSize = "cover";
    d21.style.backgroundRepeat = "no-repeat";
    d21.style.backgroundPosition = "center";

    d22.style.backgroundImage = "url('imgs/c22.png')";
    d22.style.backgroundSize = "cover";
    d22.style.backgroundRepeat = "no-repeat";
    d22.style.backgroundPosition = "center";

    d23.style.backgroundImage = "url('imgs/c23.png')";
    d23.style.backgroundSize = "cover";
    d23.style.backgroundRepeat = "no-repeat";
    d23.style.backgroundPosition = "center";

    d24.style.backgroundImage = "url('imgs/c24.png')";
    d24.style.backgroundSize = "cover";
    d24.style.backgroundRepeat = "no-repeat";
    d24.style.backgroundPosition = "center";

    d31.style.backgroundImage = "url('imgs/c31.png')";
    d31.style.backgroundSize = "cover";
    d31.style.backgroundRepeat = "no-repeat";
    d31.style.backgroundPosition = "center";

    d32.style.backgroundImage = "url('imgs/c32.png')";
    d32.style.backgroundSize = "cover";
    d32.style.backgroundRepeat = "no-repeat";
    d32.style.backgroundPosition = "center";

    d33.style.backgroundImage = "url('imgs/c33.png')";
    d33.style.backgroundSize = "cover";
    d33.style.backgroundRepeat = "no-repeat";
    d33.style.backgroundPosition = "center";

    d34.style.backgroundImage = "url('imgs/c34.png')";
    d34.style.backgroundSize = "cover";
    d34.style.backgroundRepeat = "no-repeat";
    d34.style.backgroundPosition = "center";

    d41.style.backgroundImage = "url('imgs/c41.png')";
    d41.style.backgroundSize = "cover";
    d41.style.backgroundRepeat = "no-repeat";
    d41.style.backgroundPosition = "center";

    d42.style.backgroundImage = "url('imgs/c42.png')";
    d42.style.backgroundSize = "cover";
    d42.style.backgroundRepeat = "no-repeat";
    d42.style.backgroundPosition = "center";

    d43.style.backgroundImage = "url('imgs/c43.png')";
    d43.style.backgroundSize = "cover";
    d43.style.backgroundRepeat = "no-repeat";
    d43.style.backgroundPosition = "center";

    d44.style.backgroundImage = "url('imgs/c44.png')";
    d44.style.backgroundSize = "cover";
    d44.style.backgroundRepeat = "no-repeat";
    d44.style.backgroundPosition = "center";
  }*/

  function setTickmarkPortrait() {

    tickmark11.style.width = "5vw";
    tickmark11.style.height = "5vw";

    tickmark13.style.width = "5vw";
    tickmark13.style.height = "5vw";

    tickmark23.style.width = "5vw";
    tickmark23.style.height = "5vw";

    tickmark24.style.width = "5vw";
    tickmark24.style.height = "5vw";

    tickmark32.style.width = "5vw";
    tickmark32.style.height = "5vw";

    tickmark34.style.width = "5vw";
    tickmark34.style.height = "5vw";

    tickmark42.style.width = "5vw";
    tickmark42.style.height = "5vw";

    tickmark44.style.width = "5vw";
    tickmark44.style.height = "5vw";
  }

  function setTickmarkLandscape() {

    tickmark11.style.width = "5vh";
    tickmark11.style.height = "5vh";

    tickmark13.style.width = "5vh";
    tickmark13.style.height = "5vh";

    tickmark23.style.width = "5vh";
    tickmark23.style.height = "5vh";

    tickmark24.style.width = "5vh";
    tickmark24.style.height = "5vh";

    tickmark32.style.width = "5vh";
    tickmark32.style.height = "5vh";

    tickmark34.style.width = "5vh";
    tickmark34.style.height = "5vh";

    tickmark42.style.width = "5vh";
    tickmark42.style.height = "5vh";

    tickmark44.style.width = "5vh";
    tickmark44.style.height = "5vh";
  }

  function gameLogic() {

    tickmark11 = document.createElement("img");
    tickmark11.src = "imgs/tickmark.png";

    tickmark13 = document.createElement("img");
    tickmark13.src = "imgs/tickmark.png";

    tickmark23 = document.createElement("img");
    tickmark23.src = "imgs/tickmark.png";
 
    tickmark24 = document.createElement("img");
    tickmark24.src = "imgs/tickmark.png";

    tickmark32 = document.createElement("img");
    tickmark32.src = "imgs/tickmark.png";

    tickmark34 = document.createElement("img");
    tickmark34.src = "imgs/tickmark.png";
   
    tickmark42 = document.createElement("img");
    tickmark42.src = "imgs/tickmark.png";

    tickmark44 = document.createElement("img");
    tickmark44.src = "imgs/tickmark.png";
    
    //c11.style.textAlign = "right";
    //.style.verticalAlign = "top";
    d11.appendChild(tickmark11);
    d13.appendChild(tickmark13);
    d23.appendChild(tickmark23);
    d24.appendChild(tickmark24);
    d32.appendChild(tickmark32);
    d34.appendChild(tickmark34);
    d42.appendChild(tickmark42);
    d44.appendChild(tickmark44);

    /*
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
    c44.style.backgroundColor = "#aaaaaa";
    */

    c11.style.backgroundColor = "#26b0f0ff";
    c12.style.backgroundColor = "transparent";
    c13.style.backgroundColor = "#f02626ff";
    c14.style.backgroundColor = "transparent";
    c21.style.backgroundColor = "transparent";
    c22.style.backgroundColor = "transparent";
    c23.style.backgroundColor = "#26b0f0ff";
    c24.style.backgroundColor = "#f02626ff";
    c31.style.backgroundColor = "transparent";
    c32.style.backgroundColor = "#26b0f0ff";
    c33.style.backgroundColor = "transparent";
    c34.style.backgroundColor = "#f02626ff";
    c41.style.backgroundColor = "transparent";
    c42.style.backgroundColor = "#f02626ff";
    c43.style.backgroundColor = "transparent";
    c44.style.backgroundColor = "#26b0f0ff";

    function checkWin() {
      if ((red12 == true) && 
        (blue14 == true) && 
        (red21 == true) && 
        (blue22 == true) && 
        (blue31 == true) && 
        (red33 == true) && 
        (red41 == true) && 
        (blue43 == true)) {
          editable = false;
          setTimeout(function() {
            alert("You Win!");
          }, 200);
      }
    }

    d12.addEventListener("click", function(e) {
      setTimeout(function() {
       if (editable) {
          
          if (clicks12 == 1) {
              c12.style.backgroundColor = "#f02626ff";
              red12 = true;
              blue12 = false;
          } else if (clicks12 == 0) {
              c12.style.backgroundColor = "#26b0f0ff";
              red12 = false;
              blue12 = true;
          } else {
              null;
          }
          clicks12 = clicks12 + 1;
          if (clicks12 >= 2) {
            clicks12 = 0;
          }
          checkWin();
        }
      }, 200);
    });

    d14.addEventListener("click", function(e) {
      setTimeout(function() {
       if (editable) {
          
          if (clicks14 == 1) {
              c14.style.backgroundColor = "#f02626ff";
              red14 = true;
              blue14 = false;
          } else if (clicks14 == 0) {
              c14.style.backgroundColor = "#26b0f0ff";
              red14 = false;
              blue14 = true;
          } else {
              null;
          }
          clicks14 = clicks14 + 1;
          if (clicks14 >= 2) {
            clicks14 = 0;
          }
          checkWin();
        }
      }, 200);
    });

    d21.addEventListener("click", function(e) {
      setTimeout(function() {
       if (editable) {
          
          if (clicks21 == 1) {
              c21.style.backgroundColor = "#f02626ff";
              red21 = true;
              blue21 = false;
          } else if (clicks21 == 0) {
              c21.style.backgroundColor = "#26b0f0ff";
              red21 = false;
              blue21 = true;
          } else {
              null;
          }
          clicks21 = clicks21 + 1;
          if (clicks21 >= 2) {
            clicks21 = 0;
          }
          checkWin();
        }
      }, 200);
    });

    d22.addEventListener("click", function(e) {
      setTimeout(function() {
       if (editable) {
          
          if (clicks22 == 1) {
              c22.style.backgroundColor = "#f02626ff";
              red22 = true;
              blue22 = false;
          } else if (clicks22 == 0) {
              c22.style.backgroundColor = "#26b0f0ff";
              red22 = false;
              blue22 = true;
          } else {
              null;
          }
          clicks22 = clicks22 + 1;
          if (clicks22 >= 2) {
            clicks22 = 0;
          }
          checkWin();
        }
      }, 200);
    });

    d31.addEventListener("click", function(e) {
      setTimeout(function() {
       if (editable) {
          
          if (clicks31 == 1) {
              c31.style.backgroundColor = "#f02626ff";
              red31 = true;
              blue31 = false;
          } else if (clicks31 == 0) {
              c31.style.backgroundColor = "#26b0f0ff";
              red31 = false;
              blue31 = true;
          } else {
              null;
          }
          clicks31 = clicks31 + 1;
          if (clicks31 >= 2) {
            clicks31 = 0;
          }
          checkWin();
        }
      }, 200);
    });

    d33.addEventListener("click", function(e) {
      setTimeout(function() {
       if (editable) {
          
          if (clicks33 == 1) {
              c33.style.backgroundColor = "#f02626ff";
              red33 = true;
              blue33 = false;
          } else if (clicks33 == 0) {
              c33.style.backgroundColor = "#26b0f0ff";
              red33 = false;
              blue33 = true;
          } else {
              null;
          }
          clicks33 = clicks33 + 1;
          if (clicks33 >= 2) {
            clicks33 = 0;
          }
          checkWin();
        }
      }, 200);
    });

    d41.addEventListener("click", function(e) {
      setTimeout(function() {
       if (editable) {
          
          if (clicks41 == 1) {
              c41.style.backgroundColor = "#f02626ff";
              red41 = true;
              blue41 = false;
          } else if (clicks41 == 0) {
              c41.style.backgroundColor = "#26b0f0ff";
              red41 = false;
              blue41 = true;
          } else {
              null;
          }
          clicks41 = clicks41 + 1;
          if (clicks41 >= 2) {
            clicks41 = 0;
          }
          checkWin();
        }
      }, 200);
    });

    d43.addEventListener("click", function(e) {
      setTimeout(function() {
       if (editable) {
          
          if (clicks43 == 1) {
              c43.style.backgroundColor = "#f02626ff";
              red43 = true;
              blue43 = false;
          } else if (clicks43 == 0) {
              c43.style.backgroundColor = "#26b0f0ff";
              red43 = false;
              blue43 = true;
          } else {
              null;
          }
          clicks43 = clicks43 + 1;
          if (clicks43 >= 2) {
            clicks43 = 0;
          }
          checkWin();
        }
      }, 200);
    });
  }

  // Check for portrait orientation
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;

  if (isPortrait) {
      console.log("Device is in portrait mode at initial load.");
      // Perform actions specific to portrait mode
      gameLogic();
      displayPortrait();
      //updateCellSizePortrait();
      //setCellBorders();
      setTickmarkPortrait();

  } else {
      console.log("Device is in landscape mode at initial load.");
      // Perform actions specific to landscape mode
      gameLogic();
      displayLandscape();
      //updateCellSizeLandscape();
      //setCellBorders();
      setTickmarkLandscape();
  }

/*
  if (w < h) {
    displayPortrait();
    updateCellSizePortrait();
    setCellBorders();
    //setTickmarkPortrait();
    
  } else {
    displayLandscape();
    updateCellSizeLandscape();
    setCellBorders();
    //setTickmarkLandscape();
  };
*/

  // Listen for orientation changes
  window.matchMedia("(orientation: portrait)").addEventListener("change", (e) => {
    
    if (e.matches) {
      displayPortrait();
      //updateCellSizePortrait();
      //setCellBorders();
      setTickmarkPortrait();
    } else {
      displayLandscape();
      //updateCellSizeLandscape();
      //setCellBorders();
      setTickmarkLandscape();
    } 
    
  });
  
// Listen for viewport resize
/*let resizeTimer;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimer); // Clear any existing timer
    resizeTimer = setTimeout(() => {
      // This code will execute only after 200ms of no further resize events
      console.log("Window resize completed!");
      // Place your resize-dependent logic here
      // For example, update layout, recalculate positions, etc.
      w = window.innerWidth;
      h = window.innerHeight;

      if ((w < h)) {
      
      displayPortrait();
      updateCellSizePortrait();
      setCellBorders();
      //setTickmarkPortrait(); 
          
      } else {
      
      displayLandscape();
      updateCellSizeLandscape();
      setCellBorders();
      //setTickmarkLandscape();
      
    }
  }, 0); // Adjust the debounce delay (in milliseconds) as needed
});*/

}
