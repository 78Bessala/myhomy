import { createContext, useState } from "react";

export const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const [reservations, setReservations] = useState([]);

  const addReservation = (reservation) => {
    setReservations((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...reservation,
      },
    ]);
  };

  return (
    <ReservationContext.Provider value={{ reservations, addReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}
