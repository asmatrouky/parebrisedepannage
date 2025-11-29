import BasicHeader from '@/components/basicheader';
import Faq from '@/components/Faq';


export const metadata = {
  title: ' Pare-Brise | Pare-Brise Dépannage France',
  description:
    'Service de remorquage et dépannage auto rapide : panne, batterie, crevaison, erreur de carburant, véhicule immobilisé.',
};

const PAGE_DESCRIPTION = metadata.description;

export default function faq() {
  return (
    <>

          <BasicHeader 
                title="FAQ" 
                description={PAGE_DESCRIPTION} 
                hasBorder={true}
              />
             <Faq />
       
    </>
    
   
  );
}
