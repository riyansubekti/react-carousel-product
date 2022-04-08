import React, { useEffect, useState } from 'react'
import Product from './pages/Product'
import axios from 'axios'
import { dataProducts } from './data'
import './App.css'

const App = () => {
  const [getData, setGetData] = useState(dataProducts);
  
  // GET CORS from development
  useEffect(() => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2U5MmVkMGNiMjU5MmEzZThjY2EzYTljY2RiNjZhOGY2N2JjMWVlOTQwYWU3MjVlNTY0ODNhZjQ5Y2RiOWQ2ZTg5YTlhMWNhMGUwMzNmNzIiLCJpYXQiOjE2NDkzOTc3NTcsIm5iZiI6MTY0OTM5Nzc1NywiZXhwIjoxNjgwOTMzNzU3LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.mCHFaW7UpVftyslpqnzoV-YefiV8XMtBXUg86dCn41wv4banFqd7j2NW3OYgMOD2whyb2P2RS7EIqz_Bz86s3kK11g8C8el4O-5OqH-jHTlM_F3rBkCRHsBLgReMlTUgzdo4LrZ9KExVg4-3lTWbWEWyt88xrVtaayZgVwQMd1eNdNactXUOHOlTsCPNTnAtQWAKyRS3X7e6RPs9b3l7mS5bshNqyjYRPyYEx8BAnZHpQGabM1dNAQDoxqwn5wqlOvKg-PGrc6rc5cj8LprdWphJw-xZnhD5R9djp_Q0gzQeajFW99htAQ1cC-UZ9avEvnOKCnuKPx3F3c5FnNEYj6-I5aq6R9DQIKaQjFwGNqw9D55JepErWIVvPVpW01E8XLY2D3VL506H0oI00Oxrwg5Ii4VeBKc0k_FUGCALKe4aMUeftZHMoVR_3rzONXYIN02Oy7ewO-cpV4G6RV8gndu6TcBU_4sqeO9t8wnMjKCqpWyD0NFZhDHmOPDN1yAeR63pd5waE0LpP_T25P65QpqMlCDrsoDJTmjpTT5JKRoI7peKEYkJMV9Plmc80JByYqmA34zOSVA6J43q0__Twz7l2U5NBsN5gsd-lPlSVQpWLQckEGd_yvaIVUNT3EddxwFU19alWhu7mtmBEeqCysMoBJfSYB1UwPdxuh4DQcc';
    axios.get('https://fe.dev.dxtr.asia/api/products', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => setGetData(res.data))
      .catch(err => console.warn(err.message))
  }, [setGetData])

  return(
    <Product dataProducts={getData} />
  );
}

export default App