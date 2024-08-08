import { createContext } from "react";

interface SignContextInterface {
  isLoggedIn: boolean;
  userId: string | null;
  signIn: (userId: string) => void;
  signOut: () => void;
}

const SignContext = createContext<SignContextInterface>({
  isLoggedIn: false,
  userId: null,
  signIn: () => {},
  signOut: () => {},
});

export default SignContext;
