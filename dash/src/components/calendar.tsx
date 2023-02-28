import { DatePicker, Radio } from 'antd';
import { useState } from 'react';
import React from 'react'

const { RangePicker } = DatePicker;
const AppCalendar = () => {
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e:any) => {
    console.log(e.target.value)
    SetPlacement(e.target.value);
  };
  // console.log(value)
  return (
    <>

      
      <RangePicker   />
    </>
  );
};
export default AppCalendar;