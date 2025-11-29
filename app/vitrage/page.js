import Presentation from '@/components/Presentation';
import BasicHeader from '@/components/basicheader';


export const metadata = {
  title: ' Pare-Brise | Pare-Brise Dépannage France',
  description:
    'Service de remorquage et dépannage auto rapide : panne, batterie, crevaison, erreur de carburant, véhicule immobilisé.',
};

const PAGE_DESCRIPTION = metadata.description;

export default function ParebrisePage() {
  return (
    <>

          <BasicHeader 
                title="Pare-Brise" 
                description={PAGE_DESCRIPTION} 
                hasBorder={true}
              />
        
          <Presentation
              tag="Assurances partenaires"
              title="Changement de parebrise"
              description="Un imprévu sur la route ? On intervient sans attendre ! Ne laissez pas une panne gâcher votre journée. Avec Pare-Brise & Dépannage France, bénéficiez d’une assistance immédiate, efficace et à prix ultra-compétitifs."
              buttonLabel=""
              buttonHref="/pr"
              imageSrc="/img/1.png"
              imageAlt="Logos de nos assurances partenaires"
              mobileImageFirst={false}

            />

              <Presentation
              tag="Assurances partenaires"
              title="Changement de parebrise"
              description="Un imprévu sur la route ? On intervient sans attendre ! Ne laissez pas une panne gâcher votre journée. Avec Pare-Brise & Dépannage France, bénéficiez d’une assistance immédiate, efficace et à prix ultra-compétitifs."
              buttonLabel=""
              buttonHref="/pr"
              imageSrc="/img/1.png"
              imageAlt="Logos de nos assurances partenaires"
              mobileImageFirst={false}

            />

              <Presentation
              tag="Assurances partenaires"
              title="Changement de parebrise"
              description="Un imprévu sur la route ? On intervient sans attendre ! Ne laissez pas une panne gâcher votre journée. Avec Pare-Brise & Dépannage France, bénéficiez d’une assistance immédiate, efficace et à prix ultra-compétitifs."
              buttonLabel=""
              buttonHref="/pr"
              imageSrc="/img/1.png"
              imageAlt="Logos de nos assurances partenaires"
              mobileImageFirst={false}

            />
    </>
    
   
  );
}
