import Option from "../../../common/interfaces/Option.interface";

interface Ingredient {
  id: string;
  createdByUserId: string;
  lastEditedByUserId: string;
  createdAt: Date;
  lastEditedAt: Date;
  image1: string;
  image2?: string;
  image3?: string;
  nameLatin: string;
  namePolish: string;
  nameEnglish: string;
  categories: Option[];
  origin: Option[];
  forms: Option[];
  potentiallyAllergenic?: boolean;
  pregnancySafe?: boolean;
  vegan?: boolean;
  description: string;
  concerns: string;
}

export default Ingredient;
