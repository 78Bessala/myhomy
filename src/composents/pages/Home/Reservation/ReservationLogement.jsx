import { useState, useEffect } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { apiRequest } from "../../../../service/api";

export default function ReservationLogement(){
    const {id} = useParams();

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const [listing, setListing] = useState([])

    useEffect(()=>{
        apiRequest(`/listings/logements/${id}`,"GET")
        .then(data => setListing(data))
        .catch(err =>console.error(err))
    }, [id])

    const nights = startDate && endDate ? (new Date(endDate) - new Date(startDate))/(1000 * 60 * 60 * 24):0
    const totalPrice = nights >0 ? nights*listing.prix : 0

    const handleReserve = async () => {
        if(nights<=0){
            setError("Dates invalides")
            return 
        }

        try {
            await apiRequest(
                "/reservation/",
                "POST",
                {
                    logement: listing.id,
                    montant:totalPrice,
                    date_debut: startDate,
                    date_fin: endDate, 
                },
                localStorage.getItem("access")
            );
            alert("Logement réservé avec succès.")
            navigate("/reservation");
        } catch {
            setError("Impossible de réserver ces dates");
        }
    }

    return (
        <div className="bg-white m-4 mx-auto min-h-[50vh] max-w-[70vh] p-6 px-8 rounded shadow space-y-4">
            <h3 className="text-xl font-semibold">Réserver ce logement</h3>

            <div>
                <label className="block text-sm">Date de début</label>
                <input
                type="date"
                className="w-full border p-2 rounded"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                />
            </div>

            <div>
                <label className="block text-sm">Date de fin</label>
                <input
                type="date"
                className="w-full border p-2 rounded"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                />
            </div>

            {nights > 0 && (
                <p className="font-semibold">
                {nights} nuit(s) · {totalPrice} FCFA
                </p>
            )}

            {error && <p className="text-red-500">{error}</p>}

            <button
                onClick={handleReserve}
                className="w-40 items-center bg-blue-500 text-white mt-5 py-2 mx-auto rounded hover:bg-blue-600"
            >
                Réserver
            </button>
        </div>
    );
}