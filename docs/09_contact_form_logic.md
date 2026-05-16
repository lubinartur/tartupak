# Contact Form Logic

## Route

`/contact`

---

## Form Fields

| Field | Type | Required | Placeholder |
|---|---|---|---|
| Full Name | text | yes | John Smith |
| Company | text | no | Company Name |
| Email Address | email | yes | john@example.com |
| Phone Number | tel | no | +372 ... |
| Packaging Type | select or text | no | e.g. Transport Packaging |
| Dimensions | text | no | L × W × H (mm) |
| Estimated Quantity | text | no | e.g. 500 |
| Detailed Message | textarea | no | Describe your packaging requirements... |

---

## Packaging Type Options (dropdown)

- Lainepapp / Corrugated Cardboard / Гофрокартон
- Transpordipakend / Transport Packaging / Транспортная упаковка
- Fleksotrükk / Flexo Print Packaging / Флексопечать
- Külmutatud toodete pakend / Frozen Product Packaging / Упаковка для заморозки
- Pizzakarbid / Pizza Boxes / Коробки для пиццы
- Erilise kujuga pakendid / Custom Shape Packaging / Нестандартная упаковка
- Suuregabariidilised pakendid / Large Format Packaging / Крупногабаритная упаковка
- FEFCO standard (specify code) / Стандарт FEFCO (укажите код)
- Other / Muu / Другое

---

## Pre-fill Behaviour

Form can receive pre-filled values via URL query params:

| Param | Source | Example |
|---|---|---|
| `?type=transpordipakend` | Product page CTA | Pre-fills Packaging Type |
| `?fefco=0201` | FEFCO detail page CTA | Pre-fills Message with "FEFCO #0201" |

---

## Validation

| Field | Rule |
|---|---|
| Full Name | Required, min 2 chars |
| Email | Required, valid email format |
| Message | Optional, max 2000 chars |

---

## Submission

- Method: POST to backend endpoint or form service (Resend / Nodemailer)
- On success: show inline confirmation message, do not redirect
- On error: show inline error, keep form data intact

**Confirmation message:**
- ET: Aitäh! Võtame teiega ühendust 1 tööpäeva jooksul.
- EN: Thank you! We'll get back to you within 1 business day.
- RU: Спасибо! Мы свяжемся с вами в течение 1 рабочего дня.

---

## Contact Info (displayed alongside form)

**Office & Production:**
Tamme 35, Tõrvandi alevik, Ülenurme vald, 61715 Tartumaa, Estonia

**Email:** info@tartupak.ee

**Phone:**
+372 741 5333 (Landline)
+372 5349 9642 (Mobile)
+372 741 5336 (Fax)

**Working Hours:**
Monday – Friday: 08:00 – 16:30
