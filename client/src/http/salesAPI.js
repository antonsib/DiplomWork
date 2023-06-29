import {$authHost} from "./index";

export const getSales = async () => {
    const {data} = await $authHost.get('api/sales')
    return data
}

export const deleteSale = async (id) => {
    const {data} = await $authHost.post('api/sales/delete',{id})
    return data
}

export const getUsers = async () => {
    const {data} = await $authHost.post('api/user/getAllUsers')
    return data
}