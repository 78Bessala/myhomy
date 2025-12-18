
import image1 from '../../../assets/public/v2.jpg'
import fleche from '../../../assets/public/arrow.svg'
import download from '../../../assets/public/download.svg'
import map from '../../../assets/public/map.svg'
import user from '../../../assets/public/user.jpeg'
import check from '../../../assets/public/check.svg'
import livre from '../../../assets/public/livre.svg'
import main from '../../../assets/public/main.svg'
import Footer from "./Footer"
import Coeur from "./Coeur"
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { apiRequest } from '../../../service/api'
import { isAuthenticated } from '../../../utils/auth'
import useFavoris from '../../../hooks/useFavoris'


function ListingDetail() {

      const {id} = useParams()
      const [logement, setLogement] = useState([])
      const [loading, setLoading] = useState(true)
      const logged = isAuthenticated() 
      const {favorisMap, toggleFavori, loader} = useFavoris()
      const isFavorite = Boolean(favorisMap[id])

      console.log(isFavorite)
      useEffect(()=>{
            apiRequest(`/listings/logements/${id}`,"GET")
            .then((data)=>{setLogement(data)
                  setLoading(false)
            })
            .catch((err)=>{console.error(err)})
      },[id])

      if(loading === true){
            return (<p>Chargement...</p>)
      }
      return (
            <section className='flex flex-col gap-8'>
                  {/* section maison */}
                  <div className=' flex flex-col gap-1'>
                        <div className="  flex flex-col justify-between p-4 w-full h-82  md:h-[400px] bg-cover bg-center "
                              style={{ backgroundImage: logement.images?.length>0 ? `url(${logement.images[0].image})` : `url(${image1})` }}>
                              <div className="flex justify-between">
                                    <div className="border border-white text-black bg-[#FFFFFF] text-xs  h-10 w-10 rounded-full flex justify-center items-center">
                                          <Link to="/voir-tout" className=""><img src={fleche} className='h-6 w-6' /></Link>
                                    </div>
                                    <div className='flex gap-2'>
                                          <div className="border border-white text-black bg-[#FFFFFF] text-xs  h-10 w-10 rounded-full flex justify-center items-center">
                                                <Coeur isFavorite={logged ? isFavorite : 0} onClick={() =>toggleFavori(id)} />
                                          </div>
                                          <div className="border border-white text-black bg-[#FFFFFF] text-xs  h-10 w-10 rounded-full flex justify-center items-center">
                                                <img src={download} className='h-6 w-6' />
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div className='flex justify-between mx-6 my-2'>
                              <div className=' flex flex-col  gap-0.5'>
                                    <h1 className='font-bold texte-sm text-black md:text-xl'> {logement.titre}</h1>
                                    <h1 className='text-xs md:text-sm'>{logement.description}</h1>
                                    <div className=' flex gap-1'>
                                          <img src={map} className='w-4 h-4' />
                                          <h2 className='text-xs md:text-sm'> {logement.quartier},{logement.ville}</h2>
                                    </div>

                              </div>

                              <h1 className='text-sm md:text-base bg-[#A3D2FF]  w-20 h-6  md:w-[100px] md:h-8 rounded-lg flex justify-center items-center'>  à louer</h1>
                        </div>
                  </div>

                  {/* section suivante  */}

                  <div className='flex flex-col gap-2'>
                        <hr className='bg-[#0078EF] h-0.5' />
                        <div className='mx-6 my-1 flex  justify-between '>
                              <div className=' flex  gap-2 '>
                                    <img src={user} className='w-12 h-12  rounded-full ' />
                                    <div className=' flex flex-col'>
                                          <h2 className='md:text-xl'> Mr Gregoire</h2>
                                          <h2 className='text-[#58575D]'> prestataire</h2>
                                    </div>
                              </div>
                              <div className=' flex flex-col justify-end items-end gap-1'>
                                    <img src={check} className='w-6 h-6 mr-4 ' />
                                    <button className=' w-24 h-8 md:w-36 md:h-10 bg-[#0078EF] rounded-lg text-white md:text-xl'> Discuter</button>
                              </div>
                        </div>
                        <hr className='bg-[#0078EF] h-0.5' />
                  </div>
                  {/* section description */}

                  <div className=' flex flex-col gap-4 mx-6'>
                        <h1 className='font-bold text-base md:text-xl'>Descriptions & modalités :</h1>
                        <div className='flex flex-col gap-3'>

                              <div className=' h-12 md:h-16  flex  gap-4 items-center bg-[#D9E8FF] p-4 rounded-lg'>
                                    <img src={livre} className='w-6 h-6  ' />
                                    <h1 className='text-sm flex justify-center items-center md:text-base'>{logement.salon} Salons, {logement.chambres} Chambres, {logement.salles_bain} Salles de bain, {logement.cuisine} Cuisine, {logement.parking === 1 ?"Parking":"Sans parking"}</h1>
                              </div>

                              <div className='  h-12 md:h-16  flex gap-4 items-center bg-[#D9E8FF] p-4 rounded-lg'>
                                    <img src={main} className='w-6 h-6 ' />
                                    <h1 className='text-sm  flex justify-center items-center w-[294px] md:text-base'>{logement.prix} Fcfa par mois avec une caution de {logement.prix/2} Fcfa    </h1>
                              </div>
                        </div>

                  </div>
                  <div className='mx-4  flex  justify-center items-center'>
                        {/* <Link to={isAuthenticated()?`/reservation/${logement.id}`:"/login"}> */}
                              {/* <button onClick={logged ? navigate("/reserver"):navigate("/login")} className="w-10/12 h-12 md:h-16 md:text-2xl  v bg-[#0078EF] mx-6 rounded-lg text-base text-white"> Reserver </button> */}
                        {/* </Link> */}
                        <Link to={logged ?`/reserver/${logement.id}`: "/login"} className="no-underline inline-block mt-8 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
                        Réserver ce logement
                    </Link>
                  </div>
                  <Footer />
            </section>
      );

}
export default ListingDetail;