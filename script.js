"use strict"
let tab;
let tabContent;

window.onload = function () {
  tabContent = document.getElementsByClassName("tabContent");
  tab = document.getElementsByClassName("tab");
  hideTabsContent(1);
}

function hideTabsContent(a) {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
    tab[i].classList.remove("whiteborder");
  }
}

document.getElementById("tabs").onclick = function(event) {
  let target = event.target;
  if (target.className == "tab") {
    for (let i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
}

function showTabsContent(b) {
  if (tabContent[b].classList.contains("hide")) {
    hideTabsContent(0);
    tab[b].classList.add("whiteborder");
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
  }
}


/*Кнопка для Прямоугольника*/

let btnR = document.getElementById("myBtnR");

btnR.onclick = function() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;  
    
  let s = a * b;
    document.getElementById("area").innerHTML = "S = a * b = " +a+ " * " +b+ " = " +s/*.toFixed(4)*/+ "[ед.изм<sup>2</sup>]"; 
}


/*Кнопка для Треугольника*/

let btnT = document.getElementById("myBtnT");

btnT.onclick = function() {
  let aa = document.getElementById("aa").value;
  let h = document.getElementById("h").value;  
    
  let ss = 0.5 * aa * h;
    document.getElementById("areaT").innerHTML = "S = 0.5 * a * h = 0.5 * " +aa+ " * " +h+ " = " +ss/*.toFixed(4)*/+ "[ед.изм<sup>2</sup>]"; 
}



/*Кнопка для Круга*/

let btnO = document.getElementById("myBtnO");

btnO.onclick = function() {
  let d = document.getElementById("d").value;  
    
  let sss =  3.14 * d * d / 4;
    document.getElementById("areaO").innerHTML = "S = Пи * " +d+ "<sup>2</sup> / 4 = " +sss/*.toFixed(4)*/+ "[ед.изм<sup>2</sup>]"; 
}
