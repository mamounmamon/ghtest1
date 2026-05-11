# PetStore1 Project Specification

## Overview
PetStore1 is a curated online pet supply store targeting the Irish market. It offers a fresh, friendly shopping experience with approximately 150 high-quality products.

## Store Configuration
- **Currency:** EUR (€)
- **Primary Market:** Ireland
- **Shipping Carriers:** An Post, DPD
- **Base Theme:** Shopify Dawn
- **Design Style:** Warm, friendly, photo-led. Palette to avoid Amazon-style orange.

## Navigation & Architecture

### Top-Level Navigation
1. **Dogs**
2. **Cats**
3. **Fish & Aquatics**
4. **Small Animals**
5. **Birds**
6. **Reptiles**
7. **Deals**
8. **Subscribe & Save**

### Category Structure (Sub-menus)
- **Dogs:** Food & Treats, Toys, Beds & Crates, Collars/Leads/Harnesses, Grooming & Health
- **Cats:** Food & Treats, Litter & Trays, Toys & Scratchers, Beds, Grooming & Health
- **Fish & Aquatics:** Tanks & Filters, Food, Decor, Water Care
- **Small Animals:** Food, Housing & Bedding, Toys & Accessories
- **Birds:** Food, Cages & Perches, Toys & Health
- **Reptiles:** Habitat & Heating, Food, Substrate & Decor

## Product Requirements
- **Photo Gallery:** High-quality images with zoom capability.
- **Reviews:** Star ratings and customer reviews (via Judge.me).
- **Features:** Bullet-point lists for key product highlights.
- **Variants:** Options for size, flavor, etc.
- **Subscribe & Save:** Toggle option for 10% discount on recurring orders.
- **Cross-selling:** "Frequently bought together" section.
- **Shipping Info:** Delivery estimate based on Eircode input.

## Homepage Sections
- **Hero Banner:** Welcoming, high-impact pet photography.
- **Shop by Pet Tile Grid:** 6 photo-led tiles for main pet categories.
- **Deal of the Day Strip:** Highlighted daily promotion.
- **Bestsellers Carousel:** Featured popular products.
- **Trust Badges:** 
    - Irish-owned
    - Fast dispatch
    - 14-day returns
- **Newsletter Signup:** Integrated with Klaviyo, offering a first-order discount.

## App & Integration Requirements
- **Reviews:** Judge.me
- **Email Marketing:** Klaviyo
- **Compliance:** GDPR Cookie Banner app
- **Payments:** 
    - Shop Pay
    - Apple Pay
    - PayPal
    - Klarna
- **Search:** Fast search with autocomplete.

## Technical Implementation Plan
1. **Foundation:** Set up basic Shopify settings (Currency, Shipping, Markets).
2. **Catalog:** Create collections based on the navigation hierarchy. Import ~150 sample products.
3. **Theme Customization:**
    - Customize Dawn theme colors and typography.
    - Implement Mega Menu for category navigation.
    - Build custom sections for the Homepage requirements.
    - Enhance Product page with Subscribe & Save toggle and Eircode delivery estimate.
4. **App Setup:** Install and configure Judge.me, Klaviyo, and GDPR banner.
5. **Testing:** Verify mobile-first responsiveness and checkout flow.

## Development Workflow
- **Repository:** `mamounmamon/ghtest1`
- **Branching Strategy:** Feature branches (e.g., `feat/xxx`) for all changes.
- **Pull Requests:** All changes must be submitted via PR for lead review.
- **Coordination:** Use the shared team database (`tasks` table) for progress tracking.
