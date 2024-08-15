import Ingredient from "../../ingredients/interfaces/Ingredient.interface";

interface Product {
  id: string;
  createdByUserId: string;
  lastEditedByUserId: string;
  createdAt: Date;
  lastEditedAt: Date;
  inci: Ingredient[];
  image1: string;
  image2: string;
  image3: string;
  name: string;
  subName?: string;
  producer: string;
  brand: string;
  subBrand?: string;
  categories: string[];
  subCategories: string[];
  ean: number;
  volumes: number[];
  volumesUnit: string;
  vegan: boolean;
  crueltyFree: boolean;
  description: string;
  howToUse: string;
  numberOfReviews: number;
  rating: number;
}

export default Product;
