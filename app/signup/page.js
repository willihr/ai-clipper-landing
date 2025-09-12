import BackToTop from "../backToTop";
import SignupPage from "./index";

export const metadata = {
  title: "Crie sua Conta Grátis | ViroClip",
  description:
    "Crie sua conta gratuita no ViroClip em segundos. Comece hoje a transformar seus vídeos em cortes virais para redes sociais. Não é necessário cartão de crédito.",
};

const SignupLayout = () => {
  return (
    <>
      <SignupPage />
      <BackToTop />
    </>
  );
};

export default SignupLayout;
