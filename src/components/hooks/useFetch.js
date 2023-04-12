import { useState, useEffect } from 'react'



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
        }, 30000);

        fetch(url, { signal })
            .then(res => {
                if (!res.ok) {
                    setIsPending(false)
                    throw Error('An error occured')
                }
                return res.json()
            })

            .then(data => {
                clearTimeout(abortFecth)
                setData(limit ? data.slice(0, limit) : data)
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