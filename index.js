const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let area1 = document.getElementById("area1")
let area2 = document.getElementById("area2")
let generator = document.getElementById("Generator")

generator.addEventListener("click", function start () {
    let length = 0

    length = window.prompt("Enter the length of the password: ")

    if (isNaN(length)===true || length==0){
        alert("Enter a valid input")
        start()
    }
    answer = window.prompt("Do you want to include symbols (Y/N) || (YES/NO)").toUpperCase()

    area1.textContent = ""
    area2.textContent = ""

    if (answer === "YES" || answer==="Y") {
        for (let i = 0; i < length; i++) {
            randomIndex = Math.floor(Math.random() * characters.length)
            area1.textContent += characters[randomIndex]
        }
        for (let i = 0; i < length; i++) {
            randomIndex = Math.floor(Math.random() * characters.length)
            area2.textContent += characters[randomIndex]
        }
    } 

    else if (answer === "NO" || answer==="N") {
        for (let i = 0; i < length; i++) {
            randomIndex = Math.floor(Math.random() * 62)
            area1.textContent += characters[randomIndex]
        }
        for (let i = 0; i < length; i++) {
            randomIndex = Math.floor(Math.random() * 62)
            area2.textContent += characters[randomIndex]
        }
    } 

    else{
        alert("Write valid value")
        start()
    }
    
})

area1.addEventListener("click", function() {
    let text=area1.textContent
    navigator.clipboard.writeText(text)
    .then(() => {
        alert('Text copied to clipboard: ' + text);
    })

})

area2.addEventListener("click", function() {
    let text=area2.textContent
    navigator.clipboard.writeText(text)
    .then(() => {
        alert('Text copied to clipboard: ' + text);
    })

})


