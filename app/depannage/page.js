// app/depannage/page.js
import DepannageHero from '@/components/DepannageHero';
import ServicesSection from "@/components/ServicesSection";
import StepsSection from '@/components/StepsSection';
import FaqDepannage from '@/components/FaqDepannage';
import Presentation from '@/components/Presentation';
import PrendreRDV from '@/components/PrendreRdv';
import PourquoiNous from  '@/components/pourquoiNous';
import FloatingCTAButton from '@/components/FloatingCTAButton';

export const metadata = {
  title: 'Remorquage & Dépannage | Pare-Brise Dépannage',
  description:
    'Service de remorquage et dépannage auto rapide : panne, batterie, crevaison, erreur de carburant, véhicule immobilisé.',
};

export default function DepannagePage() {
  return (
    <>
        <DepannageHero/>

         <ServicesSection
  title="Interventions rapides & efficaces"
  tag="Interventions"
  intro="Notre équipe intervient rapidement pour tous types de situations : panne, remorquage, sortie de fourrière ou diagnostic sur place. Nous mettons tout en œuvre pour vous assister au plus vite, où que vous soyez."
  columns={3}
  services={[
    {
      image: "/img/depannage.jpg",
      title: "Dépannage",
      description:
        "Intervention sur place pour les pannes courantes : batterie, crevaison, erreur carburant, petites réparations.",
    },
    {
      image: "/img/remorquage2.jpg",
      title: "Remorquage",
      description:
        "Transport sécurisé de votre véhicule vers un garage, votre domicile ou tout lieu de votre choix.",
    },
    {
      image: "/img/fourriere.jpg",
      title: "Sortie de fourrière",
      description:
        "Prise en charge complète pour récupérer votre véhicule et le ramener en toute sérénité.",
    },
    {
      image: "/img/epave.jpg",
      title: "Récupération d’épave",
      description:
        "Enlèvement rapide de véhicules hors d’usage avec certificat de destruction si nécessaire.",
    },
    {
      image: "/img/crevaison.jpg",
      title: "Intervention crevaison",
      description:
        "Remplacement de roue ou installation de la roue de secours pour reprendre la route rapidement.",
    },
    {
      image: "/img/diagnostic.jpg",
      title: "Diagnostic auto sur place",
      description:
        "Analyse rapide de l’origine de la panne afin de proposer la meilleure solution avant remorquage.",
    },
  ]}
/>


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


       <ServicesSection
  title="Dépannage sur place"
  tag="Interventions"
  intro="La plupart des pannes peuvent être résolues directement sur place, sans remorquage. Notre équipe intervient rapidement pour remettre votre véhicule en état de rouler grâce à des solutions immédiates et adaptées à chaque situation."
  columns={3}
  services={[
    {
      image: "/img/batterie.jpg",
      title: "Panne de batterie",
      description:
        "Démarrage sur place, test de batterie et remplacement si nécessaire pour repartir instantanément.",
    },
    {
      image: "/img/pneu.jpg",
      title: "Crevaison de pneu",
      description:
        "Changement de roue ou mise en place de la roue de secours pour reprendre la route rapidement.",
    },
    {
      image: "/img/cle.jpg",
      title: "Portière verrouillée",
      description:
        "Ouverture professionnelle et sans dégâts de votre véhicule en cas de clé bloquée à l’intérieur.",
    },
  ]}
/>

        



      <PourquoiNous />


      <Presentation
            tag="Assurances partenaires"
            title="Nos assurances partenaires"
            description="Nous travaillons avec la majorité des compagnies d’assurance afin de vous garantir une prise en charge simple, rapide et totalement transparente. Peu importe votre assureur, nous facilitons les démarches pour un remplacement de pare-brise sans stress."
            buttonLabel="Prendre RDV"
            buttonHref="tel:0753350012"
            imageSrc="/img/assurance.jpeg"
            imageAlt="Logos de nos assurances partenaires"
            mobileImageFirst={false}
          />


    <PrendreRDV
      tag="Dépannage rapide"
      title="Besoin d'un remorquage ?"
      description="Notre équipe intervient 24/7 pour dépanner et remorquer votre véhicule partout en Île-de-France. Intervention immédiate et devis par téléphone."
      buttonLabel="APPELER NOUS ! "
      buttonHref="tel:0753350012"
    />

            <FaqDepannage />
      <FloatingCTAButton />
    </>
    
   
  );
}
