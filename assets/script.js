const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

  /*Etape 2*/
var arrowLeft = document.getElementById('arrowLeft'); 
var arrowRight = document.getElementById('arrowRight');

/*Ajout des Event Listeners*/
arrowLeft.addEventListener('click', function() {  
  console.log('Clic sur la flèche gauche !');
  navigateSlide(-1); /*Etape 5*/
});

arrowRight.addEventListener('click', function() { 
  console.log('Clic sur la flèche droite !');
  navigateSlide(1); /*Etape 5*/
});


 /*Etape 3*/
/*Ajout des bullet points au slider*/
var dots = document.querySelectorAll('.dot');  
var currentSlideIndex = 0;

function updateDots() {  
	dots.forEach(function(dot, index) {
	  dot.classList.remove('dot_selected');
  
	  if (index === currentSlideIndex) {
		dot.classList.add('dot_selected');
	  }
	});
  }
  
 /*Etape 4*/
/*Modification du slide au clic sur le bouton*/
function navigateSlide(direction) {  
	currentSlideIndex += direction; 

	if (currentSlideIndex < 0) {
	  currentSlideIndex = slides.length - 1; 
	} else if (currentSlideIndex >= slides.length) {
	  currentSlideIndex = 0;  
	}

	updateDots();  
	updateSlideContent();  
  }  

  function updateSlideContent() {  
	var bannerImg = document.querySelector('.banner-img');
	var tagLine = document.querySelector('#banner p');
  
	bannerImg.src = './assets/images/slideshow/' + slides[currentSlideIndex].image;
	tagLine.innerHTML = slides[currentSlideIndex].tagLine;
  }
  

