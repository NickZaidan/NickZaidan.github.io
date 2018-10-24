new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: ["02/07","03/07","04/07","05/07","06/07","07/07","08/07"],
    datasets: [{
        data: [9239,21448,9126,10549,4249,7766,7442],
        label: "Step Count",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: [10000,10000,10000,10000,10000,10000,10000],
        label: "Recommended Level",
        borderColor: "#ff0000",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Step count throughout the past week'
    }
  }
});
