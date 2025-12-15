import { useState } from 'react';
import { useContext } from 'react';
import heart from '../../../assets/public/heart.svg';
import Heart from '../../../assets/public/Heart.svg';
import { FavorisContext } from './FavorisContext';

export default function Coeur({ itemData }) {
  // État pour savoir si l'image est "active"
  const [isActive, setIsActive] = useState(false);
  const { addFavoris } = useContext(FavorisContext);

  const handleClick = () => {
    if (!isActive && itemData) {
      // Ajouter aux favoris quand on clique sur le cœur vide
      addFavoris(itemData);
    }
    setIsActive(!isActive); // inverse l'état à chaque clic
  };

  return (
    <img
      src={isActive ? heart : Heart} // change l'image selon l'état
      alt="heart"
      className="w-6 h-6  md:w-[36px] md:h-[36px] cursor-pointer"
      onClick={handleClick}
    />
  );
}

