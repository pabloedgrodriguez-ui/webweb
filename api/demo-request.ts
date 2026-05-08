import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS support
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, company, whatsapp, email, interest } = req.body;

    if (!name || !email || !interest) {
      res.status(400).json({ error: "Faltan campos (nombre, email e interés son obligatorios)" });
      return;
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: "Configuración incompleta: RESEND_API_KEY no configurada en Vercel." });
      return;
    }

    const resend = new Resend(apiKey);
    const isAlum = String(interest).includes('ALUM');
    const subject = `NUEVA SOLICITUD ${isAlum ? '🔥' : '💎'}: ${interest} - ${company || 'Sin Empresa'}`;
    const RECIPIENTS = ["pabloedgrodriguez@gmail.com", "aristastudiouno@gmail.com"];

    const results = await Promise.all(RECIPIENTS.map(async (to) => {
      try {
        const { error } = await resend.emails.send({
          from: "Arista Studio <onboarding@resend.dev>",
          to: to,
          subject: subject,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 12px; background-color: #ffffff;">
              <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px; margin-top: 0; text-align: center;">NUEVA SOLICITUD DE ACCESO</h2>
              <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                <p style="margin: 5px 0;"><strong>PRODUCTO:</strong> <span style="color: #0070f3; font-weight: bold;">${interest.toUpperCase()}</span></p>
              </div>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 120px;"><strong>👤 Nombre:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${name}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>🏢 Empresa:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${company || 'N/A'}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>📱 WhatsApp:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${whatsapp}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>📧 Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${email}</td></tr>
              </table>
            </div>
          `
        });
        return { to, success: !error, error };
      } catch (err: any) {
        return { to, success: false, error: err.message || "Error desconocido" };
      }
    }));

    const successful = results.filter(r => r.success);
    if (successful.length === 0) {
      res.status(500).json({ 
        error: "Error de Resend", 
        details: results[0].error?.message || "Verify your domain/email in Resend Sandbox" 
      });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err: any) {
    res.status(500).json({ error: "Error interno", message: err.message });
  }
}
