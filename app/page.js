import BackToTop from "./backToTop";
import HomePage from "./home/page";

export const metadata = {
  title: "Transforme Vídeos em Cortes Virais para Redes Sociais | ViroClip",
  description: "Economize tempo e maximize seu alcance! A IA da ViroClip analisa seus vídeos e cria dezenas de cortes virais, prontos para postar no TikTok, Reels e Shorts. Aumente seu engajamento. Teste grátis!",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
