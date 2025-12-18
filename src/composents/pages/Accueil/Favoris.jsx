import Footer from './Footer';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Footer1 from '../../../composents/pages/Accueil/Footer1';
import { FavorisContext } from '../../../composents/pages/Accueil/FavorisContext';
import { apiRequest } from '../../../service/api';
import ListingCard from './listingCard';

function Favoris() {

    const [favoris, setFavoris] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        apiRequest("/favoris/", "GET",null,localStorage.getItem("access"))
            .then((data) => {
                setFavoris(data)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <p>Chargement...</p>
    }
    console.log(favoris.id)
    return (
        <section className="flex h-screen    overflow-x-hidden">

            <Footer1 />
            <main className="flex flex-3 flex-col  pt-12  max-w-full gap-4 min-h-screen bg-[#D9D9D9]">
                <div className='flex flex-col gap-2'>
                    <div className='w-full h-12 lg:h-20 bg-[#0078EF] flex justify-center items-center'>
                        <h1 className='text-white text-xl lg:text-2xl'>Vos favoris</h1>
                    </div>
                </div>

                <div>
                    <div className='m-4 grid grid-cols-2 gap-4'>

                        {favoris?.length > 0 ? (
                            favoris.map((favori) => (<ListingCard key={favori.id} listing={favori.logement} />))
                            
                        ) : (
                            <div className='col-span-2 flex justify-center items-center h-40'>
                                <h1 className='text-xl text-[#58575D] '>Aucun favori pour le moment</h1>
                            </div>
                        )}

                    </div>
                </div>
                <Footer />
            </main>
        </section>
    );
}

export default Favoris;
