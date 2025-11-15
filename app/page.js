// app/page.js
import Hero from '@/components/hero';
import NosServices from '@/components/NosServices';
import CommentCaMarche from '@/components/CommentCaMarche';
import PrendreRdv from '@/components/PrendreRdv';


export default function Home() {
  return (
    <>
      <Hero />
      <NosServices />
      <CommentCaMarche />
      <PrendreRdv />
    </>
  );
}
