function changeIndexLoader() {
    let loader = document.getElementById("loader_screen")
    if(loader.classList.contains("primary-index")) {
        loader.classList.remove("primary-index")
        loader.classList.add("secondary-index")
    }
}

gsap.fromTo(
    ".loader-screen",
    { 
        opacity: 1,
    }, {
        opacity: 0, 
        duration: 1.5,
        delay: 2.5
    }
)

setTimeout(() => {
    window.scrollTo(0, 0)
}, 100)

setTimeout(() => {
    changeIndexLoader();
}, 4000)

gsap.fromTo(
    ".loader-text",
    {
        opacity: 0
    }, {
        opacity: 1,
        duration: 2,
        delay: 0.3
    }
)

/**
 * @param {string} idE 
 */
function showModal(idE) {
    let elem = document.getElementById(idE)
    if(!elem.classList.contains("modal-active")) {
        elem.classList.add("modal-active")
        elem.classList.add("aparecer")
        setTimeout(() => {
            elem.classList.remove("aparecer")
        }, 300)
    }
}

/**
 * @param {string} idE 
 */
function removeModal(idE) {
    let elem = document.getElementById(idE)
    if(elem.classList.contains("modal-active")) {
        elem.classList.add("desaparecer")
        setTimeout(() => {
            elem.classList.remove("desaparecer")
            elem.classList.remove("modal-active")
        }, 300)
    }
}