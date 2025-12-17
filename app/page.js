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
      <Presentation
  tag="Franchise Offerte"
  title="Remplacement 100% Pris en Charge"
  description="Chez Parebrise Dépannage, la franchise est entièrement offerte pour le remplacement de votre pare-brise. Nous travaillons avec la plupart des assurances, ce qui vous permet de bénéficier d’une prise en charge totale et d’une intervention rapide, à domicile ou sur votre lieu de travail."
  buttonLabel="Vérifier mon éligibilité"
  imageSrc="/img/prsentation.jpg"
  imageAlt="Technicien remplaçant un pare-brise"
  mobileImageFirst={false}
/>

      <CommentCaMarche />
           
    <Presentation
      tag="Assurances partenaires"
      title="Nos assurances partenaires"
      description="Nous travaillons avec la majorité des compagnies d’assurance afin de vous garantir une prise en charge simple, rapide et totalement transparente. Peu importe votre assureur, nous facilitons les démarches pour un remplacement de pare-brise sans stress."
      buttonLabel="Prendre RDV"
      imageSrc="/img/assurance.jpeg"
      imageAlt="Logos de nos assurances partenaires"
      mobileImageFirst={false}
    />


      <PrendreRdv />
      <Faq />

    </>
  );
}
