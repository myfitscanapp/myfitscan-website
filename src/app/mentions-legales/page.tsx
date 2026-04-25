import type { Metadata } from "next";
import LegalPageLayout from "@/components/shared/LegalPageLayout";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site MyFitScan.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout title="Mentions légales" lastUpdated="25 avril 2025">
      <h2>1. Éditeur du site</h2>
      <p>
        Le site myfitscan.com est édité par <strong>DMC Digital LLC</strong>,
        société à responsabilité limitée de droit américain (Limited Liability
        Company), immatriculée dans l&apos;État du Nouveau-Mexique, États-Unis.
      </p>
      <ul>
        <li>
          <strong>Raison sociale :</strong> DMC Digital LLC
        </li>
        <li>
          <strong>Siège social :</strong> 4405 Jager Dr NE Ste C4-4456, Rio
          Rancho, NM 87144, États-Unis
        </li>
        <li>
          <strong>Email :</strong> support@myfitscan.com
        </li>
        <li>
          <strong>Directeur de la publication :</strong> Le gérant de DMC
          Digital LLC
        </li>
      </ul>

      <h2>2. Hébergement</h2>
      <p>Le site est hébergé par :</p>
      <ul>
        <li>
          <strong>Vercel Inc.</strong>
        </li>
        <li>440 N Baxter Street, San Francisco, CA 94107, États-Unis</li>
        <li>Site web : vercel.com</li>
      </ul>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus présents sur le site myfitscan.com
        (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) est
        protégé par les lois en vigueur sur la propriété intellectuelle et
        appartient à DMC Digital LLC ou fait l&apos;objet d&apos;une
        autorisation d&apos;utilisation.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication,
        transmission ou dénaturation, totale ou partielle, du site ou de son
        contenu, par quelque procédé que ce soit, et sur quelque support que ce
        soit, est interdite sans l&apos;autorisation écrite préalable de DMC
        Digital LLC.
      </p>

      <h2>4. Cookies</h2>
      <p>
        Le site myfitscan.com utilise des cookies pour améliorer
        l&apos;expérience utilisateur et réaliser des statistiques de
        fréquentation. Pour plus d&apos;informations, veuillez consulter notre{" "}
        <a href="/politique-de-confidentialite">politique de confidentialité</a>.
      </p>

      <h2>5. Limitation de responsabilité</h2>
      <p>
        DMC Digital LLC s&apos;efforce de fournir sur le site des informations
        aussi précises que possible. Toutefois, elle ne pourra être tenue
        responsable des omissions, des inexactitudes et des carences dans la
        mise à jour, qu&apos;elles soient de son fait ou du fait de tiers
        partenaires qui lui fournissent ces informations.
      </p>
      <p>
        Les informations présentes sur le site sont données à titre indicatif et
        ne sauraient constituer un avis médical ou nutritionnel professionnel.
        L&apos;utilisateur est invité à consulter un professionnel de santé pour
        tout conseil personnalisé.
      </p>

      <h2>6. Liens hypertextes</h2>
      <p>
        Le site myfitscan.com peut contenir des liens hypertextes vers
        d&apos;autres sites. DMC Digital LLC décline toute responsabilité quant
        au contenu de ces sites tiers.
      </p>

      <h2>7. Droit applicable</h2>
      <p>
        Les présentes mentions légales sont soumises au droit de l&apos;État du
        Nouveau-Mexique, États-Unis. En cas de litige, les tribunaux compétents
        seront ceux du Nouveau-Mexique, sauf disposition légale impérative
        contraire.
      </p>
    </LegalPageLayout>
  );
}
