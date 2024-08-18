const container = document.querySelector(".form-container");


const showPassword = () => {
    let input = document.getElementById("password");
    input.type = input.type === 'password' ? 'text' : 'password'
}
