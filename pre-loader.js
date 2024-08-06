let loader = document.querySelector(".pre-loader");

window.addEventListiner("load", ()=>{
    loader.style.display= "none"
})
setTimeout(() => {
    loader
}, 9000);