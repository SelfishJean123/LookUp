import ChipButtonCmp from "../../buttons/ChipButtonCmp/ChipButtonCmp";
import IconButtonCmp from "../IconButtonCmp/IconButtonCmp";
import NumberInputCmp from "../NumberInputCmp/NumberInputCmp";
import Option from "../../../interfaces/Option.interface";
import Stack from "@mui/material/Stack";
import { AddSharp } from "@mui/icons-material";
import { FC, useState } from "react";
import "./TagsCmp.scss";

interface TagsCmpProps {
  id: string;
  label: string;
  width: number;
  input: (id: string, value: Option[]) => void;
}

const TagsCmp: FC<TagsCmpProps> = ({ id, label, width, input }) => {
  const [inputValue, setInputValue] = useState<number | undefined>(undefined);
  const [tags, setTags] = useState<Option[]>([]);

  const inputHandler = (id: string, value: number) => {
    const newValue = value;
    setInputValue(newValue);
  };

  const handleAddition = () => {
    inputValue && setTags([...tags, { value: inputValue, name: inputValue.toString() }]);
    input(id, tags);
    setInputValue(undefined);
  };

  return (
    <div className="tags-component" style={{ width: width < 100 ? `calc(${width}% - 5px)` : `${width}%` }}>
      <Stack direction="row" spacing={4}>
        {tags.map((tagItem, index) => {
          return (
            <ChipButtonCmp
              key={index}
              label={tagItem.name}
              component="p"
              variant="filled"
              onDelete={() => setTags(tags.filter((tag) => tag.name !== tagItem.name))}
            />
          );
        })}
      </Stack>

      <div className="tags-input">
        <NumberInputCmp id={id} label={label} required={false} width={100} input={inputHandler} />
        <IconButtonCmp icon={<AddSharp />} onClick={handleAddition} />
      </div>
    </div>
  );
};

export default TagsCmp;
