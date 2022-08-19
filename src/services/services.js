

import API from './baseURL';
import options from './functions';

export const getItemList = async event => {
    const response = await API.get(`client/view_item`, options);
    // console.log(response.data[students])
    return response.data;
};

