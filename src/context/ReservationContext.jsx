import React, { createContext, useState } from 'react';

export const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const [reservations, setReservations] = useState([]);

  const addReservation = (property) => {
    // Éviter les doublons
    const exists = reservations.some(res => res.id === property.id);
    if (!exists) {
      setReservations([...reservations, { ...property, reservedDate: new Date().toLocaleDateString('fr-FR') }]);
    }
  };

  const removeReservation = (id) => {
    setReservations(reservations.filter(res => res.id !== id));
  };

  return (
    <ReservationContext.Provider value={{ reservations, addReservation, removeReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}
