import React from 'react'
import { Box } from '../../atoms/Box'
import tw from 'twin.macro'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export type FooterProperty = {
    accesses:number[]
}

export const Footer: React.FC<FooterProperty> = ({ accesses }) => {
    const data = {
        labels:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
        datasets:[
            {
                data:accesses,
                backgroundColor:"#669df6",
                minBarLength:5
            }
        ]
    }
    const options = {
        borderRadius:10,
        borderSkipped:false,
        responsive: true,
        plugins: {
            decimation:{
                enabled:true
            },
            datalabels:{
                display:false
            },
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            x: {
                display:true,
                ticks:{
                    major:{
                        enabled:true
                    }
                },
                title:{
                    display:false
                },
                grid: {
                    display: false
                }
            },
            y: {
                display:false,
                ticks:{
                    display:false
                },
                title:{
                    display:false
                },
                grid: {
                    display: false
                },
                suggestedMax:3
            }
        },
    }
    return (
        <Box css={tw`m-auto position[fixed] bottom-0 left-0 right-0 h-auto bg-white`} limited>
            <Bar data={data} options={options} height={100}></Bar>
        </Box>
    )
}