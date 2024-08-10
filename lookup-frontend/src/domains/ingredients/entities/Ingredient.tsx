interface Ingredient {
  createdByUserId: string;
  lastEditedByUserId: string;
  createdAt: Date;
  lastEditedAt: Date;
  inci: Ingredient[];
  image1: string;
  image2: string;
  image3: string;
  namePolish: string;
  nameEnglish: string;
  nameLatin: string;
  category: string[];
  subcategory: string[];
  origin: string[];
  form: string[];
  potentiallyAllergenic?: boolean;
  pregnancySafe?: boolean;
  vegan?: boolean;
  description: string;
  concerns: { type: String; required: false };
}

export default Ingredient;
