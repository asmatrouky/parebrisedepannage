// app/api/sendDepannageMail/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("📩 Body reçu dans /api/sendDepannageMail :", body);

    const { name, phone, email, date, hour } = body;

    // ✅ Validation basée sur TON formulaire
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Le nom et le téléphone sont obligatoires." },
        { status: 400 }
      );
    }

    console.log("✅ Demande de dépannage :", {
      name,
      phone,
      email,
      date,
      hour,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Demande de dépannage reçue avec succès.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erreur dans /api/sendDepannageMail :", error);

    return NextResponse.json(
      { error: "Erreur interne lors du traitement de la demande." },
      { status: 500 }
    );
  }
}
