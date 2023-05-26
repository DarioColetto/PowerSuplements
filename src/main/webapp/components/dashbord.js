/**
 * Dashboard component
 * @extends {HTMLElement}
 */
export class DashboardComponent extends HTMLElement {
    constructor() {
      super();
      this.id = "dashboard";
    }
  
    connectedCallback() {
      // Sample data for demonstration
      const monthlySalesData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Monthly Sales',
          data: [5000, 7000, 5500, 4500, 6000, 8000],
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      };
  
      const donutChartData = {
        labels: ['Product A', 'Product B', 'Product C'],
        datasets: [{
          label: 'Donut Chart',
          data: [30, 45, 25],
          backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 206, 86, 0.5)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1
        }]
      };
  
      const pieChartData = {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [{
          label: 'Pie Chart',
          data: [40, 25, 35],
          backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(255, 206, 86, 0.5)'],
          borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1
        }]
      };
  
      const createChartContainer = (chartId) => {
        const chartContainer = document.createElement('div');
        chartContainer.classList.add('chart-container');
        const chartCanvas = document.createElement('canvas');
        chartCanvas.id = chartId;
        chartContainer.appendChild(chartCanvas);
        return chartContainer;
      };
  
      const salesChartContainer = createChartContainer('salesChart');
      const donutChartContainer = createChartContainer('donutChart');
      const pieChartContainer = createChartContainer('pieChart');
  
      this.appendChild(salesChartContainer);
      this.appendChild(donutChartContainer);
      this.appendChild(pieChartContainer);
  
      // Create the line chart
      const salesChart = new Chart(document.getElementById('salesChart'), {
        type: 'line',
        data: monthlySalesData
      });
  
      // Create the donut chart
      const donutChart = new Chart(document.getElementById('donutChart'), {
        type: 'doughnut',
        data: donutChartData
      });
  
      // Create the pie chart
      const pieChart = new Chart(document.getElementById('pieChart'), {
        type: 'pie',
        data: pieChartData
      });
    }
  }
  
  customElements.define("dashboard-component", DashboardComponent);
  