import {USER_INFORMATION} from '../../constants/types';

export const setUserInformation=(userInformation)=>({
    type:USER_INFORMATION,
    payload:userInformation
})


