import { Box, Button, FormHelperText, TextareaAutosize, TextField } from "@mui/material";
import useSendEmail from "../../services/SendEmail";

const ContactUsFormCmp = () => {
    const { send, errors, setData, values } = useSendEmail();
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
        <form onSubmit={send} style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <Box width={"100%"} justifyContent={"center"} display="flex" flexDirection="column" gap={2}>
              <TextField
                error={errors?.has("name")}
                label="Name"
                aria-errormessage={errors?.get("name")}
                name="name"
                value={values.name}
                onChange={setData}
                helperText={errors?.get("name")}
              />
              <TextField
                error={errors?.has("email")}
                label="Email"
                type="email"
                name="email"
                value={values.email}
                onChange={setData}
                helperText={errors?.get("email")}
              />
              <TextareaAutosize
                aria-label="minimum height"
                minRows={6}
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={setData}
              />
              <FormHelperText style={{ color: 'red' }}>{errors?.get("message")}</FormHelperText>
              <Button style={{width: 100, alignSelf: "center"}} variant="contained" color="primary" type="submit">
                Send
              </Button>
            </Box>
          </form>
        </div>
    )

}

export default ContactUsFormCmp;