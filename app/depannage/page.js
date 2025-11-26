// app/depannage/page.js
import DepannageHero from '@/components/DepannageHero';
import ServicesSection from "@/components/ServicesSection";
import StepsSection from '@/components/StepsSection';
import FaqDepannage from '@/components/FaqDepannage';
import Presentation from '@/components/Presentation';
import PrendreRDV from '@/components/PrendreRdv';
import PourquoiNous from  '@/components/pourquoiNous';


export const metadata = {
  title: 'Remorquage & Dépannage | Pare-Brise Dépannage',
  description:
    'Service de remorquage et dépannage auto rapide : panne, batterie, crevaison, erreur de carburant, véhicule immobilisé.',
};

export default function DepannagePage() {
  return (
    <>
        <DepannageHero/>

          <Presentation
              tag="Assurances partenaires"
              title="Dépannage et remorquage auto"
              description="Un imprévu sur la route ? On intervient sans attendre ! Ne laissez pas une panne gâcher votre journée. Avec Pare-Brise & Dépannage France, bénéficiez d’une assistance immédiate, efficace et à prix ultra-compétitifs."
              buttonLabel="Appelez-nous ! 🚨"
              buttonHref="/pr"
              imageSrc="/img/presentationdepannage.jpg"
              imageAlt="Logos de nos assurances partenaires"
              mobileImageFirst={false}

            />

        <ServicesSection
            title="Interventions rapides & efficaces"
            tag="Interventions"
            intro="Il n’est pas toujours nécessaire de remorquer un véhicule. Parfois, une intervention sur place suffit. C’est là que notre service de dépannage entre en jeu : des solutions immédiates pour les pannes les plus courantes."
            columns={3}
            services={[
              {
                image: "/img/batterie.jpg",
                title: "Panne de batterie",
                description:
                  "Diagnostic sur place et remplacement si nécessaire pour repartir sans attendre.",
              },
              {
                image: "/img/pneu.jpg",
                title: "Crevaison de pneu",
                description:
                  "Réparation ou changement sur place selon la situation, intervention rapide partout.",
              },
              {
                image: "/img/cle.jpg",
                title: "Portière verrouillée",
                description:
                  "Ouverture rapide et sans dommages de votre véhicule en cas de clé oubliée à l’intérieur.",
              },
            ]}
          />

<PourquoiNous />
    <StepsSection
        tag="Dépanange & remorquage 24/7"
        title="Comment ça marche ?"
        intro="Un processus simple en trois étapes pour vous remettre sur la route le plus vite possible."
        steps={[
          {
            image: '/img/step1.png',
            title: 'Vous nous contactez',
            emoji: '',
            description:
              'Appelez-nous ou faites une demande en ligne avec votre localisation et le type de panne.',
          },
          {
            image: '/img/step2.png',
            title: 'Nous intervenons rapidement',
            emoji: '',
            description:
              "Un dépanneur se rend sur place pour diagnostiquer le problème et remorquer votre véhicule si nécessaire.",
          },
          {
            image: '/img/step3.png',
            title: 'Votre véhicule est pris en charge',
            emoji: '',
            description:
              'Nous déposons votre véhicule au garage de votre choix ou dans un centre partenaire.',
          },
        ]}
      />

      <Presentation
            tag="Assurances partenaires"
            title="Nos assurances partenaires"
            description="Nous travaillons avec la majorité des compagnies d’assurance afin de vous garantir une prise en charge simple, rapide et totalement transparente. Peu importe votre assureur, nous facilitons les démarches pour un remplacement de pare-brise sans stress."
            buttonLabel="Prendre RDV"
            buttonHref="/pr"
            imageSrc="/img/assurance.jpeg"
            imageAlt="Logos de nos assurances partenaires"
            mobileImageFirst={false}
          />


    <PrendreRDV
      tag="Dépannage rapide"
      title="Besoin d'un remorquage ?"
      description="Notre équipe intervient 24/7 pour dépanner et remorquer votre véhicule partout en Île-de-France. Intervention immédiate et devis par téléphone."
      buttonLabel="APPELER NOUS ! "
      buttonHref="tel:0123456789"
    />

            <FaqDepannage />
      
    </>
    
   
  );
}
