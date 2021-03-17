$(document).ready(function(){
  $(".mobile-menu").sticky({topSpacing:0});
});
$(document).ready(function(){
  $(".bg-menu-top").sticky({topSpacing:0});
});
//MOBILE MENU  HIDE/SHOW JQUERY START
$(document).ready(function(){
  $(".close-btn").click(function(){
    $(".left-menu").animate({left: "-300px"}, 500);
    $(".block-hide").css({display:"block"});
    // $(".mobile-menu").css({display:"flex"});
  });
    $(".hamburger").click(function(){
    $(".left-menu").animate({left: "0"});
    $(".block-hide").css({display:"none"});
    // $(".mobile-menu").css({display:"none"});
  });
});
//MOBILE MENU  HIDE/SHOW JQUERY END
//DESKTOP CARD HIDE/SHOW JQUERY START
$(document).ready(function(){
  $(".single-item-card").click(function(){
    $(".full-single-card-area").css({display:"block"});
    $(".block-hide").css({display:"none"});
  });
  $(".single-item-card.h-618").click(function(){
    $(".full-single-card-area").css({display:"none"});
    $(".block-hide").css({display:"block"});
  });
});
//DESKTOP CARD HIDE/SHOW JQUERY END
//MOBILE CARD HIDE/SHOW JQUERY START
$(document).ready(function(){
  $(".single-item-card-mobile").click(function(){
    $(".mbl-single-card-area-full").css({
      display: "flex",
      justifyContent: "center",
      alignItems: 'center'
    });
    $(".block-hide").css({display:"none"});
    $(".mobile-menu").css({display:"none"});
  });
  $(".mobile-single-crd").click(function(){
    $(".mbl-single-card-area-full").css({display:"none"});
    $(".block-hide").css({display:"block"});
    $(".mobile-menu").css({display:"block"});
  });
});
//MOBILE CARD HIDE/SHOW JQUERY END
//OVERLAY HIDE/SHOW JQUERY START
$(document).ready(function(){
  $('#overlay-full').css('display','block');
});
//OVERLAY HIDE/SHOW JQUERY END
//MOBILE FILTER MENU  HIDE/SHOW JQUERY START
$(document).ready(function(){
  $(".close-btn").click(function(){
    $(".left-filter-menu").animate({left: "-300px"}, 500);
    $(".block-hide").css({display:"block"});
    $(".mobile-menu").css({display:"flex"});
  });
    $(".filter-button").click(function(){
    $(".left-filter-menu").animate({left: "0"}, 500);
    $(".block-hide").css({display:"none"}, 5000);
    $(".mobile-menu").css({display:"none"}, 5000);
  });
});
//MOBILE FILTER MENU  HIDE/SHOW JQUERY START
//OWL CAROUSEL JQUERY CODE JQUERY START
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true,
    autoplay:true
});
});
//OWL CAROUSEL JQUERY CODE JQUERY END
//DROPDOWN JQUERY CODE JQUERY START
$(document).ready(function(){
 $("#db-filter-btn").click(function(){
  $("#dropdown-content").toggle();
  $(this).find("i").toggleClass("fa-caret-right fa-caret-down");
});
});
$(document).ready(function(){
  $("#db-mbl-filter-btn").click(function(){
   $("#dropdown-mbl-content").toggle();
   $(this).find("i").toggleClass("fa-caret-right fa-caret-down");
 });
 });
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
//DROPDOWN JQUERY CODE JQUERY END