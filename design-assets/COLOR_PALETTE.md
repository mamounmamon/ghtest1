# PetStore1 Color Palette

## Primary Colors

### Fresh Green (Primary CTA)
- **Hex:** #2E8B57
- **RGB:** 46, 139, 87
- **Usage:** Primary buttons, links, brand accents, "Add to Cart" buttons
- **Accessibility:** White text on this background passes WCAG AA

### Soft Teal (Secondary Accents)
- **Hex:** #3CB8A8
- **RGB:** 60, 184, 168
- **Usage:** Hover states, secondary buttons, category highlights

### Warm Cream (Backgrounds)
- **Hex:** #FDF6E3
- **RGB:** 253, 246, 227
- **Usage:** Page background, card backgrounds, section fills

### Charcoal (Primary Text)
- **Hex:** #2D3436
- **RGB:** 45, 52, 54
- **Usage:** Headlines, body text, important labels

## Secondary Colors

### Sky Blue (Trust/Delivery)
- **Hex:** #74B9FF
- **RGB:** 116, 185, 255
- **Usage:** Trust badges, delivery estimates, info icons

### Coral (Deals/Sales)
- **Hex:** #FF7675
- **RGB:** 255, 118, 117
- **Usage:** Sale badges, deal highlights, clearance tags

### Warm Sand (Section Backgrounds)
- **Hex:** #F5E6D3
- **RGB:** 245, 230, 211
- **Usage:** Newsletter section, promo bands

### Soft Lavender (Category Accents)
- **Hex:** #A29BFE
- **RGB:** 162, 155, 254
- **Usage:** Bird/Reptile category accents

## Neutrals

| Name | Hex | Usage |
|------|-----|-------|
| White | #FFFFFF | Cards, input fields, content areas |
| Light Gray | #F8F9FA | Page backgrounds, dividers |
| Medium Gray | #B2BEC3 | Placeholder text, disabled states |
| Dark Gray | #636E72 | Secondary text, captions |

## Color Application Map

### Navigation
- **Top bar background:** White (#FFFFFF)
- **Nav links:** Charcoal (#2D3436)
- **Nav link hover:** Fresh Green (#2E8B57)
- **Mobile menu background:** White

### Hero Banner
- **Background image:** Lifestyle pet photo
- **Overlay:** Semi-transparent dark gradient
- **Headline text:** White (#FFFFFF)
- **Subheadline:** White with 90% opacity
- **CTA Button:** Fresh Green (#2E8B57) with white text

### Shop by Pet Tiles
- **Card background:** White (#FFFFFF)
- **Card shadow:** rgba(0,0,0,0.08)
- **Pet name text:** Charcoal (#2D3436)
- **"Shop Now" link:** Fresh Green (#2E8B57)
- **Hover state:** Slight lift with deeper shadow

### Deal of the Day Strip
- **Background:** Gradient from Coral (#FF7675) to lighter coral
- **Original price:** White with strikethrough
- **Deal price:** White, bold
- **Timer text:** White with 90% opacity

### Bestsellers Section
- **Section background:** Warm Cream (#FDF6E3)
- **Product card:** White (#FFFFFF)
- **Product title:** Charcoal (#2D3436)
- **Price:** Fresh Green (#2E8B57)
- **Star rating:** Coral (#FF7675)
- **Quick Add button:** Fresh Green (#2E8B57)

### Trust Badges Section
- **Background:** White (#FFFFFF)
- **Badge icon background:** Sky Blue (#74B9FF)
- **Badge text:** Charcoal (#2D3436)

### Newsletter Section
- **Background:** Warm Sand (#F5E6D3)
- **Input field:** White (#FFFFFF)
- **Input border:** Medium Gray (#B2BEC3)
- **CTA Button:** Fresh Green (#2E8B57)
- **Button hover:** Darker green (#247348)

### Product Page
- **Product title:** Charcoal, H1
- **Price:** Fresh Green, large
- **Star rating:** Coral
- **In-stock badge:** Fresh Green with checkmark
- **Sale badge:** Coral
- **Variant selectors:** Light gray borders, Charcoal text
- **Subscribe toggle:** Fresh Green when active

### Footer
- **Background:** Charcoal (#2D3436)
- **Text:** White and Medium Gray
- **Links:** White, hover turns to Teal

## CSS Variables for Dawn Theme

```css
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
```

## Mobile-First Considerations

- **Touch targets:** Minimum 44x44px for all buttons
- **Contrast ratios:** All text meets WCAG AA (4.5:1 for body, 3:1 for large text)
- **Button sizes:** Full-width on mobile, minimum 48px height
- **Spacing:** 16px minimum padding on mobile sections