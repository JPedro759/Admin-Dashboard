const chart = document.querySelector("#chart").getContext("2d");

//Create a new chart instance
new Chart(chart, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "BTC",
        data: [
          29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116,
          61004, 57208,
        ],
        borderColor: "red",
        borderWidth: 2,
      },
      {
        label: "EHT",
        data: [
          31500, 41000, 72540, 26000, 46000, 32698, 5000, 25000, 28656, 24832,
          45844, 43216,
        ],
        borderColor: "gray",
        borderWidth: 2,
      },
      {
        label: "EHT",
        data: [
          35490, 48000, 58800, 42190, 44000, 35608, 23000, 7000, 15656, 20837,
          32814, 38267,
        ],
        borderColor: "blue",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// Show or hide sidebar
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  sidebar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.display = "none";
});

//Change Theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  themeBtn.querySelector("span:first-child").classList.toggle("active");
  themeBtn.querySelector("span:last-child").classList.toggle("active");
});
