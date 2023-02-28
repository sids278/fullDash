import React from 'react';
import { Line } from '@ant-design/plots';
import { useSelector } from 'react-redux';
import { store } from '../app/store';




let data = [
  { date: '2015', total: 120 },
  { date: '2016', total: 200 },
  { date: '2017', total: 150 },
  { date: '2018', total: 278 },
  { date: '2019', total: 270 },
  { date: '2020', total: 350 },
];

const LineChart = () => {
  // const lineChartData = useSelector(state => state.fetch.data)
  const lineChartData = useSelector((state: any) => state.root.fetch)
   
  let newData=[... data,lineChartData]
  
  // console.log(lineChartData)
  console.log("Here"+ JSON.stringify(lineChartData.data));
  console.log(lineChartData)
  // console.log(store.getState().root.api.data)
  // store.dispatch({type:'setData'})
  // data.push(lineChartData)
  let newsData

  console.log('lineChartData', lineChartData)
  
  const config = {
    data:lineChartData ? lineChartData.data : data,
    xField: 'date',
    yField: 'total',
    seriesField: 'type',
    // yAxis: {
    //   label: {
    //     formatter: (v) => `${(v /100).toFixed(1)} `,
    //   },
    // },
    
    

    
  };

  return <>
  {lineChartData.isLoading ? (<div>Loading...</div>) : (<Line {...config} />)}
  </>
};

export default LineChart;
