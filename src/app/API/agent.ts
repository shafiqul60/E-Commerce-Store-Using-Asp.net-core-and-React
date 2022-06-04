import axios, {AxiosError, AxiosResponse} from "axios";
import { resolve } from "path";
import { toast } from "react-toastify";
import { history } from "../..";

axios.defaults.baseURL = 'https://localhost:44355/api/';
axios.defaults.withCredentials = true;

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
}
const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
    await delay(500);
    return response
}, (error : AxiosError) => {

    const {data, status} = error.response as any;
    switch (status) {
        case 400:
            if(data.errors){
                const modelStateError : string[]= [];
                for(const key in data.errors){
                    if(data.errors[key]){
                        modelStateError.push(data.errors[key])
                    }
                    throw modelStateError.flat();
                }
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 404:
            toast.error(data.title);
            break;
        case 500:
            history.push({
                pathname: '/server-error',
                state: {error: data}           
            });
            break;
                    
        default:
            break;
    }
    return Promise.reject(error.response);
})

const requests = {
    get : (url:string) => axios.get(url).then(responseBody),
    post : (url:string, body: {}) => axios.post(url, body).then(responseBody),
    put : (url:string, body:{}) => axios.put(url, body).then(responseBody),
    delete : (url:string) => axios.delete(url).then(responseBody)
}

const Catalog ={
    list: () => requests.get('products'),
    details: (id : number )=> requests.get(`products/${id}`)
}

const Basket ={
    getBasket : (buyerId = '1') => requests.get(`basket/${buyerId}`),
    addItem: (productId : number, quantity = 1) => requests.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
    removeItem: (productId : number, quantity = 1) => requests.delete(`basket?productId=${productId}&quantity=${quantity}`)

}

const TestError = {
    get400Error: () => requests.get('buggy/bad-request'),
    get401Error: () => requests.get('buggy/unauthorized'),
    get404Error: () => requests.get('buggy/not-found'),
    get500Error: () => requests.get('buggy/server-error'),
    getValidationError: () => requests.get('buggy/validation-error')
}

const agent = {
    Catalog,
    TestError,
    Basket
}

export default agent;