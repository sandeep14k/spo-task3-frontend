import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const Home=()=>{
    const [msg,setMsg]=useState("")
    const token=Cookies.get("token")
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
        'token': token, 
      }
    };
  
    fetch("/home", requestOptions) // Pass the requestOptions object as the second argument
      .then((res) => res.json())
      .then((jsonData) => {
       setMsg(jsonData.msg)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // setLoading(false);
      });
  }, []);
    return(
        <>
        <p className="msg">{msg}</p>
        
        </>
    );
}
export default Home;