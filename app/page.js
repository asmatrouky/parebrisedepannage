// app/page.js
import Hero from '@/components/hero';
import NosServices from '@/components/NosServices';
import CommentCaMarche from '@/components/CommentCaMarche';
import PrendreRdv from '@/components/PrendreRdv';
import Faq from '@/components/Faq';
import Presentation from '@/components/Presentation';


export default function Home() {
  return (
    <>
      <Hero />
      <NosServices />

      <CommentCaMarche />
                        <Presentation />

      <PrendreRdv />
      <Faq />

    </>
  );
}
