
export interface IAnimal {
    id: number;
    name: string;
    latinName: string;
    yearOfBirth: number;
    shortDescription: string;
    longDescription: string;
    imageUrl: string;
    medicine: string | null;
    isFed: boolean;
    lastFed: string;
  }