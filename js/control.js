let readMoreBtn = document.querySelectorAll("#read-more");
let moreCard = document.querySelectorAll("#more-card");

readMoreBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    const one = button.parentElement;
    console.log(one);
    const two = one.parentElement;
    console.log(two);
    const three = two.parentElement;
    console.log(three);
    three.classList.add("cards-active");
  });
});
