import { useParams } from "react-router-dom";
import AnimalDetails from "../components/AnimalDetails";
import type { IAnimal } from "../models/IAnimal";
import React from "react";

const Animal = () => {
  const { id } = useParams();
  const animals: IAnimal[] = JSON.parse(
    localStorage.getItem("animals") || "[]"
  );
  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) return <p>Djur hittades inte.</p>;

  return <AnimalDetails animal={animal} />;
};

export default Animal;
