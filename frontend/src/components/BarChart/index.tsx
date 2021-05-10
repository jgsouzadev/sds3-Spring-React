import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests'
import { SaleSuccess } from 'types/sale';
import { useState } from 'react';
import { useEffect } from 'react';
import { round } from "utils/format"

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[]
    }
    series: SeriesData[];
}


function BarChart() {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/total-success`)
            .then(response => {
                const data = response.data as SaleSuccess[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => round(100.0 * x.deals / x.visitead, 1));
                console.log(`${mySeries} ||| ${myLabels}`)
                setChartData({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "% Sucesso",
                            data: mySeries
                        }
                    ]
                })
            })
    }, [])


    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };


    return (
      <Chart options={{ ...options, xaxis: chartData.labels}} 
      series={chartData.series} 
      type="bar" 
      height="240" />  
    );
}



export default BarChart;