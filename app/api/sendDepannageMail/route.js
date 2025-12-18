// app/api/sendDepannageMail/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    console.log(" Body reçu dans /api/sendDepannageMail :", body);

    const { name, phone, email, date, hour } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Le nom et le téléphone sont obligatoires." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Pare-Brise Dépannage <contact@parebrisedepannagefrance.com>",
      to: process.env.EMAIL_TO,
      subject: "🚨 Nouvelle demande de dépannage urgent",
      html: `
        <h2>Nouvelle demande de dépannage</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        ${email ? `<p><strong>Email :</strong> ${email}</p>` : ""}
        ${date ? `<p><strong>Date :</strong> ${date}</p>` : ""}
        ${hour ? `<p><strong>Heure :</strong> ${hour}</p>` : ""}
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Demande de dépannage envoyée avec succès.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur dans /api/sendDepannageMail :", error);

    return NextResponse.json(
      { error: "Erreur interne lors de l’envoi de l’email." },
      { status: 500 }
    );
  }
}
