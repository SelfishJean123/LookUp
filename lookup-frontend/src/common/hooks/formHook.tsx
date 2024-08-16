import { useCallback, useReducer } from "react";

const formReducer = (state: any, action: any) => {
  let formIsValid = true;
  for (const inputId in state.inputs) {
    if (!state.inputs[inputId]) {
      continue;
    }
    if (inputId === action.inputId) {
      formIsValid = formIsValid && action.isValid;
    } else {
      formIsValid = formIsValid && state.inputs[inputId].isValid;
    }
  }
  return {
    ...state,
    inputs: {
      ...state.inputs,
      [action.inputId]: { value: action.value, isValid: action.isValid },
    },
    isValid: formIsValid,
  };
};

export const useForm = (initialInputs: any, initialFormValidity: any) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback((id: string, value: string | number | [], isValid: boolean) => {
    dispatch({
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  return [formState, inputHandler];
};
