const lotteryItems = document.querySelector(".lottery-items");
const numberBtn = document.querySelector(".number-btn");
const output = document.querySelector(".output");
const items = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming Mousepad",
  "₹250 Cash",
  "Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini Backpack",
  "Personalized Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper",
];

const moveSound = new Audio("tap.wav");
const winSound = new Audio("gamecompleted.wav");

items.forEach(function (item, i) {
  const items = `<div class="lottery-item" id="${i + 1}">${
    i + 1
  }.${item}</div>`;
  lotteryItems.insertAdjacentHTML("beforeend", items);
});

function randomNumber() {
  let number = Math.random() * 50;
  return Math.floor(number) + 1;
}

function removeExistingClassName(className) {
  for (let i = 1; i <= items.length; i++) {
    const ele = document.getElementById(`${i}`);
    ele.classList.remove("gift");
    ele.classList.remove("highlight");
  }
}
function displayOutput() {
  removeExistingClassName();
  let num = randomNumber();
  output.innerHTML = `Your have got ${num}, and you won <span class="win-item">${
    items[num - 1]
  }</span>.🎉`;
  document.getElementById(`${num}`).classList.add("gift");
}

numberBtn.addEventListener("click", function () {
  removeExistingClassName();
  output.textContent = "Please Wait......🤞";
  let cnt = 0;

  let intervalId = setInterval(function () {
    moveSound.pause();
    moveSound.currentTime = 0;
    moveSound.play();
    let ran = randomNumber();
    removeExistingClassName();
    document.getElementById(`${ran}`).classList.add("highlight");
    cnt++;
    if (cnt == 5) {
      moveSound.pause();
      winSound.currentTime = 0;
      winSound.play();
      displayOutput();
      clearInterval(intervalId);
    }
  }, 1000);
});
