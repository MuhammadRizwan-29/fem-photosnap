const toggleButton = document.getElementById("toggle--btn");
const monthlyLabel = document.querySelector(".monthly");
const annuallyLabel = document.querySelector(".annually");
/* Pricing Values Selector*/
const basicPlan = document.querySelector(".basic--plan .price--col h1");
const proPlan = document.querySelector(".pro--plan .price--col h1");
const businessPlan = document.querySelector(".business--plan .price--col h1");
const priceTag = document.querySelectorAll(".plan--container .price--col p");

const priceSet = function (basic, pro, business, tag) {
  basicPlan.innerHTML = `${basic}.00`;
  proPlan.innerHTML = `${pro}.00`;
  businessPlan.innerHTML = `${business}.00`;
  priceTag.textContent = `per ${tag}`;
};

toggleButton.addEventListener("change", () => {
  if (toggleButton.checked) {
    monthlyLabel.classList.remove("selected");
    annuallyLabel.classList.add("selected");
    // Update prices or values for annually here
    priceSet(190.0, 390.0, 990.0, "month");
  } else {
    annuallyLabel.classList.remove("selected");
    monthlyLabel.classList.add("selected");
    // Update prices or values for monthly here
    priceSet(390.0, 890.0, 1290.0, "year");
  }
});
