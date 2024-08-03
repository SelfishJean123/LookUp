import LabelIconButton from "../../../../common/components/buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import NumberInputCmp from "../../../../common/components/inputs/NumberInputCmp/NumberInputCmp";
import SelectInputCmp from "../../../../common/components/inputs/SelectInputCmp/SelectInputCmp";
import TextInputCmp from "../../../../common/components/inputs/TextInputCmp/TextInputCmp";

const AddProductFormCmp = () => {
  return (
    <form className="add-product-form-component">
      <TextInputCmp id="name" label="Name" required={true} />
      <TextInputCmp id="subname" label="Sub name" required={true} />
      <TextInputCmp id="producer" label="Producer" required={true} />
      <TextInputCmp id="brand" label="Brand" required={true} />
      <TextInputCmp id="subbrand" label="Sub brand" required={true} />

      <SelectInputCmp
        id="category"
        label="Category"
        required={true}
        options={[
          { value: 10, name: "face cream" },
          { value: 12, name: "hand cream" },
          { value: 14, name: "body cream" },
        ]}
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
      />

      <NumberInputCmp id="ean" label="EAN" required={true} />

      <NumberInputCmp id="volume" label="Volume" required={true} />
      <SelectInputCmp
        id="volume-unit"
        label="Unit"
        required={true}
        options={[
          { value: "ml", name: "ml" },
          { value: "g", name: "g" },
        ]}
      />

      <NumberInputCmp id="price" label="Price" required={true} />
      <SelectInputCmp
        id="currency"
        label="Currency"
        required={true}
        options={[
          { value: "PLN", name: "PLN" },
          { value: "CZK", name: "CZK" },
          { value: "USD", name: "USD" },
        ]}
      />

      <SelectInputCmp
        id="vegan"
        label="Vegan"
        required={true}
        options={[
          { value: "yes", name: "YES" },
          { value: "no", name: "NO" },
        ]}
      />

      <SelectInputCmp
        id="cruelty-free"
        label="Cruelty free"
        required={true}
        options={[
          { value: "yes", name: "YES" },
          { value: "no", name: "NO" },
        ]}
      />

      <TextInputCmp id="inci" label="INCI" required={true} />
      <TextInputCmp id="description" label="Description" required={true} multiline={true} maxRows={20} />
      <TextInputCmp id="how-to-use" label="How to use" required={true} multiline={true} maxRows={20} />

      {/* img
      img
      img */}

      <LabelIconButton
        label="Close"
        color="#fff"
        bgColor="#387323"
        hoverBgColor="#124500"
        type="button"
        variant="contained"
        onClick={() => {}}
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
    </form>
  );
};

export default AddProductFormCmp;
