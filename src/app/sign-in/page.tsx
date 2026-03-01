import { Metadata } from "next";
import FormSignIn from "./_components/FormSignIn";
// ============================================================================
export const metadata: Metadata = {
  title: "Postly | Signin",
  description: "Sign in to Postly to connect with friends, share ideas, and stay updated with the latest news securely and effortlessly.",
};
function SignIn() {
  return (
    <main className="min-h-screen flex justify-center pt-10">
      <FormSignIn />
    </main>
  );
}

export default SignIn;
