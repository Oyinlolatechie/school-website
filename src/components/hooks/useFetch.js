import { useState, useEffect } from 'react';
import axios from "axios";



const useFetch = (url, limit) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController()
        const { signal } = abortCont

        let abortFecth = setTimeout(() => {
            abortCont.abort()
            console.log("fecth was taking too long")
        }, 300000);

        axios.get(url, { signal })
            .then(res => {
                if (res.status !== 200) {
                    console.log(res)
                    setIsPending(false)
                    throw Error('An error occured')
                }
                return res
            })

            .then(data => {
                clearTimeout(abortFecth)
                setData(data.data.data)
                setIsPending(false)
                setError(null)
            })

            .catch(error => {
                if (error.name === 'AbortError') {
                    console.log(error.message)
                }
                console.log(error.message)
                setError(error.message)
                setIsPending(false)
            })

        // return () => {
        //     abortCont.abort()
        // }
    }, [url, limit])

    return { data, isPending, error };
}

export default useFetch;