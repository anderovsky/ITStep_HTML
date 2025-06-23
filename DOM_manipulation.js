const body = document.body
const div = document.createElement('div')

div.innerText = "Hello World!"
div.innerHTML = "<strong>Hello World!</strong>"

body.append(div)