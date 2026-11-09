const pasteles = document.getElementById("pasteles");
const navlinks = document. getElementById ("navlinks");

pasteles.addEventListener("click", () => {
    navlinks.classList.toggle("show");
});