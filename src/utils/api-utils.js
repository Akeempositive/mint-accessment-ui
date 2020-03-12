import axios from 'axios';
import {GETMETHOD,POSTMETHOD,PUTMETHOD, DELETEMETHOD} from '../constants'


 export const axiosRequest = options =>{
    let setHeader = {}

    let apiRequest = null;

    switch (options.method) {
        case GETMETHOD:
            apiRequest = axios.get(options.url,options.headerRequest)
        break;
        
        case POSTMETHOD:
            apiRequest= axios.post(options.url, options.data, options.headerRequest);
        break;
        
        case PUTMETHOD:
            apiRequest= axios.put(options.url, options.data,options.headerRequest);
        break;

        case DELETEMETHOD:
            apiRequest = axios.delete(options.url,options.headerRequest)
        break;

        default:
          apiRequest = null;
    }

    return apiRequest;

 }