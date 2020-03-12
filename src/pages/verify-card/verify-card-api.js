import {GETMETHOD, API_BASE_URL} from '../../constants'
import {axiosRequest} from '../../utils/api-utils'


export const getCardDetails= async(cardNumber)=>{
    return axiosRequest({
        userAccessToken: true,
        headerType:`application/json`,
        url: `${API_BASE_URL}/api/card-scheme/verify/` + cardNumber,
        method: GETMETHOD
    })
}