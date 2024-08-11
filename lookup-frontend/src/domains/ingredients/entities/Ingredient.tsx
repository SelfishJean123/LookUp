interface Ingredient {
  id: string;
  createdByUserId: string;
  lastEditedByUserId: string;
  createdAt: Date;
  lastEditedAt: Date;
  image1: string;
  image2: string;
  image3: string;
  nameLatin: string;
  namePolish: string;
  nameEnglish: string;
  categories: string[];
  subCategories: string[];
  origin: string[];
  forms: string[];
  potentiallyAllergenic?: boolean;
  pregnancySafe?: boolean;
  vegan?: boolean;
  description: string;
  concerns: string;
}

export default Ingredient;
