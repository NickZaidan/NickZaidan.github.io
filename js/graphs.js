new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    datasets: [{
        data: [0,0,0,0,0,0,0,0,0,1122,810,862,677,0,0,0,0,470.4156058,1836.281573,1734.799382,580.3808598,538.4962116,43.62636752,0],
        label: "Step Count",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Step count throughout today'
    }
  }
});
