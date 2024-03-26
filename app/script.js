// const toggleButton = document.querySelector("#toggle--btn");
// const monthlySpan = document.querySelector(".monthly");
// const yearlySpan = document.querySelector(".yearly");

// // toggleButton.addEventListener("change", () => {
// //   if (toggleButton.checked) {
// //     // monthlySpan.classList.add("selected");
// //     // yearlySpan.classList.remove("selected");
// //     monthlySpan.classList.contains("selected")
// //       ? monthlySpan.classList.remove("selected")
// //       : monthlySpan.classList.add("selected");
// //   } else {
// //     yearlySpan.classList.contains("selected")
// //       ? monthlySpan.classList.remove("selected")
// //       : monthlySpan.classList.add("selected");
// //   }
// // });
// toggleButton.addEventListener("change", () => {
//   if (toggleButton.checked) {
//     monthlySpan.classList.add("selected");
//     yearlySpan.classList.remove("selected");
//   } else {
//     yearlySpan.classList.add("selected");
//     monthlySpan.classList.remove("selected");
//   }
// });
// console.log(toggleButton);

const toggleButton = document.getElementById("toggle--btn");
const monthlyLabel = document.querySelector(".monthly");
const annuallyLabel = document.querySelector(".annually");

toggleButton.addEventListener("change", () => {
  if (toggleButton.checked) {
    monthlyLabel.classList.remove("selected");
    annuallyLabel.classList.add("selected");
    // Update prices or values for annually here
  } else {
    annuallyLabel.classList.remove("selected");
    monthlyLabel.classList.add("selected");
    // Update prices or values for monthly here
  }
});
