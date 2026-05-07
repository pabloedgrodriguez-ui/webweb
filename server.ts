import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from "resend";
import cors from "cors";
import "dotenv/config";

// --- CONFIGURATION ---
const PORT = 3000;
const RECIPIENTS = ["pabloedgrodriguez@gmail.com", "aristastudiouno@gmail.com"];

// --- INITIALIZATION ---
let _resend: Resend | null = null;
function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY_MISSING");
  if (!_resend) _resend = new Resend(apiKey);
  return _resend;
}

async function startServer() {
  const app = express();

  // 1. Basic Middlewares
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // 2. Logging
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

  // 3. API ROUTES (Explicitly defined before Vite)
  const api = express.Router();

  api.get("/health", (req, res) => {
    res.json({ 
      status: "ok", 
      resendConfigured: !!process.env.RESEND_API_KEY,
      timestamp: new Date().toISOString()
    });
  });

  api.post("/demo-request", async (req, res) => {
    try {
      const { name, company, whatsapp, email, interest } = req.body;

      if (!name || !email || !interest) {
        return res.status(400).json({ error: "Faltan campos obligatorios" });
      }

      let resend;
      try {
        resend = getResend();
      } catch (e) {
        return res.status(500).json({ error: "Configuración del servidor: RESEND_API_KEY no encontrada." });
      }

      const isAlum = interest.includes('ALUM');
      const subject = `NUEVO LEAD ${isAlum ? '🔥 ALUM' : '💎'}: ${interest} - ${company}`;

      const sendPromises = RECIPIENTS.map(to => {
        return resend.emails.send({
          from: "Arista Studio <onboarding@resend.dev>",
          to: to,
          subject: subject,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 12px; background-color: #ffffff;">
              <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px; margin-top: 0; text-align: center;">NUEVA SOLICITUD ACCESO</h2>
              
              <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                <p style="margin: 5px 0;"><strong>PRODUCTO:</strong> <span style="color: #0070f3; font-weight: bold;">${interest.toUpperCase()}</span></p>
              </div>

              <div style="background: #ffffff; padding: 0; margin: 20px 0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 120px;"><strong>👤 Nombre:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${name}</td></tr>
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>🏢 Empresa:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${company || 'N/A'}</td></tr>
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>📱 WhatsApp:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${whatsapp}</td></tr>
                  <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666;"><strong>📧 Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${email}</td></tr>
                </table>
              </div>
              
              <p style="color: #999; font-size: 11px; margin-top: 40px; text-align: center; border-top: 1px solid #eee; padding-top: 20px;">
                Este es un mensaje automático de Arista Studio.
              </p>
            </div>
          `
        });
      });

      const results = await Promise.all(sendPromises);
      const errors = results.filter(r => r.error);

      if (errors.length === RECIPIENTS.length) {
        console.error("Resend Error:", errors);
        return res.status(500).json({ error: "Error de envío", details: errors[0].error?.message });
      }

      res.status(200).json({ success: true, message: "Enviado con éxito" });

    } catch (err: any) {
      console.error("API Error:", err);
      res.status(500).json({ error: "Error interno", message: err.message });
    }
  });

  app.use("/api", api);

  // 4. VITE / STATIC FILES
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve("dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // 5. Global Error Handler
  app.use((err: any, req: any, res: any, next: any) => {
    console.error('Critical Error:', err);
    res.status(500).send('Algo salió mal en el servidor.');
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`>>> Servidor Arista Studio escuchando en puerto ${PORT}`);
  });
}

startServer();
