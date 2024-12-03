function openPopup(img) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "flex";
    modalImg.src = img.src;
    document.body.classList.add("no-scroll");
}

function closePopup() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.body.classList.remove("no-scroll");
}

window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        closePopup();
    }
}