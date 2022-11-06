const form = document.querySelector("form"); 
const button = document.querySelector("button"); 
const error = document.querySelector(".error"); 
const email = document.querySelector("input"); 

form.addEventListener("submit", (e) => {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if (!pattern.test(email.value)) {
        e.preventDefault(); 
        email.classList.add("input-error"); 
        error.classList.remove("hidden"); 
    }
}); 
