
import Accueil from "./Accueil";
import image from '../../../assets/public/v6.jpg';
import coeur1 from '../../../assets/public/Heart.svg'
import etoile from '../../../assets/public/etoile.svg'
import image1 from '../../../assets/public/08.jpg'
import image2 from '../../../assets/public/07.jpeg'
import image3 from '../../../assets/public/06.jpeg'
import image4 from '../../../assets/public/03.jpg'
import Footer1 from '../../../composents/pages/Accueil/Footer1'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { FavorisContext } from './FavorisContext';

import Footer from "./Footer"
import Coeur from "./Coeur"

function Voirtout (){
  // Propriétés pour les favoris
  const property1 = {
    id: 'Details1',
    image: image,
    title: "Villa Meublee",
    location: "Olembe, Yaounde",
    date: "Juin 2025"
  };

  const property2 = {
    id: 'Details2',
    image: image1,
    title: "Villa Meublée",
    location: "Melen, Yaounde",
    date: "Mai 2025"
  };

  const property3 = {
    id: 'DetailsA',
    image: image2,
    title: "Appartement non Meublé",
    location: "Efoulan, Yaounde",
    date: "Juin 2025"
  };

  const property4 = {
    id: 'DetailsD',
    image: image3,
    title: "Duplex Meublé",
    location: "Obili, Yaounde",
    date: "Mars 2025"
  };

  const property5 = {
    id: 'DetailsV',
    image: image4,
    title: "Villa Meublée",
    location: "Bastos, Yaounde",
    date: "Juin 2025"
  };

return(
    <section className="flex h-screen    overflow-x-hidden">

       <Footer1 />
         
        
        <main className="flex flex-3 flex-col flex-1 max-w-full gap-4 ">
        <Accueil/>
<div className=" grid  md:grid-cols-2 gap-6   md:gap-8 m-4 mb-52 lg:mx-12 lg:m-8">
    {/* image1 */}
    <div className=" flex flex-col gap-2">
        <div className=" flex flex-col   items-center  ">
        {/* Image */}
    
    <div
          className="flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96  bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] md:h-8
                     md:w-[200px]  md:text-[13px] lg:border-1 rounded-[30px] flex 
                     justify-center items-center"> ajouter aux favoris
                     </div>

			<Coeur itemData={property1}/>
                  {/*  <img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <Link to="/Details1" className="">
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2  md:w-3  md:h-3 rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2  md:w-3  md:h-3 rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3 md:h-3 rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2  md:w-3  md:h-3 rounded-full  border  border-black bg-white"></div>
            </div>
            </Link>

        </div>  
       
       
    
        
    </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div className=" font-body ">

                <h1 className="font-bold  text-sm  md:text-xl text-black "> Olembe ,Yaounde</h1>
                <h2 className="text-xs   md:text-base text-black "> A partir de juin 2025</h2>
                 <h2 className="text-xs md:text-base text-black "> 2.000.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 md:w-6 md:h-6 mt-1 "/>
                <h1 className="text-[15px] md:text-[24px] text-black">5.0</h1>
            </div>
        </div>
 
    </div>


  {/* image2 */}
   <div className=" flex flex-col gap-2">
<div className=" flex flex-col   items-center  ">
        {/* Image */}
    
    <div
          className="flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image1})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center md:text-[13px] "> ajouter aux favoris</div>
			<Coeur itemData={property2}/>
                     {/*<img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <Link to="/Details2" className="">
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2  md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3   rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2  md:w-3  md:h-3  rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
            </div>
            </Link>
</div>

</div>
        
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm  md:text-xl text-black "> Melen ,Yaounde</h1>
                <h2 className="text-xs md:text-base   text-black "> A partir de mai 2025</h2>
                 <h2 className="text-xs  md:text-base  text-black "> 1.500.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1 "/>
                <h1 className="text-[15px] text-black">5.0</h1>
            </div>
        </div> 
</div>


          {/* image3 */}
           <div className=" flex flex-col gap-2">
<div className=" flex flex-col   items-center  ">
        {/* Image */}
    
    <div
          className="flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image2})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center md:text-[13px] "> ajouter aux favoris</div>
			<Coeur itemData={property3}/>
                    {/* <img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
            </div>

        </div>
      
    
        
    </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm md:text-xl  text-black "> Bastos ,Yaounde</h1>
                <h2 className="text-xs md:text-base   text-black "> A partir de mars 2025</h2>
                 <h2 className="text-xs md:text-base  text-black "> 1.000.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1 "/>
                <h1 className="text-[15px] text-black">4.8</h1>
            </div>
        </div>
   </div>

             {/* image4 */}
           <div className=" flex flex-col gap-2">
<div className=" flex flex-col   items-center  ">
        {/* Image */}

    <div
          className="flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image3})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center md:text-[13px] "> ajouter aux favoris</div>
			<Coeur itemData={property4}/>
                     {/*<img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2  md:w-3  md:h-3 rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3   rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2  md:w-3  md:h-3 rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
        </div>
        </div>
       
    
        
    </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between ">

            <div>

                <h1 className="font-bold  text-sm  md:text-xl  text-black "> Nsam ,Yaounde</h1>
                <h2 className="text-xs  md:text-base  text-black "> A partir de juillet 2025</h2>
                 <h2 className="text-xs  md:text-base  text-black "> 1.000.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1 "/>
                <h1 className="text-[15px] text-black">4.7</h1>
            </div>
        </div>
   </div>
 

           {/* image5 */}
           <div className=" flex flex-col gap-2">
<div className=" flex flex-col   items-center  ">
        {/* Image */}
    
    <div
          className="flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image4})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center md:text-[13px] "> ajouter aux favoris</div>
			<Coeur itemData={property5}/>	
                     {/*<img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
        </div>
       </div>
    
        
    </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between mb-24">

            <div>

                <h1 className="font-bold  text-sm md:text-xl text-black "> Obili ,Yaounde</h1>
                <h2 className="text-xs  md:text-base text-black "> A partir de mars 2025</h2>
                 <h2 className="text-xs md:text-base   text-black "> 1.000.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1 "/>
                <h1 className="text-[15px] text-black">4.0</h1>
            </div>
        </div>
   </div>
 
 

</div>

  <Footer />


</main>
    </section>


);

}

export default Voirtout;
