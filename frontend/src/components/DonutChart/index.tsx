import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests'
import { SaleSum } from 'types/sale';
import { useState } from 'react';
import { useEffect } from 'react';


type ChartData = {
    labels: string[];
    series: number[];
}

function DonutChart() {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/total-sales`)
            .then(response => {
                const data = response.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeriees = data.map(x => x.sum);

                setChartData({
                    labels: myLabels,
                    series: mySeriees
                })
            })

    }, [])

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart options={{ ...options, labels: chartData.labels }} series={chartData.series} type="donut" height="240" />
    );
}



export default DonutChart;