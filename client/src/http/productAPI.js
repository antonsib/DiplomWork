import {$authHost,$host} from "./index";
export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data
}

export const fetchProducts = async (typeId,brandId,page,limit=5,price1) => {
    const {data} = await $host.get('api/product',{params:{
        typeId,brandId,page,limit,price1
        }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/'+id)
    return data
}

export const getBasketUser = async (idUser) => {
    const {data} = await $authHost.post('api/basket/getOne',{idUser})
    return data
}

export const createBasketProduct = async (name,price,img,info,idUser) => {
    const {data} = await $authHost.post('api/basket', {name,price,img,info,idUser})
    return data
}

export const createSales = async (name,price,img,idUser) => {
    const {data} = await $authHost.post('api/sales', {name,price,img,idUser})
    return data
}

export const deleteType = async (name) => {
    const {data} = await $authHost.post('api/type/delete',name)
    return data
}
export const deleteBrand = async (name) => {
    const {data} = await $authHost.post('api/brand/delete',name)
    return data
}
export const deleteBasketProduct = async (idUser) => {
    const {data} = await $authHost.post('api/basket/delete',{idUser})
    return data
}

export const deleteFromBasket = async (id) => {
    const {data} = await $authHost.post('api/basket/deleteOne',{id})
    return data
}

export const deleteProduct = async (name) => {
    const {data} = await $authHost.post('api/product/delete',name)
    return data
}