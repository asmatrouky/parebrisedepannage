// app/depannage/page.js
import DepannageHero from '@/components/DepannageHero';
import DepannagePresentation from '@/components/DepannagePresentation';
import ServicesSection from "@/components/ServicesSection";
import StepsSection from '@/components/StepsSection';
import FaqDepannage from '@/components/FaqDepannage';
export const metadata = {
  title: 'Remorquage & Dépannage | Pare-Brise Dépannage',
  description:
    'Service de remorquage et dépannage auto rapide : panne, batterie, crevaison, erreur de carburant, véhicule immobilisé.',
};

export default function DepannagePage() {
  return (
    <>
        <DepannageHero/>
        <DepannagePresentation/>
        <ServicesSection
            title="Interventions rapides & efficaces"
            intro="Des solutions immédiates pour les pannes les plus courantes."
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

            <FaqDepannage />
      
    </>
    
   
  );
}
