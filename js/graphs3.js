
new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: ["Week 1","Week 2","Week 3","Week 4","Week 5"],
    datasets: [{
        data: [64463, 50462, 22262, 44277, 19452],
        label: "Step Count",
        borderColor: "#3e95cd",
        fill: false
      }, {
        data: [70000,70000,70000,70000,70000],
        label: "Recommended Level",
        borderColor: "#ff0000",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Step count throughout the past month'
    }
  }
});
