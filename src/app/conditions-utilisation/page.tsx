import type { Metadata } from "next";
import LegalPageLayout from "@/components/shared/LegalPageLayout";

export const metadata: Metadata = {
  title: "Conditions d'utilisation",
  description: "Conditions générales d'utilisation de l'application MyFitScan.",
  robots: { index: false },
};

export default function ConditionsUtilisationPage() {
  return (
    <LegalPageLayout
      title="Conditions générales d'utilisation"
      lastUpdated="25 avril 2025"
    >
      <h2>1. Acceptation des conditions</h2>
      <p>
        En téléchargeant, installant ou utilisant l&apos;application MyFitScan
        (&laquo; l&apos;Application &raquo;) ou en accédant au site web
        myfitscan.com (&laquo; le Site &raquo;), vous acceptez d&apos;être lié par
        les présentes conditions générales d&apos;utilisation (&laquo; CGU &raquo;). Si
        vous n&apos;acceptez pas ces conditions, veuillez ne pas utiliser nos
        services.
      </p>

      <h2>2. Description du service</h2>
      <p>
        MyFitScan est une application de santé et de fitness propulsée par
        l&apos;intelligence artificielle qui propose :
      </p>
      <ul>
        <li>
          Un scan corporel par analyse IA de photos (face et profil)
        </li>
        <li>
          Une analyse nutritionnelle par reconnaissance photographique des repas
        </li>
        <li>Un coaching personnalisé par intelligence artificielle</li>
        <li>Des plans alimentaires générés par IA</li>
        <li>Un suivi de progression</li>
      </ul>

      <h2>3. Avertissement santé</h2>
      <p>
        <strong>
          MyFitScan ne constitue pas un avis médical, nutritionnel ou
          diététique professionnel.
        </strong>{" "}
        Les informations, analyses et recommandations fournies par
        l&apos;Application sont générées par intelligence artificielle et ont un
        caractère informatif uniquement. Elles ne remplacent en aucun cas la
        consultation d&apos;un médecin, diététicien ou autre professionnel de
        santé qualifié.
      </p>
      <p>
        Consultez un professionnel de santé avant de commencer tout programme
        alimentaire ou d&apos;exercice, en particulier si vous souffrez de
        conditions médicales préexistantes.
      </p>

      <h2>4. Création de compte</h2>
      <p>
        Pour utiliser MyFitScan, vous devez créer un compte. Vous vous
        engagez à :
      </p>
      <ul>
        <li>Fournir des informations exactes et à jour</li>
        <li>Maintenir la confidentialité de vos identifiants de connexion</li>
        <li>Ne pas partager votre compte avec des tiers</li>
        <li>
          Nous informer immédiatement de toute utilisation non autorisée de
          votre compte
        </li>
      </ul>
      <p>
        Vous devez avoir au moins 16 ans pour créer un compte et utiliser nos
        services.
      </p>

      <h2>5. Abonnements</h2>
      <p>
        MyFitScan propose une version gratuite limitée et des abonnements
        payants (&laquo; Pro &raquo;) offrant l&apos;accès à l&apos;ensemble des
        fonctionnalités. Les détails des formules et tarifs sont disponibles sur
        la page <a href="/tarifs">Tarifs</a>.
      </p>
      <ul>
        <li>
          Les abonnements sont gérés via l&apos;App Store (Apple) ou le Google
          Play Store
        </li>
        <li>
          Le renouvellement est automatique sauf annulation avant la fin de la
          période en cours
        </li>
        <li>
          L&apos;annulation prend effet à la fin de la période de facturation
          en cours
        </li>
        <li>
          Les remboursements sont soumis aux politiques de l&apos;App Store ou du
          Google Play Store
        </li>
      </ul>

      <h2>6. Contenu utilisateur</h2>
      <p>
        En utilisant MyFitScan, vous pouvez soumettre du contenu (photos, messages
        au coach IA). Vous conservez la propriété de votre contenu. Vous nous
        accordez une licence non exclusive, mondiale et gratuite pour utiliser
        ce contenu dans le cadre de la fourniture et de l&apos;amélioration de
        nos services.
      </p>
      <p>Vous vous engagez à ne pas soumettre de contenu :</p>
      <ul>
        <li>Illégal, offensant ou portant atteinte aux droits de tiers</li>
        <li>Contenant des virus ou codes malveillants</li>
        <li>
          Représentant des personnes sans leur consentement
        </li>
      </ul>

      <h2>7. Utilisation acceptable</h2>
      <p>Vous vous engagez à ne pas :</p>
      <ul>
        <li>
          Utiliser l&apos;Application à des fins illégales ou non autorisées
        </li>
        <li>
          Tenter de contourner les mesures de sécurité ou les restrictions
          d&apos;accès
        </li>
        <li>
          Effectuer de l&apos;ingénierie inverse, décompiler ou désassembler
          l&apos;Application
        </li>
        <li>
          Utiliser des robots, scrapers ou autres moyens automatisés pour
          accéder au service
        </li>
        <li>
          Surcharger intentionnellement nos serveurs ou infrastructures
        </li>
      </ul>

      <h2>8. Propriété intellectuelle</h2>
      <p>
        L&apos;Application, le Site, leur contenu, design, code source,
        algorithmes et marques sont la propriété exclusive de DMC Digital LLC ou
        de ses licenciés. Toute reproduction ou utilisation non autorisée est
        interdite.
      </p>

      <h2>9. Disponibilité du service</h2>
      <p>
        Nous nous efforçons de maintenir l&apos;Application disponible en
        permanence, mais nous ne garantissons pas une disponibilité ininterrompue.
        Nous nous réservons le droit de suspendre, modifier ou interrompre tout
        ou partie du service, temporairement ou définitivement, avec ou sans
        préavis.
      </p>

      <h2>10. Limitation de responsabilité</h2>
      <p>
        Dans les limites autorisées par la loi applicable :
      </p>
      <ul>
        <li>
          L&apos;Application est fournie &laquo; en l&apos;état &raquo; et &laquo; selon
          disponibilité &raquo;, sans garantie d&apos;aucune sorte
        </li>
        <li>
          Nous ne garantissons pas l&apos;exactitude, la fiabilité ou
          l&apos;exhaustivité des analyses et recommandations générées par l&apos;IA
        </li>
        <li>
          Notre responsabilité totale ne saurait excéder le montant des
          abonnements payés au cours des 12 derniers mois
        </li>
        <li>
          Nous ne sommes pas responsables des dommages indirects, accessoires ou
          consécutifs
        </li>
      </ul>

      <h2>11. Résiliation</h2>
      <p>
        Nous nous réservons le droit de suspendre ou de résilier votre compte en
        cas de violation des présentes CGU, sans préavis et sans préjudice de
        tout autre recours. Vous pouvez supprimer votre compte à tout moment
        depuis les paramètres de l&apos;Application.
      </p>

      <h2>12. Modifications des CGU</h2>
      <p>
        Nous nous réservons le droit de modifier les présentes CGU à tout
        moment. Les modifications seront publiées sur cette page avec la date de
        mise à jour. L&apos;utilisation continue de l&apos;Application après
        modification vaut acceptation des nouvelles conditions.
      </p>

      <h2>13. Droit applicable et juridiction</h2>
      <p>
        Les présentes CGU sont régies par le droit de l&apos;État du
        Nouveau-Mexique, États-Unis. Tout litige relatif à l&apos;interprétation
        ou à l&apos;exécution des présentes sera soumis à la compétence
        exclusive des tribunaux du Nouveau-Mexique, sous réserve des
        dispositions impératives de protection du consommateur du pays de
        résidence de l&apos;utilisateur.
      </p>

      <h2>14. Contact</h2>
      <p>
        Pour toute question relative aux présentes CGU, contactez-nous :
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
