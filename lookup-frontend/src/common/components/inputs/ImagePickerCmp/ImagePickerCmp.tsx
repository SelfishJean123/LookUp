import LabelIconButton from "../../buttons/LabelIconButtonCmp/LabelIconButtonCmp";
import { DriveFolderUploadSharp } from "@mui/icons-material";
import { FC, useEffect, useRef, useState } from "react";
import "./ImagePickerCmp.scss";

interface ImagePickerCmpProps {
  id: string;
  label: string;
  hintText: string;
  required: boolean;
  width: number;
  input: (id: string, value: string, isValid: boolean) => void;
}

const ImagePickerCmp: FC<ImagePickerCmpProps> = ({ id, label, hintText, required, width, input }) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState<any>();
  const [isValid, setIsValid] = useState<boolean>(false);
  const imagePickerRef: any = useRef();

  useEffect(() => {
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const onChangeHandler = (event: any) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }

    input(id, pickedFile, fileIsValid);
  };

  const onClickHandler = () => {
    imagePickerRef.current.click();
  };

  return (
    <div className="image-picker-component" style={{ width: width < 100 ? `calc(${width}% - 5px)` : `${width}%` }}>
      <input
        className="image-input"
        ref={imagePickerRef}
        id={id}
        type="file"
        accept=".jpg, .jpeg, .png"
        required={required}
        onChange={onChangeHandler}
      />

      <div className="image-picker">
        <LabelIconButton
          label={label}
          icon={<DriveFolderUploadSharp />}
          iconPosition="start"
          color="#1976d2"
          bgColor="#fff"
          hoverBgColor="#f1f1f1"
          type="button"
          variant="outlined"
          onClick={onClickHandler}
        />

        <div className="image-picker-preview">
          {previewUrl && <img src={previewUrl} alt="Preview" />}
          {!previewUrl && <p>{hintText}</p>}
        </div>
      </div>
    </div>
  );
};

export default ImagePickerCmp;
