import { isAuthenticated } from "../utils/auth";
import { apiRequest } from "./api";

export const getFavoris = () =>{
    const logged = isAuthenticated()
    if(logged){
       return apiRequest("/favoris/","GET",null,localStorage.getItem("access"))
    }
    else{
        return {}
    }
}

export const addFavoris = (logementId) =>{
    const logged = isAuthenticated()
    if(logged){
        return apiRequest("/favoris/","POST",{logement: logementId},localStorage.getItem("access"))
    }
    else{
        return{}
    }
}

export const removeFavoris = (favoriId) =>{
    const logged = isAuthenticated()
    if(logged){
        return apiRequest(`/favoris/${favoriId}/`,"DELETE",null,localStorage.getItem("access"))
    }
    else{
        return {}
    }
}