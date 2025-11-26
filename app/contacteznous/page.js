// app/depannage/page.js
import BasicHeader from '@/components/basicheader';
import ContactForm from '@/components/ContactForm';


export const metadata = {
  title: 'Remorquage & Dépannage | Pare-Brise Dépannage',
  // Correction : Utiliser : au lieu de = pour les propriétés d'objet
  description: "Une question sur le dépannage ? Un devis pour un pare-brise ? Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais."
};

const PAGE_DESCRIPTION = metadata.description;


export default function DepannagePage() {
  return (
    <main> 
      <BasicHeader 
        title="Nous contacter" 
        description={PAGE_DESCRIPTION} 
        hasBorder={true}
      />

      <ContactForm />

    </main>
   
  );
}