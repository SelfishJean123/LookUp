import Ingredient from "../../ingredients/entities/Ingredient";

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
  subname?: string;
  producer: string;
  brand: string;
  subbrand?: string;
  category: string[];
  subcategory: string[];
  ean: number;
  volumes: number[];
  vegan: boolean;
  crueltyFree: boolean;
  description: string;
  howToUse: string;
  numberOfReviews: number;
  rating: number;
}

export default Product;
