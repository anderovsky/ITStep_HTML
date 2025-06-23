const menoElement = document.getElementById('meno');
console.log(menoElement);
console.log(menoElement.textContent);

menoElement.textContent = "Patrik Dendis"

const classElement = document.querySelector(".skill")
console.log(classElement);

const classElementAll = document.querySelectorAll(".skill")
console.log(classElementAll);

const githubElement = document.querySelector(".github");
console.log(githubElement.textContent);

// premeni obsah href elementu a presmeruje inam
githubElement.setAttribute("href", "https:github.com")

let newElement = document.createElement("div");
newElement.textContent = "Toto je nový element";
document.body.appendChild(newElement);

// nastavi novy atribut pre div - moze byt id, class...
newElement.setAttribute("id", "new");
newElement.setAttribute("class", "skill");

// prida element na konkretne miesto v html
let header = document.getElementById("header");
header.appendChild(newElement);

// prestudovat dalsie listenery
document.getElementById("header").addEventListener("dblclick", function() {
    alert(newElement.textContent);
})