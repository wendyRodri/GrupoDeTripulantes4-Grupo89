document.addEventListener("click", e => {
    if(e.target.dataset.bsTarget || 
        e.target.className === "bi-list" ||
        e.target.className === "dropdown-item"){
        document.querySelector("#main-dropdown").classList.toggle("move-right");
    }
})