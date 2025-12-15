
import Accueil from "./Accueil";
import image from '../../../assets/public/c1.jpg';
import coeur1 from '../../../assets/public/Heart.svg'
import etoile from '../../../assets/public/etoile.svg'
import image1 from '../../../assets/public/c2.jpeg'
import image2 from '../../../assets/public/c3.jpg'
import image3 from '../../../assets/public/c4.jpg'
import image4 from '../../../assets/public/c5.jpg'
import Footer from "./Footer"
import Coeur from "./Coeur"
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { FavorisContext } from './FavorisContext';

function Chambre (){
  // Propriétés pour les favoris
  const prop1 = {
    id: 'DetailsC',
    image: image,
    title: "Chambre Meublée",
    location: "Omnisports, Yaounde",
    date: "Avril 2025"
  };

  const prop2 = {
    id: 'DetailsC1',
    image: image1,
    title: "Chambre Meublée",
    location: "Akwa, Douala",
    date: "Mai 2025"
  };

  const prop3 = {
    id: 'chambre3',
    image: image2,
    title: "Chambre Meublée",
    location: "Yaoundé Centre",
    date: "Juin 2025"
  };

  const prop4 = {
    id: 'chambre4',
    image: image3,
    title: "Chambre non Meublée",
    location: "Douala Centre",
    date: "Juillet 2025"
  };

  const prop5 = {
    id: 'chambre5',
    image: image4,
    title: "Chambre Meublée",
    location: "Melen, Yaounde",
    date: "Août 2025"
  };

return(
    <section className="flex flex-col  gap-4">
        <Accueil/>
<div className=" grid grid-cols-1 md:grid-cols-2  gap-8 m-4 mb-20">
    {/* image1 */}
    <div className=" flex flex-col gap-2">
        <div className=" flex flex-col   items-center  ">
        {/* Image */}
   
    <div
          className="  flex flex-col justify-between p-3 w-full h-64  md:h-86 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur itemData={prop1}/>
            
         </div>
            <Link to="/DetailsC" className="">
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
            </div>
            </Link>

        </div> 
        
     {/* sous titre de l'image */}
        <div className="mx-2 flex gap-46 justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black "> Mendong ,Yaounde</h1>
                <h2 className="text-xs  text-black "> A partir de juin 2025</h2>
                 <h2 className="text-xs  text-black "> 50.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1 "/>
                <h1 className="text-[15px] text-black">5.0</h1>
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
                     {/*<img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
  <Link to="/DetailsC1" className="">
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

                <h1 className="font-bold  text-sm text-black "> Djidda ,Garoua</h1>
                <h2 className="text-xs  text-black "> A partir de mars 2025</h2>
                 <h2 className="text-xs  text-black "> 30.000/mois</h2>
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
          className="  flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image2})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur itemData={prop3}/>
                    {/* <img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3   rounded-full  border  border-black bg-white"></div>
            </div>

        </div>  </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black "> Obili ,Yaounde</h1>
                <h2 className="text-xs  text-black "> A partir de janvier 2025</h2>
                 <h2 className="text-xs  text-black "> 20.000/mois</h2>
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
          className="  flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image3})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur/>
                     {/*<img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
            </div>

        </div>  </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black "> Nsam ,Yaounde</h1>
                <h2 className="text-xs  text-black "> A partir de aout 2025</h2>
                 <h2 className="text-xs  text-black "> 25.000/mois</h2>
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
          className="  flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image4})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur itemData={prop5}/>	
             </div>  
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
            </div>

       </div>
     {/* sous titre de l'image */}
        <div className=" flex  gap-40 mx-2 justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black "> Bonakanda ,Buea</h1>
                <h2 className="text-xs  text-black "> A partir de septembre 2025</h2>
                 <h2 className="text-xs  text-black "> 30.000/mois</h2>
            </div>

            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1 "/>
                <h1 className="text-[15px] text-black">4.0</h1>
            </div>

        </div>
   </div>
 
 </div>

</div>
</div>

<Footer/>
    </section>


);

}

export default Chambre;
