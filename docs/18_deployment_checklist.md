# Deployment Checklist

## Before deployment

Check:

• all pages open correctly
• navigation works
• mobile layout works
• contact form works
• email notification works
• product pages render correctly
• FEFCO pages render correctly
• SEO metadata exists
• images are optimized

---

## Environment variables

Required examples:

```txt
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN=
CONTACT_EMAIL_TO=
CONTACT_EMAIL_FROM=
EMAIL_SERVER_API_KEY=
```

Exact variables depend on the email provider.

---

## Hosting

Recommended:

Vercel

---

## Domain

Connect Tartupak domain in Vercel.

Add DNS records according to Vercel instructions.

---

## After deployment

Test:

• desktop
• iPhone Safari
• Android Chrome
• contact form
• CMS preview
• page speed