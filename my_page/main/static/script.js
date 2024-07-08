/*
    Selección de elementos HTML
*/
const list = document.querySelector(".list");
const item = document.querySelector(".item");
const itemWidth = item.offsetWidth;     // Ancho del primer elemento con la clase .item.


document.addEventListener('DOMContentLoaded', function() {
    checkCarouselButtons('educationList');
    checkCarouselButtons('biList');
    checkCarouselButtons('statsList');
    checkCarouselButtons('dbList');
    checkCarouselButtons('analyticsList');
    checkCarouselButtons('scienceList');
    checkCarouselButtons('cloudList');  
});


/*
    AUMENTAR TAMAÑO DE LAS IMAGENES DE LAS CERTIFICACIONES
*/
document.addEventListener('DOMContentLoaded', function() {
    const zoomableImages = document.querySelectorAll('.zoomable-image');

    zoomableImages.forEach(image => {
        image.addEventListener('click', function() {
            image.classList.toggle('zoomed');

            // Después de 6 segundos, quitar la clase zoomed
            setTimeout(function() {
                image.classList.remove('zoomed');
            }, 5000);
        });
    });
});


/*
    Verificar cuántos elementos <li> hay dentro del contenedor
*/
function checkCarouselButtons(listId) {
    // Referencias al elemento de lista (<ul>), sus elementos <li>, 
    // y los botones de navegación previo y siguiente.
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

/*
    BOTONES "PREVIOUS" Y "NEXT"
*/
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


/*
    Mensaje para navegación horizontal en smartphones
*/
function checkOrientation() {
    const rotateMessage = document.querySelector('.rotate-message');
    if (window.innerHeight > window.innerWidth) {
        rotateMessage.style.display = 'block';  // Mostrar el mensaje en modo vertical
    } else {
        rotateMessage.style.display = 'none';  // Ocultar el mensaje en modo horizontal
    }
}

// Escuchar el cambio de orientación
window.addEventListener('resize', checkOrientation);

// Comprobar la orientación al cargar la página
document.addEventListener('DOMContentLoaded', checkOrientation);

document.addEventListener('DOMContentLoaded', function() {
    const text = "Mi nombre es Yohan Rodríguez. Cerca de ser profesional, en décimo semestre en la Licenciatura en Electrónica de la Universidad Pedagógica Nacional. Cuento con conocimientos en estadística y probabilidad, análisis de datos, bases de datos SQL, algoritmos de aprendizaje automático, redes neuronales, herramientas de visualización de datos, computación en la nube y metodologías ágiles como SCRUM.\n\nApoyando mis habilidades técnicas, he logrado desarrollar una serie de competencias blandas que me permiten destacar en el área profesional que incluyen: el pensamiento crítico, la comunicación asertiva, la resolución de problemas, el trabajo en equipo, la gestión del tiempo y la visualización de datos.\n\nSoy un profesional motivado por la tecnología e innovación y las barreras sociales que pueden ser derribadas gracias a la buena aplicación de desarrollos y adquisición de conocimientos tecnológicos. Deseo sentirme en un entorno de retos con un nivel notable de dificultad, donde los resultados buscados tengan un alcance relevante en su mismo contexto.";
    const typingTextElement = document.getElementById('typing-text');
    let index = 0;

    function type() {
        if (index < text.length) {
            typingTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 30); // Ajusta la velocidad de digitación (en milisegundos)
        }
    }

    type();
});


/*
    MOSTRAR INOFRMACIÓN DE CADA EDUCACIÓN
*/
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        let clickCount = 0;
        const content = item.querySelector('.content-edu');
        const details = item.querySelector('.details');

        item.addEventListener('click', function() {
            clickCount++;
            if (clickCount % 2 === 1) {
                content.classList.remove('show');
                content.classList.add('hide');
                details.classList.remove('hide');
                details.classList.add('show');

                setTimeout(() => {
                    content.classList.remove('hide');
                    content.classList.add('show');
                    details.classList.remove('show');
                    details.classList.add('hide');
                }, 4000);
            } else {
                content.classList.remove('hide');
                content.classList.add('show');
                details.classList.remove('show');
                details.classList.add('hide');

                setTimeout(() => {
                    content.classList.remove('show');
                    content.classList.add('hide');
                    details.classList.remove('hide');
                    details.classList.add('show');
                }, 4000);
            }
        });
    });
});

