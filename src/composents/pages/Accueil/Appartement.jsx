
import Accueil from "./Accueil";
import image from '../../../assets/public/a4.jpg';
import coeur1 from '../../../assets/public/Heart.svg';
import etoile from '../../../assets/public/etoile.svg';
import image1 from '../../../assets/public/a1.jpg';
import image2 from '../../../assets/public/a3.jpg';
import image3 from '../../../assets/public/a7.jpg';
import image4 from '../../../assets/public/a6.jpg';
import Footer from "./Footer";
import Footer1 from "./Footer1"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
// import { FavorisContext } from '../../../composents/pages/Accueil/FavorisContext '
import Coeur from "./Coeur"

function Appartement (){
  // Propriétés pour les favoris
  const prop1 = {
    id: 'DetailsA',
    image: image,
    title: "Appartement non Meublé",
    location: "Efoulan, Yaounde",
    date: "Juin 2025"
  };

  const prop2 = {
    id: 'DetailsA1',
    image: image1,
    title: "Appartement Meublé",
    location: "Nlongkak, Yaounde",
    date: "Août 2025"
  };

  const prop3 = {
    id: 'appartement3',
    image: image2,
    title: "Appartement Meublé",
    location: "Yaoundé Centre",
    date: "Juillet 2025"
  };

  const prop4 = {
    id: 'appartement4',
    image: image3,
    title: "Appartement non Meublé",
    location: "Douala Centre",
    date: "Août 2025"
  };

  const prop5 = {
    id: 'appartement5',
    image: image4,
    title: "Appartement Meublé",
    location: "Melen, Yaounde",
    date: "Septembre 2025"
  };

return(



    <section className="flex h-screen    overflow-x-hidden">

       <Footer1 />
         
        
        <main className="flex flex-3 flex-col flex-1 max-w-full gap-4 ">
        <Accueil/>
<div className=" grid gap-6 md:grid-cols-2  md:gap-8 lg:gap-12 m-4 mb-20 lg:mx-12 lg:m-8">
    {/* image1 */}
    <div className=" flex flex-col gap-2">
        <div className=" flex flex-col   items-center  ">
        {/* Image */}
  
   <div
          className="  flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96 bg-cover bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <button onClick={() => {}}> <Coeur itemData={prop1}/> </button>
                  {/*  <img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <Link to="/DetailsA" className="">
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 md:w-3  md:h-3 rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3 rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3  md:h-3 rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3 rounded-full  border  border-black bg-white"></div>
            </div>
            </Link>
        </div>
      </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black md:text-base lg:text-xl "> Efoulan ,Yaounde</h1>
                <h2 className="text-xs  text-black md:text-sm  lg:text-base "> A partir de juin 2025</h2>
                 <h2 className="text-xs  text-black md:text-sm  lg:text-base  "> 300.000/mois</h2>
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
                     {/*<img  src={coeur1} className=" w-[24px] h-[24px] "/>*/}
            </div>
            <Link to="/DetailsA1" className="">
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

                <h1 className="font-bold  text-sm text-black md:text-base lg:text-xl "> Bafou ,Dschang</h1>
                <h2 className="text-xs  text-black md:text-sm  lg:text-base "> A partir de juin 2025</h2>
                 <h2 className="text-xs  text-black  md:text-sm  lg:text-base "> 500.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1  md:w-5 md:h-5"/>
                <h1 className="text-[15px] text-black md:text-xl">5.0</h1>
            </div>
        </div> 
</div>



          {/* image3 */}
           <div className=" flex flex-col gap-2">
<div className=" flex flex-col   items-center  ">
        {/* Image */}
    <div
          className="  flex flex-col justify-between p-3 w-full h-64 bg-cover md:h-84 lg:h-96 bg-center rounded-[16px]"
          style={{ backgroundImage: `url(${image2})` }}>
            <div className="flex justify-between"> 
                    <div className="border border-white text-black bg-[#A3D2FF] text-xs  h-[30px] w-[130px] rounded-[30px] flex justify-center items-center"> ajouter aux favoris</div>
            <Coeur itemData={prop4}/>
            </div>
            <Link to="/DetailsA" className="">
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

                <h1 className="font-bold  text-sm text-black md:text-base lg:text-xl"> Bonakanda,Buea</h1>
                <h2 className="text-xs  text-black md:text-sm  lg:text-base "> A partir de fervrier 2025</h2>
                 <h2 className="text-xs  text-black md:text-sm  lg:text-base "> 200.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1  md:w-5 md:h-5"/>
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
            <Link to="/DetailsA" className="">
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h- md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
            </div>
            </Link>

        </div>  </div>
     {/* sous titre de l'image */}
        <div className="mx-2 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black md:text-base lg:text-xl "> pk-8 ,Douala</h1>
                <h2 className="text-xs  text-black md:text-sm  lg:text-base "> A partir de juillet 2025</h2>
                 <h2 className="text-xs  text-black md:text-sm  lg:text-base  "> 250.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1 md:w-5 md:h-5 "/>
                <h1 className="text-[15px] text-black md:text-xl">4.7</h1>
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
            <Link to="/DetailsA" className="">
            <div className=" flex gap-1 justify-end">
                <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black bg-[#0078EF]"></div>
                 <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
                  <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full border  border-black  bg-white"></div>
                   <div className=" w-2 h-2 md:w-3  md:h-3  rounded-full  border  border-black bg-white"></div>
            </div>
            </Link>

        </div>  </div>
     {/* sous titre de l'image */}
        <div className="mx-2  mb-20 flex  justify-between">

            <div>

                <h1 className="font-bold  text-sm text-black  md:text-base lg:text-xl"> Bastos ,Yaounde</h1>
                <h2 className="text-xs  text-black md:text-sm  lg:text-base "> A partir de juin 2025</h2>
                 <h2 className="text-xs  text-black md:text-sm  lg:text-base "> 1.000.000/mois</h2>
            </div>


            <div className="flex  gap-1">
                <img src={etoile}  className="w-4 h-4 mt-1 md:w-5 md:h-5 "/>
                <h1 className="text-[15px] text-black md:text-xl">4.0</h1>
            </div>
        </div>
   </div>
 
 

</div>

<Footer/>
</main>
    </section>


);

}

export default Appartement;
