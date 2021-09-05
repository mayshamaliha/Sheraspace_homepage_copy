window.addEventListener("scroll", function(){
  var header = this.document.querySelector('.div1_header2');
  header.classList.toggle("sticky", window.scrollY > 0);
})
window.addEventListener("scroll", function(){
  var header = this.document.querySelector('.footer');
  header.classList.toggle("sticky_footer", window.scrollY > 0);
})


function showPackageDetails(packageName, packageId){
  
  var x = document.getElementById(packageName);
  
  if (x.style.display === "none"){
    document.getElementById(packageId).innerHTML = "-View Details ";
    x.style.display = "block";
  }else{
    x.style.display ="none";
    document.getElementById(packageId).innerHTML = "+View Details ";
  }
}

//SlideShow
window.onload = function() {
  document.getElementById("Review_div1");
  
};


var slideIndex = 1;
/*showSlides(slideIndex);*/

function plusSlides(n){
    showSlides(slideIndex +=n);
}
/*function currentSlide(n){
    showSlides(slideIndex = n);
}*/

function showSlides(n){
    /*var div1 = document.getElementById("Review_div1")*/
    var i;
    var slides = document.getElementsByClassName("Review_div");
    if( n > slides.length) {
        slideIndex = 1;
    }
    if ( n < 1 ){
        slideIndex = slides.length;
    }
    for(i=0; i<slides.length; i++){
        slides[i].style.display= "none";
    }
    /*div1.remove();*/
    slides[slideIndex-1].style.display = "flex";
}



//slideShow