import Footer from './Footer';
import check from '../../../assets/public/check.svg';
import map from '../../../assets/public/map.svg';
import Footer1 from '../../../composents/pages/Accueil/Footer1'
import { useContext } from 'react';
import { ReservationContext } from '../../../context/ReservationContext';

function Reservation() {
    const { reservations } = useContext(ReservationContext);

    return (
        // <section className="flex ">
        // <Footer1 />
        <section className='flex flex-3 flex-col gap-4 pt-12    min-h-screen bg-[#D9D9D9]'>

            <div className='flex flex-col gap-2'>
                <div className='w-full h-12 bg-[#0078EF] flex justify-center items-center'>
                    <h1 className='text-white text-xl'>Toutes vos réservations</h1>
                </div>

                <h1 className='text-[12px] flex items-center justify-center'>
                    Vos réservations disparaîtront 90 jours après être enregistrées.
                </h1>
            </div>

            <div id="Reservation">
                <div className='m-4 grid grid-cols-2 gap-4'>

                    {reservations.length > 0 ? (
                        reservations.map((reservation) => (
                            <div key={reservation.id} className='flex flex-col gap-1'>
                                <img 
                                  src={reservation.image} 
                                  className='h-[180px] rounded-[16px] object-cover'
                                />

                                <div className='flex flex-col gap-0.5'>
                                    <div className='flex justify-between'>
                                        <h1 className='font-bold text-xs text-black'>{reservation.title}</h1>

                                        <div className='flex gap-1'>
                                            <img src={map} className='w-4 h-4'/>
                                            <h2 className='text-xs text-[#58575D]'>{reservation.location}</h2>
                                        </div>
                                    </div>

                                    <h1 className='text-[10px] text-[#58575D]'>
                                        Disponible à partir de {reservation.date}
                                    </h1>
                                </div>

                                <div className='flex justify-center items-center gap-1 bg-white h-4 rounded-[16px]'>
                                    <img src={check} className='w-4 h-4'/>
                                    <h1 className='text-xs'>Réservé le {reservation.reservedDate}</h1>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='col-span-2 flex justify-center items-center h-40'>
                            <h1 className='text-xl text-[#58575D]'>Aucune réservation pour le moment</h1>
                        </div>
                    )}

                </div>
            </div>
<div className='md:hidden'>
      <Footer />
</div>
          
        {/* </section> */}
         </section> 
    );
}

export default Reservation;
