import { useState } from "react";
import type { IAnimal } from "../models/IAnimal";
import placeholder from "../assets/placeholder.png";
import React from "react";

interface Props {
  animal: IAnimal;
}

const AnimalDetails = ({ animal }: Props) => {
  const [currentAnimal, setCurrentAnimal] = useState<IAnimal>(animal);

  const lastFed = new Date(currentAnimal.lastFed);
  const hoursSinceFed = (Date.now() - lastFed.getTime()) / (1000 * 60 * 60);

  const isHungrySoon = hoursSinceFed >= 3 && hoursSinceFed < 4;
  const canBeFed = hoursSinceFed >= 4;

  const status =
    hoursSinceFed >= 5 ? "desperat" : hoursSinceFed >= 3 ? "hungrig" : "mätt";

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = placeholder;
  };

  const handleFeed = () => {
    const updatedAnimal = {
      ...currentAnimal,
      isFed: true,
      lastFed: new Date().toISOString(),
    };

    const stored = localStorage.getItem("animals");
    if (stored) {
      const animals: IAnimal[] = JSON.parse(stored);
      const updatedList = animals.map((a) =>
        a.id === updatedAnimal.id ? updatedAnimal : a
      );
      localStorage.setItem("animals", JSON.stringify(updatedList));
    }

    setCurrentAnimal(updatedAnimal);
  };

  return (
    <div className="animal-details p-4">
      <h2 className="text-2xl font-bold">{currentAnimal.name}</h2>
      <img
        src={currentAnimal.imageUrl}
        onError={handleImgError}
        alt={currentAnimal.name}
        className="w-full max-w-md my-4"
      />

      <p>
        <strong>Art:</strong> {currentAnimal.latinName}
      </p>
      <p className="mb-2">{currentAnimal.longDescription}</p>

      <p>
        <strong>Status:</strong> {status}
      </p>
      {isHungrySoon && (
        <p className="text-yellow-600">⚠️Djuret börjar bli hungrigt...⚠️</p>
      )}

      <p>
        <strong>Senast matad:</strong>{" "}
        {new Date(currentAnimal.lastFed).toLocaleString()}
      </p>
      <p>
        <strong>Nästa matning:</strong>{" "}
        {new Date(
          new Date(currentAnimal.lastFed).getTime() + 4 * 60 * 60 * 1000
        ).toLocaleString()}
      </p>

      <button
        onClick={handleFeed}
        disabled={!canBeFed}
        className={`mt-4 px-4 py-2 rounded ${
          canBeFed
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-gray-400 cursor-not-allowed text-white"
        }`}
      >
        {canBeFed ? "Mata djuret" : "Djuret är nyligen matat"}
      </button>
    </div>
  );
};

export default AnimalDetails;
