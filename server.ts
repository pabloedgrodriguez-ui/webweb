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

      const recipients = ["pabloedgrodriguez@gmail.com", "aristastudiouno@gmail.com"];

      if (!process.env.RESEND_API_KEY) {
        console.error("CRITICAL: RESEND_API_KEY is missing in environment variables.");
        return res.status(500).json({ 
          error: "Configuración incompleta", 
          details: "El servidor no tiene configurada la clave de API de Resend." 
        });
      }

      // Basic backend email validation to prevent Resend validation errors
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Email del solicitante inválido" });
      }

      const isAlum = interest === 'ARISTASTUDIO ALUM (Premium)';
      const subject = `NUEVO LEAD ${isAlum ? '🔥 ALUM' : '💎'}: ${interest} - ${company}`;

      // Individually attempt to send to each destination
      const results = await Promise.all(recipients.map(async (toEmail) => {
        try {
          const { data, error } = await resend.emails.send({
            from: "Arista Studio <onboarding@resend.dev>",
            to: toEmail,
            subject: subject,
            html: `
              <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 12px; background-color: #ffffff;">
                <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px; margin-top: 0; text-align: center;">NUEVA SOLICITUD ACCESO</h2>
                
                <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                  <p style="margin: 5px 0;"><strong>PRODUCTO:</strong> <span style="color: #0070f3; font-weight: bold;">${interest.toUpperCase()}</span></p>
                </div>

                <div style="background: #ffffff; padding: 0; margin: 20px 0;">
                  <h3 style="margin-top: 0; font-size: 14px; text-transform: uppercase; color: #888; letter-spacing: 1px; border-bottom: 1px solid #eee; padding-bottom: 5px;">Datos del Interesado</h3>
                  <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 120px;"><strong>👤 Nombre:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #000;">${name}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>🏢 Empresa:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #000;">${company || 'No especificada'}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>📱 WhatsApp:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #000;">${whatsapp}</td></tr>
                    <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>📧 Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #000;">${email}</td></tr>
                  </table>
                </div>
                
                <p style="color: #999; font-size: 11px; margin-top: 40px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
                  Este es un mensaje automático generado por el formulario de Arista Studio.
                </p>
              </div>
            `,
          });
          return { toEmail, success: !error, error };
        } catch (err) {
          return { toEmail, success: false, error: err };
        }
      }));

      const successfulSends = results.filter(r => r.success);
      
      if (successfulSends.length === 0) {
        console.error("All email attempts failed. Possible sandbox restriction or invalid key.", results);
        return res.status(500).json({ 
          error: "Error al enviar el correo", 
          details: "Resend rechazó la solicitud. Verifica que el correo de destino esté verificado en sandbox si usas onboarding@resend.dev",
          errorLog: results.map(r => r.error)
        });
      }

      res.status(200).json({ 
        success: true, 
        message: `Correo enviado con éxito a ${successfulSends.length} destinatarios.`,
        results 
      });
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
