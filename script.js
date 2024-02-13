const yesBtn = document.getElementById("yes")

const HK1 = document.getElementById("HK1")

const HK2 = document.getElementById("HK2")

const willText = document.getElementById("will")

const yayText = document.getElementById("yay")

yesBtn.addEventListener("click", () => {

    HK1.style.display = "none";

    HK2.style.display = "block";

    willText.style.display = "none";

    yayText.style.display = "block";

    

})

noBtn.addEventListener("click", () => {

    HK1.style.display = "none";

    HK2.style.display = "block";

    willText.style.display = "none";

    yayText.style.display = "block";



})
