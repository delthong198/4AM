import axios from 'axios';
import { useCallback } from 'react';

const useHTTP = () => {
    const sendRequest = useCallback((requestConfig, typeData, applyData) => {
        axios
            .get(requestConfig)
            .then((response) => {
                let data = response.data;
                let finalData = data.filter(item => item.type === typeData)
                applyData(finalData);
            })
    }, [])
    return sendRequest;
}

export default useHTTP;