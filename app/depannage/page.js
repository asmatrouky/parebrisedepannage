// app/depannage/page.js
import DepannageHero from '@/components/DepannageHero';
import DepannagePresentation from '@/components/DepannagePresentation';
import ServicesSection from "@/components/ServicesSection";

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
      title="Nos services principaux"
      intro="Découvrez nos prestations les plus demandées."
      columns={3} // 👉 3 cartes par ligne
      services={[
        {
          image: "/img/1.png",
          title: "Remplacement pare-brise",
          description:
            "Nous remplaçons votre pare-brise avec un vitrage certifié et une pose rapide.",
        },
        {
          image: "/img/2.png",
          title: "Réparation d’impact",
          description:
            "Réparation rapide des impacts légers pour éviter un remplacement complet.",
        },
        {
          image: "/img/3.png",
          title: "Vitre latérale",
          description:
            "Intervention rapide pour remplacer votre vitre latérale en cas de bris.",
        },
      ]}
    />
    </>
   
  );
}
