const slide = document.querySelectorAll('.slide')
const dot = document.querySelectorAll('.dot')
let counter = 1

const plusSlides = (n) => {
	counter += n
	slideFunc(counter)
}
const currentSlide = (n) => {
	counter = n
	slideFunc(counter)
}
const slideFunc = (n) => {
	let i
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = 'none'
	}
	for (i = 0; i < dot.length; i++) {
		dot[i].classList.remove('active')
	}
	if (n > slide.length) {
		counter = 1
	}
	if (n < 1) {
		counter = slide.length
	}
	slide[counter - 1].style.display = 'block'
	dot[counter - 1].classList.add('active')
}
