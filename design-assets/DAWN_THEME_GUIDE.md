# Dawn Theme Customization Guide for PetStore1

## Overview
This guide provides CSS customizations and settings to adapt the Shopify Dawn theme for the PetStore1 brand.

---

## Theme Settings (Online Store > Themes > Customize)

### Colors
- **Primary:** #2E8B57 (Fresh Green)
- **Secondary:** #3CB8A8 (Soft Teal)
- **Background:** #FDF6E3 (Warm Cream)
- **Surface:** #FFFFFF (White)
- **Text:** #2D3436 (Charcoal)
- **Sale/Deal accent:** #FF7675 (Coral)

### Typography
- Use system font stack (Dawn default)
- Headings: Segoe UI, 600 weight

### Spacing
- Base unit: 8px
- Section padding: 48px desktop / 32px mobile
- Card padding: 16px

---

## CSS Customizations

### Add to theme.scss.liquid or theme CSS block

```liquid
{% style %}
:root {
  /* Brand Colors */
  --color-brand: #2E8B57;
  --color-brand-dark: #247348;
  --color-brand-light: #3CB8A8;
  
  /* Backgrounds */
  --color-bg-page: #FDF6E3;
  --color-bg-section: #F5E6D3;
  --color-bg-card: #FFFFFF;
  
  /* Text */
  --color-text: #2D3436;
  --color-text-secondary: #636E72;
  --color-text-inverse: #FFFFFF;
  
  /* Accents */
  --color-deal: #FF7675;
  --color-trust: #74B9FF;
  --color-accent: #A29BFE;
  
  /* Borders & Shadows */
  --color-border: #B2BEC3;
  --shadow-card: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-card-hover: 0 4px 16px rgba(0,0,0,0.12);
}

/* Button Styles */
.button {
  background-color: var(--color-brand) !important;
  color: white !important;
  border-radius: 8px !important;
  padding: 12px 24px !important;
  font-weight: 600 !important;
  transition: all 0.2s ease;
}

.button:hover {
  background-color: var(--color-brand-dark) !important;
  transform: translateY(-2px);
}

/* Card Styles */
.card {
  background: white;
  border-radius: 12px;
  box-shadow: var(--shadow-card);
  padding: 16px;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-4px);
}

/* Typography */
h1, h2, h3, h4 {
  color: var(--color-text);
  font-weight: 600;
}

.price {
  color: var(--color-brand) !important;
  font-weight: 600;
}

/* Badge Styles */
.deal-badge {
  background: var(--color-deal);
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  font-weight: 600;
  font-size: 12px;
}

.sale-badge {
  background: var(--color-deal);
  color: white;
}

/* Trust Badge Styles */
.trust-section {
  background: white;
  padding: 48px 0;
}

.trust-badge {
  text-align: center;
  padding: 24px;
}

.trust-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.trust-icon.irish { background: var(--color-trust); }
.trust-icon.dispatch { background: var(--color-brand); }
.trust-icon.returns { background: var(--color-brand-light); }

/* Newsletter Section */
.newsletter-section {
  background: var(--color-bg-section);
  padding: 64px 0;
}

.newsletter-form input {
  border-radius: 8px;
  border: 1px solid var(--color-border);
  padding: 12px 16px;
}

.newsletter-form .button {
  background: var(--color-brand);
}

/* Product Grid */
.product-grid {
  gap: 24px;
}

.product-card {
  border-radius: 12px;
  overflow: hidden;
}

.product-card img {
  aspect-ratio: 1;
  object-fit: cover;
}

/* Star Ratings */
.star-rating {
  color: var(--color-deal);
}

/* Navigation Mega Menu */
.site-nav {
  gap: 8px;
}

.site-nav a {
  color: var(--color-text);
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
}

.site-nav a:hover {
  background: var(--color-bg-section);
  color: var(--color-brand);
}

/* Hero Section */
.hero-banner {
  position: relative;
  overflow: hidden;
}

.hero-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 48px;
  background: linear-gradient(transparent, rgba(0,0,0,0.6));
  color: white;
}

.hero-title {
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* Section Backgrounds */
.shop-pet-section { background: var(--color-bg-card); }
.bestsellers-section { background: var(--color-bg-page); }
.deals-section { background: linear-gradient(135deg, var(--color-deal), #ff9a8b); }

/* Mobile Adjustments */
@media (max-width: 768px) {
  .hero-content {
    padding: 24px;
  }
  
  .card:hover {
    transform: none;
  }
  
  .trust-badge {
    padding: 16px;
  }
}
{% endstyle %}
```

---

## Section Configuration

### 1. Announcement Bar
```json
{
  "type": "announcement",
  "settings": {
    "text": "Free delivery on orders over €39 | Irish-owned & operated",
    "background": "#2E8B57",
    "color": "#FFFFFF"
  }
}
```

### 2. Header
```json
{
  "type": "header",
  "settings": {
    "logo_position": "left",
    "menu": "main-menu",
    "sticky_header": true
  }
}
```

### 3. Hero Banner (as rich text + image section)
```json
{
  "type": "image-with-text",
  "settings": {
    "image": "pet-hero.jpg",
    "overlay": true,
    "text_align": "left",
    "heading": "Everything your pet needs",
    "subheading": "Free delivery on orders over €39",
    "button_label": "Shop Now",
    "button_link": "/collections/all"
  }
}
```

### 4. Shop by Pet (Custom Section)
- Use a 6-item grid layout
- Each item: image + title overlay
- Link to respective collection

### 5. Deal of the Day (Featured Collection)
```json
{
  "type": "featured-collection",
  "settings": {
    "title": "Deal of the Day",
    "collection": "daily-deals",
    "products_to_show": 1,
    "show_badges": true,
    "background": "#FF7675"
  }
}
```

### 6. Bestsellers (Product Carousel)
```json
{
  "type": "collections-template",
  "settings": {
    "title": "Bestsellers",
    "collection": "bestsellers",
    "products_to_show": 8,
    "show_rating": true,
    "background": "#FDF6E3"
  }
}
```

---

## Navigation Menu Structure

```
Main Menu:
├── Dogs
│   ├── Food & Treats
│   ├── Toys
│   ├── Beds & Crates
│   ├── Collars/Leads/Harnesses
│   └── Grooming & Health
├── Cats
│   ├── Food & Treats
│   ├── Litter & Trays
│   ├── Toys & Scratchers
│   ├── Beds
│   └── Grooming & Health
├── Fish & Aquatics
│   ├── Tanks & Filters
│   ├── Food
│   ├── Decor
│   └── Water Care
├── Small Animals
│   ├── Food
│   ├── Housing & Bedding
│   └── Toys & Accessories
├── Birds
│   ├── Food
│   ├── Cages & Perches
│   └── Toys & Health
├── Reptiles
│   ├── Habitat & Heating
│   ├── Food
│   └── Substrate & Decor
├── Deals
└── Subscribe & Save
```

---

## Product Page Customization

### Metafields for Subscribe & Save
- `subscribe_price`: Decimal
- `subscribe_discount`: Percentage (10)
- `delivery_estimate`: Text

### Theme Editor Sections
Add custom liquid sections for:
1. Subscribe & Save toggle
2. Eircode delivery calculator
3. Frequently bought together
4. Judge.me review snippet

---

## Mobile Optimization

### Breakpoints
- Mobile: 0 - 480px
- Tablet: 481px - 768px
- Desktop: 769px+

### Mobile-Specific CSS
```css
@media (max-width: 768px) {
  /* Full-width buttons */
  .button { width: 100%; margin-bottom: 12px; }
  
  /* Stacked product layout */
  .product-page-grid { flex-direction: column; }
  
  /* Hide elements on mobile */
  .desktop-only { display: none; }
  
  /* Mobile navigation */
  .mobile-nav { 
    position: fixed;
    top: 0;
    left: -100%;
    width: 80%;
    height: 100vh;
    background: white;
    transition: left 0.3s ease;
  }
  
  .mobile-nav.active { left: 0; }
}
```

---

## Performance Considerations

- Lazy load images below fold
- Use WebP format for all images
- Minimize custom CSS
- Keep JavaScript minimal
- Use Shopify's built-in image optimization