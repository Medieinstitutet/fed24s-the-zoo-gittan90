import { useEffect, useState } from "react";
import type { IAnimal } from "../models/IAnimal";
import { getAnimals } from "../services/animalService";
import AnimalCard from "../components/AnimalCard";
import React from "react";

const OverviewPage = () => {
  const localData = localStorage.getItem("animals");
  const initialAnimals: IAnimal[] = localData ? JSON.parse(localData) : [];

  const [animalList, setAnimalList] = useState<IAnimal[]>(initialAnimals);
  const [isLoadingAnimals, setIsLoadingAnimals] = useState(
    initialAnimals.length === 0
  );

  useEffect(() => {
    if (initialAnimals.length > 0) return;

    const fetchAnimals = async () => {
      try {
        const data = await getAnimals();
        setAnimalList(data);
        localStorage.setItem("animals", JSON.stringify(data));
      } catch (error) {
        console.error("Kunde inte hämta djur", error);
      } finally {
        setIsLoadingAnimals(false);
      }
    };

    fetchAnimals();
  }, []);

  if (isLoadingAnimals) {
    return <div>Laddar djur...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Våra djur</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {animalList.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default OverviewPage;
