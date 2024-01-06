interface Product {
  user: string;
  image: string;
  name: string;
  subname: string;
  brand: string;
  subrand: string;
  category: string;
  subcategory: string;
  ean: number;
  volume: number;
  price: number;
  vegan: "NO" | "YES" | "YES (Vegan TM)";
  crueltyFree: "NO" | "YES" | "YES (PETA)" | "YES (Leaping Bunny)";
  inci: string;
  description: string;
  howToUse: string;
  rating: number;
  numReviews: number;
  createdAt: Date;
  _id: string;
}

export default Product;
