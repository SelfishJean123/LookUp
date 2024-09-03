import InciItem from "../../ingredients/interfaces/InciItem.interface";
import Option from "../../../common/interfaces/Option.interface";

interface Product {
  id: string;
  createdByUserId: string;
  lastEditedByUserId: string;
  createdAt: Date;
  lastEditedAt: Date;
  inci: InciItem[];
  image1: string;
  image2?: string;
  image3?: string;
  name: string;
  subName?: string;
  producer: string;
  brand: string;
  subBrand?: string;
  categories: Option[];
  subCategories: Option[];
  ean: number;
  volumes: Option[];
  volumesUnit: string;
  vegan: boolean;
  crueltyFree: boolean;
  description: string;
  howToUse: string;
  numberOfReviews: number;
  rating: number;
}

export default Product;
