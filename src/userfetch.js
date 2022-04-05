import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [errors, setErrors] = useState(null)


    useEffect(() => {
        // clean up control
        const abortCont = new AbortController();

        // fetch data ans set to blog array
        fetch(url, { signal: abortCont.signal }).then(
            res => {
                if (!res.ok) {
                    throw Error('could not fetch data from resource')
                }
                return res.json()
            }
        ).then(data => {
            setData(data);
            setIsPending(false);
            setErrors(null);
        }).catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                setErrors(err.message);
                setIsPending(false);
            }

        })
        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, errors }
}

export default useFetch;