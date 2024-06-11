
function updateTemperature() {
    const select = document.getElementById("viloyatlar");
    const gradus = document.getElementById("gradus");
    
    const selectedViloyat = select.options[select.selectedIndex].value;
    let temperature;
    
    // Set temperature based on selected viloyat
    if (selectedViloyat === "Samarqand") {
            temperature = 30;
    } else {
         temperature = Math.floor(Math.random() * (37 - 28 + 1)) + 28; // Random temperature between 28 and 37
    }
    
    gradus.textContent = temperature;
}

document.getElementById('language-button').addEventListener('click', function() {
    document.getElementById('language-menu').classList.toggle('hidden');
});

document.querySelectorAll('.group').forEach((element) => {
    element.addEventListener('click', () => {
        element.querySelector('.group-hover\\:block').classList.toggle('hidden');
    });
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;
    const totalItems = items.length;

    function showItem(index) {
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');
    }

    function nextItem() {
        currentItem = (currentItem + 1) % totalItems;
        showItem(currentItem);
    }

    document.getElementById('next').addEventListener('click', nextItem);

    setInterval(nextItem, 3000); // Slide change interval
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseenter', function () {
        dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function () {
        dropdownContent.style.display = 'none';
    });
});