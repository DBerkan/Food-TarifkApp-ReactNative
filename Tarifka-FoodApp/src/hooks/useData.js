import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native';

import axios from 'axios'


function useData(url){
    const [dataAPI,setDataApi] = useState([])
    const [error,setError] = useState()
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        FetchData();
    },[])
    
    async function FetchData (){

            try{
                const response = await axios.get(url)
                setDataApi(response.data)
                setLoading(false)
            }catch(err){
                setError(err.message)
                setLoading(false)
            }

        }


    return {dataAPI,error,loading}
}

export default useData;