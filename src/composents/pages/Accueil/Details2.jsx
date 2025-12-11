import image1 from '../../../assets/public/08.jpg';
import fleche from '../../../assets/public/arrow.svg';
import download from '../../../assets/public/download.svg';
import map from '../../../assets/public/map.svg';
import user from '../../../assets/public/user.jpeg';
import check from '../../../assets/public/check.svg';
import livre from '../../../assets/public/livre.svg';
import main from '../../../assets/public/main.svg';
import Footer from "./Footer";
import Coeur from "./Coeur";

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ReservationContext } from '../../../context/ReservationContext';

function Details2() {

  const { addReservation } = useContext(ReservationContext);
  const navigate = useNavigate();

  const propertyData = {
    id: 'Details2',
    image: image1,
    title: "Villa Meubl\u00e9e",
    location: "Melen, Yaounde",
    date: "Mai 2025"
  };

  const handleReservation = () => {
    addReservation({
      ...propertyData,
      reservedDate: new Date().toLocaleDateString()
    });

    navigate("/reservation");
  };

  return (
    <section className='flex flex-col gap-8'> 

      {/* IMAGE HAUT */}
      <div className='flex flex-col gap-1'>
        <div 
          className="flex flex-col justify-between p-4 w-full h-82 bg-cover bg-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="flex justify-between">
            <div className="border border-white bg-white h-10 w-10 rounded-full flex justify-center items-center"> 
              <Link to="/voir-tout">
                <img src={fleche} className='h-6 w-6'/>
              </Link>
            </div>

            <div className='flex gap-2'>
              <div className="border border-white bg-white text-xs h-10 w-10 rounded-full flex justify-center items-center"> 
                <Coeur itemData={propertyData}/>
              </div>
              <div className="border border-white bg-white h-10 w-10 rounded-full flex justify-center items-center"> 
                <img src={download} className='h-6 w-6'/>
              </div>
            </div>
          </div>
        </div>

        {/* TEXTE HAUT */}
        <div className='flex justify-between mx-6 my-2'>
          <div className='flex flex-col gap-0.5'>
            <h1 className='font-bold text-sm text-black'>Villa Meublée</h1>
            <h1 className='text-xs'>Disponible à partir de Mai 2025</h1>
            <div className='flex gap-1'>
              <img src={map} className='w-4 h-4'/>
              <h2 className='text-xs'>Melen, Yaounde</h2>
            </div>
          </div>

          <h1 className='text-sm bg-[#A3D2FF] w-[80px] h-[24px] rounded-[8px] flex justify-center items-center'>
            À louer
          </h1>
        </div>
      </div>

      {/* PRESTATAIRE */}
      <div className='flex flex-col gap-2'>
        <hr className='bg-[#0078EF] h-0.5'/>

        <div className='mx-6 my-1 flex justify-between'>
          <div className='flex gap-2'>
            <img src={user} className='w-12 h-12 rounded-full'/>
            <div className='flex flex-col'>
              <h2>Mr Grégoire Ntolo</h2>
              <h2 className='text-[#58575D]'>Prestataire</h2>
            </div>
          </div>

          <div className='flex flex-col justify-end items-end gap-1'>
            <img src={check} className='w-6 h-6 mr-4'/>
            <button className='w-24 h-8 bg-[#0078EF] rounded-[8px] text-white'>
              Discuter
            </button>
          </div>
        </div>

        <hr className='bg-[#0078EF] h-0.5'/>
      </div>

      {/* DESCRIPTION */}
      <div className='flex flex-col gap-4 mx-6'>
        <h1 className='font-bold text-base'>Descriptions & modalités :</h1>

        <div className='flex flex-col gap-3'>

          <div className='h-12 flex gap-4 items-center bg-[#D9E8FF] p-4 rounded-[8px]'>
            <img src={livre} className='w-6 h-6'/>
            <h1 className='text-sm'>
              2 Salons, 4 Chambres, 3 Salles de bain, 1 Cuisine, Parking, Piscine, Terrasse
            </h1>
          </div>

          <div className='h-12 flex gap-4 items-center bg-[#D9E8FF] p-4 rounded-[8px]'>
            <img src={main} className='w-6 h-6'/>
            <h1 className='text-sm w-[294px]'>
              1.500.000 Fcfa par mois + caution de 350.000 Fcfa
            </h1>
          </div>

        </div>
      </div>

      {/* BOUTON RESERVER */}
      <div className='mx-4 flex justify-center items-center'>
        <button 
          onClick={handleReservation}
          className='w-10/12 h-12 bg-[#0078EF] rounded-[8px] text-base text-white'
        >
          Réserver
        </button>
      </div>

      <Footer/>
    </section>
  );
}

export default Details2;
