 function fun1(){
  window.open('form.html', target = "_blank")
 }



// slideshow starts from here!!
let slide = document.getElementsByClassName('simg')

    let p = 0;
    slide[0].style.display = "block";
    function func1(n) {
      p += n
      slide[p - 1].style.display = "none";
      if (p > slide.length || p == slide.length) { p = 0 }
      console.log(p)
      slide[p].style.display = "block";

    }
    function func2(n) {
      p += n
      slide[p + 1].style.display = "none";
      if (p < 0) { p = slide.length - 1 }
      console.log(p)
      slide[p].style.display = "block";

    }

// slideshow ends here 

