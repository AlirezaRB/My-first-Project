// Carousel 

const slides = document.getElementsByClassName("carousel-item")
let totalSlides = slides.length
let position = 0

document.getElementById("carousel-btn-previous").addEventListener("click", goToPrev)
document.getElementById("carousel-btn-next").addEventListener("click", goToNext)

function hideSlides() {
    for(item of slides) {
        item.classList.remove("carousel-item-visible")
        item.classList.add("carousel-hidden")
    }
}

function goToPrev() {
    hideSlides()
    if (position === totalSlides - 1) {
        position = 0
    } else {
        position++
    }
    slides[position].classList.add("carousel-item-visible")
}

function goToNext() {
    hideSlides()
    if (position === 0) {
        position = totalSlides - 1
    } else {
        position--
    }
    slides[position].classList.add("carousel-item-visible")
}

// Carousel 


// Menu 

document.getElementById("nav-menu-div").addEventListener("click", function() {
    document.body.classList.add("menu-open")
})

document.getElementById("closing-area").addEventListener("click", function() {
    document.body.classList.remove("menu-open")
})

document.getElementById("whatsapp-container").addEventListener("mouseover", function() {
    document.body.classList.add("whatsapp-hover")
})

document.getElementById("whatsapp-container").addEventListener("mouseout", function() {
    document.body.classList.remove("whatsapp-hover")
})
