import { Metadata } from "next";
import FormForgotPassword from "./_components/FormForgotPassword";
// ==================================================================
export const metadata: Metadata = {
  title: "Postly | Forgot Password",
  description: "Enter your email address to receive a password reset link.",
};
function ForgotPassword() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="container-css">
        <FormForgotPassword />
      </div>
    </main>
  );
}

export default ForgotPassword;
