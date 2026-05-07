import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { Resend } from 'resend';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for sending email
  app.post('/api/send-email', async (req, res) => {
    const { email, name, company, whatsapp, interest } = req.body;

    if (!email || !name) {
      return res.status(400).json({ error: 'Faltan datos requeridos (email o nombre).' });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn('RESEND_API_KEY no está configurado. El correo no se enviará.');
      return res.json({ success: false, message: 'RESEND_API_KEY no configurado.' });
    }

    const resend = new Resend(resendApiKey);

    const contractText = `
Términos y Condiciones de Uso - Arista Studio Alum

1. Objeto del Servicio
Arista Studio Alum es una plataforma SaaS diseñada para la automatización de presupuestos, optimización de materiales y generación de hojas de taller para carpintería de aluminio. El software se entrega "tal cual", como una herramienta de apoyo a la gestión profesional.

2. Modelo de Suscripción y Pagos
• Costo: El acceso al servicio tiene un valor mensual de $36 USD.
• Activación: Las cuentas se activan manualmente tras la confirmación del pago vía WhatsApp.
• Dispositivos: El uso de la cuenta está limitado a un máximo de dos (2) dispositivos simultáneos por usuario.

3. Responsabilidad sobre los Datos
• Uso Técnico: El usuario es el único responsable de la exactitud de los datos ingresados en el sistema (medidas, tipos de perfiles y fórmulas de corte).
• Resultados: La aplicación no se responsabiliza por errores en la fabricación derivados de una carga de datos incorrecta o interpretaciones erróneas de las hojas de optimización.
• Propiedad de los Datos: El usuario mantiene la propiedad de sus bases de datos de materiales y recetas.

4. Propiedad Intelectual
Todo el código fuente, diseño de interfaz ("Industrial Premium"), logotipos y algoritmos de optimización son propiedad exclusiva de Arista Studio Alum. Queda prohibida la ingeniería inversa o la copia parcial del sistema.

5. Disponibilidad y Soporte
• Infraestructura: El servicio depende de proveedores externos (Vercel, Supabase, GitHub). No se garantizan servicios ininterrumpidos en caso de fallas en dichos proveedores.
• Mantenimiento: Nos reservamos el derecho de realizar tareas de mantenimiento y reestructuración de bases de datos para garantizar el rendimiento del sistema.

6. Terminación del Servicio
El incumplimiento de los pagos mensuales o el uso de la cuenta en más de dos dispositivos resultará en la suspensión inmediata del acceso sin previo aviso.

7. Jurisdicción
Para cualquier controversia legal, las partes se someten a la jurisdicción de los tribunales correspondientes a la ciudad de Mendoza, Argentina.

Firmado por: ${name}
Fecha: ${new Date().toLocaleDateString()}
    `;

    try {
      // 1. Send contract to user
      await resend.emails.send({
        from: 'Arista Studio <onboarding@resend.dev>',
        to: email,
        subject: 'Términos y Condiciones - Arista Studio Alum',
        text: contractText,
      });

      // 2. Send notification to admin
      await resend.emails.send({
        from: 'Arista Web <onboarding@resend.dev>',
        to: 'aristastudiouno@gmail.com',
        subject: `NUEVA SOLICITUD: ${name} - ${company}`,
        text: `
NUEVA SOLICITUD DESDE LA WEB
----------------------------
NOMBRE: ${name}
EMPRESA: ${company}
WHATSAPP: ${whatsapp}
EMAIL: ${email}
INTERÉS: ${interest}
        `,
      });

      res.json({ success: true });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ error: 'Error al enviar el correo.' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
}

startServer();
