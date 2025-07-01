document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // red: 0–255
    const g = Math.floor(Math.random() * 256); // green: 0–255
    const b = Math.floor(Math.random() * 256); // blue: 0–255
    return `rgb(${r}, ${g}, ${b})`;             // return as a string
  }

  changeColorBtn.addEventListener("click", function () {
    colorBox.style.backgroundColor = getRandomColor();
  });
});
