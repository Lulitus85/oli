// Menu Hamburguesa
// selector
const menu = document.querySelector("#hamburger");

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);
//





/*changes background of desktop navbar */
const navbar = document.querySelector('#desktop-nav'); 
window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
        navbar.classList.add('scrolled'); 
	} else {
        navbar.classList.remove('scrolled'); 
    }
});

/*nosotros slide*/
window.onload = function () {
    let slides = 
        document.getElementsByClassName('carousel-item');

    function addActive(slide) {
        slide.classList.add('active');
    }

    function removeActive(slide) {
        slide.classList.remove('active');
    }

    addActive(slides[0]);
    setInterval(function () {
        for (let i = 0; i < slides.length; i++) {
            if (i + 1 == slides.length) {
                addActive(slides[0]);
                setTimeout(removeActive, 350, slides[i]);
                break;
            }
            if (slides[i].classList.contains('active')) {
                setTimeout(removeActive, 350, slides[i]);
                addActive(slides[i + 1]);
                break;
            }
        }
    }, 10000);
};

//Txt Carrousel.

const carouselItems = document.querySelectorAll(".carousel_item");

let i = 0;

setInterval(() => {
  Array.from(carouselItems).forEach((item, index) => {
    if (i < carouselItems.length) {
      item.style.transform = `translateX(-${i * 100}%)`;
    }
  });
  if (i < carouselItems.length) {
    i++;
  } else {
    i = 0;
  }
}, 10000);


//email sender - https://www.emailjs.com/docs/tutorial/creating-contact-form/
(function() {
	// https://dashboard.emailjs.com/admin/account
	emailjs.init({
	 // publicKey: "YOUR_PUBLIC_KEY",
	 publicKey: "v8I5wNGQOys1MGRzT",
	});
})();

const msg = document.querySelector(".form-message");
const nameForm = document.querySelector(".name-input");
const emailForm = document.querySelector(".email-input");
const msgForm = document.querySelector(".msg-input");
const errorCheck = [];
errorCheck.push(nameForm, emailForm, msgForm);

window.onload = function() {
	document.getElementById('contact-form').addEventListener('submit', function(event) {
		event.preventDefault();
    for(let i = 0; i < errorCheck.length; i++){
      if(errorCheck[i].classList.contains("redError")){
        errorCheck[i].classList.remove("redError");
      }
    }
    if(nameForm.value !== '' || emailForm.value !== '' || msgForm.value !== ''){
      document.querySelector(".btn-submit").classList.add("hide-btn");
      document.querySelector(".loader").classList.add("show");
      // these IDs from the previous steps
      emailjs.sendForm('service_qfsxptk', 'template_w32txs6', this)
        .then(function() {
          document.getElementById("contact-form").reset();
          document.querySelector(".loader").classList.remove("show");
          msg.innerHTML = "";
          msg.innerHTML += "<span class='success-msg'>Correo enviado!</span>"; 
          msg.classList.add("show");
          setTimeout(()=> msg.classList.remove("show"), 2000);
          setTimeout(()=> document.querySelector(".btn-submit").classList.remove("hide-btn"), 2000);
        }, (error) => {
          console.log('FAILED...', error);
        });
    } else {
      for (let i = 0; i < errorCheck.length; i++){
        if(errorCheck[i].value === ''){
          errorCheck[i].classList.add("redError");
        }
      }
    }
	});
}
