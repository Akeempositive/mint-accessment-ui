import {GETMETHOD} from '../../constants'
import {axiosRequest} from '../../utils/axios-util'
var API_BASE_URL = 'http://localhost:9000'
export const getCardDetails= async(cardNumber)=>{
    return axiosRequest({
        userAccessToken: true,
        headerType:`application/json`,
        url: `${API_BASE_URL}/api/users/api/card-scheme/verify/` + cardNumber,
        method: GETMETHOD
    })
}