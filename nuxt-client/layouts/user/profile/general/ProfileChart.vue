<template>
  <RadarChart :data="chartData" :options="chartOptions" />
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      chartData: {
        labels: ["CHALLENGES", "COMPETITIONS", "CONTRIBUTE"],
        datasets: [
          {
            data: [0, 0, 0],
            backgroundColor: "rgba(118, 255, 3, 0.15)",
            borderColor: "#76ff03",
            borderWidth: 1,
            pointStyle: "circle",
            pointBorderColor: "#76ff03",
            pointHoverRadius: 5,
            // pointRadius: 3,
            pointHitRadius: 10,
            // pointHoverBorderWidth: 6,
            pointBorderWidth: 3,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        pointStyle: "circle",
        legend: {
          display: false,
        },
        tooltips: {
          backgroundColor: "rgba(258, 255, 255, 0.1)",
          displayColors: false,
          titleFontColor: "rgb(3, 255,255)",
        },
        scale: {
          gridLines: {
            borderColor: "#fff",
          },
          ticks: {
            display: false,
            maxTicksLimit: 3,
            beginAtZero: true,
            suggestedMin: 0,
          },
          pointLabels: {
            fontFamily: "'Exo 2', sans-serif",
            fontColor: "#d1d5db",
            fontSize: 12,
            fontStyle: "bold",
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters({
      profile: "user/getProfile",
    }),
  },
  created() {
    this.chartData.datasets[0].data[0] = this.profile.challenge_count;
    this.chartData.datasets[0].data[1] = this.profile.competition_count;
    this.chartData.datasets[0].data[2] = this.profile.added_challenge;
  },
};
</script>
