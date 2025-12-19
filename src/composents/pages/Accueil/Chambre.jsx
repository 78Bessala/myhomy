import Accueil from "./Accueil";
import Footer1 from '../../../composents/pages/Accueil/Footer1'
import Footer from "./Footer";
import { apiRequest } from "../../../service/api";
import { useEffect, useState } from "react";
import ListingCard from "./listingCard";

function Chambre() {
    const [logements, setLogements] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        apiRequest("/listings/logements/?type_logement=chambre","GET")
        .then((data) =>{
            setLogements(data)
            setLoading(false)
        })
        .catch((err)=>{
            console.error(err)
            setLoading(false)
        })
    }, [])
    
    if(loading){
        <p className="text-center mt-10">Chargement...</p>
    }



    return (
        <section className="flex h-screen overflow-x-hidden">

            <Footer1 />
            <main className="flex flex-3 flex-col  max-w-full gap-4 ">
                <Accueil />
                <div className=" grid  md:grid-cols-2 gap-6   md:gap-8 m-4 mb-52 lg:mx-12 lg:m-8">
                   {logements.map((logement) =>(<ListingCard key={logement.id} listing={logement}/>))}
                </div>
                <Footer />
            </main>
        </section>
    );

}

export default Chambre;
