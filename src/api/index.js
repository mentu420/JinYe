import { $axios } from 'utils/nework/creatAxios'
import Urls from 'constants/urls'


export const getBanner = () => {
    return $axios.get(Urls.Banner)
}

export const getCategory = (params) => {
    return $axios.get(Urls.Category, { params })
}

export const getProductList = (params) => {
    return $axios.get(Urls.Product.list, { params })
}

export const getProductDetail = (params) => {
    return $axios.get(Urls.Product.detail, { params })
}

export const getNewList = (params) => {
    return $axios.get(Urls.New.list, { params })
}

export const getNewDetail = (params) => {
    return $axios.get(Urls.New.detail, { params })
}

export const getAbout = () => {
    return $axios.get(Urls.About)
}

export const submitMessage = (params) => {
    return $axios.get(Urls.Message, { params })
}

export const getProductUse = () => {
    return $axios.get(Urls.ProductUse)
}

