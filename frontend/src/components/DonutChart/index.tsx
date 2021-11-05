import Chart from "react-apexcharts";

const DonutChart =() => {

    const mockData = {
            series: [477138, 499928, 444867, 220426, 473088],
            labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        }
        
        const options = {
            legend: {
                show: true
            }
        }
        
    
   return (
        <Chart  /* mudae-se xaxis por labels pois não usamos mais o eixo neste grafico rosca*/
            options={{...options, labels: mockData.labels}}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}
export default DonutChart;