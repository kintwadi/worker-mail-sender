import { Hono } from 'hono';
import { Resend } from 'resend';
import React from 'react';
import { generateEmailTemplate } from './emailTemplate';

export type Env = {
  RESEND_API_KEY: string;
};

const app = new Hono<{ Bindings: Env }>();

app.post('/send/email', async (c) => {
  try {
    const resend = new Resend(c.env.RESEND_API_KEY);
    const body = await c.req.json();

    const {
      firstName,
      lastName,
      address,
      phoneNumber,
      postalCode,
      country,
      city
    } = body;

    if (!firstName || !lastName || !address) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    const htmlContent = generateEmailTemplate({
      firstName,
      lastName,
      address,
      phoneNumber,
      postalCode,
      country,
      city
    });

    const data = await resend.emails.send({
      from: 'info@sharehopes.org',
      to: ['antmabiala@gmail.com'],
      subject: `Welcome ${firstName} to ShareHopes`,
      html: htmlContent
    });

    return c.json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    return c.json({ error: 'Internal Server Error', details: error }, 500);
  }
});

export default app;