
import Accueil from "./Accueil";
import image from '../../../assets/public/v1.jpg';
import coeur1 from '../../../assets/public/Heart.svg'
import etoile from '../../../assets/public/etoile.svg'
import image1 from '../../../assets/public/v2.jpg'
import image2 from '../../../assets/public/v3.jpg'
import image3 from '../../../assets/public/v4.jpg'
import image4 from '../../../assets/public/v5.jpg'
import Footer from "./Footer"
import Coeur from "./Coeur"

function Ville (){
return(
    <section className="flex flex-col  gap-4">
        <Accueil/>
<div className=" flex  flex-col  gap-8 m-4 mb-20">
    {/* image1 */}
    <div className=" flex flex-col gap-2">
        <div className=" flex flex-col   items-center  ">
        {/* Image */}
    <div
          className="  flex flex-col justify-between p-3 w-full h-64 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur/>
                  {/*  <img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 rounded-full  border  border-black bg-white"></div>
            </div>

        </div>  </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black "> Olembe ,Yaounde</h1>
                <h2 className="text-xs  text-black "> A partir de mars 2025</h2>
                 <h2 className="text-xs  text-black "> 1.700.000/mois</h2>
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
          className="  flex flex-col justify-between p-3 w-full h-64 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image1})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur/>
                     {/*<img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 rounded-full  border  border-black bg-white"></div>
            </div>
</div>
</div>
        
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black "> Melen ,Yaounde</h1>
                <h2 className="text-xs  text-black "> A partir de juin 2025</h2>
                 <h2 className="text-xs  text-black "> 1.500.000/mois</h2>
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
          className="  flex flex-col justify-between p-3 w-full h-64 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image2})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur/>
                    {/* <img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 rounded-full  border  border-black bg-white"></div>
            </div>

        </div>  </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black "> Bamena ,Bafang</h1>
                <h2 className="text-xs  text-black "> A partir de octobre 2025</h2>
                 <h2 className="text-xs  text-black "> 1.500.000/mois</h2>
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
          className="  flex flex-col justify-between p-3 w-full h-64 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image3})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur/>
                     {/*<img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 rounded-full  border  border-black bg-white"></div>
            </div>

        </div>  </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black "> Fotto ,Dschang</h1>
                <h2 className="text-xs  text-black "> A partir de juin 2025</h2>
                 <h2 className="text-xs  text-black "> 2.050.000/mois</h2>
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
          className="  flex flex-col justify-between p-3 w-full h-64 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image4})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur/>	
                     {/*<img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 rounded-full  border  border-black bg-white"></div>
            </div>

        </div>  </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black "> Victoria ,Limbe </h1>
                <h2 className="text-xs  text-black "> A partir de juin 2024</h2>
                 <h2 className="text-xs  text-black "> 1.500.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1 "/>
                <h1 className="text-[15px] text-black">4.0</h1>
            </div>
        </div>
   </div>
 
 

</div>

<Footer/>
    </section>


);

}

export default Ville;
