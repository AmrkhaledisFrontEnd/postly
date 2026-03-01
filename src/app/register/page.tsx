import { Metadata } from "next";
import RegisterForm from "./_components/RegisterForm";
// ====================================================================================
export const metadata: Metadata = {
  title: "Postly | Register",
  description: "Create a new account on Postly to connect with friends, share your ideas, and stay updated with the latest news easily and securely.",
};
function Register() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <RegisterForm />
    </main>
  );
}

export default Register;
