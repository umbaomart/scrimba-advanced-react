document.getElementById("button").addEventListener("click", function(event) {
  console.log("Event")
})

document.getElementById("input").addEventListener("input", function(event) {
  console.log(event.target.value)
})

document.getElementById("box").addEventListener("mouseover", function() {
  console.log("Hovered in box!")
})