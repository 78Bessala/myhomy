import { useNavigate, Link } from "react-router-dom";
import Coeur from "./Coeur"
import etoile from '../../../assets/public/etoile.svg'
import useFavoris from "../../../hooks/useFavoris";
import { isAuthenticated } from "../../../utils/auth";


const note = +(Math.random()*(5.0-3.0) + 3).toFixed(1)

export default function ListingCard({listing}) {
    
    const logged = isAuthenticated()
    const navigate = useNavigate()    
    const {favorisMap, toggleFavori, loading} = useFavoris()
    const isFavorite = Boolean(favorisMap[listing.id])

    if(loading) return null;
    return (
        <div onClick={()=>{navigate(`/detail/${listing.id}`)}} className=" flex flex-col rounded-2xl cursor-pointer gap-2 delai-150 duration-300 easy-in-out hover:translate-y-1 hover:shadow-lg hover:scale-110 transition">
            <div className=" flex flex-col items-center">
                {/* Image */}
                <div
                    className="flex flex-col justify-between p-3 w-full h-64 md:h-84 lg:h-96  bg-cover bg-center rounded-2xl"
                    style={{ backgroundImage: `url(${listing.images[0].image})` }}>
                    <div className="flex justify-between">
                        <Coeur isFavorite={logged ? isFavorite: 0} onClick={() =>toggleFavori(listing.id)} />
                    </div>
                    <Link to={`/detail/${listing.id}`} className="">
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

                    <h1 className="font-bold  text-sm  md:text-xl text-black "> {listing.quartier}, {listing.ville}</h1>
                    <h2 className="text-xs   md:text-base text-bold "> {listing.titre}</h2>
                    <h2 className="text-xs md:text-base text-blue-500 "> {listing.prix} FCFA/mois</h2>
                </div>
                <div className="flex  gap-1">
                    <img src={etoile} className="w-4 h-4 md:w-6 md:h-6 mt-1 " />
                    <h1 className="text-[15px] md:text-[24px] text-black">{note}</h1>
                </div>
            </div>

        </div>
    )
}