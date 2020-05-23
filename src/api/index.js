import { $axios } from 'utils/nework/creatAxios'
import Urls from 'constants/urls'


export const getBanner = () => {
    return $axios.get(Urls.Banner)
}



export const getAbout = () => {
    return $axios.get(Urls.About)
}

