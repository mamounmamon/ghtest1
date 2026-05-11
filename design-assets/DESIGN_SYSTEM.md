# PetStore1 Design System

## Brand Identity

**Brand Name:** Paws & Friends (or similar friendly name)
**Tagline:** "Everything your pet needs, delivered with care"
**Personality:** Warm, trustworthy, Irish-owned, pet-loving

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Fresh Green** | `#2E8B57` | Primary CTAs, links, brand accents |
| **Soft Teal** | `#3CB8A8` | Secondary accents, hover states |
| **Warm Cream** | `#FDF6E3` | Background, cards |
| **Charcoal** | `#2D3436` | Primary text |

### Secondary Colors
| Name | Hex | Usage |
|------|-----|-------|
| **Sky Blue** | `#74B9FF` | Trust badges, delivery info |
| **Coral** | `#FF7675` | Deals, sale badges, alerts |
| **Warm Sand** | `#F5E6D3` | Section backgrounds |
| **Soft Lavender** | `#A29BFE` | Category accents |

### Neutrals
| Name | Hex | Usage |
|------|-----|-------|
| **White** | `#FFFFFF` | Cards, content areas |
| **Light Gray** | `#F8F9FA` | Page backgrounds |
| **Medium Gray** | `#B2BEC3` | Placeholder text |
| **Dark Gray** | `#636E72` | Secondary text |

## Typography

**Primary Font:** System font stack (Shopify's default for fast loading)
- Headings: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Body: Same stack for consistency

**Scale (Mobile-First):**
- H1: 2rem / 600 weight
- H2: 1.5rem / 600 weight
- H3: 1.25rem / 600 weight
- Body: 1rem / 400 weight
- Small: 0.875rem / 400 weight

## Homepage Design

### Hero Banner
**Concept:** Happy pet with owner in Irish countryside setting
**Layout:** Full-width image with text overlay
**Text:** "Everything your pet needs" + "Free delivery on orders over €39"
**CTA Button:** Fresh Green background, white text
**Mobile:** Stack text below image

### Shop by Pet Grid
6 tiles in a 3x2 grid (desktop), 2x3 (tablet), 2x3 (mobile):
1. Dogs - Happy dog outdoors
2. Cats - Curious cat
3. Fish & Aquatics - Colorful aquarium
4. Small Animals - Rabbit/guinea pig
5. Birds - Colorful bird
6. Reptiles - Gecko/lizard

Each tile: Image + Pet name + "Shop Now" link
Background: Soft Cream card with subtle shadow

### Deal of the Day Strip
- Background: Coral gradient
- White text with strikethrough original price
- "Deal ends in [timer]" text

### Bestsellers Carousel
- Horizontal scroll on mobile
- 4 products visible on desktop
- Star rating + price + quick-add button

### Trust Badges
Three badges in a row:
1. 🇨🇮 Irish-Owned - Sky Blue icon
2. 🚚 Fast Dispatch - Green checkmark
3. 📦 14-Day Returns - Teal icon

### Newsletter Signup
- Background: Sand color
- Input field + "Get 10% Off" button
- Green button, white input

## Product Page Layout

### Image Gallery
- Main image: Large, zoomable
- Thumbnails: 4-5 images below
- Lightbox on click

### Product Info
- Title: H1, Charcoal
- Price: Large, Fresh Green
- Rating: 5 stars + review count
- Variants: Dropdown selectors
- Quantity: Plus/minus buttons

### Subscribe & Save
- Toggle switch for subscription
- "Save 10%" badge when active
- Subscription price shown

### Features Section
- Bullet points with check icons
- Key product benefits

### Frequently Bought Together
- 2-3 related products
- "Add all to cart" bundle button

## Navigation

### Mega Menu Style
- Full-width dropdown on hover/click
- 5 columns: image + links for each category
- Pet category images on left

### Mobile Menu
- Hamburger icon
- Slide-in drawer from left
- Accordion categories

## CSS Customization for Dawn Theme

Add to theme.scss.liquid or theme CSS:

```css
/* Brand Colors */
:root {
  --color-brand: #2E8B57;
  --color-brand-dark: #247348;
  --color-secondary: #3CB8A8;
  --color-background: #FDF6E3;
  --color-surface: #FFFFFF;
  --color-text: #2D3436;
  --color-text-secondary: #636E72;
  --color-deal: #FF7675;
  --color-trust: #74B9FF;
}

/* Buttons */
.button {
  background-color: var(--color-brand);
  color: white;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
}

.button:hover {
  background-color: var(--color-brand-dark);
}

/* Cards */
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 16px;
}

/* Typography */
h1, h2, h3 {
  color: var(--color-text);
}

/* Deal Badge */
.deal-badge {
  background: var(--color-deal);
  color: white;
  border-radius: 4px;
  padding: 4px 8px;
  font-weight: 600;
}

/* Trust Badge */
.trust-badge {
  background: var(--color-trust);
  color: white;
  border-radius: 8px;
  padding: 16px;
}
```

## Image Guidelines

### Hero Banner
- Size: 1600x600px desktop, 800x600px mobile
- Style: Lifestyle, warm lighting, real pets
- Focus: Centered subject with breathing room

### Pet Category Tiles
- Size: 600x400px
- Style: Pet portrait, friendly expression
- Background: Simple/outdoor

### Product Images
- Size: 1200x1200px (square)
- Style: White/neutral background, clean edges
- Multiple angles required

### Trust Icons
- Size: 64x64px
- Style: Flat icons with brand colors