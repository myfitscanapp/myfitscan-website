import type { Metadata } from "next";
import LegalPageLayout from "@/components/shared/LegalPageLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de MyFitScan. Découvre comment nous protégeons tes données personnelles.",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPageLayout
      title="Politique de confidentialité"
      lastUpdated="25 avril 2025"
    >
      <h2>1. Introduction</h2>
      <p>
        DMC Digital LLC (&laquo; nous &raquo;, &laquo; notre &raquo;, &laquo; MyFitScan &raquo;) s&apos;engage à
        protéger la vie privée de ses utilisateurs. Cette politique de
        confidentialité décrit comment nous collectons, utilisons, stockons et
        protégeons vos données personnelles lorsque vous utilisez notre
        application mobile MyFitScan et notre site web myfitscan.com.
      </p>

      <h2>2. Données collectées</h2>
      <p>Nous collectons les catégories de données suivantes :</p>
      <h3>2.1 Données fournies directement</h3>
      <ul>
        <li>Adresse email et mot de passe (inscription)</li>
        <li>
          Informations de profil : genre, âge, taille, poids, niveau
          d&apos;activité, objectifs, préférences alimentaires
        </li>
        <li>Photos corporelles (scan corporel)</li>
        <li>Photos de repas (analyse alimentaire)</li>
        <li>Messages envoyés au coach IA</li>
      </ul>
      <h3>2.2 Données collectées automatiquement</h3>
      <ul>
        <li>Données d&apos;utilisation (fonctionnalités utilisées, fréquence)</li>
        <li>Données techniques (type d&apos;appareil, OS, version de l&apos;app)</li>
        <li>Cookies et technologies similaires (site web uniquement)</li>
      </ul>

      <h2>3. Bases légales du traitement (RGPD)</h2>
      <p>
        Nous traitons vos données personnelles sur les bases légales
        suivantes :
      </p>
      <ul>
        <li>
          <strong>Exécution du contrat :</strong> traitement nécessaire à la
          fourniture du service (analyse corporelle, suivi alimentaire, coaching)
        </li>
        <li>
          <strong>Consentement :</strong> photos corporelles et de repas, cookies
          non essentiels
        </li>
        <li>
          <strong>Intérêt légitime :</strong> amélioration du service, prévention
          de la fraude
        </li>
      </ul>

      <h2>4. Utilisation des données</h2>
      <p>Vos données sont utilisées pour :</p>
      <ul>
        <li>Fournir et personnaliser nos services (scans, analyses, coaching)</li>
        <li>Créer et gérer votre compte utilisateur</li>
        <li>Générer des analyses corporelles et alimentaires via l&apos;IA</li>
        <li>Personnaliser les plans alimentaires et recommandations</li>
        <li>Assurer le support client</li>
        <li>Améliorer nos services et notre technologie IA</li>
        <li>Respecter nos obligations légales</li>
      </ul>

      <h2>5. Sous-traitants et partenaires</h2>
      <p>
        Nous faisons appel aux sous-traitants suivants pour le fonctionnement de
        notre service :
      </p>
      <ul>
        <li>
          <strong>Supabase (Supabase Inc., États-Unis) :</strong> hébergement de
          la base de données et authentification
        </li>
        <li>
          <strong>Cloudflare R2 (Cloudflare Inc., États-Unis) :</strong>{" "}
          stockage des photos (scans corporels et repas)
        </li>
        <li>
          <strong>Anthropic (Anthropic PBC, États-Unis) :</strong> analyse IA
          des scans corporels (Claude)
        </li>
        <li>
          <strong>OpenAI (OpenAI LLC, États-Unis) :</strong> analyse IA des
          photos de repas et coaching conversationnel (GPT)
        </li>
        <li>
          <strong>RevenueCat (RevenueCat Inc., États-Unis) :</strong> gestion des
          abonnements in-app
        </li>
        <li>
          <strong>Vercel (Vercel Inc., États-Unis) :</strong> hébergement du site
          web
        </li>
      </ul>

      <h2>6. Transferts internationaux</h2>
      <p>
        Nos sous-traitants sont basés aux États-Unis. Les transferts de données
        depuis l&apos;Espace économique européen (EEE) vers les États-Unis sont
        encadrés par les clauses contractuelles types (CCT) de la Commission
        européenne et/ou le EU-US Data Privacy Framework, selon le
        sous-traitant.
      </p>

      <h2>7. Durée de conservation</h2>
      <ul>
        <li>
          <strong>Données de compte :</strong> conservées pendant la durée de
          votre inscription, puis supprimées dans les 30 jours suivant la
          suppression du compte
        </li>
        <li>
          <strong>Photos corporelles et de repas :</strong> conservées pendant la
          durée de votre inscription, puis supprimées dans les 30 jours suivant
          la suppression du compte
        </li>
        <li>
          <strong>Historique du coaching :</strong> conservé pendant 12 mois
          glissants
        </li>
        <li>
          <strong>Données de facturation :</strong> conservées conformément aux
          obligations légales (10 ans)
        </li>
      </ul>

      <h2>8. Vos droits (RGPD)</h2>
      <p>
        Conformément au Règlement Général sur la Protection des Données (RGPD),
        vous disposez des droits suivants :
      </p>
      <ul>
        <li>
          <strong>Droit d&apos;accès :</strong> obtenir une copie de vos données
          personnelles
        </li>
        <li>
          <strong>Droit de rectification :</strong> corriger vos données
          inexactes ou incomplètes
        </li>
        <li>
          <strong>Droit à l&apos;effacement :</strong> demander la suppression de
          vos données
        </li>
        <li>
          <strong>Droit à la portabilité :</strong> recevoir vos données dans un
          format structuré et lisible
        </li>
        <li>
          <strong>Droit d&apos;opposition :</strong> vous opposer au traitement de
          vos données
        </li>
        <li>
          <strong>Droit à la limitation :</strong> limiter le traitement de vos
          données dans certains cas
        </li>
        <li>
          <strong>Retrait du consentement :</strong> retirer votre consentement à
          tout moment
        </li>
      </ul>
      <p>
        Pour exercer vos droits, contactez-nous à{" "}
        <a href="mailto:support@myfitscan.com">support@myfitscan.com</a>. Nous
        répondrons dans un délai de 30 jours.
      </p>
      <p>
        Vous pouvez également introduire une réclamation auprès de l&apos;autorité
        de contrôle compétente (en France : la CNIL, www.cnil.fr).
      </p>

      <h2>9. Cookies</h2>
      <p>Notre site web utilise les cookies suivants :</p>
      <ul>
        <li>
          <strong>Cookies essentiels :</strong> nécessaires au fonctionnement du
          site (session, préférences de consentement)
        </li>
        <li>
          <strong>Cookies analytiques :</strong> mesure d&apos;audience anonymisée
          (avec votre consentement)
        </li>
      </ul>
      <p>
        Vous pouvez gérer vos préférences de cookies via la bannière affichée
        lors de votre première visite ou via les paramètres de votre navigateur.
      </p>

      <h2>10. Sécurité</h2>
      <p>
        Nous mettons en œuvre des mesures de sécurité techniques et
        organisationnelles appropriées pour protéger vos données personnelles :
      </p>
      <ul>
        <li>Chiffrement des données en transit (TLS/SSL) et au repos</li>
        <li>Authentification sécurisée avec hachage des mots de passe</li>
        <li>Accès restreint aux données sur la base du besoin d&apos;en connaître</li>
        <li>URLs présignées avec expiration pour l&apos;accès aux photos</li>
        <li>Surveillance et audit réguliers de nos systèmes</li>
      </ul>

      <h2>11. Protection des mineurs</h2>
      <p>
        MyFitScan n&apos;est pas destiné aux personnes de moins de 16 ans. Nous ne
        collectons pas sciemment de données personnelles de mineurs. Si nous
        découvrons que des données d&apos;un mineur ont été collectées, nous les
        supprimerons dans les meilleurs délais.
      </p>

      <h2>12. Droits spécifiques — California (CCPA/CPRA)</h2>
      <p>
        Si vous êtes résident de Californie, vous disposez de droits
        supplémentaires en vertu du California Consumer Privacy Act (CCPA) et du
        California Privacy Rights Act (CPRA) :
      </p>
      <ul>
        <li>
          <strong>Droit de savoir :</strong> quelles données personnelles nous
          collectons, utilisons, partageons ou vendons
        </li>
        <li>
          <strong>Droit de suppression :</strong> demander la suppression de vos
          données personnelles
        </li>
        <li>
          <strong>Droit de refus de vente :</strong> nous ne vendons pas vos
          données personnelles
        </li>
        <li>
          <strong>Non-discrimination :</strong> nous ne vous discriminerons pas
          pour l&apos;exercice de vos droits
        </li>
      </ul>

      <h2>13. Modifications</h2>
      <p>
        Nous nous réservons le droit de modifier cette politique de
        confidentialité à tout moment. Les modifications seront publiées sur
        cette page avec la date de mise à jour. Nous vous informerons des
        changements significatifs par notification dans l&apos;application.
      </p>

      <h2>14. Contact</h2>
      <p>
        Pour toute question relative à cette politique de confidentialité ou à
        la protection de vos données, contactez-nous :
      </p>
      <ul>
        <li>
          <strong>Email :</strong>{" "}
          <a href="mailto:support@myfitscan.com">support@myfitscan.com</a>
        </li>
        <li>
          <strong>Adresse :</strong> DMC Digital LLC, 4405 Jager Dr NE Ste
          C4-4456, Rio Rancho, NM 87144, États-Unis
        </li>
      </ul>
    </LegalPageLayout>
  );
}
