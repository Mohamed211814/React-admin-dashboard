import React, { useState } from "react";
import { FaRegCalendarMinus } from "react-icons/fa";

import ReactECharts from 'echarts-for-react';



export default function Main() {

  const option3 = {
    dataset: {
      source: [
        ['score', 'amount', 'product'],
        [89.3, 58212, 'Matcha Latte'],
        [57.1, 78254, 'Milk Tea'],
        [74.4, 41032, 'Cheese Cocoa'],
        [50.1, 12755, 'Cheese Brownie'],
        [89.7, 20145, 'Matcha Cocoa'],
        [68.1, 79146, 'Tea'],
        [19.6, 91852, 'Orange Juice'],
        [10.6, 101852, 'Lemon Juice'],
        [32.7, 20112, 'Walnut Brownie']
      ]
    },
    grid: { containLabel: true },
    xAxis: { name: 'amount' },
    yAxis: { type: 'category' },
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 10,
      max: 100,
      text: ['High Score', 'Low Score'],
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ['#65B581', '#FFCE34', '#FD665F']
      }
    },
    series: [
      {
        type: 'bar',
        encode: {
          // Map the "amount" column to X axis.
          x: 'amount',
          // Map the "product" column to Y axis
          y: 'product'
        }
      }
    ]
  };

  {/* OPTION 2 */}
  const option2 = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 735, name: 'all time' },
          { value: 580, name: 'last year' },
          { value: 484, name: 'this year' },
          { value: 300, name: 'last 3 month' }
        ]
      }
    ]
  };

  {/* OPTION 1 */}

  const option = {
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: ['product', '2021', '2022', '2023',],
      source: [
        { product: 'Matcha Latte', 2021: 43.3, 2022: 85.8, 2023: 93.7 },
        { product: 'Milk Tea', 2021: 83.1, 2022: 73.4, 2023: 55.1 },
        { product: 'Cheese Cocoa', 2021: 86.4, 2022: 65.2, 2023: 82.5 },
      ]
    },
    xAxis: { type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }, {type: 'bar'}]
  };

  return (
    <div className='pt-[25px] px-[25px]'>
      <div className='flex justify-between items-center'>
        <h1 className='text-[#5a5c69] text-[28px] leading-[34px] font-normal'>Dashboard</h1>
        <button className='bg-[#B25304] text-white px-6 py-[4px] rounded-md'>Generate Report</button>
      </div>

      <div className='grid grid-cols-4 gap-[30px] mt-[25px] pb-[15px]'>
        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#e24949]
        flex justify-between items-center px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
          <div>
            <h2 className='text-[13px] font-bold text-pink-400'>EARNINGS (MONTHLY)</h2>
            <h1 className='text-[20px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
          </div>
          <FaRegCalendarMinus fontSize={28}/>
        </div>

        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#ab48da]
        flex justify-between items-center px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
          <div>
            <h2 className='text-[13px] font-bold text-[#38dd7d]'>EARNING (ANNUAL)</h2>
            <h1 className='text-[20px] font-bold text-[#5a5c69] mt-[5px]'>$240,000</h1>
          </div>
          <FaRegCalendarMinus fontSize={28}/>
        </div>

        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#f4ff5d]
        flex justify-between items-center px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
          <div>
            <h2 className='text-[13px] font-bold text-[#7840fa]'>TASKS</h2>
            <h1 className='text-[20px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
          </div>
          <FaRegCalendarMinus fontSize={28}/>
        </div>

        <div className='h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#5ada60]
        flex justify-between items-center px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
          <div>
            <h2 className='text-[13px] font-bold text-[#30d3df]'>PENDING REQUESTS</h2>
            <h1 className='text-[20px] font-bold text-[#5a5c69] mt-[5px]'>$40,000</h1>
          </div>
          <FaRegCalendarMinus fontSize={28}/>
        </div>
      </div>

      <div className="flex justify-around mt-8">
        <div>
          <button className="basis-[15%] bg-gray-200 shadow-md cursor-pointer px-14 py-2 
          hover:shadow-lg hover:bg-[#e24949] rounded-md transition duration-200 font-semibold hover:text-white">Last Year</button>
        </div>

        <div>
          <button className="basis-[15%] bg-gray-200 shadow-md cursor-pointer px-14 py-2 
          hover:bg-[#ab48da] rounded-md transition duration-200 hover:shadow-lg font-semibold hover:text-white">This Year</button>
        </div>

        <div>
          <button className="basis-[15%] bg-gray-200 shadow-md cursor-pointer px-14 py-2 
          hover:bg-[#f4ff5d] rounded-md transition duration-200 hover:shadow-lg font-semibold hover:text-white">Last Months</button>
        </div>

        <div>
          <button className="basis-[15%] bg-gray-200 shadow-md cursor-pointer px-14 py-2 
          hover:bg-[#5ada60] rounded-md transition duration-200 hover:shadow-lg font-semibold hover:text-white">This Month</button>
        </div>

        <div>
          <button className="basis-[15%] bg-gray-200 shadow-md cursor-pointer px-14 py-2 
          hover:bg-[#B25304] rounded-md transition duration-200 hover:shadow-lg font-semibold hover:text-white">Last Week</button>
        </div>
      </div>

      <div className='flex justify-between'>
        <div className='basis-[65%] mt-10 py-5 border shadow-lg'>
          <ReactECharts option={option} className="h-12"/>
        </div>

        <div className='basis-[30%] mt-10 py-5 border shadow-lg'>
          <ReactECharts option={option2} className="h-12"/>
        </div>
      </div>

    </div>
  )
}
