import AutocompleteChipsCmp from "../../../../common/components/inputs/AutocompleteChipsCmp/AutocompleteChipsCmp";
import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import NumberInputCmp from "../../../../common/components/inputs/NumberInputCmp/NumberInputCmp";
import SelectInputCmp from "../../../../common/components/inputs/SelectInputCmp/SelectInputCmp";
import TextInputCmp from "../../../../common/components/inputs/TextInputCmp/TextInputCmp";
import { FC } from "react";
import "./AddProductFormCmp.scss";

interface AddProductFormCmpProps {
  close: () => void;
}

const AddProductFormCmp: FC<AddProductFormCmpProps> = ({ close }) => {
  const ingredients = [
    { value: "0011", name: "The Shawshank Redemption" },
    { value: "0012", name: "The Godfather" },
    { value: "0013", name: "The Godfather: Part II" },
    { value: "0014", name: "The Dark Knight" },
    { value: "0014", name: "12 Angry Men" },
    { value: "0015", name: "Schindler's List" },
    { value: "0016", name: "Pulp Fiction" },
  ];

  return (
    <form className="add-product-form-component">
      <TextInputCmp id="name" label="Name" required={true} width={100} />
      <TextInputCmp id="subname" label="Sub name" required={true} width={100} />
      <TextInputCmp id="producer" label="Producer" required={true} width={100} />
      <TextInputCmp id="brand" label="Brand" required={true} width={100} />
      <TextInputCmp id="subbrand" label="Sub brand" required={true} width={100} />
      <SelectInputCmp
        id="category"
        label="Category"
        required={true}
        options={[
          { value: 10, name: "face cream" },
          { value: 12, name: "hand cream" },
          { value: 14, name: "body cream" },
        ]}
        width={100}
      />
      <SelectInputCmp
        id="subcategory"
        label="Sub category"
        required={true}
        options={[
          { value: 10, name: "face cream" },
          { value: 12, name: "hand cream" },
          { value: 14, name: "body cream" },
        ]}
        width={100}
      />
      <NumberInputCmp id="ean" label="EAN" required={true} width={100} />

      <NumberInputCmp id="volume" label="Volume" required={true} width={75} />
      <SelectInputCmp
        id="volume-unit"
        label="Unit"
        required={true}
        options={[
          { value: "ml", name: "ml" },
          { value: "g", name: "g" },
        ]}
        width={25}
      />

      <NumberInputCmp id="price" label="Price" required={true} width={75} />
      <SelectInputCmp
        id="currency"
        label="Currency"
        required={true}
        options={[
          { value: "PLN", name: "PLN" },
          { value: "CZK", name: "CZK" },
          { value: "USD", name: "USD" },
        ]}
        width={25}
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

      <SelectInputCmp
        id="cruelty-free"
        label="Cruelty free"
        required={true}
        options={[
          { value: "yes", name: "YES" },
          { value: "no", name: "NO" },
        ]}
        width={100}
      />

      <AutocompleteChipsCmp id="inci" label="INCI" options={ingredients} width={100} />

      <TextInputCmp id="description" label="Description" required={true} multiline={true} maxRows={20} width={100} />
      <TextInputCmp id="how-to-use" label="How to use" required={true} multiline={true} maxRows={20} width={100} />
      {/* img
      img
      img */}

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
  );
};

export default AddProductFormCmp;
