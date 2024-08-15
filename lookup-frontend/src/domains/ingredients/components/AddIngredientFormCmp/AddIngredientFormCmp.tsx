import AutocompleteChipsCmp from "../../../../common/components/inputs/AutocompleteChipsCmp/AutocompleteChipsCmp";
import IngredientCategorie from "../../interfaces/IngredientCategorie.interface";
import IngredientForm from "../../interfaces/IngredientForm.interface";
import IngredientOrigin from "../../interfaces/IngredientOrigin.interface";
import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SelectInputCmp from "../../../../common/components/inputs/SelectInputCmp/SelectInputCmp";
import SignContext from "../../../../common/contexts/SignContext";
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
  const categories: IngredientCategorie[] = [
    { value: "emollients", name: "emollients" },
    { value: "humectants", name: "humectants" },
    { value: "active-substances", name: "active-substances" },
    { value: "preservatives", name: "preservatives" },
    { value: "emulsifiers", name: "emulsifiers" },
    { value: "colorants", name: "colorants" },
    { value: "fragrances", name: "fragrances" },
    { value: "sunscreens", name: "sunscreens" },
    { value: "surfactants", name: "surfactants" },
    { value: "antioxidants", name: "antioxidants" },
    { value: "film-formers", name: "film-formers" },
  ];

  const origin: IngredientOrigin[] = [
    { value: "plant", name: "plant" },
    { value: "animal", name: "animal" },
    { value: "mineral", name: "mineral" },
    { value: "synthetic", name: "synthetic" },
    { value: "biotechnological", name: "biotechnological" },
  ];

  const forms: IngredientForm[] = [
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
  // const navigate = useNavigate();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      image1: {
        value: "",
        isValid: false,
      },
      image2: {
        value: "",
        isValid: false,
      },
      image3: {
        value: "",
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
      const responseData = await sendRequest(
        "http://localhost:5000/api/ingredient",
        "POST",
        JSON.stringify({
          createdByUserId: signContext.userId,
          image1: formState.inputs.image1.value,
          image2: formState.inputs.image2.value,
          image3: formState.inputs.image3.value,
          nameLatin: formState.inputs.nameLatin.value,
          namePolish: formState.inputs.namePolish.value,
          nameEnglish: formState.inputs.nameEnglish.value,
          categories: formState.inputs.categories,
          origin: formState.inputs.origin,
          forms: formState.inputs.forms,
          potentiallyAllergenic: formState.inputs.potentiallyAllergenic.value,
          pregnancySafe: formState.inputs.pregnancySafe.value,
          vegan: formState.inputs.vegan.value,
          description: formState.inputs.description.value,
          concerns: formState.inputs.concerns.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log(responseData);
      // navigate('/');
    } catch (err) {}
  };

  return (
    <>
      {error && (
        <SnackBarCmp isSnackBarOpen={!!error} message={error} severity="error" variant="filled" onClear={clearError} />
      )}
      <form className="add-ingredient-form-component" onSubmit={addIngredientSubmitHandler}>
        {isLoading && <ProgressSpinnerCmp asOverlay />}
        <TextInputCmp id="name-polish" label="Name (Polish)" required={true} width={100} input={inputHandler} />
        <TextInputCmp id="name-english" label="Name (English)" required={true} width={100} input={inputHandler} />
        <TextInputCmp id="name-latin" label="Name (Latin)" required={true} width={100} input={inputHandler} />

        <AutocompleteChipsCmp
          id="categories"
          label="Categories"
          options={categories}
          width={100}
          input={inputHandler}
        />
        <AutocompleteChipsCmp id="origin" label="Origin" options={origin} width={100} input={inputHandler} />
        <AutocompleteChipsCmp id="forms" label="Forms" options={forms} width={100} input={inputHandler} />

        <SelectInputCmp
          id="potentially-allergenic"
          label="Potentially allergenic"
          required={true}
          options={[
            { value: "yes", name: "YES" },
            { value: "no", name: "NO" },
            { value: "no data", name: "NO DATA" },
          ]}
          width={100}
          input={inputHandler}
        />

        <SelectInputCmp
          id="pregnancy-safe"
          label="Pregnancy safe"
          required={true}
          options={[
            { value: "yes", name: "YES" },
            { value: "no", name: "NO" },
            { value: "no data", name: "NO DATA" },
          ]}
          width={100}
          input={inputHandler}
        />

        <SelectInputCmp
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

        {/* img
      img
      img */}

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
