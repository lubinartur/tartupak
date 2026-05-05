# Form and Lead Flow

The site should have one main quote request form.

Main CTA labels:

• Küsi pakkumist
• Request quote
• Saada päring

---

## Form fields

Required:

• name
• email
• message

Optional:

• company
• phone
• packaging type
• dimensions
• quantity
• file upload

---

## Submission flow

1. User fills form
2. Frontend validates required fields
3. Request is sent to `/api/contact`
4. Server validates payload
5. Email notification is sent to Tartupak
6. User sees success message

---

## Success message

Estonian:

Aitäh! Teie päring on saadetud. Võtame teiega peagi ühendust.

English:

Thank you! Your request has been sent. We will contact you shortly.

Russian:

Спасибо! Ваш запрос отправлен. Мы скоро свяжемся с вами.

---

## Anti-spam

Add simple protection:

• honeypot field
• rate limit
• server-side validation