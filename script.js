const form = document.getElementById("form")
const submit = document.querySelector(".submit")
const iconError = document.querySelector(".error")
const errorText = document.querySelector(".error-text")
const input = document.querySelector("input")

form.addEventListener("submit", validation)
submit.addEventListener("click", validation)


function validation(e){
    e.preventDefault()

    const inputValue = input.value

    if ( correctEmail (inputValue) ){
        iconError.style.display="none"
        errorText.style.display="none"
    }
   else {
        iconError.style.display="flex"
        errorText.style.display="flex"
   }

}

function correctEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}
