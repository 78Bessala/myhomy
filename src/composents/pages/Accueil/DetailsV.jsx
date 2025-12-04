
import image from '../../../assets/public/v1.jpg';
import fleche from '../../../assets/public/arrow.svg'
import download from '../../../assets/public/download.svg'
import map from '../../../assets/public/map.svg'
import user from '../../../assets/public/user.jpeg'
import check from '../../../assets/public/check.svg'
import livre from '../../../assets/public/livre.svg'
import main from '../../../assets/public/main.svg'
import Footer from "./Footer"
import Coeur from "./Coeur"

function DetailsV (){
return(
<section className='flex flex-col gap-8'> 
      {/* section maison */}
      <div className=' flex flex-col gap-1'>
             <div className="  flex flex-col justify-between p-4 w-full h-82 bg-cover bg-center "
              style={{ backgroundImage: `url(${image})` }}>
                <div className="flex justify-between"> 
                   <div className="border border-white text-black bg-[#FFFFFF] text-xs  h-10 w-10 rounded-full flex justify-center items-center"> 
                               <img  src={fleche} className='h-6 w-6'/>
                        </div>
                  <div className='flex gap-2'>
                        <div className="border border-white text-black bg-[#FFFFFF] text-xs  h-10 w-10 rounded-full flex justify-center items-center"> 
                               <Coeur/>
                        </div>
                        <div className="border border-white text-black bg-[#FFFFFF] text-xs  h-10 w-10 rounded-full flex justify-center items-center"> 
                                <img  src={download} className='h-6 w-6'/>
                        </div>
                  </div>
                       
                </div>


            </div>

            <div className=' flex justify-between mx-6 my-2'>
                  <div className=' flex flex-col  gap-0.5'>
                        <h1 className='font-bold texte-sm text-black'> Villa Meublee</h1>
                        <h1 className='text-xs'>Disponible a partir de juin 2025</h1>
                        <div className=' flex gap-1'>
                              <img src={map} className='w-4 h-4'/>
                              <h2 className='text-xs'> Olembe,Yaounde</h2>
                        </div>

                  </div>

                  <h1 className='text-sm bg-[#A3D2FF]  w-[80px] h-[24px] rounded-[8px] flex justify-center items-center'>  a louer</h1>
            </div>
      </div>

      {/* section suivante  */}

      <div className='flex flex-col gap-2'>
            <hr className='bg-[#0078EF] h-0.5'/>
       <div className='mx-6 my-1 flex  justify-between '>
            <div className=' flex  gap-2 '>
                  <img src={user} className='w-12 h-12  rounded-full '/>
                  <div className=' flex flex-col'>
                        <h2 className=''> Mr gregoire toto</h2>
                          <h2 className='text-[#58575D]'> prestataire</h2>
                  </div>
             </div>
             <div className=' flex flex-col justify-end items-end gap-1'>
                  <img src={check} className='w-6 h-6 mr-4 '/>
                  <button className=' w-24 h-8 bg-[#0078EF] rounded-[8px] text-white'> Discuter</button>
             </div> 
      </div>  
            <hr className='bg-[#0078EF] h-0.5'/> 
      </div>
      {/* section description */}

      <div className=' flex flex-col gap-4 mx-6'>
           <h1 className='font-bold text-base'>Descriptions & modalités :</h1>
           <div className='flex flex-col gap-3'>

             <div className=' h-12 flex  gap-4 items-center bg-[#D9E8FF] p-4 rounded-[8px]'>
                  <img src={livre} className='w-6 h-6  '/>
                  <h1 className='text-sm flex justify-center items-center'>2 Salons, 4 Chambres, 3 Salles de bain, 1 Cuisine, Parking, Piscine, Terrasse  </h1>
           </div>

           <div className='  h-12 flex gap-4 items-center bg-[#D9E8FF] p-4 rounded-[8px]'>
            <img src={main} className='w-6 h-6 '/>
            <h1 className='text-sm  flex justify-center items-center w-[294px]'>2.000.000 Fcfa par mois avec une caution de 500.000 Fcfa    </h1>
            </div>
           </div>
          
        </div>
<div className='mx-4  justify-center items-center'>
      <button className=' w-10/12 h-12 bg-[#0078EF] mx-6 rounded-[8px] text-base text-white'> Reserver </button>

</div>
        

<Footer/>
</section> 
);

}
export default DetailsV;