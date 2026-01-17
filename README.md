# Hedamo Product Disclosure Interface — Frontend Assignment

##  Project Overview

This project is a **vanilla JavaScript frontend implementation** of a product listing and disclosure interface inspired by the Hedamo system. The goal of this interface is to present **producer-declared product information** in a clear, structured, and professional manner while respecting Hedamo’s philosophy of **“disclosure over verification.”**

The interface is designed to feel calm, institutional, and trustworthy — similar to systems used in finance, healthcare, or government platforms.

---

##  Key Features Implemented

###  Product List View
- Displays product **name, category, producer, status, and last updated date**
- Responsive grid layout with refined cards
- Subtle hover animations on cards

###  Search, Filter, and Sort
Users can:
- Search products by name  
- Filter by **category**  
- Filter by **status** (Draft / Submitted / Published)  
- Sort by:
  - Name (A–Z)
  - Newest first (by date)

###  Product Detail View
Clicking a product card opens a detail view that shows:
- **Declared by** (producer)
- **Declared on** (date)
- **Evidence count**
- **Version history (at least 2 versions)**
- A clear disclaimer that this is **producer-declared information, not verification**

### UI & Interaction Design
- Professional, institutional visual style
- Consistent spacing and typography
- Smooth transitions (150–250ms range)
- Clear status badges with meaningful colors

###  Interaction States
- **Loading skeleton screen** before data appears  
- **Empty state message** when no products match filters  
- **Keyboard navigation support**:
  - Cards are focusable with `Tab`
  - Pressing `Enter` opens product details

---

## Tech Stack

This project is built using:

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (No frameworks)**

No external libraries are required.

---

##  Project Structure

##  How to Run the Project Locally

### Option 1 — Simple Browser Open (Recommended)

1. Download or copy the entire **Hedamo folder**.
2. Open the folder.
3. Double-click **index.html** — it will open in your browser.

### Option 2 — Using VS Code + Live Server (Best Experience)

1. Open the Hedamo folder in **VS Code**.
2. Install the **Live Server** extension (if not installed).
3. Right-click `index.html` → Click **Open with Live Server**.
4. The app will open in your browser automatically.

---

##  Design & Concept Alignment with Hedamo

This UI strictly follows Hedamo’s core principles:

- It **does NOT verify, certify, or approve products**
- It emphasizes **producer responsibility** using language like:
  - “Declared by”
  - “Producer-reported”
- It avoids authority language such as:
  - “Verified,” “Certified,” or “Approved”
- The disclaimer clearly states the boundaries of the system

---

##  Sample Products Included

The app includes four demo products:

1. **EcoFiber Packaging — GreenWrap Ltd (Published)**
2. **BioClean Detergent — PureChem (Draft)**
3. **Recycled Steel Beam — BuildGreen Corp (Submitted)**
4. **Compostable Coffee Cup — EcoServe (Published)**

These allow meaningful demonstration of filtering, sorting, and UI behavior.