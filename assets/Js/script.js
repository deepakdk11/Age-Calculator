let user = document.querySelector("#dob");
user.max = new Date().toISOString().split("T")[0];

const btn = document.querySelector("button");

const para = document.querySelector("p");

btn.addEventListener("click", () => {
  let birthDay = new Date(user.value);

  let bDate = birthDay.getDate();
  let bMonth = birthDay.getMonth() + 1;
  let bYear = birthDay.getFullYear();

  let currentDay = new Date();

  let cDate = currentDay.getDate();
  let cMonth = currentDay.getMonth() + 1;
  let cYear = currentDay.getFullYear();

  let rDate, rMonth, rYear;

  rYear = cYear - bYear;

  if (cMonth >= bMonth) {
    rMonth = cMonth - bMonth;
  } else {
    rYear--;
    rMonth = 12 + cMonth - bMonth;
  }

  if (cDate >= bDate) {
    rDate = cDate - bDate;
  } else {
    rMonth--;
    rDate = getDayInMonth(bYear, bMonth) + cDate - bDate;
  }
  if (rMonth < 0) {
    rMonth = 11;
    rYear--;
  }

  para.innerHTML = `Your Are <span>${rYear}</span> years, <span>${rMonth}</span> months and <span>${rDate}</span> days old `;
});

function getDayInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
