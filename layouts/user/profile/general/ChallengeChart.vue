<template>
  <RadarChart :data="barChartData" :options="barChartOptions" />
</template>

<script>
export default {
  data() {
    return {
      barChartData: {
        labels: [
          "Cryptography",
          "Pwn",
          "Forensics",
          "Misc",
          "Reversing",
          "Web",
        ],
        datasets: [
          {
            data: [25, 86, 57, 92, 41, 100],
            backgroundColor: "rgba(20, 255, 0, 0.3)",
            borderColor: "#76ff03",
            borderWidth: 2,
            pointStyle: "circle",
            pointBorderColor: "#76ff03",
            pointHoverRadius: 5,
            pointRadius: 3,
            pointHitRadius: 10,
            pointHoverBorderWidth: 6,
            pointBorderWidth: 3,
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        pointStyle: "circle",
        legend: {
          display: false,
        },
        //   tooltips: {
        //     backgroundColor: "#17BF62",
        //   },
        scale: {
          gridLines: {
            borderColor: "#fff",
          },
          ticks: {
            display: false,
            maxTicksLimit: 3,
            beginAtZero: true,
            suggestedMin: 0,
            max: 100,
          },
          pointLabels: {
            fontFamily: "'Exo 2', sans-serif",
            fontColor: "#d1d5db",
            fontSize: 12,
            fontStyle: "bold",
          },
        },
      },
    }
  },
}
</script>
