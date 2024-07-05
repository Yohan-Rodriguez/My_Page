const list = document.querySelector(".list");
const item = document.querySelector(".item");
const itemWidth = item.offsetWidth;


document.addEventListener('DOMContentLoaded', function() {
    checkCarouselButtons('educationList');
    checkCarouselButtons('biList');
    checkCarouselButtons('statsList');
    checkCarouselButtons('dbList');
    checkCarouselButtons('analyticsList');
    checkCarouselButtons('scienceList');
    checkCarouselButtons('cloudList');

    const imageContainer = document.querySelector('.image-container');


    imageContainer.addEventListener('click', function() {
        // Cambiar dinámicamente el tamaño del contenedor al hacer clic
        if (imageContainer.classList.contains('expanded')) {
            imageContainer.classList.remove('expanded');
            imageContainer.style.width = '200px'; // Tamaño inicial
            imageContainer.style.height = '200px'; // Tamaño inicial
        } else {
            imageContainer.classList.add('expanded');
            imageContainer.style.width = '400px'; // Tamaño ampliado
            imageContainer.style.height = '400px'; // Tamaño ampliado
        }
    });
});



function checkCarouselButtons(listId) {
    var list = document.getElementById(listId);
    var items = list.querySelectorAll('.list > li');
    var prevButton = list.querySelector('.button--previous');
    var nextButton = list.querySelector('.button--next');

    if (items.length > 2) {
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
    } else {
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
    }
}


document.querySelectorAll('.list-wrapper').forEach(wrapper => {
    const list = wrapper.querySelector(".list");
    const item = wrapper.querySelector(".item");
    const itemWidth = item.offsetWidth;

    function handleClick(direction) {
        if (direction === "previous") {
            list.scrollBy({ left: -itemWidth, behavior: "smooth" });
        } else {
            list.scrollBy({ left: itemWidth, behavior: "smooth" });
        }
    }

    wrapper.querySelector(".button--previous").addEventListener("click", function() {
        handleClick('previous');
    });

    wrapper.querySelector(".button--next").addEventListener("click", function() {
        handleClick('next');
    });
});


