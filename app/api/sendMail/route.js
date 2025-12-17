import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      postalCode,
      vehicleInfo,
      windowLabel,
      damageLabel,
      dataConsent,
    } = data;

    await resend.emails.send({
      from: "Pare-Brise Dépannage <contact@parebrisedepannagefrance.com>",
      to: process.env.EMAIL_TO,            
      subject: "Nouvelle demande de rendez-vous",
      text: `
NOUVELLE DEMANDE DE RDV

👤 Nom : ${firstName} ${lastName}
📧 Email : ${email}
📞 Téléphone : ${phone}
📍 Code postal : ${postalCode}

🚙 Véhicule : ${vehicleInfo}
🪟 Vitre concernée : ${windowLabel}
🔧 Type de dégât : ${damageLabel}

Consentement données : ${dataConsent === "on" ? "Oui" : "Non"}
      `,
    });

    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Erreur sendMail:", error);
    return new Response("Erreur envoi email", { status: 500 });
  }
}
