import axios from 'axios';
 

export function getTrackedTime(text='',startDate='',endDate=''){
    const request = axios.get(`/api/get?text=${text}&startDate=${startDate}&endDate=${endDate}`)
                    .then( response => response.data )

    return {
        type:'GET_TRACKED_TIME',
        payload:request
    }
}

export function postTrackedTime(data){
    const request = axios.post('/api/post',data)
                    .then( response => response.data )

    return {
        type:'POST_TRACKED_TIME',
        payload:request
    }
}