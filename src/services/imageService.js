import {axiosService} from "./axiosService";

import {urls} from "../configs";

const imageService ={
    getAll:()=>axiosService.get(urls.image)
}

export {
imageService
}