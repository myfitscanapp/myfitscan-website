import type { Metadata } from "next";
import LegalPageLayout from "@/components/shared/LegalPageLayout";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Conditions générales de vente de l'application MyFitScan.",
  robots: { index: false },
};

export default function CGVPage() {
  return (
    <LegalPageLayout
      title="Conditions générales de vente"
      lastUpdated="25 avril 2025"
    >
      <h2>1. Objet</h2>
      <p>
        Les présentes conditions générales de vente (&laquo; CGV &raquo;)
        définissent les modalités de souscription et d&apos;utilisation des
        abonnements payants de l&apos;application MyFitScan, éditée par DMC
        Digital LLC.
      </p>

      <h2>2. Vendeur</h2>
      <ul>
        <li>
          <strong>Raison sociale :</strong> DMC Digital LLC
        </li>
        <li>
          <strong>Siège social :</strong> 4405 Jager Dr NE Ste C4-4456, Rio
          Rancho, NM 87144, États-Unis
        </li>
        <li>
          <strong>Email :</strong>{" "}
          <a href="mailto:support@myfitscan.com">support@myfitscan.com</a>
        </li>
      </ul>

      <h2>3. Offres et tarifs</h2>
      <p>MyFitScan propose les abonnements suivants :</p>
      <ul>
        <li>
          <strong>Abonnement Hebdomadaire :</strong> 4,99 € TTC par semaine
        </li>
        <li>
          <strong>Abonnement Mensuel :</strong> 9,99 € TTC par mois
        </li>
        <li>
          <strong>Abonnement Annuel :</strong> 49,99 € TTC par an (avec essai
          gratuit de 3 jours)
        </li>
      </ul>
      <p>
        Les prix sont indiqués en euros, toutes taxes comprises (TTC). DMC
        Digital LLC se réserve le droit de modifier ses tarifs à tout moment.
        Les modifications de prix n&apos;affectent pas les abonnements en cours.
      </p>

      <h2>4. Modalités de paiement</h2>
      <p>
        Le paiement des abonnements est effectué via l&apos;App Store (Apple) ou
        le Google Play Store, selon la plateforme utilisée. Les moyens de
        paiement acceptés dépendent de la plateforme de distribution.
      </p>
      <p>
        Le paiement est dû au début de chaque période d&apos;abonnement. Les
        informations de paiement sont gérées directement par Apple ou Google —
        DMC Digital LLC n&apos;a pas accès à vos données bancaires.
      </p>

      <h2>5. Essai gratuit</h2>
      <p>
        L&apos;abonnement annuel inclut un essai gratuit de 3 jours. Pendant cette
        période, vous bénéficiez de l&apos;accès complet à toutes les
        fonctionnalités Pro. Si vous n&apos;annulez pas avant la fin de la
        période d&apos;essai, l&apos;abonnement sera automatiquement activé et
        facturé au tarif en vigueur.
      </p>
      <p>
        L&apos;essai gratuit est limité à une utilisation par compte Apple ID ou
        Google.
      </p>

      <h2>6. Droit de rétractation</h2>
      <p>
        Conformément à la réglementation applicable, vous disposez d&apos;un
        délai de 14 jours à compter de la souscription pour exercer votre droit
        de rétractation, sans avoir à justifier de motifs ni à payer de
        pénalités.
      </p>
      <p>
        Toutefois, si vous avez commencé à utiliser le service pendant le délai
        de rétractation, vous reconnaissez renoncer expressément à votre droit
        de rétractation pour la période déjà consommée.
      </p>
      <p>
        Pour exercer votre droit de rétractation, contactez-nous à{" "}
        <a href="mailto:support@myfitscan.com">support@myfitscan.com</a> ou
        annulez via l&apos;App Store / Google Play Store.
      </p>

      <h2>7. Renouvellement automatique</h2>
      <p>
        Les abonnements sont renouvelés automatiquement à la fin de chaque
        période de facturation (semaine, mois ou année), sauf annulation par
        l&apos;utilisateur.
      </p>
      <p>
        L&apos;annulation doit être effectuée au moins 24 heures avant la fin de
        la période en cours, via les paramètres de l&apos;App Store ou du Google
        Play Store. L&apos;accès Pro reste actif jusqu&apos;à la fin de la
        période payée.
      </p>

      <h2>8. Accès au service</h2>
      <p>
        L&apos;abonnement Pro donne accès à l&apos;ensemble des fonctionnalités de
        l&apos;Application, notamment :
      </p>
      <ul>
        <li>Scans corporels IA illimités</li>
        <li>Analyse photo des repas illimitée</li>
        <li>Coach IA 24/7</li>
        <li>Plans alimentaires personnalisés</li>
        <li>Suivi de progression complet</li>
      </ul>

      <h2>9. Garanties</h2>
      <p>
        DMC Digital LLC garantit la conformité du service aux descriptions
        présentées dans l&apos;Application et sur le Site. En cas de
        non-conformité avérée, l&apos;utilisateur pourra demander la mise en
        conformité du service, une réduction de prix ou la résiliation du
        contrat, conformément à la réglementation applicable.
      </p>

      <h2>10. Responsabilité</h2>
      <p>
        DMC Digital LLC ne saurait être tenue responsable des dommages indirects
        résultant de l&apos;utilisation ou de l&apos;impossibilité d&apos;utiliser
        le service. La responsabilité totale de DMC Digital LLC est limitée au
        montant des sommes effectivement versées par l&apos;utilisateur au cours
        des 12 derniers mois.
      </p>

      <h2>11. Protection des données</h2>
      <p>
        Les données personnelles collectées dans le cadre de la souscription et
        de l&apos;utilisation des abonnements sont traitées conformément à notre{" "}
        <a href="/politique-de-confidentialite">politique de confidentialité</a>.
      </p>

      <h2>12. Médiation</h2>
      <p>
        En cas de litige, l&apos;utilisateur peut recourir gratuitement à un
        médiateur de la consommation. Conformément à la réglementation
        européenne, l&apos;utilisateur peut également utiliser la plateforme de
        règlement en ligne des litiges de la Commission européenne accessible à
        l&apos;adresse : https://ec.europa.eu/consumers/odr.
      </p>

      <h2>13. Droit applicable</h2>
      <p>
        Les présentes CGV sont régies par le droit de l&apos;État du
        Nouveau-Mexique, États-Unis. Pour les consommateurs résidant dans
        l&apos;Union européenne, les dispositions impératives de protection du
        consommateur de leur pays de résidence s&apos;appliquent.
      </p>

      <h2>14. Contact</h2>
      <p>
        Pour toute question relative aux présentes CGV, contactez-nous :
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
