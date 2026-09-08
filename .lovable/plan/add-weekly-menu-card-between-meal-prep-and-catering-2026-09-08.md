# Add Weekly Menu Card Between Meal Prep and Catering

Add a new menu card inside the existing "Our Menus" section, placed between the Meal Prep Menu and Catering Menu cards.

## What will change

- A new card is inserted into the `MenuSection` grid between the existing Meal Prep and Catering cards.
- The card displays:
  - Large heading: "New Menus for the Week of 9-13"
  - Smaller subheading: "Deliveries Monday - Wednesday. Pick a menu, mix or match, and contact us to order or to inquire about a custom menu."
  - The two uploaded menu images side by side on desktop and stacked vertically on mobile.
- Each new image is clickable and opens in the existing full-screen menu modal.

## Technical details

- Upload the two attached images (`9-14-26_menu_1.jpeg` and `9-14-26_menu_2.jpeg`) as Lovable Assets so they are served from the CDN.
- Update `src/components/MenuSection.tsx`:
  - Insert the new weekly-menu card between the Meal Prep and Catering entries in the grid.
  - Reuse the existing modal state so clicking either weekly image opens it full-screen.
  - Use responsive flex/grid classes so images are side by side on `md` and up, stacked on smaller screens.
  - Keep the existing pink theme and card styling consistent with the surrounding menus.
