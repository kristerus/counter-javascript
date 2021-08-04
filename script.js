let value = document.getElementById("value")
const btns = document.querySelectorAll(".btn")
let count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("reset")) {
            count = 0;
        } else {
            count++
        }
        if (count < 0) {
            value.style.color = "red"
        } else if (count > 0) {
            value.style.color = "green"
        } else {
            value.style.color = "#222"
        }
        value.textContent = count;
    })

})