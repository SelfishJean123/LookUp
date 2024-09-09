import { sendMail } from "../../../thirdParties/mailExpress"
import { useState } from "react";
import validate from "./validateContactUs";




const useSendEmail =  (): {send: any, errors: any, setData: any, values: any}  => {
    const [errors, setErrors] = useState<null | Map<string, string>>(null);
    const [values, setValues] = useState({email: "", message: "", name: ""});

    const setData = (e) => {
        setValues(x => ({...x, [e.target.name]: e.target.value}));
    }
    const send = async (e: any): Promise<void> => {
        e.preventDefault();
        const errors = validate(values);
        if(errors.size > 0) {
            setErrors(errors);
            return;
        }
        await sendMail(values);

        setErrors(new Map());
        setValues({email: "", message: "", name: ""});
    }

    return { send, errors , setData, values};
}


export default useSendEmail;