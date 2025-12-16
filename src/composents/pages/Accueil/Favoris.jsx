import Footer from './Footer';
import heart from '../../../assets/public/heart.svg';
import etoile from '../../../assets/public/etoile.svg';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import Footer1 from '../../../composents/pages/Accueil/Footer1';
import { FavorisContext } from '../../../composents/pages/Accueil/FavorisContext';

function Favoris() {

    const { favoris } = useContext(FavorisContext);

    return (
         <section className="flex h-screen    overflow-x-hidden">

       <Footer1 />
         
        
        <main className="flex flex-3 flex-col flex-1 pt-12  max-w-full gap-4 min-h-screen bg-[#D9D9D9]">
        {/* <section className='flex flex-3 flex-col gap-4 pt-12 min-h-screen bg-[#D9D9D9]'> */}

            <div className='flex flex-col gap-2'>
                <div className='w-full h-12 lg:h-20 bg-[#0078EF] flex justify-center items-center'>
                    <h1 className='text-white text-xl lg:text-2xl'>Vos favoris</h1>
                </div>
            </div>

            <div id="Favoris">
                <div className='m-4 grid grid-cols-2 gap-4'>

                    {favoris.length > 0 ? (
                        favoris.map((item) => (
                            <div key={item.id} className='flex flex-col gap-1'>

                                <div
                                    className="flex flex-col justify-between p-3 w-full h-44 md:h-82 lg:h-96 bg-cover bg-center rounded-[16px]"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    <div className="flex justify-end">
                                        <img src={heart} className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]" />
                                    </div>

                                    <Link to={`/${item.id}`}>
                                        <div className="flex gap-1 justify-end">
                                            <div className="w-2 h-2 rounded-full border border-black bg-[#0078EF]"></div>
                                            <div className="w-2 h-2 rounded-full border border-black bg-white"></div>
                                            <div className="w-2 h-2 rounded-full border border-black bg-white"></div>
                                            <div className="w-2 h-2 rounded-full border border-black bg-white"></div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="mx-2 flex justify-between">
                                    <div>
                                        <h1 className="font-bold text-sm text-black lg:text-xl">{item.title}</h1>
                                        <h2 className="text-xs text-black lg:text-base">{item.location}</h2>
                                        <h2 className="text-xs text-black lg:text-base">À partir de {item.date}</h2>
                                    </div>
                                     <div className="flex  gap-1">
                                                    <img src={etoile}  className="w-4 h-4 mt-1 md:w-5 md:h-5 "/>
                                                    <h1 className="text-[15px] text-black lg:text-xl">5.0</h1>
                                     </div>
                                </div>

                            </div>
                        ))
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
