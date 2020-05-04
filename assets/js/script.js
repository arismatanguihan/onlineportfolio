// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("gototop").style.display = "block";
  } else {
    document.getElementById("gototop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function aosInit(){
  AOS.init({
      duration: 1500,
    });
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function ModalDisplay() {
  		  $('#exampleModal').on('show.bs.modal', function (event) {
            // Fix Animate.css
            let element = document.getElementById("parent_div1");
            element.removeAttribute('data-aos');
            // $('#parent_div1').removeClass('bounce');
        });

        $('#exampleModal').on('hidden.bs.modal', function (e) {
            // Fix Animate.css
         	 let element = document.getElementById("parent_div1");
           	 element.setAttribute('data-aos','flip-left');   
            // $('#parent_div1').addClass('bounce');
        });

         $('#exampleModal2').on('show.bs.modal', function (event) {
            let element = document.getElementById("parent_div2");
            element.removeAttribute('data-aos');   
        });

        $('#exampleModal2').on('hidden.bs.modal', function (e) {
         	 let element = document.getElementById("parent_div2");
           	 element.setAttribute('data-aos','flip-up');        
        });

         $('#exampleModal3').on('show.bs.modal', function (event) {
            let element = document.getElementById("parent_div3");
            element.removeAttribute('data-aos');      
        });

        $('#exampleModal3').on('hidden.bs.modal', function (e) {
         	 let element = document.getElementById("parent_div3");
           	 element.setAttribute('data-aos','flip-right');   
        });

        $('#exampleModal4').on('show.bs.modal', function (event) {
            // Fix Animate.css
            let element = document.getElementById("parent_div4");
            element.removeAttribute('data-aos');
            // $('#parent_div1').removeClass('bounce');
        });

        $('#exampleModal4').on('hidden.bs.modal', function (e) {
            // Fix Animate.css
           let element = document.getElementById("parent_div4");
             element.setAttribute('data-aos','flip-left');   
            // $('#parent_div1').addClass('bounce');
        });

        $('#exampleModal5').on('show.bs.modal', function (event) {
          // Fix Animate.css
          let element = document.getElementById("parent_div5");
          element.removeAttribute('data-aos');
          // $('#parent_div1').removeClass('bounce');
         });

        $('#exampleModal5').on('hidden.bs.modal', function (e) {
            // Fix Animate.css
          let element = document.getElementById("parent_div5");
            element.setAttribute('data-aos','flip-left');   
            // $('#parent_div1').addClass('bounce');
        });
        $('#exampleModal6').on('show.bs.modal', function (event) {
          // Fix Animate.css
          let element = document.getElementById("parent_div6");
          element.removeAttribute('data-aos');
          // $('#parent_div1').removeClass('bounce');
         });

        $('#exampleModal6').on('hidden.bs.modal', function (e) {
            // Fix Animate.css
          let element = document.getElementById("parent_div6");
            element.setAttribute('data-aos','flip-left');   
            // $('#parent_div1').addClass('bounce');
        });
        $('#exampleModal7').on('show.bs.modal', function (event) {
          // Fix Animate.css
          let element = document.getElementById("parent_div7");
          element.removeAttribute('data-aos');
          // $('#parent_div1').removeClass('bounce');
         });

        $('#exampleModal7').on('hidden.bs.modal', function (e) {
            // Fix Animate.css
          let element = document.getElementById("parent_div7");
            element.setAttribute('data-aos','flip-left');   
            // $('#parent_div1').addClass('bounce');
        });
        $('#exampleModal8').on('show.bs.modal', function (event) {
          // Fix Animate.css
          let element = document.getElementById("parent_div8");
          element.removeAttribute('data-aos');
          // $('#parent_div1').removeClass('bounce');
         });

        $('#exampleModal8').on('hidden.bs.modal', function (e) {
            // Fix Animate.css
          let element = document.getElementById("parent_div8");
            element.setAttribute('data-aos','flip-left');   
            // $('#parent_div1').addClass('bounce');
        });
        $('#exampleModal9').on('show.bs.modal', function (event) {
          // Fix Animate.css
          let element = document.getElementById("parent_div9");
          element.removeAttribute('data-aos');
          // $('#parent_div1').removeClass('bounce');
         });

        $('#exampleModal9').on('hidden.bs.modal', function (e) {
            // Fix Animate.css
          let element = document.getElementById("parent_div9");
            element.setAttribute('data-aos','flip-left');   
            // $('#parent_div1').addClass('bounce');
        });


}

function navActive(){
    let header = document.getElementById("navbar-nav");
    let btns = header.getElementsByClassName("nav-item");
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }
}

