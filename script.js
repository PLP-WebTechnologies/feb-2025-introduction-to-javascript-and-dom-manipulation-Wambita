// Change text content and background color dynamically
document.getElementById("change-btn").addEventListener("click", function () {
  const description = document.getElementById("description");
  description.textContent = "You clicked the button! ";
  description.style.backgroundColor = "#dff9fb";
  description.style.padding = "1rem";
  description.style.borderRadius = "8px";
});

// Add or remove an element dynamically
document.getElementById("toggle-element").addEventListener("click", function () {
  const dynamicArea = document.getElementById("dynamic-area");
  const existingElement = document.getElementById("new-paragraph");

  if (existingElement) {
    dynamicArea.removeChild(existingElement);
  } else {
    const newPara = document.createElement("p");
    newPara.textContent = " New element added to the DOM!";
    newPara.id = "new-paragraph";
    newPara.style.color = "#6c5ce7";
    dynamicArea.appendChild(newPara);
  }
});
