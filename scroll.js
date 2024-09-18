window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 30) {
    document.getElementById("zakladki").style.top = "-100px";
  } else {
    document.getElementById("zakladki").style.top = "0";
  }
}


