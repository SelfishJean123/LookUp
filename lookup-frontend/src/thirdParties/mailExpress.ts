import { createClient } from "smtpexpress"

export const smtpexpressClient = createClient({
  projectId: "sm0pid-Esiuea9BZJC9XZeAiKDjtehex",
  projectSecret: "306dea6326efcf2928cc75549b6aaad8c655e15e7b19e45dc3"
});


export const sendMail = async ({name, message , email }:{name: string, message: string, email: string}) => {
  await smtpexpressClient.sendApi.sendMail({
    subject: `New message from ${name} and email ${email}`,
    message,
    sender: {
      name,
      email: "sm0pid-Esiuea9BZJC9XZeAiKDjtehex@projects.smtpexpress.com",
    },
    recipients: [{
      email: "joanna.hornung@student.pk.edu.pl",
      name: "Joanna Hornung",
    },{
        email: "polagorge@gmail.com",
        name: "Paula Gorge",
      }],
  });
}