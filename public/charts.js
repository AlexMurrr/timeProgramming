const ctx = document.getElementById("myChart").getContext("2d");

let sumTime = document.getElementById("sumTime");
let sumMusic = document.getElementById("sumMusic");

function getSumTime(arr) {
  return arr.reduce((acc, cur) => acc + cur.countminutes, 0);
}

async function getData() {
  const res = await fetch("http://localhost:8080/result");
  const resMusic = await fetch("http://localhost:8080/countMusic");
  const time = await res.json();
  const timeMusic = await resMusic.json();
  sumTime.innerHTML += getSumTime(time.data) + " minutes - programming";
  sumMusic.innerHTML += getSumTime(timeMusic.data) + " minutes - music";

  const myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Programming", "Music"],
      datasets: [
        {
          label: "# of Votes",
          data: [getSumTime(time.data), getSumTime(timeMusic.data)],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 3,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

getData();

// const myChart = new Chart(ctx, {
//   type: "pie",
//   data: {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(54, 162, 235, 0.2)",
//           "rgba(255, 206, 86, 0.2)",
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(153, 102, 255, 0.2)",
//           "rgba(255, 159, 64, 0.2)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   },
// });
