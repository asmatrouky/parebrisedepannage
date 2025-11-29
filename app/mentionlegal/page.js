import BasicHeader from '@/components/basicheader';

export const metadata = {
  title: 'Mentions légales',
  description:
    'Accédez aux informations légales du site : éditeur, hébergeur et responsable de publication, pour assurer transparence et conformité.',
};

const PAGE_DESCRIPTION = metadata.description;

export default function MentionsLegalesPage() {
  return (
    <>
      <BasicHeader
        title="Mentions légales"
        description={PAGE_DESCRIPTION}
        hasBorder={true}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800 leading-relaxed">
        

        <p className="mb-4">
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la
          confiance en l’économie numérique, il est précisé aux utilisateurs du site
          PareBrise Dépannage France l’identité des différents intervenants dans le cadre
          de sa réalisation et de son suivi.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          Édition du site
        </h2>
        <p className="mb-2">
          Le présent site, accessible à l’URL{' '}
          <span className="font-semibold">parebrise-depannage-france.fr</span> (le « Site »),
          est édité par :
        </p>
        <p className="mb-4">
          <span className="font-semibold">PAREBRISE DÉPANNAGE FRANCE</span>, entreprise
          individuelle, immatriculée sous le numéro{' '}
          <span className="font-semibold">SIRET 98976150700015</span>, dont le siège social
          est situé : <br />
          <span className="font-semibold">
            30 boulevard de la Résistance, 95100 Argenteuil, France
          </span>
          . <br />
          Téléphone : <span className="font-semibold">07 53 35 00 12</span>
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          Hébergement
        </h2>
        <p className="mb-4">
          Le Site est hébergé par : <br />
          <span className="font-semibold">IONOS by 1&amp;1</span>,<br />
          7 Place de la Gare – 57200 Sarreguemines <br />
          Téléphone : (+33) 9 70 80 89 11.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          Directeur de publication
        </h2>
        <p className="mb-4">
          Le Directeur de la publication du Site est : <br />
          <span className="font-semibold">Hassan GOUADJELIA</span> <br />
          SIRET : <span className="font-semibold">98976150700015</span>
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          Nous contacter
        </h2>
        <p className="mb-4">
          Par téléphone : <span className="font-semibold">07 53 35 00 12</span> <br />
          Par email :{' '}
          <a
            href="mailto:parebrisedepannagefrance@gmail.com"
            className="font-semibold text-[#9333EA] hover:underline"
          >
            parebrisedepannagefrance@gmail.com
          </a>
          <br />
          Par courrier : <br />
          <span className="font-semibold">
            30 boulevard de la Résistance, 95100 Argenteuil, France
          </span>
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          Données personnelles
        </h2>
        <p className="mb-2">
          Le traitement de vos données à caractère personnel est régi par notre Politique
          de confidentialité, accessible dans la section « Confidentialité », conformément
          au Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016
          (« RGPD »).
        </p>
      </section>
    </>
  );
}
