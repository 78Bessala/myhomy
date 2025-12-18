import Footer from './Footer';
import check from '../../../assets/public/check.svg';
import map from '../../../assets/public/map.svg';
import Footer1 from '../../../composents/pages/Accueil/Footer1'
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { apiRequest } from '../../../service/api';

function Reservation() {
    const [reservations, setReservations] = useState([])
    const navigate = useNavigate()

    const token = localStorage.getItem("access")


    useEffect(() => {

        apiRequest("/reservation/", "GET", null, localStorage.getItem("access"))
            .then(setReservations)
            .catch(() => { })
    }, [token, navigate]);


    return (
        <section className="flex h-screen    overflow-x-hidden">

            <Footer1 />


            <main className="flex flex-3 flex-col pt-12  max-w-full gap-4 min-h-screen bg-[#D9D9D9]">

                <div className='flex flex-col gap-2'>
                    <div className='w-full h-12 lg:h-20 bg-[#0078EF] flex justify-center items-center'>
                        <h1 className='text-white text-xl md:text-2xl'>Toutes vos réservations</h1>
                    </div>

                    <h1 className='text-[12px] md:text-base flex items-center justify-center'>
                        Vos réservations disparaîtront 90 jours après être enregistrées.
                    </h1>
                </div>

                <div id="Reservation">
                    <div className='m-4 grid grid-cols-2 gap-4'>

                        {reservations.length > 0 ? (
                            reservations.map((reservation) => (
                                <div key={reservation.id} className='cursor-pointer flex flex-col gap-1'>
                                    <Link to={`/detail/${reservation.logement.id}`}>
                                    <img
                                        src={reservation.logement.images[0].image}
                                        className='h-64 w-full md:h-82 lg:h-96  rounded-2xl object-cover'
                                    />

                                    <div className='flex flex-col gap-0.5'>
                                        <div className='flex justify-between'>
                                            <h1 className='font-bold text-xs lg:text-xl text-black'>{reservation.logement.titre}</h1>

                                            <div className='flex gap-1'>
                                                <img src={map} className='w-4 h-4' />
                                                <h2 className='text-[9px] md:text-sm text-[#58575D]'>{reservation.logement.quartier}, {reservation.logement.ville}</h2>
                                            </div>
                                        </div>

                                        <h1 className='text-[10px]  md:text-sm text-[#58575D]'>
                                            Disponible à partir de {reservation.date_debut}
                                        </h1>
                                    </div>

                                    <div className='flex justify-center items-center gap-1 bg-white h-4 md:h-8 rounded-2xl'>
                                        <img src={check} className='w-4 h-4' />
                                        <h1 className='text-xs md:text-base'>Réservé le {reservation.date_reservation}</h1>
                                    </div>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div className='col-span-2 flex justify-center items-center h-40 md:h-48'>
                                <h1 className='text-xl text-[#58575D] md:text-2xl'>Aucune réservation pour le moment</h1>
                            </div>
                        )}

                    </div>
                </div>

                <Footer />

            </main>
            {/* </section> */}
        </section>
    );
}

export default Reservation;
