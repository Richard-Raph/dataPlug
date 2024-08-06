// const image_input = document.querySelector("#image_input");
// var uploaded_image = "";

// image_input.addEventListener("change", function(){
//     //file reader object will be created
//     const reader = new FileReader();
//     reader.addEventListener("load", function(){
//         //reading the file
//         uploaded_image = reader.result;
//         document.querySelector(".display_image").style.backgroundImage = `url(${uploaded_image})`;
//     });
//     reader.readAsDataURL(this.files[0]);
// })

// const imgDiv = document.querySelector(".user-img");
// const img = document.querySelector("#photo");
// const file = document.querySelector("#file");
// const uploadebtn = document.querySelector("#uploadbtn");


// file.addEventListener('change', ()=>{
//     const uploaded_image = this.files[0];
//     if (uploaded_image) {
//         const reader = new FileReader();

//         reader.addEventListener("load", ()=>{
//             img.setAttribute("src", reader.result);
//         })
//         reader.readAsDataURL (uploaded_image);
//     }
// })

document.getElementById('file').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('photo').setAttribute('src', e.target.result);
    };

    reader.readAsDataURL(file);
});