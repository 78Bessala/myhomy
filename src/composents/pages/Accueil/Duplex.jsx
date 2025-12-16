
import Accueil from "./Accueil";
import image from '../../../assets/public/01.jpg';
import Footer1 from '../../../composents/pages/Accueil/Footer1'
import etoile from '../../../assets/public/etoile.svg'
import image1 from '../../../assets/public/02.jpg'
import image2 from '../../../assets/public/07.jpeg'
import image3 from '../../../assets/public/06.jpeg'
import image4 from '../../../assets/public/03.jpg'
import Footer from "./Footer";


import Coeur from "./Coeur"
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { FavorisContext } from './FavorisContext';

function Duplex (){
  // Propriétés pour les favoris
  const prop1 = {
    id: 'DetailsD',
    image: image,
    title: "Duplex Meublé",
    location: "Obili, Yaounde",
    date: "Mars 2025"
  };

  const prop2 = {
    id: 'DetailsD1',
    image: image1,
    title: "Duplex Meublé",
    location: "Soa, Douala",
    date: "Septembre 2025"
  };

  const prop3 = {
    id: 'duplex3',
    image: image2,
    title: "Duplex Meublé",
    location: "Mendong, Yaounde",
    date: "Juillet 2025"
  };

  const prop4 = {
    id: 'duplex4',
    image: image3,
    title: "Duplex non Meublé",
    location: "Yaoundé Centre",
    date: "Août 2025"
  };

  const prop5 = {
    id: 'duplex5',
    image: image4,
    title: "Duplex Meublé",
    location: "Bastos, Yaounde",
    date: "Juin 2025"
  };

return(
     <section className="flex h-screen    overflow-x-hidden">

       <Footer1 />
         
        
        <main className="flex flex-3 flex-col flex-1 max-w-full gap-4">
        <Accueil/>
<div className=" grid  md:grid-cols-2  md:gap-8 lg:gap-12 m-4 mb-20 lg:mx-12 lg:m-8">
    {/* image1 */}
    <div className=" flex flex-col gap-2">
        <div className=" flex flex-col   items-center  ">
        {/* Image */}
     
     <div
          className="  flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur itemData={prop1}/>
            </div>
            <Link to="/DetailsD" className="">
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
            </div>
            </Link>
        </div>
     </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black  md:text-base lg:text-xl"> Bonapriso ,Douala</h1>
                <h2 className="text-xs  text-black  md:text-sm  lg:text-base "> A partir de fevrier 2024</h2>
                 <h2 className="text-xs  text-black md:text-sm  lg:text-base "> 900.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1 md:w-5 md:h-5 "/>
                <h1 className="text-[15px] text-black md:text-xl">5.0</h1>
            </div>
        </div>
 
    </div>


  {/* image2 */}
   <div className=" flex flex-col gap-2">
<div className=" flex flex-col   items-center  ">
        {/* Image */}

   <div
          className="  flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image1})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur itemData={prop2}/>
            </div>
            <Link to="/DetailsD1" className="">
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2  md:w-3  md:h-3 rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
            </div>
            </Link>
</div>
    
</div>
        
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black  md:text-base lg:text-xl"> Pk20 ,Douala</h1>
                <h2 className="text-xs  text-black md:text-sm  lg:text-base "> A partir de juin 2023</h2>
                 <h2 className="text-xs  text-black md:text-sm  lg:text-base "> 1.000.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1  md:w-5 md:h-5 "/>
                <h1 className="text-[15px] text-black md:text-xl">5.0</h1>
            </div>
        </div> 
</div>


          {/* image3 */}
           <div className=" flex flex-col gap-2">
<div className=" flex flex-col   items-center  ">
        {/* Image */}
    <div
          className="  flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image2})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur itemData={prop3}/>
                    {/* <img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <Link to="/DetailsD" className="">
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
            </div>
            </Link>

        </div>  </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black md:text-base lg:text-xl "> Fokoue,Douala</h1>
                <h2 className="text-xs  text-black md:text-sm  lg:text-base "> A partir de janvier 2026</h2>
                 <h2 className="text-xs  text-black  md:text-sm  lg:text-base "> 450.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1 md:w-5 md:h-5"/>
                <h1 className="text-[15px] text-black md:text-xl">4.8</h1>
            </div>
        </div>
   </div>

             {/* image4 */}
           <div className=" flex flex-col gap-2">
<div className=" flex flex-col   items-center  ">
        {/* Image */}
    <div
          className="  flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image3})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur itemData={prop4}/>
                     {/*<img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <Link to="/DetailsD" className="">
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2  md:w-3  md:h-3 rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
            </div>
            </Link>

        </div>  </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black md:text-base lg:text-xl"> Nsam ,Yaounde</h1>
                <h2 className="text-xs  text-black md:text-sm  lg:text-base "> A partir de juin 2025</h2>
                 <h2 className="text-xs  text-black md:text-sm  lg:text-base "> 650.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1 md:w-5 md:h-5 "/>
                <h1 className="text-[15px] text-blackmd:text-xl">4.7</h1>
            </div>
        </div>
   </div>
 

           {/* image5 */}
           <div className=" flex flex-col gap-2">
<div className=" flex flex-col   items-center  ">
        {/* Image */}
    <div
          className="  flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image4})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur itemData={prop5}/>	
            </div>
            <Link to="/DetailsD" className="">
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
            </div>
            </Link>

        </div>  </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black  md:text-base lg:text-xl"> Famla ,Baffoussam</h1>
                <h2 className="text-xs  text-black  md:text-sm  lg:text-base "> A partir de janvier 2025</h2>
                 <h2 className="text-xs  text-black md:text-sm  lg:text-base "> 800.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1 md:w-5 md:h-5 "/>
                <h1 className="text-[15px] text-black md:text-xl">4.0</h1>
            </div>
        </div>
   </div>
 
 

</div>
<div className="md:hidden">

    <Footer/>
</div>
</main>
    </section>

);

}

export default Duplex;
