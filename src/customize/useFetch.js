import { useEffect, useState } from "react"
import axios from 'axios'



const useFetch = (url) => {
    const [dataFetch, setDataFetch] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const ourRequest = axios.CancelToken.source()

        async function fetchDataProVince() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token
                })
                let data = res && res.data ? res.data : []
                setIsLoading(false)
                setDataFetch(data)
            } catch (e) {
                if (axios.isCancel(e)) {
                    console.log('Request canceled: ', e.message)
                } else {
                    console.log(e)
                }
            }
        }
        setTimeout(() => {
            fetchDataProVince()
        }, 1000)



        return () => {
            setIsLoading(false)
            ourRequest.cancel('Cancel request by axios')
        }

    }, [url])
    return {
        dataFetch, isLoading
    }
}

export default useFetch