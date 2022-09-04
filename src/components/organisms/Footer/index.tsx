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
        labels:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        datasets:[
            {
                data:accesses,
                backgroundColor:"#669df6"
            }
        ]
    }
    const options = {
        borderRadius:10,
        borderSkipped:false,
        responsive: true,
        plugins: {
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
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },
    }
    return (
        <Box css={tw`m-auto position[fixed] bottom-0 left-0 right-0 h-auto bg-white`} limited>
            <Bar data={data} options={options}></Bar>
        </Box>
    )
}