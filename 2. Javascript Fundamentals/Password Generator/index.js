let characters = [
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
]

console.log(characters)

// Getting element by id
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")

function pickRandomChar() {
    let randIndex = Math.floor(Math.random() * characters.length)
    return characters[randIndex]
}

function generatePassword() {
    let password = ""
    for (let i = 0; i < 15; i++){
        password += pickRandomChar()
    }
    console.log("Generated password: " + password)
    return password
}

function generatePasswords() {
    password1El.textContent = generatePassword()
    password2El.textContent = generatePassword()
}

