import {SET_IS_LOGIN} from '../../constants/types';

export const setLogin=(isLogin)=>({
    type:SET_IS_LOGIN,
    payload:isLogin

})