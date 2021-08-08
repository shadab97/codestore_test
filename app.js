let ques1 = ``;
let ques2 = `<div class="d-flex justify-content-center p-4">
<button class="btn btn-success" id="rollBtn">Roll A dice</button>
</div>
<div class="text-primary text-center">
<h2 id="result"></h2>
</div>
<div class="">
<h3 class="text-center" id="count"></h3>
<h3 class="text-center" id="total"></h3>
</div>`;
const main = document.getElementById("main");
const setQues1 = () => {
  main.innerHTML = ques1;
};
const setQues2 = () => {
  main.innerHTML = ques2;
};
const checkPremiumPrice = () => {
  let basePrice = 50;
  let premium = basePrice;
  const age = Number(document.getElementById("age").value);
  const acc = Number(document.getElementById("acc").value);
  if (!age || age <= 0) {
    alert("Enter a valid age.");
  }
  if (age <= 25) {
    premium += 100;
  } else if (age < 35 || age > 25) {
    premium += 20;
  }
  if (acc < 3) {
    premium = premium + 40 * acc;
  } else if (acc >= 3) {
    premium = premium + 60 * acc;
  }
  //   console.log(basePrice);
  document.getElementById(
    "res"
  ).innerHTML = `Your Car's Insurance Premium is Rs. ${premium}`;
};
let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");
const showModal1 = () => {
  modal1.style.display = "block";
};
const showModal2 = () => {
  modal2.style.display = "block";
};
const hideModal = () => {
  modal1.style.display = "none";
  modal2.style.display = "none";
};
// Ques 2
let result = document.getElementById("result");
let countEle = document.getElementById("count");
let totalEle = document.getElementById("total");
let rollBtn = document.getElementById("rollBtn");
class DiceRoll {
  constructor() {
    this.count = 0;
    this.sum = 0;
    this.val = 1;
  }
  rollOnce() {
    this.val = Math.floor(Math.random() * 6) + 1;
    this.sum += this.val;
    this.count += 1;
  }
  setVal() {
    result.innerHTML = `You rolled ${this.val}`;
    countEle.innerHTML = `Number of Rolls: ${this.count}`;
    totalEle.innerHTML = `Total Sum: ${this.sum}`;
  }
}
let obj = new DiceRoll();
rollBtn.addEventListener("click", () => {
  obj.rollOnce();
  if (obj.count > 5) {
    rollBtn.disabled = true;
  } else {
    obj.setVal();
  }
});
