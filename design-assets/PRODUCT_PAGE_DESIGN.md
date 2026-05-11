# PetStore1 Product Page Design Specification

## Product Gallery

### Image Gallery Layout
**Desktop (side-by-side):**
- Left column: Image gallery (60% width)
- Right column: Product info (40% width)

**Mobile (stacked):**
- Image gallery on top
- Product info below

### Main Image
- Size: 1200x1200px (square ratio)
- Zoom: Enabled on hover (scale 1.5x)
- Lightbox: Opens on click
- Background: White or transparent

### Thumbnail Strip
- Position: Below main image (desktop), below on mobile
- 4-5 thumbnails visible
- Thumbnail size: 100x100px
- Active state: Green border (#2E8B57)
- Click to swap main image

## Product Information

### Title
- H1, Charcoal (#2D3436), 28px desktop / 24px mobile
- Font weight: 600

### Price
- Large, Fresh Green (#2E8B57), 32px
- "From €XX.XX" if variants have different prices
- EUR currency symbol (€)

### Star Rating
- 5 stars displayed (filled = Coral #FF7675)
- Review count: "124 reviews" (clickable, opens reviews section)
- Format: ★★★★★ (124)

### Variant Selectors

**Size/Weight Variants:**
- Dropdown or pill-button group
- Selected state: Fresh Green border, green background tint
- Unavailable: Grayed out with strikethrough

**Flavor/Scent Variants:**
- Pill buttons (horizontal row)
- Selected: Green border + subtle green background
- Visual swatches if color-based

### Quantity Selector
- Minus/Plus buttons with number input between
- Button size: 36x36px minimum
- Disabled state when at minimum (1)

### Add to Cart Button
- Full-width on mobile
- Fresh Green (#2E8B57), white text
- Text: "Add to Cart"
- Hover: Darker green (#247348)
- Disabled state: Gray when out of stock

### Buy Now Button
- Secondary button style
- Outline style with Fresh Green border
- Text: "Buy Now"

## Subscribe & Save Section

### Layout
- Card-style box below Add to Cart buttons
- Light gray border, 8px border-radius

### Toggle
- "Subscribe & Save" heading
- Toggle switch (on/off)
- "Save 10%" badge when active

### Pricing Display
When active:
- Subscription price: Large, Fresh Green
- Regular price: Strikethrough, smaller

### Benefits List
- "Delivered every month"
- "Cancel anytime"
- "Extra 10% off"

### Delivery Schedule
- Dropdown to select: Monthly, every 2 weeks, etc.

## Product Features Section

### Layout
- Below Subscribe box
- "Features" heading (H3)

### Bullet Points
- Check icon (Fresh Green) + text
- 4-6 key features
- Example: ✓ Real chicken as first ingredient

### Specifications Table
- Optional table for detailed specs
- Alternating row colors (white/light gray)

## Frequently Bought Together

### Layout
- Horizontal section below product info
- 2-3 related products displayed

### Card Design
- Small image (120x120px)
- Name (truncated)
- Price
- "Add to Cart" checkbox or button

### Bundle Offer
- "Add all to cart" button
- Total price shown
- "Save €X" badge if bundle discount

## Delivery Estimate

### Eircode Input
- Label: "Enter your Eircode for delivery estimate"
- Input field with placeholder "e.g. D02 XXXX"
- "Check" button

### Result Display
- Green checkmark + "Delivered by [date]"
- Carrier info: "via An Post" or "via DPD"
- Shipping cost if applicable

### Error State
- Red border on input
- "Please enter a valid Eircode"

## Reviews Section (Judge.me)

### Summary
- Average rating (large number)
- 5-star bar chart with percentages
- "Based on X reviews"

### Individual Reviews
- Star rating
- Review title (bold)
- Review text
- Reviewer name + date
- "Verified Purchase" badge
- Helpful/Not helpful buttons

### Write Review CTA
- "Write a Review" button
- Opens modal or redirects to review form

## Related Products

### Carousel
- "You may also like" heading
- Horizontal scroll of 4-6 products
- Same card style as Bestsellers section

---

## Mobile-First Adjustments

- Product title: 24px
- Price: 28px
- Sticky Add to Cart bar at bottom of screen when scrolling
- Image gallery: Full-width, swipe between images
- Variant pills: Horizontal scroll if many options
- Collapse reviews to "Show X reviews" accordion
- Sticky footer with cart icon