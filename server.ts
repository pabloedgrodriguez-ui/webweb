import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from "resend";
import cors from "cors";

// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Route for demo requests
  app.post("/api/demo-request", async (req, res) => {
    try {
      const { name, company, whatsapp, email, interest } = req.body;

      if (!name || !email || !interest) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
      }

      const isAlum = interest === 'ARISTASTUDIO ALUM (Premium)';
      const subject = `NUEVO LEAD ${isAlum ? '🔥 ALUM' : '💎'}: ${interest} - ${company}`;
      const recipients = ["pabloedgrodriguez@gmail.com", "aristastudiouno@gmail.com"];

      // Using onboarding@resend.dev is restricted. It's better to send individually 
      // if account is not yet fully verified to avoid "validation_error" with arrays.
      const results = await Promise.all(recipients.map(async (toEmail) => {
        return resend.emails.send({
          from: "onboarding@resend.dev",
          to: toEmail,
          subject: subject,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 12px;">
              <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px; margin-top: 0;">NUEVA SOLICITUD DESDE LA WEB</h2>
              <p style="font-size: 16px;"><strong>PRODUCTO:</strong> <span style="color: #0070f3;">${interest.toUpperCase()}</span></p>
              
              <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0; font-size: 14px; text-transform: uppercase; color: #666; letter-spacing: 1px;">Datos del Interesado:</h3>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>👤 Nombre:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>🏢 Empresa:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${company || 'No especificada'}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>📱 WhatsApp:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${whatsapp}</td></tr>
                  <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>📧 Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td></tr>
                </table>
              </div>
              
              <p style="color: #666; font-size: 12px; margin-top: 30px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
                Esta es una notificación automática de Arista Studio Landing Page.
              </p>
            </div>
          `,
        });
      }));

      const errors = results.filter(r => r.error);
      
      if (errors.length === recipients.length) {
        console.error("All email attempts failed:", errors);
        return res.status(500).json({ 
          error: "Error al enviar correos", 
          details: errors[0].error 
        });
      }

      res.status(200).json({ success: true, results });
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
