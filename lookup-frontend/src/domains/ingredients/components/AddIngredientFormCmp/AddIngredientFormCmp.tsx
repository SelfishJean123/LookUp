import AutocompleteChipsCmp from "../../../../common/components/inputs/AutocompleteChipsCmp/AutocompleteChipsCmp";
import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import SelectInputCmp from "../../../../common/components/inputs/SelectInputCmp/SelectInputCmp";
import TextInputCmp from "../../../../common/components/inputs/TextInputCmp/TextInputCmp";
import { FC } from "react";
import "./AddIngredientFormCmp.scss";

interface AddIngredientFormCmpProps {
  close: () => void;
}

const AddIngredientFormCmp: FC<AddIngredientFormCmpProps> = ({ close }) => {
  const categories = [
    { value: "0011", name: "The Shawshank Redemption" },
    { value: "0012", name: "The Godfather" },
    { value: "0013", name: "The Godfather: Part II" },
    { value: "0014", name: "The Dark Knight" },
    { value: "0014", name: "12 Angry Men" },
    { value: "0015", name: "Schindler's List" },
    { value: "0016", name: "Pulp Fiction" },
  ];

  const subcategories = [
    { value: "0011", name: "The Shawshank Redemption" },
    { value: "0012", name: "The Godfather" },
    { value: "0013", name: "The Godfather: Part II" },
    { value: "0014", name: "The Dark Knight" },
    { value: "0014", name: "12 Angry Men" },
    { value: "0015", name: "Schindler's List" },
    { value: "0016", name: "Pulp Fiction" },
  ];

  const origins = [
    { value: "0011", name: "The Shawshank Redemption" },
    { value: "0012", name: "The Godfather" },
    { value: "0013", name: "The Godfather: Part II" },
    { value: "0014", name: "The Dark Knight" },
    { value: "0014", name: "12 Angry Men" },
    { value: "0015", name: "Schindler's List" },
    { value: "0016", name: "Pulp Fiction" },
  ];

  const forms = [
    { value: "0011", name: "The Shawshank Redemption" },
    { value: "0012", name: "The Godfather" },
    { value: "0013", name: "The Godfather: Part II" },
    { value: "0014", name: "The Dark Knight" },
    { value: "0014", name: "12 Angry Men" },
    { value: "0015", name: "Schindler's List" },
    { value: "0016", name: "Pulp Fiction" },
  ];

  return (
    <form className="add-ingredient-form-component">
      <TextInputCmp id="name-polish" label="Name (Polish)" required={true} width={100} />
      <TextInputCmp id="name-english" label="Name (English)" required={true} width={100} />
      <TextInputCmp id="name-latin" label="Name (Latin)" required={true} width={100} />

      <AutocompleteChipsCmp id="categories" label="Categories" options={categories} width={100} />
      <AutocompleteChipsCmp id="subcategories" label="Sub categories" options={subcategories} width={100} />
      <AutocompleteChipsCmp id="origins" label="Origins" options={origins} width={100} />
      <AutocompleteChipsCmp id="forms" label="Forms" options={forms} width={100} />

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
      />

      <TextInputCmp id="description" label="Description" required={true} multiline={true} maxRows={20} width={100} />
      <TextInputCmp id="concerns" label="Concerns" required={true} multiline={true} maxRows={20} width={100} />

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
  );
};

export default AddIngredientFormCmp;
