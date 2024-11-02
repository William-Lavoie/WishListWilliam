document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("myRange");

   var products = document.getElementsByClassName("product")
   for (let p of products) {
    p.addEventListener("click", function() {
        console.log("test");
    })
   } 

   var buttonfigurine = document.getElementById("figurinebutton");
   buttonfigurine.addEventListener("click", function() {
      

        if (window.getComputedStyle(buttonfigurine).getPropertyValue("background-color") == "rgb(173, 216, 230)" || window.getComputedStyle(buttonfigurine).getPropertyValue("background-color") == "rgb(224, 255, 255)") {
            buttonfigurine.style.backgroundColor = "blue";
            buttonManga.style.backgroundColor = "lightblue";
            buttonLego.style.backgroundColor = "lightblue";
            buttonJeu.style.backgroundColor = "lightblue";
            buttonAutres.style.backgroundColor = "lightblue";


            for (let p of products) {
                if (!p.classList.contains("figurine")) {
                    p.style.display = "none";
                    console.log("ok");
                }
    
                else {
                    p.style.display = "block"
                }
            }
        }

        else {
            buttonfigurine.style.backgroundColor = "lightblue";
            for (let p of products) {
                    p.style.display = "block";
            }
        }
   })

   var buttonManga = document.getElementById("mangabutton");
   buttonManga.addEventListener("click", function() {
       
    if (window.getComputedStyle(buttonManga).getPropertyValue("background-color") == "rgb(173, 216, 230)" || window.getComputedStyle(buttonManga).getPropertyValue("background-color") == "rgb(224, 255, 255)") {
        buttonManga.style.backgroundColor = "blue";
        buttonfigurine.style.backgroundColor = "lightblue";
        buttonLego.style.backgroundColor = "lightblue";
        buttonJeu.style.backgroundColor = "lightblue";
        buttonAutres.style.backgroundColor = "lightblue";

        for (let p of products) {
            if (!p.classList.contains("manga")) {
                p.style.display = "none";
                console.log("ok");
            }

            else {
                p.style.display = "block"
            }
        }
    }

    else {
        buttonManga.style.backgroundColor = "lightblue";
        for (let p of products) {
                p.style.display = "block";
        }
    }
   })

   var buttonJeu = document.getElementById("jeubutton");
   buttonJeu.addEventListener("click", function() {
    if (window.getComputedStyle(buttonJeu).getPropertyValue("background-color") == "rgb(173, 216, 230)" || window.getComputedStyle(buttonJeu).getPropertyValue("background-color") == "rgb(224, 255, 255)") {
        buttonJeu.style.backgroundColor = "blue";
        buttonfigurine.style.backgroundColor = "lightblue";
        buttonLego.style.backgroundColor = "lightblue";
        buttonManga.style.backgroundColor = "lightblue";
        buttonAutres.style.backgroundColor = "lightblue";

        for (let p of products) {
            if (!p.classList.contains("jeu")) {
                p.style.display = "none";
                console.log("ok");
            }

            else {
                p.style.display = "block"
            }
        }
    }

    else {
        buttonJeu.style.backgroundColor = "lightblue";
        for (let p of products) {
                p.style.display = "block";
        }
    }
   })

   var buttonLego = document.getElementById("legobutton");
   buttonLego.addEventListener("click", function() {
    if (window.getComputedStyle(buttonLego).getPropertyValue("background-color") == "rgb(173, 216, 230)" || window.getComputedStyle(buttonLego).getPropertyValue("background-color") == "rgb(224, 255, 255)") {
        buttonLego.style.backgroundColor = "blue";
        buttonfigurine.style.backgroundColor = "lightblue";
        buttonManga.style.backgroundColor = "lightblue";
        buttonJeu.style.backgroundColor = "lightblue";
        buttonAutres.style.backgroundColor = "lightblue";

        for (let p of products) {
            if (!p.classList.contains("lego")) {
                p.style.display = "none";
                console.log("ok");
            }

            else {
                p.style.display = "block"
            }
        }
    }

    else {
        buttonLego.style.backgroundColor = "lightblue";
        for (let p of products) {
                p.style.display = "block";
        }
    }
   })

   var buttonAutres = document.getElementById("buttonautres");
   buttonAutres.addEventListener("click", function() {
    if (window.getComputedStyle(buttonAutres).getPropertyValue("background-color") == "rgb(173, 216, 230)" || window.getComputedStyle(buttonAutres).getPropertyValue("background-color") == "rgb(224, 255, 255)") {
        buttonAutres.style.backgroundColor = "blue";
        buttonLego.style.backgroundColor = "lightblue";
        buttonfigurine.style.backgroundColor = "lightblue";
        buttonManga.style.backgroundColor = "lightblue";
        buttonJeu.style.backgroundColor = "lightblue";

        for (let p of products) {
            if (!p.classList.contains("autres")) {
                p.style.display = "none";
                console.log("ok");
            }

            else {
                p.style.display = "block"
            }
        }
    }

    else {
        buttonAutres.style.backgroundColor = "lightblue";
        for (let p of products) {
                p.style.display = "block";
        }
    }
   })

    var output = document.getElementById("pricerange");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {

        filterprice(this.value);
      
    }

    function filterprice(price) {
        for (let p of products) {
            if (parseInt(p.querySelector(".price").innerHTML) > price) {
                p.style.display = "none";
            }

            else {
                p.style.display = "block";
            }
        }

        output.innerText =   price + "$";
    }
});