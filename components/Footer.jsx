import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { label: 'Remplacement pare-brise', href: '/' },
    { label: 'Réparation pare-brise', href: '/' },
    { label: 'Remplacement vitre latérale', href: '/' },
    { label: 'Remplacement lunette arrière', href: '/' },
    { label: 'Remplacement toit ouvrant', href: '/' },
    { label: 'Remplacement toit panoramique', href: '/' },
  ];

  const entrepriseLinks = [
    { label: 'Dépannage', href: '/depannage' },
    { label: 'Remorquage', href: '/depannage' },
  ];

  const rawCities = [
    "Évry-Courcouronnes", "Massy", "Palaiseau", "Savigny-sur-Orge", "Viry-Châtillon", 
    "Athis-Mons", "Draveil", "Corbeil-Essonnes", "Brétigny-sur-Orge", "Les Ulis", 
    "Longjumeau", "Montgeron", "Ris-Orangis", "Sainte-Geneviève-des-Bois", "Étampes", 
    "Arpajon", "Dourdan", "Gif-sur-Yvette", "Orsay", "Villebon-sur-Yvette", 
    "Villemoisson-sur-Orge", "Villiers-sur-Orge", "Saint-Michel-sur-Orge", 
    "Juvisy-sur-Orge", "Chilly-Mazarin", "Morangis", "Morsang-sur-Orge", 
    "Verrières-le-Buisson", "Bures-sur-Yvette", "Nozay", "Marcoussis", "Linas", 
    "Montlhéry", "Longpont-sur-Orge", "Ballancourt-sur-Essonne", "La Ferté-Alais", 
    "Itteville", "Marolles-en-Hurepoix", "Lardy", "Saint-Germain-lès-Arpajon", 
    "Breuillet", "Breux-Jouy", "Gometz-le-Châtel", "Gometz-la-Ville", "Soisy-sur-Seine", 
    "Le Coudray-Montceaux", "Le Plessis-Pâté", "Paray-Vieille-Poste", "Leuville-sur-Orge", 
    "Ollainville", "Épinay-sur-Orge", "Épinay-sous-Sénart", "Crosne", "Grigny", 
    "Fleury-Mérogis", "Fontenay-le-Vicomte", "Champcueil", "Champlan", "Saulx-les-Chartreux", 
    "Saclay", "Boulogne-Billancourt", "Nanterre", "Courbevoie", "Colombes", 
    "Asnières-sur-Seine", "Rueil-Malmaison", "Antony", "Levallois-Perret", "Clamart", 
    "Montrouge", "Issy-les-Moulineaux", "Neuilly-sur-Seine", "Suresnes", "Meudon", 
    "Puteaux", "Clichy", "Malakoff", "Châtenay-Malabry", "Chatillon", "Bagneux", 
    "Fontenay-aux-Roses", "Sceaux", "Chaville", "Garches", "Saint-Cloud", "Vanves", 
    "Bourg-la-Reine", "Villeneuve-la-Garenne", "Bois-Colombes", "La Garenne-Colombes", 
    "Le Plessis-Robinson", "Sèvres", "Vaucresson", "Ville-d’Avray", "Marnes-la-Coquette", 
    "Gennevilliers", "Issy-les-Moulineaux", "Rueil-Malmaison", "Boulogne-Billancourt", 
    "Courbevoie", "Asnières-sur-Seine", "Colombes", "Meudon", "Suresnes", "Puteaux", 
    "Antony", "Levallois-Perret", "Clamart", "Montrouge", "Bagneux", "Malakoff", 
    "Fontenay-aux-Roses", "Châtenay-Malabry", "Vanves", "Sceaux", "Saint-Cloud", 
    "Clichy", "Bois-Colombes", "Villeneuve-la-Garenne", "Vaucresson", "Créteil", 
    "Vitry-sur-Seine", "Champigny-sur-Marne", "Saint-Maur-des-Fossés", "Ivry-sur-Seine", 
    "Villejuif", "Maisons-Alfort", "Alfortville", "Fontenay-sous-Bois", "Vincennes", 
    "Nogent-sur-Marne", "Le Kremlin-Bicêtre", "Charenton-le-Pont", "Cachan", "Arcueil", 
    "Gentilly", "Choisy-le-Roi", "Orly", "Villeneuve-Saint-Georges", "Thiais", 
    "L’Haÿ-les-Roses", "Fresnes", "Rungis", "Sucy-en-Brie", "Boissy-Saint-Léger", 
    "Chennevières-sur-Marne", "Bry-sur-Marne", "Saint-Mandé", "Saint-Maurice", 
    "Villiers-sur-Marne", "Noiseau", "Marolles-en-Brie", "Valenton", "Villecresnes", 
    "Limeil-Brévannes", "Ablon-sur-Seine", "Ormesson-sur-Marne", "La Queue-en-Brie", 
    "Bonneuil-sur-Marne", "Joinville-le-Pont", "Le Perreux-sur-Marne", 
    "Villeneuve-le-Roi", "Mandres-les-Roses", "Santeny", "Périgny-sur-Yerres", 
    "Chennevières-sur-Marne", "Choisy-le-Roi", "Créteil", "Vitry-sur-Seine", 
    "Ivry-sur-Seine", "Villejuif", "Alfortville", "Maisons-Alfort", "Arcueil", 
    "Cachan", "Charenton-le-Pont", "Fontenay-sous-Bois", "Vincennes", "Saint-Mandé", 
    "Nogent-sur-Marne", "Versailles", "Saint-Germain-en-Laye", "Sartrouville", 
    "Mantes-la-Jolie", "Poissy", "Conflans-Sainte-Honorine", "Houilles", "Trappes", 
    "Montigny-le-Bretonneux", "Plaisir", "Élancourt", "Rambouillet", "Guyancourt", 
    "Le Chesnay-Rocquencourt", "Chatou", "Maisons-Laffitte", "La Celle-Saint-Cloud", 
    "Vélizy-Villacoublay", "Carrières-sur-Seine", "Croissy-sur-Seine", "Le Pecq", 
    "Louveciennes", "Buc", "Saint-Cyr-l’École", "Voisins-le-Bretonneux", 
    "Jouy-en-Josas", "Montesson", "Le Vésinet", "Les Mureaux", "Mantes-la-Ville", 
    "Limay", "Magnanville", "Buchelay", "Bonnières-sur-Seine", "Aubergenville", 
    "Gargenville", "Epône", "Meulan-en-Yvelines", "Hardricourt", "Flins-sur-Seine", 
    "Les Clayes-sous-Bois", "Coignières", "Maurepas", "Élancourt", "Plaisir", 
    "Jouars-Pontchartrain", "Neauphle-le-Château", "Beynes", "Thoiry", 
    "Villennes-sur-Seine", "Orgeval", "Chanteloup-les-Vignes", "Andrésy", "Achères", 
    "Verneuil-sur-Seine", "Vernouillet", "Dampierre-en-Yvelines", "Chevreuse", 
    "Saint-Rémy-lès-Chevreuse", "Magny-les-Hameaux", "Chartres", "Dreux", 
    "Châteaudun", "Nogent-le-Rotrou", "Mainvilliers", "Lucé", "Vernouillet", 
    "Maintenon", "Auneau-Bleury-Saint-Symphorien", "Luisant", "Bonneval", 
    "Cloyes-les-Trois-Rivières", "Illiers-Combray", "Janville-en-Beauce", "La Loupe", 
    "Senonches", "Courville-sur-Eure", "Brou", "Epernon", "Gallardon", "Thivars", 
    "Sours", "Dammarie", "Voves", "Droue-sur-Drouette", "Nogent-sur-Eure", 
    "Béville-le-Comte", "Morancez", "Bailleau-le-Pin", "Fontenay-sur-Eure", 
    "Nogent-le-Roi", "Anet", "Abondant", "Brezolles", "Chérisy", "Marboué", 
    "Bonneval", "Villemeux-sur-Eure", "Le Boullay-Mivoye", "Gasville-Oisème", 
    "Lèves", "Barjouville", "Le Coudray", "Saint-Prest", "Saint-Georges-sur-Eure", 
    "Amilly", "Pierres", "Hanches", "Nogent-le-Roi", "Maintenon", "Gallardon", 
    "Auneau", "Bazoches-en-Dunois", "Droue-sur-Drouette", "Prunay-le-Gillon", 
    "Arrou", "Dampierre-sous-Brou", "Illiers-Combray", "Bonneval", "Chartres"
  ];

  const uniqueCities = [...new Set(rawCities)].sort((a, b) => a.localeCompare(b));

  return (
    <footer className="footer-root">
      <div className="footer-content-wrapper">
        
        <div className="footer-main-content">
          
          <div className="footer-column footer-info">
            <Link href="/" className="footer-logo-link">
              <Image 
                src="/img/logofn.png" 
                alt="Logo du site" 
                width={180} 
                height={50} 
              />
            </Link>

            <p className="footer-description">
              Spécialiste du vitrage automobile, nous intervenons pour le remplacement 
              de pare-brise, la réparation d’impact et le changement de tout type de vitre. 
              Nous assurons un service rapide, soigné et adapté à tous les véhicules.
            </p>

            <div className="footer-socials">
              <a href="https://www.facebook.com/miimoun.benbassou" target="_blank" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/parebrise_depan?igsh=cXE0cDA2bjFlM3Bj" target="_blank" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.tiktok.com/@parebrise.depan.fr?_r=1&_t=ZN-92J8ZFfFrkc" target="_blank" aria-label="LinkedIn">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-column footer-links-group">
            <h3 className="footer-title">Vitrage</h3>
            <ul className="footer-links-list">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-column footer-links-group">
            <h3 className="footer-title">Dépannage</h3>
            <ul className="footer-links-list">
              {entrepriseLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-locations" style={{ 
            marginTop: '20px', 
            paddingBottom: '20px', 
          }}>
          <h3 className="footer-title" style={{ fontSize: '14px', marginBottom: '5px' }}>
            Zones d'intervention
          </h3>
          <p className="footer-locations-text" style={{ 
              fontSize: '12px', 
              lineHeight: '1.8', 
              opacity: '0.7', 
              textAlign: 'justify' 
            }}>
            {uniqueCities.join(' • ')}
          </p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} WebmaAgency. Tous droits réservés.
          </p>
          <div className="footer-legal-links">
            <Link href="/mentionlegal">Mentions légales</Link>
            <Link href="/cgu">CGU</Link>
            <Link href="/confidentialite">Confidentialité</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}