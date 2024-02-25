const popup = document.querySelector('.popup');
const close = document.querySelector('.close');


window.onload = function() {
    setTimeout(function() {
        popup.style.display = "block";
    }, 5000);
}

close.addEventListener('click', () => {
    popup.style.display = "none";
});

const containers = document.querySelectorAll(".container");

window.addEventListener("scroll", function() {
    containers.forEach(container => {
        var offset = window.pageYOffset;
        container.style.backgroundPositionY = offset * 0.7 + "px";
    });
});
