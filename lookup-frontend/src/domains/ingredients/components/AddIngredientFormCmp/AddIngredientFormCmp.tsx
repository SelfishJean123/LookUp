import AutocompleteChipsCmp from "../../../../common/components/inputs/AutocompleteChipsCmp/AutocompleteChipsCmp";
import ImagePickerCmp from "../../../../common/components/inputs/ImagePickerCmp/ImagePickerCmp";
import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import Option from "../../../../common/interfaces/Option.interface";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SignContext from "../../../../common/contexts/SignContext";
import SingleSelectInputCmp from "../../../../common/components/inputs/SingleSelectInputCmp/SingleSelectInputCmp";
import SnackBarCmp from "../../../../common/components/modals/SnackBarCmp/SnackBarCmp";
import TextInputCmp from "../../../../common/components/inputs/TextInputCmp/TextInputCmp";
import { FC, useContext } from "react";
import { useForm } from "../../../../common/hooks/formHook";
import { useHttpClient } from "../../../../common/hooks/httpClientHook";
import { useNavigate } from "react-router-dom";
import "./AddIngredientFormCmp.scss";

interface AddIngredientFormCmpProps {
  close: () => void;
}

const AddIngredientFormCmp: FC<AddIngredientFormCmpProps> = ({ close }) => {
  const categories: Option[] = [
    { value: "emollients", name: "emollients" },
    { value: "humectants", name: "humectants" },
    { value: "active-substances", name: "active substances" },
    { value: "preservatives", name: "preservatives" },
    { value: "emulsifiers", name: "emulsifiers" },
    { value: "colorants", name: "colorants" },
    { value: "fragrances", name: "fragrances" },
    { value: "sunscreens", name: "sunscreens" },
    { value: "surfactants", name: "surfactants" },
    { value: "antioxidants", name: "antioxidants" },
    { value: "film-formers", name: "film formers" },
  ];

  const origin: Option[] = [
    { value: "plant", name: "plant" },
    { value: "animal", name: "animal" },
    { value: "mineral", name: "mineral" },
    { value: "synthetic", name: "synthetic" },
    { value: "biotechnological", name: "biotechnological" },
  ];

  const forms: Option[] = [
    { value: "liquid", name: "liquid" },
    { value: "powder", name: "powder" },
    { value: "gel", name: "gel" },
    { value: "paste", name: "paste" },
    { value: "solid", name: "solid" },
    { value: "aerosol", name: "aerosol" },
    { value: "solution", name: "solution" },
    { value: "emulsion", name: "emulsion" },
    { value: "granules", name: "granules" },
    { value: "foam", name: "foam" },
  ];

  const signContext = useContext(SignContext);
  const navigate = useNavigate();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      image1: {
        value: null,
        isValid: false,
      },
      image2: {
        value: null,
        isValid: false,
      },
      image3: {
        value: null,
        isValid: false,
      },
      nameLatin: {
        value: "",
        isValid: false,
      },
      namePolish: {
        value: "",
        isValid: false,
      },
      nameEnglish: {
        value: "",
        isValid: false,
      },
      categories: {
        value: [],
        isValid: false,
      },
      origin: {
        value: [],
        isValid: false,
      },
      forms: {
        value: [],
        isValid: false,
      },
      potentiallyAllergenic: {
        value: false,
        isValid: false,
      },
      pregnancySafe: {
        value: false,
        isValid: false,
      },
      vegan: {
        value: false,
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      concerns: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const addIngredientSubmitHandler = async (event: any) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      if (signContext.userId) formData.append("createdByUserId", signContext.userId);
      formData.append("image1", formState.inputs.image1.value);
      formData.append("image2", formState.inputs.image2.value);
      formData.append("image3", formState.inputs.image3.value);
      formData.append("nameLatin", formState.inputs.nameLatin.value);
      formData.append("namePolish", formState.inputs.namePolish.value);
      formData.append("nameEnglish", formState.inputs.nameEnglish.value);
      formData.append("categories", JSON.stringify(formState.inputs.categories.value));
      formData.append("origin", JSON.stringify(formState.inputs.origin.value));
      formData.append("forms", JSON.stringify(formState.inputs.forms.value));
      formData.append("potentiallyAllergenic", formState.inputs.potentiallyAllergenic.value);
      formData.append("vegan", formState.inputs.vegan.value);
      formData.append("description", formState.inputs.description.value);
      formData.append("concerns", formState.inputs.concerns.value);

      const responseData = await sendRequest("http://localhost:5000/api/ingredients/addIngredient", "POST", formData);
      navigate(`/inci-encyclopedia/${responseData.ingredient.id}`);
    } catch (err) {}
  };

  return (
    <>
      {error && (
        <SnackBarCmp isSnackBarOpen={!!error} message={error} severity="error" variant="filled" onClear={clearError} />
      )}
      <form className="add-ingredient-form-component" onSubmit={addIngredientSubmitHandler}>
        {isLoading && <ProgressSpinnerCmp asOverlay />}
        <TextInputCmp id="namePolish" label="Name (Polish)" required={true} width={100} input={inputHandler} />
        <TextInputCmp id="nameEnglish" label="Name (English)" required={true} width={100} input={inputHandler} />
        <TextInputCmp id="nameLatin" label="Name (Latin)" required={true} width={100} input={inputHandler} />

        <AutocompleteChipsCmp
          id="categories"
          label="Categories"
          options={categories}
          width={100}
          input={inputHandler}
        />
        <AutocompleteChipsCmp id="origin" label="Origin" options={origin} width={100} input={inputHandler} />
        <AutocompleteChipsCmp id="forms" label="Forms" options={forms} width={100} input={inputHandler} />

        <SingleSelectInputCmp
          id="potentiallyAllergenic"
          label="Potentially allergenic"
          required={true}
          options={[
            { value: "yes", name: "YES" },
            { value: "no", name: "NO" },
            { value: "no-data", name: "NO DATA" },
          ]}
          width={100}
          input={inputHandler}
        />

        <SingleSelectInputCmp
          id="pregnancySafe"
          label="Pregnancy safe"
          required={true}
          options={[
            { value: "yes", name: "YES" },
            { value: "no", name: "NO" },
            { value: "no-data", name: "NO DATA" },
          ]}
          width={100}
          input={inputHandler}
        />

        <SingleSelectInputCmp
          id="vegan"
          label="Vegan"
          required={true}
          options={[
            { value: "yes", name: "YES" },
            { value: "no", name: "NO" },
          ]}
          width={100}
          input={inputHandler}
        />

        <TextInputCmp
          id="description"
          label="Description"
          required={true}
          multiline={true}
          maxRows={20}
          width={100}
          input={inputHandler}
        />
        <TextInputCmp
          id="concerns"
          label="Concerns"
          required={true}
          multiline={true}
          maxRows={20}
          width={100}
          input={inputHandler}
        />

        <ImagePickerCmp
          id="image1"
          label="Image 1"
          hintText="Pick an image"
          required={true}
          width={33.333}
          input={inputHandler}
        />
        <ImagePickerCmp
          id="image2"
          label="Image 2"
          hintText="Pick an image"
          required={false}
          width={33.333}
          input={inputHandler}
        />
        <ImagePickerCmp
          id="image3"
          label="Image 3"
          hintText="Pick an image"
          required={false}
          width={33.333}
          input={inputHandler}
        />

        <div className="add-ingredient-form-buttons">
          <LabelIconButton
            label="Close"
            color="#fff"
            bgColor="#387323"
            hoverBgColor="#124500"
            type="button"
            variant="contained"
            onClick={close}
          />
          <LabelIconButton
            label="Add Ingredient"
            color="#fff"
            bgColor="#387323"
            hoverBgColor="#124500"
            type="submit"
            variant="contained"
            onClick={() => {}}
          />
        </div>
      </form>
    </>
  );
};

export default AddIngredientFormCmp;
