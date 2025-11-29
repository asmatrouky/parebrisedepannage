import BasicHeader from '@/components/basicheader';

export const metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité du site PareBrise Dépannage France : gestion des données personnelles, droits RGPD et règles de protection des informations.',
};

const PAGE_DESCRIPTION = metadata.description;

export default function ConfidentialitePage() {
  return (
    <>
      <BasicHeader
        title="Politique de confidentialité"
        description={PAGE_DESCRIPTION}
        hasBorder={true}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800 leading-relaxed">

        <p className="mb-4">
          La présente Politique de confidentialité explique comment{' '}
          <span className="font-semibold">PareBrise Dépannage France</span> collecte, utilise,
          protège et traite vos données personnelles lorsque vous utilisez le site{' '}
          <span className="font-semibold">parebrise-depannage-france.fr</span>, conformément au
          Règlement Général sur la Protection des Données (RGPD).
        </p>

        {/* Section 1 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          1. Données collectées
        </h2>
        <p className="mb-2">Nous collectons les données suivantes lorsque vous utilisez notre site :</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Nom et prénom (si fournis)</li>
          <li>Numéro de téléphone</li>
          <li>Adresse email</li>
          <li>Adresse postale (si transmise pour un dépannage)</li>
          <li>Informations concernant le véhicule (modèle, situation, type de panne)</li>
          <li>Données techniques (adresse IP, navigateur, pages consultées)</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          2. Finalités du traitement
        </h2>
        <p className="mb-2">Vos données sont utilisées pour :</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Répondre à vos demandes de rendez-vous ou d’intervention</li>
          <li>Vous contacter pour confirmer ou planifier un dépannage</li>
          <li>Assurer le suivi de votre dossier client</li>
          <li>Améliorer la qualité de nos services</li>
          <li>Assurer la sécurité et le bon fonctionnement du site</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          3. Base légale du traitement
        </h2>
        <p className="mb-4">
          Le traitement de vos données repose sur :
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Votre consentement pour les formulaires de contact et de rendez-vous</li>
          <li>L’exécution précontractuelle ou contractuelle d’un service</li>
          <li>L’intérêt légitime à assurer la bonne gestion de notre activité</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          4. Destinataires des données
        </h2>
        <p className="mb-4">
          Les données collectées sont exclusivement destinées à PareBrise Dépannage France.
          Elles peuvent être transmises uniquement aux prestataires nécessaires à la réalisation
          des services (techniciens, dépanneurs).
        </p>

        {/* Section 5 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          5. Durée de conservation
        </h2>
        <p className="mb-4">
          Vos données sont conservées uniquement pendant la durée nécessaire à la gestion de
          l’intervention, puis archivées pour une durée maximum de{' '}
          <span className="font-semibold">3 ans</span> (obligations légales ou suivi client).
        </p>

        {/* Section 6 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          6. Droits de l’utilisateur
        </h2>
        <p className="mb-2">Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Droit d’accès à vos données</li>
          <li>Droit de rectification</li>
          <li>Droit d’effacement (« droit à l’oubli »)</li>
          <li>Droit d’opposition</li>
          <li>Droit à la limitation du traitement</li>
        </ul>
        <p className="mb-4">
          Pour exercer vos droits, contactez-nous à :{' '}
          <a href="mailto:parebrisedepannagefrance@gmail.com" className="font-semibold text-[#9333EA] hover:underline">
            parebrisedepannagefrance@gmail.com
          </a>
        </p>

        {/* Section 7 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          7. Sécurité des données
        </h2>
        <p className="mb-4">
          Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour
          protéger vos données contre la perte, l’accès non autorisé ou la divulgation.
        </p>

        {/* Section 8 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          8. Cookies
        </h2>
        <p className="mb-4">
          Le Site peut utiliser des cookies pour améliorer l’expérience utilisateur et analyser
          la fréquentation. Vous pouvez les accepter ou les refuser via les paramètres de votre
          navigateur.
        </p>

        {/* Section 9 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          9. Modification de la politique
        </h2>
        <p className="mb-4">
          PareBrise Dépannage France se réserve le droit de modifier à tout moment la présente
          Politique de confidentialité. La version applicable est celle affichée sur le Site lors
          de votre visite.
        </p>

        {/* Section 10 */}
        <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-3 border-l-4 border-[#9333EA] pl-3">
          10. Contact
        </h2>
        <p className="mb-2">Pour toute question relative à vos données :</p>

        <p>Téléphone : <span className="font-semibold">07 53 35 00 12</span></p>
        <p>Email : <a href="mailto:parebrisedepannagefrance@gmail.com" className="font-semibold text-[#9333EA] hover:underline">parebrisedepannagefrance@gmail.com</a></p>
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
