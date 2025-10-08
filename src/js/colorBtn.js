
const colorBtn = document.getElementById("colorBtn");
// const alertBtn = document.getElementById("alertBtn");

// Function: Random background color
colorBtn.addEventListener("click", () => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 60%, 75%)`;
    document.body.style.backgroundColor = randomColor;
});