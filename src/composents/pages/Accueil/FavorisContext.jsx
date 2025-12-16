
import { createContext, useState } from "react";

export const FavorisContext = createContext();

export function FavorisProvider({ children }) {

    const [favoris, setFavoris] = useState([]);

    const addFavoris = (item) => {
    
        if (!favoris.find(f => f.id === item.id)) {
            setFavoris([...favoris, item]);
        }
    };

    return (
        <FavorisContext.Provider value={{ favoris, addFavoris }}>
            {children}
        </FavorisContext.Provider>
    );
}
