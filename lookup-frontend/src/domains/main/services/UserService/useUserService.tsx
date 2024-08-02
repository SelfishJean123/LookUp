import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const useUserService = (close: () => void) => {
  //   const methods = useForm<signInValidationType>({
  //     resolver: zodResolver(signInValidationType),
  //   });
  //   const signIn = methods.handleSubmit((data) => {
  //     const x = mapper.map(
  //       new User({
  //         ...data,
  //       }),
  //       User,
  //       SignInRequest
  //     );
  //     SignIn(x);
  //     methods.reset();
  //     close();
  //   });
  //   return { methods, signIn };
};
