import { useEffect, useState } from "react";
import { removeFavoris, addFavoris, getFavoris } from "../service/favoris";
import { isAuthenticated } from "../utils/auth";


export default function useFavoris(){
    
    const logged = isAuthenticated()
    const [favorisMap, setFavorisMap] =useState({})
    const [loading, setLoading] = useState(false)
    
    useEffect(() =>{
       const loadFavoris = async () =>{
        try {
            const data = await getFavoris()
            if(data.length >0){
                const map = {}
                data.forEach((favori) => {
                    map[favori.logement.id] = favori.id
                });
                setFavorisMap(map)
            }
        }
        catch (err){
            console.error("Erreur chargement favoris",err)
        }finally{
            setLoading(false)
        }
       };

       loadFavoris()
        
    }, []);

    const toggleFavori = async(logementId) => {
        if(!logged){
            alert("Connecte-toi pour voir la liste des favoris")
            return;
        }
        // try {
        //     if (favorisMap[logementId]){
        //         await removeFavoris(favorisMap[logementId]);
                // setFavorisMap(prev =>{
                //     const copy = { ...prev};
                //     delete copy[logementId];
        //             return copy;
        //         });
        //     } 
        //     else 
        //     {
        //         const favori = await addFavoris(logementId);
        //         setFavorisMap(prev =>({...prev,[logementId]: favori.id,}))
        //     }
        // }
        // catch (err){
        //     console.error("Erreur toggle favori",err)
        // }
        const isCurrentlyFavorite = Boolean(favorisMap[logementId])

        try{
            if(isCurrentlyFavorite){
                await removeFavoris(favorisMap[logementId])
                setFavorisMap(prev =>{
                    const copy ={...prev}
                    delete copy[logementId]
                    return copy
                })
            }else{
                const fav = await addFavoris(logementId)
                setFavorisMap(prev => ({
                    ...prev,
                    [logementId]: fav.id
                }))
            }
        }catch(err){
            console.error("Erreur toggle favori", err)
            setFavorisMap(prev =>{
                const copy = {...prev}
                if(isCurrentlyFavorite){
                    copy[logementId] = favorisMap[logementId]
                }else{
                    delete copy[logementId]
                }
                return copy
            })
        }
    };
    return {favorisMap, toggleFavori, loading};
}