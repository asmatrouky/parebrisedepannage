import BasicHeader from '@/components/basicheader';

export const metadata = {
  title: 'Conditions générales d’utilisation',
  description:
    'Conditions d’utilisation du site PareBrise Dépannage France : accès, services, responsabilité, données personnelles et cadre légal.',
};

const PAGE_DESCRIPTION = metadata.description;

export default function CGUPage() {
  return (
    <>
      <BasicHeader
        title="Conditions générales d’utilisation"
        description={PAGE_DESCRIPTION}
        hasBorder={true}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800 leading-relaxed">
   

        <p className="mb-4">
          Les présentes Conditions Générales d’Utilisation (ci-après « CGU ») encadrent l’accès
          et l’utilisation du site <span className="font-semibold">PareBrise Dépannage France</span>,
          accessible à l’adresse <span className="font-semibold">parebrise-depannage-france.fr</span>{' '}
          (ci-après « le Site »). En naviguant sur le Site, l’utilisateur reconnaît avoir lu et accepté
          les présentes CGU.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          1. Objet du site
        </h2>
        <p className="mb-4">
          Le Site a pour objectif de présenter les services de{' '}
          <span className="font-semibold">remplacement de pare-brise et vitrages</span>,{' '}
          <span className="font-semibold">dépannage automobile</span> et{' '}
          <span className="font-semibold">remorquage</span>, ainsi que de permettre la prise de
          rendez-vous ou la demande d’intervention. Les informations fournies le sont à titre indicatif.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          2. Accès au site
        </h2>
        <p className="mb-4">
          Le Site est accessible gratuitement à tout utilisateur disposant d’un accès à Internet.
          Les frais liés à la connexion et au matériel restent à la charge de l’utilisateur.
          PareBrise Dépannage France peut suspendre ou interrompre l’accès au Site, notamment
          pour des raisons de maintenance ou de mise à jour, sans préavis.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          3. Services proposés
        </h2>
        <p className="mb-2">Le Site permet notamment :</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>de consulter les prestations et services disponibles ;</li>
          <li>de demander un rendez-vous ou une intervention ;</li>
          <li>de contacter le service client ;</li>
          <li>d’accéder aux informations légales et aux politiques de confidentialité.</li>
        </ul>
        <p className="mb-4">
          La demande de rendez-vous ou d’intervention via le Site ne vaut pas confirmation ferme :
          un conseiller peut recontacter l’utilisateur pour valider, modifier ou planifier l’intervention.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          4. Responsabilité
        </h2>
        <p className="mb-4">
          PareBrise Dépannage France met tout en œuvre pour fournir des informations fiables et à jour,
          mais ne peut garantir l’absence totale d’erreurs ou d’omissions. La responsabilité de
          PareBrise Dépannage France ne saurait être engagée :
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>en cas d’interruption, de dysfonctionnement ou d’indisponibilité temporaire du Site ;</li>
          <li>en cas de dommages résultant de l’utilisation ou de l’impossibilité d’utiliser le Site ;</li>
          <li>en cas d’utilisation du Site contraire aux présentes CGU.</li>
        </ul>
        <p className="mb-4">
          L’utilisateur est seul responsable de son équipement, de sa connexion internet et des
          données qu’il transmet via les formulaires du Site.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          5. Propriété intellectuelle
        </h2>
        <p className="mb-4">
          L’ensemble des éléments présents sur le Site (textes, images, logos, graphismes, vidéos,
          structure, design, etc.) est protégé par le droit de la propriété intellectuelle.
          Toute reproduction, représentation, modification ou diffusion, totale ou partielle, sans
          autorisation écrite préalable de PareBrise Dépannage France est strictement interdite.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          6. Données personnelles
        </h2>
        <p className="mb-4">
          Le traitement des données personnelles collectées via le Site (formulaires de contact,
          prise de rendez-vous, etc.) est décrit dans la{' '}
          <span className="font-semibold">Politique de confidentialité</span>, conforme au
          Règlement Général sur la Protection des Données (RGPD). L’utilisateur dispose notamment
          de droits d’accès, de rectification et de suppression de ses données.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          7. Liens externes
        </h2>
        <p className="mb-4">
          Le Site peut contenir des liens redirigeant vers des sites tiers. PareBrise Dépannage
          France n’exerce aucun contrôle sur ces sites et ne saurait être tenue responsable de
          leur contenu, de leur disponibilité ou de tout dommage résultant de leur utilisation.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          8. Modification des CGU
        </h2>
        <p className="mb-4">
          PareBrise Dépannage France se réserve le droit de modifier à tout moment les présentes
          CGU, afin de les adapter aux évolutions du Site, aux changements législatifs ou à la
          mise en place de nouveaux services. La version applicable est celle en vigueur au moment
          de la navigation sur le Site.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          9. Droit applicable et litiges
        </h2>
        <p className="mb-4">
          Les présentes CGU sont régies par le <span className="font-semibold">droit français</span>.
          En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls
          compétents.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          10. Contact
        </h2>
        <p className="mb-2">
          Pour toute question relative au Site ou aux présentes CGU, l’utilisateur peut contacter :
        </p>
        <p className="mb-1">
          Téléphone : <span className="font-semibold">07 53 35 00 12</span>
        </p>
        <p className="mb-1">
          Email :{' '}
          <a
            href="mailto:parebrisedepannagefrance@gmail.com"
            className="font-semibold text-[#9333EA] hover:underline"
          >
            parebrisedepannagefrance@gmail.com
          </a>
        </p>
        <p className="mb-4">
          Adresse :{' '}
          <span className="font-semibold">
            30 boulevard de la Résistance, 95100 Argenteuil, France
          </span>
        </p>
      </section>
    </>
  );
}
