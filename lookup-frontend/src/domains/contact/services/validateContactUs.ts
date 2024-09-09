import { validateEmail, validateMessage, validateName } from "../../../common/validations/validators"

const validate = ({email, message, name}: {email: string, message: string, name: string}): Map<string, string> => {
    const errors = new Map();
  
    const emailError = validateEmail(email);
    if (emailError) {
        errors.set("email", emailError);
    }

    const messageError = validateMessage(message);
    if (messageError) {
        errors.set("message", messageError);
    }

    const nameError = validateName(name);
    if (nameError) {
        errors.set("name", nameError);
    }

    return errors;
}

export default validate;
