var myVar;
            
function stuff() {
  myVar = setTimeout(showPage, 1000);
}

function loadingScreen() {
    stuff();
}

function showPage() {
  document.getElementsByClassName("loader")[0].style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


/***** CHANGE DARK/LIGHT TOGGLE IMAGE *****/
var n = 0;

function changeImage() {
  if ( n == 0 ) {
    document.getElementsByClassName('dlimg')[0].src = "Images/sun.png";
    n = 1;
  }
  else if ( n == 1 ) {
    document.getElementsByClassName('dlimg')[0].src = "Images/moon.png";
    n = 0;
  }
}
    
    
    
/***** DARK/LIGHT TOGGLE *****/
function toggleDarkLight() {
    var body = document.getElementById("body");
    var bCurrentClass = body.className;
    body.className = bCurrentClass == "dark-mode" ? "light-mode" : "dark-mode";
    changeImage();
    
    var graydiv = document.getElementsByClassName("graydiv");
    var graydivdark = document.getElementsByClassName("graydivdark");
    var i=0;
    if (graydiv.length > 0) {
        for (i=0; i<graydiv.length; i++) {
            graydiv.item(i).className = "graydivdark";
        }
    } else if (graydivdark.length > 0) {
        for (i=0; i<graydivdark.length; i++) {
            graydivdark.item(i).className = "graydiv";
        }
    }
}
    
    
    
/***** TRANSITIONING TOPNAV COLOR *****/
window.onscroll = function() {scrollFunction()};  
    
    
    
/***** SCROLL-TO-TOP BUTTON *****/
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("topbtn").style.display = "block";
    //document.getElementById("dltoggle").style.display = "block";
    document.getElementById("contributebtn").style.display = "block";
    document.getElementsByClassName('topnav')[0].style.backgroundColor = "white";
    document.getElementsByClassName('topnav')[0].style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
    document.getElementsByClassName('dropdown-content')[0].style.backgroundColor = "white";
    document.getElementsByClassName('dropdown-content')[0].style.opacity = "1";
    document.getElementById('logoimg').src = "Logos/logonew.png";
    document.getElementById('dropimg').src = "Images/drop.png";
      
  } else {
    document.getElementById("topbtn").style.display = "none";
    //document.getElementById("dltoggle").style.display = "none";
    document.getElementById("contributebtn").style.display = "none";
    document.getElementsByClassName('topnav')[0].style.backgroundColor = "transparent";
    document.getElementsByClassName('topnav')[0].style.boxShadow = "none";
    document.getElementsByClassName('dropdown-content')[0].style.backgroundColor = "white";
    document.getElementsByClassName('dropdown-content')[0].style.opacity = "0.8";
    document.getElementsByClassName('dropdown-content')[0].style.color = "white";
    document.getElementById('logoimg').src = "Logos/logonewwhite.png";
    document.getElementById('dropimg').src = "Images/drop2.png";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var coll = document.getElementsByClassName("collapsible");
var j=0;

if (coll.length > 0) {
  for (j = 0; j < coll.length; j++) {
    coll[j].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
    }
}

var coll2 = document.getElementsByClassName("collapsible2");
var k=0;

if (coll2.length > 0) {
  for (k = 0; k < coll2.length; k++) {
    coll2[k].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
    }
}

// var openPopup = function() {
//   typeformEmbed.makePopup("https://7gh5ta51vgo.typeform.com/to/n3eDFEmc", {
//     mode: "drawer_right",
//     open: "load",
//     autoClose: 3, //close form # seconds after submission
//     hideScrollbars: true,
//     onSubmit: function() {
//       console.log("Typeform successfully submitted");
//     },
//     onReady: function() {
//       console.log("Typeform is ready");
//     },
//     onClose: function() {
//       console.log("Typeform is closed");
//     }
//   });
// };