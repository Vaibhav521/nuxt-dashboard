<template>
    <div class="container mx-auto p-4 lg:p-8 xl:max-w-7xl">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        <div class="flex flex-col rounded-lg border border-neutral-200 bg-white p-5 h-[400px]">
          <h3 class="mb-4 font-semibold">Ticket Trends</h3>
          <div class="relative flex-grow">
            <canvas ref="ticketTrendsChart"></canvas>
          </div>
        </div>
  
        <div class="flex flex-col rounded-lg border border-neutral-200 bg-white p-5 h-[400px]">
          <h3 class="mb-4 font-semibold">Response Time</h3>
          <div class="relative flex-grow">
            <canvas ref="responseTimeChart"></canvas>
          </div>
        </div>
  
        <div class="flex flex-col rounded-lg border border-neutral-200 bg-white p-5 h-[400px]">
          <h3 class="mb-4 font-semibold">Customer Satisfaction</h3>
          <div class="relative flex-grow">
            <canvas ref="satisfactionChart"></canvas>
          </div>
        </div>
  
        <div class="flex flex-col rounded-lg border border-neutral-200 bg-white p-5 h-[400px]">
          <h3 class="mb-4 font-semibold">Ticket Categories</h3>
          <div class="relative flex-grow">
            <canvas ref="categoryChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  const ticketTrendsChart = ref(null);
  const responseTimeChart = ref(null);
  const satisfactionChart = ref(null);
  const categoryChart = ref(null);
  
  const chartInstances = ref([]);
  
  const ticketData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Open Tickets',
      data: [65, 59, 80, 55, 45, 70],
      borderColor: '#10B981',
      tension: 0.4,
      fill: false
    }, {
      label: 'Closed Tickets',
      data: [45, 38, 60, 40, 35, 55],
      borderColor: '#F43F5E',
      tension: 0.4,
      fill: false
    }]
  });
  
  const responseTimeData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Average Response Time (hours)',
      data: [4.5, 3.8, 4.2, 3.5, 3.2, 3.0],
      backgroundColor: '#60A5FA',
      borderRadius: 8,
    }]
  });
  
  const satisfactionData = ref({
    labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied'],
    datasets: [{
      data: [45, 30, 15, 10],
      backgroundColor: ['#10B981', '#60A5FA', '#F59E0B', '#F43F5E'],
    }]
  });
  
  const categoryData = ref({
    labels: ['Technical', 'Billing', 'Account', 'Feature Request', 'Other'],
    datasets: [{
      label: 'Number of Tickets',
      data: [300, 200, 150, 100, 50],
      backgroundColor: '#8B5CF6',
      borderRadius: 8,
    }]
  });
  
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };
  
  onMounted(() => {
    chartInstances.value = [
      new Chart(ticketTrendsChart.value, {
        type: 'line',
        data: ticketData.value,
        options: {
          ...commonOptions,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }),
      
      new Chart(responseTimeChart.value, {
        type: 'bar',
        data: responseTimeData.value,
        options: {
          ...commonOptions,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }),
      
      new Chart(satisfactionChart.value, {
        type: 'doughnut',
        data: satisfactionData.value,
        options: {
          ...commonOptions,
          cutout: '60%'
        }
      }),
      
      new Chart(categoryChart.value, {
        type: 'bar',
        data: categoryData.value,
        options: {
          ...commonOptions,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    ];
  });
  
  onUnmounted(() => {
    chartInstances.value.forEach(chart => chart.destroy());
    chartInstances.value = [];
  });
  </script>