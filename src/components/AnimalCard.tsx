import type { IAnimal } from "../models/IAnimal";
import StatusTag from "./StatusTag";
import { Link } from "react-router-dom";
import React from "react";
import placeholder from "../assets/placeholder.png";

interface Props {
  animal: IAnimal;
}

const AnimalCard = ({ animal }: Props) => {
  const getStatus = () => {
    const lastFed = new Date(animal.lastFed);
    const hoursSinceFed = (Date.now() - lastFed.getTime()) / (1000 * 60 * 60);
    if (hoursSinceFed >= 5) return "desperat";
    if (hoursSinceFed >= 3) return "hungrig";
    return "mätt";
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.log("Bilden kunde inte laddas - visar placeholder");
    e.currentTarget.src = placeholder;
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-2">{animal.name}</h2>
      <img
        className="w-full h-60 object-cover"
        src={animal.imageUrl}
        alt={animal.name}
        onError={handleImgError}
      />
      <p className="text-gray-700 italic mt-2">{animal.latinName}</p>
      <p className="text-gray-800 mt-1">{animal.shortDescription}</p>
      <div className="mt-2">
        <StatusTag status={getStatus()} />
      </div>
      <Link to={`/animal/${animal.id}`}>
        <button className="mt-4 w-full bg-[#47240b] text-white py-1 px-3 rounded">
          Visa mer info
        </button>
      </Link>
    </div>
  );
};

export default AnimalCard;
