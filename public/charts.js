const ctx = document.getElementById("myChart").getContext("2d");
const ctx1 = document.getElementById("myChart1").getContext("2d");

let sumProg = document.getElementById("h3TimeProg");
let sumMusic = document.getElementById("h3TimeMusic");

function getSumTime(arr) {
  return arr.reduce((acc, cur) => acc + cur.countminutes, 0);
}

function minutesToHour (mins) {
  let hours = Math.trunc(mins/60);
  let minutes = mins % 60;
    return hours + ' hours : ' + minutes + ' minutes';
}

function differentDate(){
  let minutes = Math.floor((new Date() - new Date(2023, 0, 13))/60000);
  let day = Math.floor(minutes/60/24);
  return day;
}

function averageForDay(minutes){
  return minutes/60/differentDate();
}

const dream = 8*60;

async function getData() {
  const resProg = await fetch("http://localhost:8080/result");
  const resMusic = await fetch("http://localhost:8080/countMusic");
  const timeProg = await resProg.json();
  const timeMusic = await resMusic.json();
  const minsProg = getSumTime(timeProg.data);
  const minsMusic = getSumTime(timeMusic.data);
  sumProg.innerHTML += minsProg + " minutes of programming it is " + minutesToHour (minsProg) + ", average for day - " + averageForDay(minsProg);
  sumMusic.innerHTML += minsMusic + " minutes - music it is " + minutesToHour(minsMusic) + ", average for day - " + averageForDay(minsMusic);

  const myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Programming","Music"],
      datasets: [
        {
          label: "# of Votes",
          data: [minsProg, minsMusic],
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

  const otherActivity = 24 - 8 - averageForDay(minsProg) - averageForDay(minsMusic);

  const myChart1 = new Chart(ctx1, {
    type: "pie",
    data: {
      labels: ["Programming","Music", "Other"],
      datasets: [
        {
          label: "# of Votes",
          data: [averageForDay(minsProg), averageForDay(minsMusic) , otherActivity],
          backgroundColor: [
            "rgba(255, 99, 132, 0.3)",          
            "rgba(54, 162, 235, 0.2)", 
            "rgba(10, 16, 235, 0.15)",                                
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)", 
            "rgba(54, 162, 235, 1)",
            "rgba(10, 20, 235, 0.6)", 
          ],
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
