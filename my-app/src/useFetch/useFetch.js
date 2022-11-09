import { useEffect, useState } from "react"
import axios from 'axios'


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const res = await axios.get(`http://10.100.102.22:${process.env.REACT_APP_URL}${url}`);
                setData(res.data);
            }
            catch(err){
                setError(err);
            }
            setLoading(false);
        } 
        fetchData();
    }, [url])

    const refatch = async () => {
        setLoading(true);
        try{
            const res = await axios.get(`${process.env.url}${url}`);
            console.log(`${process.env.url}${url}`)
            setData(res.data);
        }
        catch(err){
            setError(err);
        }
        setLoading(false);
    } 

    return { data, loading, error, refatch }
}

export default useFetch;