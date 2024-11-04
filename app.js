let reviewers = [
    {
        name: "Ali Khan",
        image:"Pic 1.png",
        profession: "Software Engineer",
        review: "A fantastic website! The design is user-friendly and visually appealing."
    },
    {
        name: "Omar Farooq",
        image:"Pic 2.webp",
        profession: "Graphic Designer",
        review: "I love the creativity showcased on this site. It's inspiring and engaging!"
    },
    {
        name: "Zain Malik",
        image:"Pic 3.webp",
        profession: "Doctor",
        review: "A very informative platform! The resources provided are helpful and well-organized."
    },
    {
        name: "Ayaan Ahmed",
        image:"Pic 4.jpeg",
        profession: "Teacher",
        review: "This website is a great tool for learning. I appreciate the educational content available."
    },
    {
        name: "Bilal Rashid",
        image:"Pic 5.jpg",
        profession: "Entrepreneur",
        review: "An impressive site with great business insights. I always find valuable information here."
    }
];
let count = 0;

document.querySelector(".image").src = reviewers[count].image;
document.querySelector(".name").innerHTML = reviewers[count].name;
document.querySelector(".profession").innerHTML = reviewers[count].profession;
document.querySelector(".review").innerHTML = reviewers[count].review;

function previousButton() {
  if (count == 0) {
    count = reviewers.length - 1;
  } else {
    count--;
  }
  document.querySelector(".image").src = reviewers[count].image;
  document.querySelector(".name").innerHTML =reviewers[count].name;
  document.querySelector(".profession").innerHTML =reviewers[count].profession;
  document.querySelector(".review").innerHTML = reviewers[count].review;
}
function nextButton() {
  if (count >= reviewers.length - 1) {
    count = 0;
  } else {
    count++;
  }
  document.querySelector(".image").src = reviewers[count].image;
  document.querySelector(".name").innerHTML = reviewers[count].name;
  document.querySelector(".profession").innerHTML =reviewers[count].profession;
  document.querySelector(".review").innerHTML = reviewers[count].review;
}
