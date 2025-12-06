import Footer from '../../../composents/pages/Accueil/Footer'
import r1 from '../../../assets/public/r1.svg'
import check from '../../../assets/public/check.svg'
import map from '../../../assets/public/map.svg'
function Reservation(){

    return(
        <section className='flex flex-col gap-4 pt-12 bg-[#D9D9D9]'>

            

            <div className='flex flex-col gap-2'>

            <div className='w-full h-12 bg-[#0078EF] flex justify-center items-center'>
                <h1 className='text-white text-xl'>Toutes vos reservations</h1>
            </div>
            <h1 className='text-[12px] flex items-center justify-center'>
            Vos réservations disparaîtrons 90 jours après être enregistrées.
            </h1>
            </div>

            {/* section suivante */}
            <div  id="Reservation">
                <div className='m-4 grid grid-cols-2 gap-4'>
                    {/* image1 */}
                     <div className='  flex flex-col gap-1'>
                             <img src={r1} className=' h-[180px] rounded-[16px]'/>
                              <div className=' flex flex-col  gap-0.5'>
                                     <div className='flex justify-between'>
                                            <h1 className='font-bold text-xs text-black'> Studio Meublee</h1>

                                             <div className=' flex gap-1'>
                                                  <img src={map} className='w-4 h-4'/>
                                                   <h2 className='text-xs text-[#58575D]'> Village,Douala</h2>
                                              </div>
                                     </div>

                                     <h1 className='text-[10px] text-[#58575D]'>Disponible a partir de juin 2025</h1>
                              
                                    </div>
                            <div className='flex justify-center items-center gap-1 bg-white h-4 rounded-[16px]'>
                                <img src={check} className='w-4 h-4'/>
                                <h1 className='text-xs '>Réservé le 15 Décembre</h1>
                            </div>
                    </div>
            {/* image2 */}
                     <div className='  flex flex-col gap-1'>
                             <img src={r1} className=' h-[180px] rounded-[16px]'/>
                              <div className=' flex flex-col  gap-0.5'>
                                     <div className='flex justify-between'>
                                            <h1 className='font-bold text-xs text-black'> villa Meublee</h1>

                                             <div className=' flex gap-1'>
                                                  <img src={map} className='w-4 h-4'/>
                                                   <h2 className='text-xs text-[#58575D]'> Village,Douala</h2>
                                              </div>
                                     </div>

                                     <h1 className='text-[10px] text-[#58575D]'>Disponible a partir de juin 2025</h1>
                              
                                    </div>
                            <div className='flex justify-center items-center gap-1 bg-white h-4 rounded-[16px]'>
                                <img src={check} className='w-4 h-4'/>
                                <h1 className='text-xs '>Réservé le 15 Décembre</h1>
                            </div>
                    </div>
                    

                     {/* image3 */}
                     <div className=' mt-2 flex flex-col gap-1'>
                             <img src={r1} className='h-[180px] rounded-[16px]'/>
                              <div className=' flex flex-col  gap-0.5'>
                                     <div className='flex justify-between'>
                                            <h1 className='font-bold text-xs text-black'> villa Meublee</h1>

                                             <div className=' flex gap-1'>
                                                  <img src={map} className='w-4 h-4'/>
                                                   <h2 className='text-xs text-[#58575D]'> Village,Douala</h2>
                                              </div>
                                     </div>

                                     <h1 className='text-[10px] text-[#58575D]'>Disponible a partir de juin 2025</h1>
                              
                                    </div>
                            <div className='flex justify-center items-center gap-1 bg-white h-4 rounded-[16px]'>
                                <img src={check} className='w-4 h-4'/>
                                <h1 className='text-xs '>Réservé le 15 Décembre</h1>
                            </div>
                    </div>



 {/* image4 */}
                     <div className=' mt-2 flex flex-col gap-1'>
                             <img src={r1} className='h-[180px] rounded-[16px]'/>
                              <div className=' flex flex-col  gap-0.5'>
                                     <div className='flex justify-between'>
                                            <h1 className='font-bold text-xs text-black'> villa Meublee</h1>

                                             <div className=' flex gap-1'>
                                                  <img src={map} className='w-4 h-4'/>
                                                   <h2 className='text-xs text-[#58575D]'> Village,Douala</h2>
                                              </div>
                                     </div>

                                     <h1 className='text-[10px] text-[#58575D]'>Disponible a partir de juin 2025</h1>
                              
                                    </div>
                            <div className='flex justify-center items-center gap-1 bg-white h-4 rounded-[16px]'>
                                <img src={check} className='w-4 h-4'/>
                                <h1 className='text-xs '>Réservé le 15 Décembre</h1>
                            </div>
                    </div>

                     {/* image5 */}
                     <div className=' mt-2 flex flex-col gap-1'>
                             <img src={r1} className='h-[180px] rounded-[16px]'/>
                              <div className=' flex flex-col  gap-0.5'>
                                     <div className='flex justify-between'>
                                            <h1 className='font-bold text-xs text-black'> villa Meublee</h1>

                                             <div className=' flex gap-1'>
                                                  <img src={map} className='w-4 h-4'/>
                                                   <h2 className='text-xs text-[#58575D]'> Village,Douala</h2>
                                              </div>
                                     </div>

                                     <h1 className='text-[10px] text-[#58575D]'>Disponible a partir de juin 2025</h1>
                              
                                    </div>
                            <div className='flex justify-center items-center gap-1 bg-white h-4 rounded-[16px]'>
                                <img src={check} className='w-4 h-4'/>
                                <h1 className='text-xs '>Réservé le 15 Décembre</h1>
                            </div>
                    </div>
                

            </div>
</div>


            <Footer/>
        </section>

    );
}

export default Reservation;