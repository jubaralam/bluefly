// alert("Hello World")
let burgerIcon = document.querySelector("#menu-burger")

let hembergerMenu = document.querySelector(".hemberger-menu")

let flag = false
burgerIcon.addEventListener("click", () => {
    flag = !flag
    if (flag) {
        hembergerMenu.setAttribute("class", "hemberger-menu")
    } else {
        hembergerMenu.setAttribute("class", "none")
    }

})
