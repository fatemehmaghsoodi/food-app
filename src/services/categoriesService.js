import http from "./httpService";
export function getCategoryApi(){
    return http.get('/categories')
}
