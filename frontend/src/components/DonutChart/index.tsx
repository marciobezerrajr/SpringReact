import axios from 'axios'
import Chart from 'react-apexcharts'
import { SaleSum } from '../../types/sale'
import { BASE_URL } from 'utils/requests'
import { useEffect, useState } from 'react'

type ChartData = {
    labels: string[]
    series: number[]
}

const DonutChart = () => {

    let [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] })

    useEffect(()=> {
        axios.get(`${BASE_URL}/sales/amount-by-seller`).then(res => {

        const data = res.data as SaleSum[]
        const myLabels = data.map(x => x.sellerName)
        const mySeries = data.map(x => x.sum)

        setChartData({ series: mySeries, labels: myLabels });
        //console.log(chartData);

    }).catch((err) => {

        console.log(err)
    })
    }, [])

   

    // let chartData: ChartData = { labels: [], series: [] }

    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type='donut'
            height="240"
        />
    )

}

export default DonutChart