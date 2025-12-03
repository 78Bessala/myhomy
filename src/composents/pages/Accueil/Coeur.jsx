import { useState } from 'react';
import heart from '../../../assets/public/heart.svg';
import Heart from '../../../assets/public/Heart.svg';

export default function Coeur() {
  // État pour savoir si l'image est "active"
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // inverse l'état à chaque clic
  };

  return (
    <img
      src={isActive ? heart : Heart} // change l'image selon l'état
      alt="heart"
      className="w-6 h-6 cursor-pointer"
      onClick={handleClick}
    />
  );
}

