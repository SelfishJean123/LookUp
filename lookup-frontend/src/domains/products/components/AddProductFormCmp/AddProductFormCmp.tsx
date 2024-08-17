import AutocompleteChipsCmp from "../../../../common/components/inputs/AutocompleteChipsCmp/AutocompleteChipsCmp";
import ImagePickerCmp from "../../../../common/components/inputs/ImagePickerCmp/ImagePickerCmp";
import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import NumberInputCmp from "../../../../common/components/inputs/NumberInputCmp/NumberInputCmp";
import Option from "../../../../common/interfaces/Option.interface";
import ProgressSpinnerCmp from "../../../../common/components/modals/ProgressSpinnerCmp/ProgressSpinnerCmp";
import SelectInputCmp from "../../../../common/components/inputs/SelectInputCmp/SelectInputCmp";
import SignContext from "../../../../common/contexts/SignContext";
import SnackBarCmp from "../../../../common/components/modals/SnackBarCmp/SnackBarCmp";
import TagsCmp from "../../../../common/components/inputs/TagsCmp/TagsCmp";
import TextInputCmp from "../../../../common/components/inputs/TextInputCmp/TextInputCmp";
import { FC, useContext } from "react";
import { useForm } from "../../../../common/hooks/formHook";
import { useHttpClient } from "../../../../common/hooks/httpClientHook";
import { useNavigate } from "react-router-dom";
import "./AddProductFormCmp.scss";

interface AddProductFormCmpProps {
  close: () => void;
}

const AddProductFormCmp: FC<AddProductFormCmpProps> = ({ close }) => {
  const categories: Option[] = [
    { value: "wash", name: "wash" },
    { value: "care", name: "care" },
    { value: "stylization", name: "stylization" },
    { value: "hair-removal", name: "hair-removal" },
    { value: "tools", name: "tools" },
    { value: "storage", name: "storage" },
  ];

  const subCategories: Option[] = [
    { value: "face", name: "face" },
    { value: "eyes", name: "eyes" },
    { value: "lips", name: "lips" },
    { value: "body", name: "body" },
    { value: "hands", name: "hands" },
    { value: "feet", name: "feet" },
    { value: "hair", name: "hair" },
    { value: "nails", name: "nails" },
  ];

  const volumes: Option[] = [
    { value: "1", name: "1" },
    { value: "5", name: "5" },
    { value: "10", name: "10" },
    { value: "15", name: "15" },
    { value: "20", name: "20" },
    { value: "30", name: "30" },
    { value: "40", name: "40" },
    { value: "50", name: "50" },
    { value: "60", name: "60" },
    { value: "75", name: "75" },
    { value: "100", name: "100" },
    { value: "200", name: "200" },
  ];

  const ingredients: Option[] = [
    { value: "0011", name: "Aqua" },
    { value: "0012", name: "Godfather" },
    { value: "0013", name: "Godfather Part II" },
    { value: "0014", name: "Dark Knight" },
    { value: "0014", name: "12 Angry Men" },
    { value: "0015", name: "Schindler List" },
    { value: "0016", name: "Fiction" },
  ];

  const navigate = useNavigate();
  const signContext = useContext(SignContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      inci: {
        value: [],
        isValid: false,
      },
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
      name: {
        value: "",
        isValid: false,
      },
      subName: {
        value: "",
        isValid: false,
      },
      producer: {
        value: "",
        isValid: false,
      },
      brand: {
        value: "",
        isValid: false,
      },
      subBrand: {
        value: "",
        isValid: false,
      },
      categories: {
        value: [],
        isValid: false,
      },
      subCategories: {
        value: [],
        isValid: false,
      },
      ean: {
        value: 0,
        isValid: false,
      },
      volumes: {
        value: [],
        isValid: false,
      },
      volumesUnit: {
        value: "",
        isValid: false,
      },
      vegan: {
        value: false,
        isValid: false,
      },
      crueltyFree: {
        value: false,
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      howToUse: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const addProductSubmitHandler = async (event: any) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        "http://localhost:5000/api/products",
        "POST",
        JSON.stringify({
          createdByUserId: signContext.userId,
          inci: formState.inputs.inci.value,
          image1: formState.inputs.image1.value,
          image2: formState.inputs.image2.value,
          image3: formState.inputs.image3.value,
          name: formState.inputs.name.value,
          subName: formState.inputs.subName.value,
          producer: formState.inputs.producer.value,
          brand: formState.inputs.brand.value,
          subBrand: formState.inputs.subBrand.value,
          categories: formState.inputs.categories.value,
          subCategories: formState.inputs.subCategories.value,
          ean: formState.inputs.ean.value,
          volumes: formState.inputs.volumes.value,
          volumesUnit: formState.inputs.volumesUnit.value,
          vegan: formState.inputs.vegan.value,
          crueltyFree: formState.inputs.crueltyFree.value,
          description: formState.inputs.description.value,
          howToUse: formState.inputs.howToUse.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      navigate(`/products-catalogue/${responseData.product.id}`);
    } catch (err) {}
  };

  return (
    <>
      {error && (
        <SnackBarCmp isSnackBarOpen={!!error} message={error} severity="error" variant="filled" onClear={clearError} />
      )}
      <form className="add-product-form-component" onSubmit={addProductSubmitHandler}>
        {isLoading && <ProgressSpinnerCmp asOverlay />}
        <TextInputCmp id="name" label="Name" required={true} width={100} input={inputHandler} />
        <TextInputCmp id="subName" label="Sub name" required={true} width={100} input={inputHandler} />
        <TextInputCmp id="producer" label="Producer" required={true} width={100} input={inputHandler} />
        <TextInputCmp id="brand" label="Brand" required={true} width={100} input={inputHandler} />
        <TextInputCmp id="subBrand" label="Sub brand" required={true} width={100} input={inputHandler} />
        <AutocompleteChipsCmp
          id="categories"
          label="Categories"
          options={categories}
          width={100}
          input={inputHandler}
        />
        <AutocompleteChipsCmp
          id="subCategories"
          label="SubCategories"
          options={subCategories}
          width={100}
          input={inputHandler}
        />
        <NumberInputCmp id="ean" label="EAN" required={true} width={100} input={inputHandler} />
        <TagsCmp id="volumes" label="Volumes" suggestions={volumes} width={75} input={inputHandler} />
        <SelectInputCmp
          id="volumesUnit"
          label="Unit"
          required={true}
          options={[
            { value: "ml", name: "ml" },
            { value: "g", name: "g" },
          ]}
          width={25}
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
        <SelectInputCmp
          id="crueltyFree"
          label="Cruelty free"
          required={true}
          options={[
            { value: "yes", name: "YES" },
            { value: "no", name: "NO" },
          ]}
          width={100}
          input={inputHandler}
        />
        <AutocompleteChipsCmp id="inci" label="INCI" options={ingredients} width={100} input={inputHandler} />
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
          id="howToUse"
          label="How to use"
          required={true}
          multiline={true}
          maxRows={20}
          width={100}
          input={inputHandler}
        />

        <ImagePickerCmp
          id="image1"
          label="Primary Image"
          hintText="Pick an image"
          required={true}
          width={33.333}
          input={inputHandler}
        />
        <ImagePickerCmp
          id="image2"
          label="Secondary Image"
          hintText="Pick an image"
          required={false}
          width={33.333}
          input={inputHandler}
        />
        <ImagePickerCmp
          id="image3"
          label="Tertiary Image"
          hintText="Pick an image"
          required={false}
          width={33.333}
          input={inputHandler}
        />

        <div className="add-product-form-buttons">
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
            label="Add Product"
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

export default AddProductFormCmp;
