import { createPortal } from "react-dom";
import Places from "./Places.jsx";
import { useState, useEffect, useRef, useImperativeHandle } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}




