import {React, useEffect, useState } from 'react';
import Axios from 'axios';
const App = () => {
  const [data,setdata] = useState('');
  const getData = async()=>{
    const response = await Axios.get("http://localhost:4000/getData");
    setdata(response.data);
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <div>
      {data}
    </div>
  )
}

export default App