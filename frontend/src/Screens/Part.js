import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import api_url from '../Config/Config';
import { useAlert } from "react-alert";
import axios from 'axios';
const Part = () => {
    const location = useLocation();
    const { title } = location.state; 
    const alert = useAlert(); 
    useEffect(async () => {
        try{
            const token = localStorage.getItem('token')
            console.log(token)
            const res = await axios.get(
                `${api_url}api/aircrafts/get_data/?name=Engine`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
            console.log(res)
        } catch(e) {
            console.log(e)
        }
    }, [])
    return (
    <div>Part</div>
  )
}

export default Part