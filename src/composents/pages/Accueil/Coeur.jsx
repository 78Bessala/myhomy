import heart from '../../../assets/public/heart.svg';
import Heart from '../../../assets/public/Heart.svg';

export default function Coeur({ isFavorite, onClick }) {

  return (
    <img
      src={isFavorite ? heart : Heart} // change l'image selon l'état
      alt="heart"
      className="w-6 h-6  md:w-8 md:h-8 lg:h-10 lg:w-10 cursor-pointer"
      onClick={onClick}
    />
  );
}

