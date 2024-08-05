// add hovered class to selected list item
let list = document.querySelectorAll("body .navigation li");

function activeLink(){
    list.forEach(item=>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// menu toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};


let nav = document.querySelector("nav");
let itemsList = document.querySelectorAll("li");

itemsList.forEach(item => {
    item.onclick = () =>{
        let beforeActive = nav.querySelector('li.active');
        if (beforeActive) beforeActive.classList.remove('active');
        item.classList.add('active');
    }
})