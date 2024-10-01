
document.querySelectorAll(".dropdown > a").forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelectorAll(".dropdown-content").forEach((menu) => {
            if (menu !== this.nextElementSibling) {
                menu.style.display = "none";
            }
        });

        let dropdownMenu = this.nextElementSibling;
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    });
});

document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-content").forEach((menu) => {
            menu.style.display = "none";
        });
    }
});


// Слайдер 

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = "none";
        dots[i].classList.remove("active");
    });

    slides[currentIndex].style.display = "block";
    dots[currentIndex].classList.add("active");
}


function moveSlide(step) {
    showSlide(currentIndex + step);
}

function currentSlide(index) {
    showSlide(index);
}

function initSlider() {
    showSlide(currentIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => currentSlide(index));
});

document.addEventListener("DOMContentLoaded", initSlider);

// вкладки
let tabBtns = document.querySelectorAll('.tab__btn')
let tabTexts = document.querySelectorAll('.tab__text')

tabBtns.forEach((item, index) => {
    item.addEventListener('click', function () {
        document.querySelector('.tab__btn.active').classList.remove('active');
        item.classList.add('active');

        document.querySelector('.tab__text.active').classList.remove('active');
        tabTexts[index].classList.add('active')
    })
})

// телефон
let phoneBtn = document.querySelector(".phone");
let faq = document.querySelector(".faq");

let observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                phoneBtn.classList.add("show");
            } else {
                phoneBtn.classList.remove("show");
            }
        });
    },
    {
        threshold: 0.5,
    }
);

observer.observe(faq);


var modal = document.getElementById("myModal");

var span = document.getElementsByClassName("close")[0];

window.onload = function () {
    setTimeout(function () {
        modal.style.display = "block";
    }, 3000);
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


document.querySelectorAll('.faq-card').forEach(card => {
    card.addEventListener('click', function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            document.querySelectorAll('.faq-card').forEach(card => {
                card.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});
