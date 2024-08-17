import Option from "../../../interfaces/Option.interface";
import { FC, useCallback, useState } from "react";
import { ReactTags } from "react-tag-autocomplete";
import "./TagsCmp.scss";
import type { Tag, TagSelected } from "react-tag-autocomplete";

interface TagsCmpProps {
  id: string;
  label: string;
  suggestions: Option[];
  width: number;
  input: (id: string, value: Option[]) => void;
}

const TagsCmp: FC<TagsCmpProps> = ({ id, label, suggestions, width, input }) => {
  const [selectedTags, setSelectedTags] = useState<TagSelected[]>([]);

  const onAddTag = useCallback(
    (newTag: Tag) => {
      const newSelectedTags = [...selectedTags, newTag];
      setSelectedTags(newSelectedTags);
      const selectedOptions: Option[] = newSelectedTags.map((tag) => ({ value: tag.value, name: tag.label } as Option));
      input(id, selectedOptions);
    },
    [selectedTags]
  );

  const onDeleteTag = useCallback(
    (tagIndex: number) => {
      const newSelectedTags = selectedTags.filter((_, i) => i !== tagIndex);
      setSelectedTags(newSelectedTags);
      const selectedOptions: Option[] = newSelectedTags.map((tag) => ({ value: tag.value, name: tag.label } as Option));
      input(id, selectedOptions);
    },
    [selectedTags]
  );

  return (
    <div className="tags-component" style={{ width: width < 100 ? `calc(${width}% - 5px)` : `${width}%` }}>
      <ReactTags
        id={id}
        labelText={label}
        suggestions={suggestions.map((suggestion) => ({ value: suggestion.value, label: suggestion.name } as Tag))}
        selected={selectedTags}
        allowNew={true}
        placeholderText={label}
        onAdd={onAddTag}
        onDelete={onDeleteTag}
      />
    </div>
  );
};

export default TagsCmp;
