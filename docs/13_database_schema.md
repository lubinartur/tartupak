# Database / CMS Schema

The main content source is Sanity CMS.

---

## Product

Fields:

```ts
{
  title: string
  slug: slug
  category: string
  shortDescription: string
  description: text
  images: image[]
  applications: string[]
  fefcoTypes?: reference[]
  seoTitle?: string
  seoDescription?: string
}
```

---

## FEFCO Type

Fields:

```ts
{
  code: string
  title: string
  slug: slug
  description: text
  illustration: image
  typicalUse: string[]
  industries: string[]
  relatedProducts?: reference[]
}
```

---

## Gallery Image

Fields:

```ts
{
  title: string
  image: image
  category: string
  description?: string
}
```

---

## Page

Fields:

```ts
{
  title: string
  slug: slug
  content: blockContent
  seoTitle?: string
  seoDescription?: string
}
```

---

## Site Settings

Fields:

```ts
{
  companyName: string
  phone: string
  email: string
  address: string
  socialLinks?: object
  logo: image
}
```

---

## Lead / Contact Request

If stored internally:

```ts
{
  name: string
  company?: string
  email: string
  phone?: string
  packagingType?: string
  dimensions?: string
  quantity?: string
  message: string
  fileUrl?: string
  createdAt: datetime
}
```

For MVP, storing leads in CMS is optional.
Email notification is enough.